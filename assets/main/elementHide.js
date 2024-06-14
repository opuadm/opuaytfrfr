function showElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.style.display = "block";
    } else {
        console.error(`Element with ID '${elementId}' not found.`);
    }
}
