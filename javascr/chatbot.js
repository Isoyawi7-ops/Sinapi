document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("chatbot-toggle");
  const container = document.getElementById("chatbot-container");
  const input = document.getElementById("chatbot-input");
  const messages = document.getElementById("chatbot-messages");

  if (!toggle || !container || !input || !messages) {
    console.error("Chatbot elements not found");
    return;
  }

  toggle.addEventListener("click", () => {
    container.classList.toggle("chatbot-hidden");
  });

  const faq = {
    "what are your services": "We offer Consultancy Services in Governance and Leadership, Capacity Building and Training, and Engagement and Strategic Policy.",
    "where are you located": "Our headquarters is EDAI TOWN, BOERA, KAIRUKU-HIRI, Central Province, PNG.",
    "how can i contact you": "You can visit the Contact page or email us at sinapivuana7@gmail.com",
    "who is the ceo": "Our CEO is Minnie Kalo Voi.",
    "who is ceo": "Our CEO is Minnie Kalo Voi.",
  };

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const user = input.value.trim().toLowerCase();
      if (!user) return;

      messages.innerHTML += `<div><strong>You:</strong> ${user}</div>`;
      input.value = "";

      let reply = "Sorry, I don't understand that yet.";
      for (let q in faq) {
        if (user.includes(q)) {
          reply = faq[q];
          break;
        }
      }

      messages.innerHTML += `<div><strong>Bot:</strong> ${reply}</div>`;
      messages.scrollTop = messages.scrollHeight;
    }
  });
});
