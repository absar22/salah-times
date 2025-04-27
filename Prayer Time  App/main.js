document.getElementById('getTimesBtn').addEventListener('click', function() {
  const location = document.getElementById('locationInput').value;
  if (location) {
    document.getElementById('defaultLocation').textContent = location;
    alert(`Fetching prayer times for ${location}...`);
    // Here you would typically make an API call to get actual prayer times
  } else {
    alert('Please enter a location');
  }
});