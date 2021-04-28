window.addEventListener("scroll", function() {
    const header = document.querySelector('div#header');
    header.classList.toggle('sticky', window.scrollY > 0);
    })