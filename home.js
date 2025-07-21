function navigateToSection(section, event) {

    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    event.target.closest('.nav-btn').classList.add('active');




    // For demonstration, we'll just show an alert
    // In a real application, you might want to load content dynamically or change the view 
    //document.querySelector(`#${section}`).scrollIntoView();

    switch (section) {
        case 'home':
            alert('You are already on the home page!');
            break;
        case 'about':
            alert('About Me section coming soon!');
            break;
        case 'projects':
            alert('My Projects section coming soon!');
            break;
        case 'blogs':
            alert('My Blogs section coming soon!');
            break;
        case 'contact':
            alert('Contact Me section coming soon!');
            break;
    }
}

// Download CV function
function downloadCV() {
    console.log('Downloading CV...');
}

// Profile image click handler
document.getElementById('profileImage').addEventListener('click', function () {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('profileImage').src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
});

// Add some interactive elements
document.addEventListener('DOMContentLoaded', function () {
    // Add typing effect to the greeting
    const greeting = document.querySelector('.greeting');
    const text = greeting.textContent;
    greeting.textContent = '';

    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            greeting.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };

    setTimeout(typeWriter, 500);
});

// Add active state styles
const style = document.createElement('style');
style.textContent = `
            .nav-btn.active {
                background: #ff8c00 !important;
                transform: scale(1.1);
                box-shadow: 0 8px 25px rgba(255,140,0,0.4);
            }
        `;
document.head.appendChild(style);