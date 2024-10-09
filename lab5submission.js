// a. Button

// This function will prompt the user for their name and display it on the webpage
function askName() {

    var userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById("nameOutput").innerHTML = "Hello, " + userName + "!";
    }
}
// Assign the function to the button's onclick event
document.getElementById("nameBtn").onclick = askName;

// b.Clickable Image
function enlargeImage(){
    var img = document.getElementById("profileImg");
    img.style.width ="400px";
}

document.getElementById("profileImg").onclick = enlargeImage;

//c. Navigation Menu

// Function to toggle the dropdown when clicking on the 'Degree' menu item
document.addEventListener("DOMContentLoaded", function() {
    var dropdownToggle = document.querySelector('.dropdown-toggle'); // Target the degree link
    var dropdownMenu = document.querySelector('.dropdown'); // Target the dropdown menu
    
    // Function to toggle the dropdown menu visibility
    function toggleDropdown() {
        dropdownMenu.classList.toggle('shows'); //Toggles 'show' to display or hide dropdown
    }
    
    // Close dropdown when clicking outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
            }
        }
    };
});

