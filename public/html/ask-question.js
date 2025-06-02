// Define the API base URL
const API_BASE_URL = "http://localhost:8080"; // Ensure this matches your backend URL

// Function to handle the "Add Story Card" button click
async function handleAskQuestion() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/stories`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: "test",
                author: "anon",
                description: "This is a test card added via API.",
                link: "https://test.com",
                thumbnail: "https://via.placeholder.com/150",
            }),
        });

        if (response.ok) {
            alert("Card successfully posted to backend!");
        } else {
            const errorData = await response.json();
            alert(`Failed to post card: ${errorData.message || "Unknown error"}`);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while sending the request.");
    }
}

// Function to POST a story card for the "data-structures" tag click
async function sendDataStructuresCard() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/stories`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: "Data Structures",
                author: "auto",
                description: "Card generated from data-structures modal interaction",
                link: "https://test.com/data-structures",
                thumbnail: "https://via.placeholder.com/150",
            }),
        });

        if (response.ok) {
            console.log("✅ Data Structures card sent successfully!");
        } else {
            console.error("❌ Failed to send Data Structures card.");
        }
    } catch (error) {
        console.error("⚠️ Error:", error);
    }
}

// Attach listeners after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    // For the "Add Story Card" button
    const askQuestionButton = document.getElementById("ask-question-btn");
    if (askQuestionButton) {
        askQuestionButton.addEventListener("click", (event) => {
            event.preventDefault();
            handleAskQuestion();
        });
    } else {
        console.error("Button with ID 'ask-question-btn' not found.");
    }

    // For the "data-structures" tag span
    const tagSpans = document.querySelectorAll(".s-tag.flex--item");
    tagSpans.forEach(span => {
        if (span.textContent.trim() === "data-structures") {
            span.style.cursor = "pointer";
            span.addEventListener("click", () => {
                sendDataStructuresCard();
            });
        }
    });
});
