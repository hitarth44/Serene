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
            <span>Name: ${name}</span>
            <span>Relationship: ${relationship}</span>
            <span>Phone: ${phone}</span>
        </div>
        <div class="contact-actions">
            <i class="fas fa-edit edit-btn" onclick="editContact('${contactId}')"></i>
            <i class="fas fa-trash-alt delete-btn" onclick="deleteContact('${contactId}')"></i>
        </div>
    `;

    contactCard.id = contactId;

    // Append to the **correct list** below the title
    document.getElementById("contact-list").appendChild(contactCard);

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
        
        // Update the card with new values
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
