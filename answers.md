/* Global Styles */
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f9;
    transition: background-color 0.3s ease;
}
header {
    background-color: #333;
    color: white;
    padding: 10px 20px;
    text-align: center;
    position: relative;
}
header h1 {
    margin: 0;
    font-size: 2.5rem;
}
.fab {
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 20px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}
.fab:hover {
    background-color: #45a049;
}
#events-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    padding: 20px;
}
.event-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
}
.event-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
.event-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
}
.event-card .content {
    padding: 20px;
}
.event-card h3 {
    font-size: 1.5rem;
    color: #333;
}
.event-card p {
    font-size: 1rem;
    color: #777;
}
button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 1rem;
}
button:hover {
    background-color: #45a049;
}
/* Modal Styles */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
}
.modal-content {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    width: 400px;
    position: relative;
}
.close {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 1.5rem;
    cursor: pointer;
}
/* Dark Mode Styles */
body.dark-mode {
    background-color: #333;
    color: white;
}
body.dark-mode header {
    background-color: #222;
}
body.dark-mode .fab {
    background-color: #3e8e41;
}
body.dark-mode .event-card {
    background-color: #444;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}
body.dark-mode .event-card:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}
/* Responsive Design */
@media (max-width: 768px) {
    header h1 {
        font-size: 2rem;
    }
