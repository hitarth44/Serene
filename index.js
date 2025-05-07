
// DOM Elements
const homeLink = document.getElementById('home-link');
const featuresLink = document.getElementById('features-link');
const locationLink = document.getElementById('location-link');
const contactsLink = document.getElementById('contacts-link');
const signinLink = document.getElementById('signin-link');
const getStartedBtn = document.getElementById('get-started-btn');
const signupLink = document.getElementById('signup-link');
const signinFormLink = document.getElementById('signin-form-link');
const openChatBtn = document.getElementById('open-chat-btn');
const closeChatBtn = document.getElementById('close-chat-btn');
const chatBox = document.getElementById('chat-box');
const chatMessages = document.getElementById('chat-messages');
const chatInputField = document.getElementById('chat-input-field');
const sendMessageBtn = document.getElementById('send-message-btn');
const emergencyBtn = document.getElementById('emergency-btn');
const emergencyModal = document.getElementById('emergency-modal');
const closeEmergencyModal = document.getElementById('close-emergency-modal');
const sendAlertBtn = document.getElementById('send-alert-btn');
const cancelAlertBtn = document.getElementById('cancel-alert-btn');
const addContactBtn = document.getElementById('add-contact-btn');
const contactModal = document.getElementById('contact-modal');
const closeContactModal = document.getElementById('close-contact-modal');
const contactForm = document.getElementById('contact-form');
const shareLocationBtn = document.getElementById('share-location-btn');
const locationAddress = document.getElementById('location-address');
const locationCoordinates = document.getElementById('location-coordinates');

// Sections
const homeSection = document.getElementById('home-section');
const featuresSection = document.getElementById('features-section');
const signinSection = document.getElementById('signin-section');
const signupSection = document.getElementById('signup-section');
const mapSection = document.getElementById('map-section');
const emergencySection = document.getElementById('emergency-section');

// Show Home Section by default
function showHomeSection() {
    homeSection.style.display = 'flex';
    featuresSection.style.display = 'block';
    signinSection.style.display = 'none';
    signupSection.style.display = 'none';
    mapSection.style.display = 'none';
    emergencySection.style.display = 'block';
}

// Show Sign In Section
function showSignInSection() {
    homeSection.style.display = 'none';
    featuresSection.style.display = 'none';
    signinSection.style.display = 'block';
    signupSection.style.display = 'none';
    mapSection.style.display = 'none';
    emergencySection.style.display = 'none';
}

// Show Sign Up Section
function showSignUpSection() {
    homeSection.style.display = 'none';
    featuresSection.style.display = 'none';
    signinSection.style.display = 'none';
    signupSection.style.display = 'block';
    mapSection.style.display = 'none';
    emergencySection.style.display = 'none';
}

// Show Map Section
function showMapSection() {
    homeSection.style.display = 'none';
    featuresSection.style.display = 'none';
    signinSection.style.display = 'none';
    signupSection.style.display = 'none';
    mapSection.style.display = 'block';
    emergencySection.style.display = 'none';
}

// Show Emergency Section
function showEmergencySection() {
    homeSection.style.display = 'none';
    featuresSection.style.display = 'none';
    signinSection.style.display = 'none';
    signupSection.style.display = 'none';
    mapSection.style.display = 'none';
    emergencySection.style.display = 'block';
}

// Navigation Event Listeners
homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    showHomeSection();
});

featuresLink.addEventListener('click', (e) => {
    e.preventDefault();
    showHomeSection();
    featuresSection.scrollIntoView({ behavior: 'smooth' });
});

locationLink.addEventListener('click', (e) => {
    e.preventDefault();
    showMapSection();
});

contactsLink.addEventListener('click', (e) => {
    e.preventDefault();
    showEmergencySection();
});

signinLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSignInSection();
});

getStartedBtn.addEventListener('click', () => {
    showSignUpSection();
});

signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSignUpSection();
});

signinFormLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSignInSection();
});

// Chat Functionality
openChatBtn.addEventListener('click', () => {
    chatBox.style.display = 'flex';
    openChatBtn.style.display = 'none';
});

closeChatBtn.addEventListener('click', () => {
    chatBox.style.display = 'none';
    openChatBtn.style.display = 'flex';
});

sendMessageBtn.addEventListener('click', sendMessage);
chatInputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageText = chatInputField.value.trim();
    if (messageText) {
        // Create outgoing message element
        const messageElement = document.createElement('div');
        messageElement.className = 'message outgoing';
        messageElement.innerHTML = `<p>${messageText}</p>`;
        chatMessages.appendChild(messageElement);
        
        // Clear input field
        chatInputField.value = '';
        
        // Scroll to the bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Simulate response after a short delay
        setTimeout(() => {
            const responseElement = document.createElement('div');
            responseElement.className = 'message incoming';
            responseElement.innerHTML = `<p>Thank you for your message. Our support team will respond shortly.</p>`;
            chatMessages.appendChild(responseElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
}

// Emergency Alert Functionality
emergencyBtn.addEventListener('click', () => {
    emergencyModal.style.display = 'block';
});

closeEmergencyModal.addEventListener('click', () => {
    emergencyModal.style.display = 'none';
});

cancelAlertBtn.addEventListener('click', () => {
    emergencyModal.style.display = 'none';
});

sendAlertBtn.addEventListener('click', () => {
    // Simulate sending alert
    alert('Emergency alert sent to your contacts!');
    emergencyModal.style.display = 'none';
});

// Add Contact Functionality
addContactBtn.addEventListener('click', () => {
    contactModal.style.display = 'block';
});

closeContactModal.addEventListener('click', () => {
    contactModal.style.display = 'none';
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulate adding contact
    alert('Contact added successfully!');
    contactModal.style.display = 'none';
    
    // Reset form fields
    document.getElementById('contact-name').value = '';
    document.getElementById('contact-relationship').value = '';
    document.getElementById('contact-phone').value = '';
});

// Location Services
shareLocationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                locationCoordinates.textContent = `Coordinates: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
                locationAddress.textContent = "Getting address...";
                
                // Normally, we would use a geocoding service here
                // For demo purposes, we'll simulate an address
                setTimeout(() => {
                    locationAddress.textContent = "123 Main Street, Anytown, State 12345";
                    alert('Location shared with your emergency contacts!');
                }, 1500);
            },
            (error) => {
                console.error("Error getting location:", error);
                locationAddress.textContent = "Error: Could not retrieve your location.";
                locationCoordinates.textContent = "Coordinates: Not available";
            }
        );
    } else {
        locationAddress.textContent = "Error: Geolocation is not supported by your browser.";
    }
});

// Form Submissions
document.getElementById('signin-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Normally we would handle authentication here
    // For demo purposes, we'll simulate a successful login
    alert(`Welcome back! You're now signed in as ${email}`);
    showHomeSection();
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
    }
    
    // Normally we would handle account creation here
    // For demo purposes, we'll simulate a successful registration
    alert(`Welcome, ${fullname}! Your account has been created.`);
    showHomeSection();
});

// Close modals when clicking outside of them
window.addEventListener('click', (e) => {
    if (e.target === emergencyModal) {
        emergencyModal.style.display = 'none';
    }
    if (e.target === contactModal) {
        contactModal.style.display = 'none';
    }
});

// Initialize the page
showHomeSection();
function scrollToFeatures() {
  document.getElementById("features").scrollIntoView({
      behavior: "smooth",
      block: "start"
  });
}
