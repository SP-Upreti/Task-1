
//using intersection observer to detect element when it is in viewport and if element is in center then it will be scaled by 1.3

const focusElem = () => {
    const observer = new IntersectionObserver((entries) => {
        // First, remove the scale and z-index from all cards to reset their state
        const elements = document.querySelectorAll('.snap-child');
        elements.forEach(elem => {
            elem.classList.remove("focus-element");
            elem.classList.remove("z-10");
        });

        // Loop through each entry (card)
        entries.forEach(entry => {
            const card = entry.target;
            if (entry.isIntersecting) {
                card.classList.add("focus-element");
                card.classList.add("z-10");
            }
        });
    }, {
        threshold: .8  // Trigger when 25% of the element is in view
    });

    const elements = document.querySelectorAll('.snap-child');
    elements.forEach(elem => observer.observe(elem));
}


//below code didnt worked as expected 
//will learn why it isnt working

function isVerticallyCentered(element) {
    const rect = element.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const parentCenter = window.innerHeight / 2;

    // Tolerance to define how "centered" the element needs to be
    const tolerance = 100;  // Adjust this tolerance as needed

    // If the element is within a range of 100px from the center, consider it centered
    return Math.abs(elementCenter - parentCenter) <= tolerance;
}

focusElem();

