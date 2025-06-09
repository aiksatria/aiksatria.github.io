async function sendMessage() {
    const input = document.getElementById("user-input").value;
    const output = document.getElementById("chat-output");
    output.innerHTML += `<p><b>Kamu:</b> ${input}</p>`;
    try {
        const response = await fetch("https://api.x.ai/v1/grok", {
            method: "POST",
            headers: {
                "Authorization": "Bearer xai-YFawrLzBwTf94EI2Jbp3vhIEXSfkWIerCZ5rMoqFnMIs5GNiPuPmuonRV6OylaBXsjq4TWGGx5cGDgYA",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ query: input })
        });
        const data = await response.json();
        output.innerHTML += `<p><b>Grok:</b> ${data.choices[0].message.content}</p>`;
    } catch (error) {
        output.innerHTML += `<p><b>Error:</b> Gagal konek ke Grok!</p>`;
    }
    document.getElementById("user-input").value = "";
}
