// Animate skill bars when page loads
document.addEventListener("DOMContentLoaded", () => {
  const fills = document.querySelectorAll(".fill");

  fills.forEach(fill => {
    let percent = fill.getAttribute("data-percent");
    fill.style.width = percent + "%";
  });
});