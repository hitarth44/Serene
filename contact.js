// Modal Logic
const addContactBtn = document.getElementById("add-contact-btn");
const modal = document.getElementById("contact-modal");
const closeModal = document.getElementById("close-contact-modal");
const submitContactBtn = document.getElementById("submit-contact");

addContactBtn.onclick = () => {
    modal.style.display = "block";
};

closeModal.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Add Contact Logic
submitContactBtn.onclick = (e) => {
    e.preventDefault();

    // Get values from form
    const name = document.getElementById("contact-name").value;
    const phone = document.getElementById("contact-phone").value;
    const relationship = document.getElementById("contact-relationship").value;

    // Basic validation
    if (!name || !phone || !relationship) {
        alert("Please fill in all fields.");
        return;
    }

    // Create a new contact card
    const contactCard = document.createElement("div");
    contactCard.classList.add("contact-card");

    // Generate unique ID
    const contactId = `contact-${Date.now()}`;

    contactCard.innerHTML = `
        <div class="contact-info">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Relationship:</strong> ${relationship}</p>
            <p><strong>Phone:</strong> ${phone}</p>
        </div>
        <div class="contact-actions">
            <button class="edit-btn" onclick="editContact('${contactId}')">Edit</button>
            <button class="delete-btn" onclick="deleteContact('${contactId}')">Delete</button>
        </div>
    `;

    contactCard.id = contactId;

    // Append to the list of contacts
    document.querySelector(".emergency-contacts").appendChild(contactCard);

    // Clear the form
    document.getElementById("contact-name").value = "";
    document.getElementById("contact-phone").value = "";
    document.getElementById("contact-relationship").value = "";

    // Close the modal
    modal.style.display = "none";
};
// Edit Contact
function editContact(contactId) {
    const contactCard = document.getElementById(contactId);
    const info = contactCard.querySelector(".contact-info").children;

    // Fill the form with current data
    document.getElementById("contact-name").value = info[0].innerText.split(': ')[1];
    document.getElementById("contact-relationship").value = info[1].innerText.split(': ')[1];
    document.getElementById("contact-phone").value = info[2].innerText.split(': ')[1];

    // Show the modal for editing
    modal.style.display = "block";

    // Change the submit button to "Save Changes"
    submitContactBtn.textContent = "Save Changes";

    // Update contact on form submission
    submitContactBtn.onclick = (e) => {
        e.preventDefault();
        info[0].innerText = `Name: ${document.getElementById("contact-name").value}`;
        info[1].innerText = `Relationship: ${document.getElementById("contact-relationship").value}`;
        info[2].innerText = `Phone: ${document.getElementById("contact-phone").value}`;

        // Reset button text and close modal
        submitContactBtn.textContent = "Add Contact";
        modal.style.display = "none";
    };
}

// Delete Contact
function deleteContact(contactId) {
    const contactCard = document.getElementById(contactId);
    contactCard.remove();
}
