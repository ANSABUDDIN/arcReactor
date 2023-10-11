document.addEventListener("DOMContentLoaded", function () {
  // This function will run when the DOM has finished loading

  hideLoader();
});

function hideLoader() {
  const loader = document.querySelector(".loader");

  loader.style.display = "none";
}
