// Select the button and content div
const toggleButton = document.getElementById('toggleButton');
const contentDiv = document.getElementById('content');

// Add click event listener to the button
toggleButton.addEventListener('click', function() {
    // Toggle the visibility of the content div
    if (contentDiv.style.display === 'block') {
        contentDiv.style.display = 'none';
    } else {
        contentDiv.style.display = 'block';
    }
});
