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

