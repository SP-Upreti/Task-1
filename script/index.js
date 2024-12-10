const focusElem = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const card = entry.target;
            console.log(card.id)
            if (entry.isIntersecting && isVerticallyCentered(card)) {

                card.classList.add("focus-element");
                card.classList.add("z-10");
            } else {
                card.classList.remove("focus-element");
            }

        });
    }, {
        threshold: 1  // Trigger when at least 50% of the element is in the viewport
    });

    const elements = document.querySelectorAll('.snap-child');
    elements.forEach(elem => observer.observe(elem));
}

function isVerticallyCentered(element) {
    const rect = element.getBoundingClientRect();
    // console.log(parentRect.height, rect.height)

    // Check if the element is vertically centered
    const elementCenter = rect.top + (rect.height / 2);
    const parentCenter = window.innerHeight / 2
    console.log("parent-center", parentCenter, "child center", rect.top, rect.height)

    // A small tolerance to account for variations in positioning
    const tolerance = 55; // Adjust tolerance as needed

    return Math.abs(elementCenter - parentCenter) <= tolerance;
}


focusElem();
