// Toggle Dark/Light Mode
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Show Add Event Modal
const addEventBtn = document.getElementById("add-event-btn");
const addEventModal = document.getElementById("add-event-modal");
const closeModalBtn = document.getElementById("close-modal");

addEventBtn.addEventListener("click", () => {
    addEventModal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
    addEventModal.style.display = "none";
});

// Handle Add Event Form
const addEventForm = document.getElementById("add-event-form");
if (addEventForm) {
    addEventForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(addEventForm);
        
        fetch("/add-event", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = "index.html";  // Redirect to homepage after adding event
            } else {
                alert("Error adding event");
            }
        });
    });
}

// Fetch and Display Events
document.addEventListener("DOMContentLoaded", function() {
    fetch("/api/events")
        .then(response => response.json())
        .then(events => {
            const eventsContainer = document.getElementById("events-container");
            events.forEach(event => {
                const eventCard = document.createElement("div");
                eventCard.classList.add("event-card");
                eventCard.innerHTML = `
                    <img src="/public/images/${event.image}" alt="${event.title}">
                    <div class="content">
                        <h3>${event.title}</h3>
                        <p>${event.description}</p>
                        <p><strong>Date:</strong> ${new Date(event.date).toLocaleDateString()}</p>
                        <button onclick="window.location.href='view-event.html?id=${event.id}'">View Event</button>
                    </div>
                `;
                eventsContainer.appendChild(eventCard);
            });
        });
});
