const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeactiveClasses();
        panel.classList.add('active');
    });
})
// Function to remove active class
function removeactiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}