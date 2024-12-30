// Smooth scrolling effect
document.querySelectorAll(".nav-menu a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});


function toggleCode(button) {
    // Find the <pre> element that is immediately after the button
    const codeBlock = button.nextElementSibling;
    if (codeBlock.style.display === "none") {
        codeBlock.style.display = "block";
        button.textContent = "Hide Code"; // Update button text
    } else {
        codeBlock.style.display = "none";
        button.textContent = "Show Code"; // Reset button text
    }
}