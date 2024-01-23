   // Function to change the background image of the div
   function rules() {

    // Hide welcome section
    let welcomeSection = document.getElementById('quiz_area_box');
    if (welcomeSection) {
        welcomeSection.style.display = "none";
    }

    // Show rules section
    let rulesHide = document.getElementById('rules_hide');
    if (rulesHide) {
      rulesHide.style.display = "block";
      rulesHide.style.backgroundImage = "url('assets/images/test.jpg')";
    }
}

function goBack() {
 
     // Implement logic to revert changes or navigate back
     // For example, you can reload the page or use history.back()
     // You can customize this based on your specific needs
     location.reload(); // Example: Reload the page
   }
  