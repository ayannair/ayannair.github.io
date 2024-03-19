/* changing header text */
const words = [
    {text: "Student", color: "#4169E1"},
    {text: "Collaborator", color: "#ffb6c1"},
    {text: "Leader", color: "#ff5349"},
    {text: "Engineer", color:"#39ff14"},
    {text: "Critical Thinker",color:"#87ceeb"},
    {text: "Michigan Wolverine",color:"#fbec5d"}];

function changeHeaderText() {
    const dynamicTextElement = document.getElementById("dynamic-text");
    let currentIndex = 0;
    dynamicTextElement.style.opacity = 0;
    setInterval(() => {
        dynamicTextElement.style.opacity = 0;
        setTimeout(() => {
            dynamicTextElement.textContent = words[currentIndex].text;
            dynamicTextElement.style.color = words[currentIndex].color;
            dynamicTextElement.style.opacity = 1;
        }, 1000);
    currentIndex = (currentIndex + 1) % words.length;
    }, 3000);
}
    
window.onload = function() {
    changeHeaderText();
};


/* about section scroll fade in */
window.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about');
    const rect = aboutSection.getBoundingClientRect();
    const topPosition = rect.top;
    const bottomPosition = rect.bottom;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (topPosition < windowHeight*0.7) {
        aboutSection.classList.add('fade');
    } else {
        aboutSection.classList.remove('fade');
    }
});


/* icon fade in */
window.addEventListener('scroll', function() {
    // Get the About section element
    const iconSection = document.getElementById('icons');
    
    // Get the position of the top and bottom edges of the About section relative to the viewport
    const rect = iconSection.getBoundingClientRect();
    const topPosition = rect.top;
    const bottomPosition = rect.bottom;
    
    // Get the height of the viewport
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Check if the top or bottom edges of the About section are inside the viewport
    if (topPosition < windowHeight*0.9) {
        // Add the fade-in class when the About section is partially visible in the viewport
        iconSection.classList.add('fade');
    } else {
        // Remove the fade-in class if the About section is not visible
        iconSection.classList.remove('fade');
    }
});

window.addEventListener('scroll', function() {
    // Get the About section element
    const projectsSection = document.getElementById('projects');
    
    // Get the position of the top and bottom edges of the About section relative to the viewport
    const rect = projectsSection.getBoundingClientRect();
    const topPosition = rect.top;
    const bottomPosition = rect.bottom;
    
    // Get the height of the viewport
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Check if the top or bottom edges of the About section are inside the viewport
    if (topPosition < windowHeight*0.6) {
        // Add the fade-in class when the About section is partially visible in the viewport
        projectsSection.classList.add('fade');
    } else {
        // Remove the fade-in class if the About section is not visible
        projectsSection.classList.remove('fade');
    }
});

window.addEventListener('scroll', function() {
    // Get the Contact section element
    const contactSection = document.getElementById('contact');
    
    // Get the position of the top and bottom edges of the Contact section relative to the viewport
    const rect = contactSection.getBoundingClientRect();
    const topPosition = rect.top;
    const bottomPosition = rect.bottom;
    
    // Get the height of the viewport
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Check if the top or bottom edges of the Contact section are inside the viewport
    if (topPosition < windowHeight) {
        // Add the fade-in class when the Contact section is partially visible in the viewport
        contactSection.classList.add('fade');
    } else {
        // Remove the fade-in class if the Contact section is not visible
        contactSection.classList.remove('fade');
    }
});



window.addEventListener('DOMContentLoaded', function() {
    const contactLink = document.querySelector('nav ul li a[href="#contact"]');
    if (contactLink) {
        contactLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            composeEmail(); // Compose the email
        });
    }
    
    const composeMailButton = document.getElementById('compose-mail');
    if (composeMailButton) {
        composeMailButton.addEventListener('click', function(event) {
            event.preventDefault();
            composeEmail();
        });
    }
});

function composeEmail() {
    const subject = encodeURIComponent("Let's Connect!");
    const mailtoLink = `mailto:ayannair@umich.edu?subject=${subject}`;
    window.location.href = mailtoLink;
}

