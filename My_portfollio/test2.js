const apiKey = 'YOUR_API_KEY'; // Replace with your OpenTok API key
const sessionId = 'YOUR_SESSION_ID'; // Replace with your OpenTok session ID
const token = 'YOUR_TOKEN'; // Replace with your OpenTok token

const session = OT.initSession(apiKey, sessionId);

session.on('streamCreated', function (event) {
    const subscriberOptions = {
        insertMode: 'append',
        width: '100%',
        height: '100%',
    };

    session.subscribe(event.stream, 'video-container', subscriberOptions);
});

session.connect(token, function (error) {
    if (error) {
        console.error('Error connecting to session', error);
    } else {
        console.log('Connected to session');
        const publisherOptions = {
            insertMode: 'append',
            width: '100%',
            height: '50%',
        };

        const publisher = OT.initPublisher('video-container', publisherOptions);
        session.publish(publisher);
    }
});

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value;

    if (message.trim() !== '') {
        // Display the sent message in the sender's chat window
        displayMessage('You', message);

        // Send the message to other participants
        session.signal(
            {
                type: 'chat',
                data: message,
            },
            function (error) {
                if (error) {
                    console.error('Error sending chat signal:', error);
                } else {
                    console.log('Chat message sent');
                }
            }
        );

        chatInput.value = '';
    }
}

session.on('signal:chat', function (event) {
    // Display the received message in the chat window
    displayMessage(event.from.connectionId, event.data);
});

function displayMessage(sender, message) {
    const chatMessages = document.getElementById('chat-messages');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${sender}: ${message}`));
    chatMessages.appendChild(li);
}
