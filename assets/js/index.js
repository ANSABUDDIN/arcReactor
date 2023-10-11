document.addEventListener("DOMContentLoaded", function () {
  // This function will run when the DOM has finished loading
  setTimeout(() => {
    hideLoader();
  }, 200);
});

function hideLoader() {
  const loader = document.querySelector(".loader");
  const content = document.quserySelector(".content");

  loader.style.display = "none";
  content.classList.remove("invisible");
}
