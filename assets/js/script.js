   // Function to change the background image of the div
   function rules() {
    var boxRules = document.getElementsByClassName('quiz_area')[0];
        boxRules.style.backgroundImage = "url('assets/images/test.jpg')";

        let headlineHome = document.getElementById('headline_home');
        headlineHome.innerHTML = "How To Survive the Jungle Quiz Safari!";

        let playBtn = document.getElementById('play_btn');
        if (playBtn) {
            playBtn.style.display = "none";
        }

        let rulesBtn = document.getElementById('rules_btn');
        if (rulesBtn) {
            rulesBtn.style.display = "none";
        }
    }

function goBack() {
  // Implement logic to revert changes or navigate back
  // For example, you can reload the page or use history.back()
  // You can customize this based on your specific needs
  location.reload(); // Example: Reload the page
}