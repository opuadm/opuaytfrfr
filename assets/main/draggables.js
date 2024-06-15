document.addEventListener('DOMContentLoaded', (event) => {
    const element = document.querySelector('.draggable');

    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        let newTop = element.offsetTop - pos2;
        let newLeft = element.offsetLeft - pos1;

        // Ensure the element does not go offscreen on the top or bottom
        if (newTop < 0) {
            newTop = 0;
        } else if (newTop > window.innerHeight - element.offsetHeight) {
            newTop = window.innerHeight - element.offsetHeight;
        }

        // Ensure the element does not go offscreen on the left or right
        if (newLeft < 0) {
            newLeft = 0;
        } else if (newLeft > window.innerWidth - element.offsetWidth) {
            newLeft = window.innerWidth - element.offsetWidth;
        }

        element.style.top = newTop + "px";
        element.style.left = newLeft + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    // Make the element draggable
    element.onmousedown = dragMouseDown;

    // Update position on window resize
    window.addEventListener('resize', () => {
        ensureElementInBoundsOnResize();
    });

    // Initial call to set the position correctly on load
    function ensureElementInBoundsOnLoad() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Set initial position in pixels
        let initialLeft = windowWidth - 275 - element.offsetWidth; // 486px from the right
        let initialTop = windowHeight - 126 - element.offsetHeight;  // 211px from the bottom

        // Ensure the element stays within the bounds on load
        if (initialLeft + element.offsetWidth > windowWidth) {
            initialLeft = windowWidth - element.offsetWidth;
        }
        if (initialTop + element.offsetHeight > windowHeight) {
            initialTop = windowHeight - element.offsetHeight;
        }
        if (initialLeft < 0) {
            initialLeft = 0;
        }
        if (initialTop < 0) {
            initialTop = 0;
        }

        element.style.left = initialLeft + "px";
        element.style.top = initialTop + "px";
    }

    // Ensure the element stays within the bounds on resize without resetting its position
    function ensureElementInBoundsOnResize() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        let elementLeft = element.offsetLeft;
        let elementTop = element.offsetTop;

        // Ensure the element stays within the bounds on resize
        if (elementLeft + element.offsetWidth > windowWidth) {
            elementLeft = windowWidth - element.offsetWidth;
        }
        if (elementTop + element.offsetHeight > windowHeight) {
            elementTop = windowHeight - element.offsetHeight;
        }
        if (elementLeft < 0) {
            elementLeft = 0;
        }
        if (elementTop < 0) {
            elementTop = 0;
        }

        element.style.left = elementLeft + "px";
        element.style.top = elementTop + "px";
    }

    // Ensure the element is in bounds on load
    ensureElementInBoundsOnLoad();
});

document.addEventListener('DOMContentLoaded', (event) => {
    const element = document.querySelector('#window1');

    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        let newTop = element.offsetTop - pos2;
        let newLeft = element.offsetLeft - pos1;

        // Ensure the element does not go offscreen on the top or bottom
        if (newTop < 0) {
            newTop = 0;
        } else if (newTop > window.innerHeight - element.offsetHeight) {
            newTop = window.innerHeight - element.offsetHeight;
        }

        // Ensure the element does not go offscreen on the left or right
        if (newLeft < 0) {
            newLeft = 0;
        } else if (newLeft > window.innerWidth - element.offsetWidth) {
            newLeft = window.innerWidth - element.offsetWidth;
        }

        element.style.top = newTop + "px";
        element.style.left = newLeft + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    // Make the element draggable
    element.onmousedown = dragMouseDown;

    // Update position on window resize
    window.addEventListener('resize', () => {
        ensureElementInBoundsOnResize();
    });

    // Initial call to set the position correctly on load
    function ensureElementInBoundsOnLoad() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Set initial position in pixels
        let initialLeft = windowWidth - 553 - element.offsetWidth; // 486px from the right
        let initialTop = windowHeight - 424 - element.offsetHeight;  // 211px from the bottom

        // Ensure the element stays within the bounds on load
        if (initialLeft + element.offsetWidth > windowWidth) {
            initialLeft = windowWidth - element.offsetWidth;
        }
        if (initialTop + element.offsetHeight > windowHeight) {
            initialTop = windowHeight - element.offsetHeight;
        }
        if (initialLeft < 0) {
            initialLeft = 0;
        }
        if (initialTop < 0) {
            initialTop = 0;
        }

        element.style.left = initialLeft + "px";
        element.style.top = initialTop + "px";
    }

    // Ensure the element stays within the bounds on resize without resetting its position
    function ensureElementInBoundsOnResize() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        let elementLeft = element.offsetLeft;
        let elementTop = element.offsetTop;

        // Ensure the element stays within the bounds on resize
        if (elementLeft + element.offsetWidth > windowWidth) {
            elementLeft = windowWidth - element.offsetWidth;
        }
        if (elementTop + element.offsetHeight > windowHeight) {
            elementTop = windowHeight - element.offsetHeight;
        }
        if (elementLeft < 0) {
            elementLeft = 0;
        }
        if (elementTop < 0) {
            elementTop = 0;
        }

        element.style.left = elementLeft + "px";
        element.style.top = elementTop + "px";
    }

    // Ensure the element is in bounds on load
    ensureElementInBoundsOnLoad();
});

document.addEventListener('DOMContentLoaded', (event) => {
    const element = document.querySelector('#window2');

    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        let newTop = element.offsetTop - pos2;
        let newLeft = element.offsetLeft - pos1;

        // Ensure the element does not go offscreen on the top or bottom
        if (newTop < 0) {
            newTop = 0;
        } else if (newTop > window.innerHeight - element.offsetHeight) {
            newTop = window.innerHeight - element.offsetHeight;
        }

        // Ensure the element does not go offscreen on the left or right
        if (newLeft < 0) {
            newLeft = 0;
        } else if (newLeft > window.innerWidth - element.offsetWidth) {
            newLeft = window.innerWidth - element.offsetWidth;
        }

        element.style.top = newTop + "px";
        element.style.left = newLeft + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    // Make the element draggable
    element.onmousedown = dragMouseDown;

    // Update position on window resize
    window.addEventListener('resize', () => {
        ensureElementInBoundsOnResize();
    });

    // Initial call to set the position correctly on load
    function ensureElementInBoundsOnLoad() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Set initial position in pixels
        let initialLeft = windowWidth - 852- element.offsetWidth; // 486px from the right
        let initialTop = windowHeight - 742 - element.offsetHeight;  // 211px from the bottom

        // Ensure the element stays within the bounds on load
        if (initialLeft + element.offsetWidth > windowWidth) {
            initialLeft = windowWidth - element.offsetWidth;
        }
        if (initialTop + element.offsetHeight > windowHeight) {
            initialTop = windowHeight - element.offsetHeight;
        }
        if (initialLeft < 0) {
            initialLeft = 0;
        }
        if (initialTop < 0) {
            initialTop = 0;
        }

        element.style.left = initialLeft + "px";
        element.style.top = initialTop + "px";
    }

    // Ensure the element stays within the bounds on resize without resetting its position
    function ensureElementInBoundsOnResize() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        let elementLeft = element.offsetLeft;
        let elementTop = element.offsetTop;

        // Ensure the element stays within the bounds on resize
        if (elementLeft + element.offsetWidth > windowWidth) {
            elementLeft = windowWidth - element.offsetWidth;
        }
        if (elementTop + element.offsetHeight > windowHeight) {
            elementTop = windowHeight - element.offsetHeight;
        }
        if (elementLeft < 0) {
            elementLeft = 0;
        }
        if (elementTop < 0) {
            elementTop = 0;
        }

        element.style.left = elementLeft + "px";
        element.style.top = elementTop + "px";
    }

    // Ensure the element is in bounds on load
    ensureElementInBoundsOnLoad();
});
