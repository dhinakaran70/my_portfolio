const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');

window.onscroll = () => {
    var current = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
};

// Tab Logic for Experience Section
function setupTabs() {
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');
    const activeTabIndicator = document.querySelector('.active-tab-indicator');

    if (!tabs.length || !contents.length) return;

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(tab.dataset.target).classList.add('active');

            // Move indicator
            if (activeTabIndicator) {
                activeTabIndicator.style.transform = `translateY(${index * 42}px)`; // Assuming 42px height per tab
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupTabs();
});
