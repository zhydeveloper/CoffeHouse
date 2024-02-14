// toggle class untuk navbar
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#humburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// toggle class active search
const searchFrom = document.querySelector('.search-from');
const searchBox = document.querySelector('#search-box');
document.querySelector('#search-button').onclick = (e) => {
    searchFrom.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// penaganan klik diluar Elemen
document.addEventListener('click', function(e) {
    if (!document.querySelector('#humburger-menu').contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!document.querySelector('#search-button').contains(e.target) && !searchFrom.contains(e.target)) {
        searchFrom.classList.remove('active');
    }
});
// Item modal 1
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
      itemDetailModal.style.display = 'flex';
      e.preventDefault();
    };
});

// Klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};

// Item modal 2
const itemDetailModal2 = document.querySelector('#item-detail-modal2');
const itemDetailButtons2 = document.querySelectorAll('.item-detail-button2');

itemDetailButtons2.forEach((btn) => {
    btn.onclick = (e) => {
      itemDetailModal2.style.display = 'flex';
      e.preventDefault();
    };
});

// Klik tombol close modal
document.querySelector('.modal2 .close-icon2').onclick = (e) => {
    itemDetailModal2.style.display = 'none';
    e.preventDefault();
};

// Item modal 3
const itemDetailModal3 = document.querySelector('#item-detail-modal3');
const itemDetailButtons3 = document.querySelectorAll('.item-detail-button3');

itemDetailButtons3.forEach((btn) => {
    btn.onclick = (e) => {
      itemDetailModal3.style.display = 'flex';
      e.preventDefault();
    };
});

// Klik tombol close modal
document.querySelector('.modal3 .close-icon3').onclick = (e) => {
    itemDetailModal3.style.display = 'none';
    e.preventDefault();
};

// Item modal 4
const itemDetailModal4 = document.querySelector('#item-detail-modal4');
const itemDetailButtons4 = document.querySelectorAll('.item-detail-button4');

itemDetailButtons4.forEach((btn) => {
    btn.onclick = (e) => {
      itemDetailModal4.style.display = 'flex';
      e.preventDefault();
    };
});

// Klik tombol close modal
document.querySelector('.modal4 .close-icon4').onclick = (e) => {
    itemDetailModal4.style.display = 'none';
    e.preventDefault();
};

// Klik di luar detail 
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    } else if (e.target === itemDetailModal2) {
        itemDetailModal2.style.display = 'none';
    } else if (e.target === itemDetailModal3) {
        itemDetailModal3.style.display = 'none';
    } else if (e.target === itemDetailModal4) {
        itemDetailModal4.style.display = 'none';
    }
};
