window.onload = () => {
  const mapFrame = document.getElementById("mapFrame");
  const addressField = document.getElementById("location-address");
  const coordinatesField = document.getElementById("location-coordinates");
  const shareButton = document.getElementById("share-location-btn");

  // Check if geolocation is available
  if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
          (position) => {
              const { latitude, longitude } = position.coords;

              // Log coordinates to verify
              console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

              // Set the coordinates
              coordinatesField.textContent = `Coordinates: ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;

              // Directly update the iframe src
              mapFrame.src = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

              // Fetch address from OpenStreetMap
              fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
                  .then((response) => response.json())
                  .then((data) => {
                      if (data && data.address) {
                          addressField.textContent = `
                              ${data.address.road || ''}, 
                              ${data.address.city || ''}, 
                              ${data.address.state || ''}, 
                              ${data.address.country || ''}`;
                      } else {
                          addressField.textContent = "Address not found.";
                      }
                  })
                  .catch(() => {
                      addressField.textContent = "Unable to retrieve address.";
                  });
          },
          (error) => {
              console.error("Geolocation error:", error.message);
              addressField.textContent = "Location access denied or not available.";
              mapFrame.style.display = "none";
          }
      );
  } else {
      addressField.textContent = "Geolocation not available.";
      mapFrame.style.display = "none";
  }

  // Share Location Event
  shareButton.onclick = () => {
      if (navigator.share) {
          navigator.share({
              title: 'My Current Location',
              text: 'Here is my current location:',
              url: `https://www.google.com/maps?q=${coordinatesField.textContent.split(' ')[1]}`
          }).then(() => {
              alert("Location shared successfully!");
          }).catch((error) => {
              alert("Error sharing location.");
          });
      } else {
          alert("Sharing not supported on this browser.");
      }
  };
};
