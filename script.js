const tips = {
    "Hi": "Hey ! i am your personal assistant here to help you in your troubles.",
    "weather": "Today there is nothing much about the weather .Though the weather today it is very chilly.",
    "hi" : "Hello! Welcome to Mkulima .I am Dr.agrivet and am hia to help you through your issues",
    "my crops are sick":"What kind of crops are having sick .If they are dicotyledons then send the symptoms but you must start  with either Dicotyledons are ",
    "crop health": "Crops with certain symptoms can be known there are specific diseases such as white fly for cssava and potato blight .",
};

function sendMessage() {
    const inputField = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const userText = inputField.value.toLowerCase();

    if (userText.trim() === "") return;

    // Display User Message
    chatBox.innerHTML += `<p style="color: #1f4757;"><strong><b style="color: #e2e1e1;">You:</b></strong> ${userText}</p>`;
    
    // Bot Logic
    let response = "Hi .I am sorry but i am not acquainted with your question try basic things like 'Crops' , 'How to create an account' and also about the weather .";
    
    for (let key in tips) {
        if (userText.includes(key)) {
            response = tips[key];
            break;
        }
    }

    setTimeout(() => {
        chatBox.innerHTML += `<p style="color: #031218;"><strong><b style="color: #c2eb51;">👩‍🌾 Dr.Agrivet:</b></strong> ${response}</p>`;
        chatBox.scrollbottom= chatBox.scrollHeight;
    }, 500);

    inputField.value = " ";
}
