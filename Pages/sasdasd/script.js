document.getElementById('bookingForm').addEventListener('submit', function(event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // Grab values
    const name = document.getElementById('userName').value;
    const hall = document.getElementById('hallName').value;
    const messageDiv = document.getElementById('message');

    // Basic Logic: Show a success message
    // In a real project, you would send this data to a database here
    messageDiv.textContent = `Thank you, ${name}! Your booking for ${hall.replace('-', ' ')} has been submitted.`;
    messageDiv.classList.remove('hidden');
    messageDiv.classList.add('success');

    // Optional: Clear the form
    this.reset();
});