document.addEventListener("DOMContentLoaded", function () {
  const clickableDiv = document.querySelector(".clickable-div");
  const targetDiv = document.querySelector(".target-div");

  clickableDiv.addEventListener("click", function (event) {
    // Toggle the display of the target div
    if (targetDiv.style.display === "none" || targetDiv.style.display === "") {
      targetDiv.style.display = "block";
    } else {
      targetDiv.style.display = "none";
    }
    event.stopPropagation(); // Prevent event from bubbling up to the document
  });

  // Close the target div when clicking anywhere outside of it
  document.addEventListener("click", function (event) {
    if (
      !targetDiv.contains(event.target) &&
      !clickableDiv.contains(event.target)
    ) {
      targetDiv.style.display = "none";
    }
  });

  // Prevent closing the target div when clicking inside it
  targetDiv.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
