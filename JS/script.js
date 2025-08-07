function navigateToSection(section) {
    switch (section) {
        case 'home':
            window.location.href = 'home.html';
            break;
        case 'about me':
            window.location.href = 'about_me.html';
            break;
        default:
            alert('Section not implemented yet.');
            break;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.getElementById('profileImage');
    if (profileImage) {
        profileImage.addEventListener('click', function () {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = function (e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        profileImage.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            };
            input.click();
        });
    }

    const style = document.createElement('style');
    style.textContent = `
        .nav-btn.active {
            background: #ff8c00 !important;
            transform: scale(1.3);
            box-shadow: 0 8px 25px rgba(167, 150, 129, 0.4);
        }
    `;
    document.head.appendChild(style);

    const currentPage = window.location.pathname.split('/').pop();

    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    // Add active class to only the current page's button
    document.querySelectorAll('.nav-btn').forEach(btn => {
        const section = btn.dataset.section;
        let targetFile = '';

        switch (section) {
            case 'home':
                targetFile = 'home.html';
                break;
            case 'about me':
                targetFile = 'about_me.html';
                break;
        }

        if (currentPage === targetFile) {
            btn.classList.add('active');
        }

        btn.addEventListener('click', function () {
            navigateToSection(section);
        });
    });
});
