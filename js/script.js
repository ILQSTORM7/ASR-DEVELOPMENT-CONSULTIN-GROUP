let zoomLevel = 1;

function zoomIn() {
    zoomLevel += 0.2;
    document.getElementById("modalImg").style.transform = "scale(" + zoomLevel + ")";
}

function zoomOut() {
    if (zoomLevel > 0.6) {
        zoomLevel -= 0.2;
        document.getElementById("modalImg").style.transform = "scale(" + zoomLevel + ")";
    }
}

function openModal(text, imgSrc) {
    zoomLevel = 1;
    document.getElementById("modalImg").style.transform = "scale(1)";
    document.getElementById('modalText').innerText = text;
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('certModal').style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById('certModal').style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function (event) {
    if (event.target == document.getElementById('certModal')) closeModal();
}

// MOBILE MENU
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu-box');
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// SLIDER
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
});

// SCROLL TOP VISIBILITY
window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollTop');
    btn.style.display = window.scrollY > 600 ? 'flex' : 'none';
});

// COUNTERS
const counters = document.querySelectorAll('.counter');
const startCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const updateCount = () => {
            const count = +counter.innerText.replace('+', '');
            const inc = target / 100;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20);
            } else { counter.innerText = target + "+"; }
        };
        updateCount();
    });
};

const counterSection = document.getElementById('counter-section');
let started = false;
window.addEventListener('scroll', () => {
    if (counterSection && window.scrollY > (counterSection.offsetTop - window.innerHeight)) {
        if (!started) { startCounters(); started = true; }
    }
});