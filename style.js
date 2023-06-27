const body = document.getElementsByTagName("body");
const container2 = document.getElementById("container2");
// I tried using getElementbyclassname to select the change variable but its not working
const change = document.querySelectorAll(".right");
const slideButtonPrev = document.getElementsByClassName("slide-button-prev");
const slideButtonNext = document.getElementsByClassName("slide-button-next");
const slideContent = document.querySelectorAll(".slide-content");
const change2 = document.querySelectorAll(".clickbutton");
const hamburger = document.querySelector(".hamburger");
const exitButton = document.querySelector(".close");
const sideBar = document.querySelector(".side-bar");

console.log(change2);

change.forEach(function(button) {
    button.addEventListener('click', () => {
        const dropdownId = button.getAttribute('data-dropdown');
        const dropdownMessage = document.getElementById(dropdownId);
        const signElement = button.querySelector(".sign")

        if (dropdownMessage && signElement) {
            const displayed = dropdownMessage.style.display === 'block';
            dropdownMessage.style.display = displayed ? 'none' : 'block';
                signElement.textContent = signElement.textContent === '+' ? '-' : '+';
        }
    })
});

let currentSlide = 0;
slideButtonNext[0].addEventListener('click', () => {
    if (currentSlide < slideContent.length - 1) {
        slideContent[currentSlide].style.display = 'none';

        currentSlide++;
        slideContent[currentSlide].style.display = 'block';
    }
})

slideButtonPrev[0].addEventListener('click', () => {
    if (currentSlide > 0) {
        slideContent[currentSlide].style.display = 'none';

        currentSlide--;
        slideContent[currentSlide].style.display = 'block';
    }
})

change2.forEach(function(event) {
    event.addEventListener('click', () => {
        const buttonClickedId = event.getAttribute("data-all");

        const answerClicked = document.getElementById(buttonClickedId);
        const buttonSign = event.querySelector(".plus");

        // console.log(buttonSign);

        if (answerClicked && buttonSign) {
            answerClicked.style.display = answerClicked.style.display === "none" || !answerClicked.style.display ? "block" : "none";
 
            buttonSign.textContent = buttonSign.textContent === '+' || !buttonSign.textContent ? '-' : '+';

            console.log(buttonSign.innerHTML)
        }
    })
})

exitButton.addEventListener('click', () => {
    sideBar.style.display = "none";
    hamburger.style.display = "block";
})

hamburger.addEventListener('click', () => {
    sideBar.style.display = "flex";
    hamburger.style.display = "none";
})

