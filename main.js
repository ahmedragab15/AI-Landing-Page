// ELEMENTS ANIMATION ON MOUSEMOVE
document.addEventListener("mousemove", (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    document.querySelectorAll(".parallax").forEach((element) => {
        const speed = element.getAttribute("data-speed");
        element.style.transform = `translate(${x * speed * 20}px, ${y * speed * 20}px)`;
    })
})

// SIGNIN PAGE OPEN AND CLOSE ANIMATION
const signinButton = document.getElementById('signinButton');
const signinPage = document.getElementById('signinPage');
const closeIcon = document.getElementById('closeIcon');

signinButton.addEventListener('click', function () {
    signinPage.classList.remove('closeSignin');
    signinPage.classList.add("openSignin")
});

closeIcon.addEventListener('click', function () {
    signinPage.classList.remove("openSignin");
    signinPage.classList.add('closeSignin');
})

// SIDEBAR ELEMENTS
const sideBar = document.querySelector('.sidebar');
const menuButton = document.querySelector('.menu-icon');
const closeButton = document.querySelector('.close-icon');

// OPEN SIDEBAR
menuButton.addEventListener("click", function () {
    sideBar.classList.remove('close-sidebar')
    sideBar.classList.add('open-sidebar')
})

closeButton.addEventListener("click", function () {
    sideBar.classList.remove('open-sidebar')
    sideBar.classList.add('close-sidebar')
})

// CHANGE ROBOT IMAGE
const image = document.querySelector(".robot-box img");
const imageSrcs = ["images/robot1.png", "images/robot.png"];
let i = 0

setInterval(() => {
    image.src = imageSrcs[i];
    i++
    if (i == 2) {
        i = 0
    }
}, 3000);

//SCROLL TO TOP
let scrollUp = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
  scrollY > 1000
    ? scrollUp.classList.add("show")
    : scrollUp.classList.remove("show");
});