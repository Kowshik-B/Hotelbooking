document.getElementById("hotel-booking-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Generate a random room number between 100 and 999
    const roomNumber = Math.floor(Math.random() * 900) + 100;

    // Calculate the number of nights
    const checkinDate = new Date(document.getElementById("checkin-date").value);
    const checkoutDate = new Date(document.getElementById("checkout-date").value);
    const nights = (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24);

    // Room rates
    const roomRates = {
        "single-room": 1000,
        "double-room": 1500,
        "suite": 2500
    };

    // Get the selected room type
    const roomType = document.getElementById("room-type").value;

    // Calculate the bill
    const billAmount = roomRates[roomType] * nights;

    // Display the results
    document.getElementById("room-number").textContent = `Your room number is: ${roomNumber}`;
    document.getElementById("bill").textContent = `Your total bill is: ₹${billAmount}`;
    document.getElementById("booking-result").style.display = "block";
});
