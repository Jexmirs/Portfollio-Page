const scrollButton = document.getElementById('scroll-button');
const upArrow = document.getElementById('up-arrow');
const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about-section');
const nav = document.querySelector('nav');
const navHeight = nav.offsetHeight;
const additionalOffset = 50;

upArrow.style.display = 'none';

scrollButton.addEventListener('click', () => {
    aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });

    setTimeout(() => {
        upArrow.style.display = 'block';
    }, 500);
});

upArrow.addEventListener('click', () => {
    window.scrollTo({
        top: homeSection.offsetTop - navHeight - additionalOffset,
        behavior: 'smooth'
    });

    upArrow.style.display = 'none';
});
