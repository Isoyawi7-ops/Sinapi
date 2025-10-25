
document.getElementById("reachOutBtn").onclick = function () {
    document.getElementById("contactModal").style.display = "block";
};

document.querySelector(".close-btn").onclick = function () {
    document.getElementById("contactModal").style.display = "none";
    clearForm();
};

window.onclick = function(event) {
    if (event.target === document.getElementById("contactModal")) {
        document.getElementById("contactModal").style.display = "none";
        clearForm();
    }
};

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");-

    if (!name || !email || !message) {
        formMessage.textContent = "❗ Please fill in all fields.";
    } else {
        formMessage.style.color = "green";
        formMessage.textContent = "✅ Message sent successfully!";
        setTimeout(() => {
            document.getElementById("contactModal").style.display = "none";
            clearForm();
        }, 2000);
    }
});

function clearForm() {
    document.getElementById("contactForm").reset();
    document.getElementById("formMessage").textContent = "";
}
