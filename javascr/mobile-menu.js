document.getElementById('mobile-menu').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Optional: handle dropdowns for mobile
document.querySelectorAll('.dropdown > a').forEach(link => {
  link.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const parent = this.parentElement;
      parent.classList.toggle('active');
    }
  });
});

const dropdown = document.querySelector('.dropdown');
dropdown.querySelector('.dropbtn').addEventListener('click', function(e) {
  e.preventDefault();
  dropdown.classList.toggle('active');
});
