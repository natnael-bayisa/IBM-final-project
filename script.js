function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");

  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");

    // Call showPopup here
    showPopup(true);

    // Create a new 'recommendation' element and set its value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = `<span>&#8220;</span>${recommendation.value}<span>&#8221;</span>`;

    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element);

    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible';
  } else {
    document.getElementById('popup').style.visibility = 'hidden';
  }
}

// Get the submit button by its id and attach a click event listener
document.getElementById('recommend_btn').addEventListener('click', addRecommendation);

// Get the OK button in the popup and attach a click event listener to hide the popup
document.querySelector('.popup button').addEventListener('click', function () {
  showPopup(false);
});

// Scroll to top button functionality
document.querySelector('.iconbutton').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
