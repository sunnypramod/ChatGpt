const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", async () => {
    const userMessage = userInput.value;
    appendMessage(userMessage, true);
    userInput.value = "";

    // Make API call to ChatGPT and get the response
    const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer YOUR_API_KEY"
        },
        body: JSON.stringify({ text: userMessage })
    });
    const data = await response.json();
    const botMessage = data.choices[0].text;

    appendMessage(botMessage, false);
});

function appendMessage(message, isUser) {
    const messageContainer = document.createElement("div");
    messageContainer.classList.add(isUser ? "user-message" : "bot-message");
    messageContainer.textContent = message;
    chatLog.appendChild(messageContainer);
}
