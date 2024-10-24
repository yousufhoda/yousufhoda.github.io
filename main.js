// a. Button

// This function asks the user to enter their name using a button, once they've entered their name a personalized message will apprear
function askName() {

    var userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById("nameOutput").innerHTML = "Hello, " + userName + "!";
    }
}
// Makes the button clickable
document.getElementById("nameBtn").onclick = askName;

// b.Clickable Image
function enlargeImage(){
    var img = document.getElementById("profileImg"); // Get the image element bu its ID
    img.style.width ="400px"; //The width will be increased to 400px once clicked
}

//Here we are assigning the enlargeImage function to the image with ID "profileImg"
document.getElementById("profileImg").onclick = enlargeImage;

//c. Navigation Menu

// Function to ensure dropdown menu appears when clicked and disappears when clicked outside of it
document.addEventListener("DOMContentLoaded", function() {
    var dropdownToggle = document.querySelector('.dropdown-toggle'); // get the degree link
    var dropdownMenu = document.querySelector('.dropdown'); // Get the dropdown menu
    
    // Function to toggle the dropdown menu visibility
    function toggleDropdown() {
        dropdownMenu.classList.toggle('shows'); //Toggles 'show' to display or hide dropdown
    }
    
    // Close dropdown when clicking outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show'); //Remove the 'show' class to hide the menu
            }
        }
    };
});

// Lab 7 - Forms 
// Function runs only when page is fully loaded
window.onload = function() {
    // Access form using its ID
    var form = document.getElementById("myForm");
    // When form is submitted
    form.onsubmit = function(event) {
        event.preventDefault(); // Prevents form from submitting the default way

        // Access user input data
        var username = document.getElementById("username").value; //Gets value of name input field
        var email = document.getElementById("email").value; // Gets value of email input field
        var message = document.getElementById("message").value; // Gets vakye of message textarea
        var contactMethod = document.querySelector('input[name="contactMethod"]:checked').value; // Gets the selected contact method
        var subscribe = document.getElementById("subscribe").checked ? 'yes' : 'no'; // Checks if checkbox is checked 

        // Store data in localStorage as per the lab instructions
        localStorage.setItem("username", username); // Stores username
        localStorage.setItem("email", email); // stores email
        localStorage.setItem("message", message); // stores message
        localStorage.setItem("contactMethod", contactMethod); // stores preffered contact method
        localStorage.setItem("subscribe", subscribe); // Scored subcription decision 

        // Confirmation of submission
        alert("Form submitted and data stored in localStorage!");
    };
    // When the form is reset
    form.onreset = function() {
        // Clear the localStorage when the form is reset
        localStorage.clear();
        //Provide confirmation message to user
        alert("Form cleared and localStorage reset.");
    };
};
