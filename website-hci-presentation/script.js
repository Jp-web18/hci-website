document.addEventListener("DOMContentLoaded", () => {
    console.log("Presentation webpage loaded successfully!");

    const toggleModeButton = document.getElementById("toggleMode");
    let isDarkMode = false;

    toggleModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        isDarkMode = !isDarkMode;
        toggleModeButton.textContent = isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
});

function toggleContent(id) {
    const problem = document.getElementById(id);
    const allContents = problem.parentElement.querySelectorAll('.content');
    allContents.forEach(content => content.classList.add('hidden'));
    problem.classList.remove('hidden');
}
