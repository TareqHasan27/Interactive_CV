function navigateToSection(section, event) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    event.target.closest('.nav-btn').classList.add('active');

    switch (section) {
        case 'home':
            alert('You are already on the home page!');
            break;
        case 'about me':
            alert('About Me section coming soon!');
            break;
        case 'my projects':
            alert('My Projects section coming soon!');
            break;
        case 'my blogs':
            alert('My Blogs section coming soon!');
            break;
        case 'contact me':
            alert('Contact Me section coming soon!');
            break;
    }
}

// Handle profile image click
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

// Add active styles via JS
const style = document.createElement('style');
style.textContent = `
    .nav-btn.active {
        background: #ff8c00 !important;
        transform: scale(1.1);
        box-shadow: 0 8px 25px rgba(167, 150, 129, 0.4);
    }
`;
document.head.appendChild(style);

// Setup nav button listeners
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        const section = btn.dataset.section;

        btn.addEventListener('click', function (event) {
            navigateToSection(section, event);
        });
    });
});
