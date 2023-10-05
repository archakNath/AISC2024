
// UPDATES TIME REMAINING FROM THE D-DAY
var intervalId = setInterval(function () {
    const today = new Date();
    const dday = new Date(2024, 6, 11);

    const one_min = 60;
    const one_hrs = 60 * 60;
    const one_day = 60 * 60 * 24;

    var diff = (dday.getTime() - today.getTime()) / 1000;
    var day = Math.ceil(diff / one_day);
    var hrs = Math.ceil((diff - (day * one_day)) / one_hrs);
    var min = Math.ceil((diff - (day * one_day) - (hrs * one_hrs)) / one_min);
    var sec = Math.ceil(diff - (day * one_day) - (hrs * one_hrs) - (min * one_min));

    const day_left = document.getElementById("day_left");
    const hrs_left = document.getElementById("hrs_left");
    const min_left = document.getElementById("min_left");
    const sec_left = document.getElementById("sec_left");

    day_left.innerText = (day -1).toString().padStart(2, '0');
    hrs_left.innerText = (hrs + 23).toString().padStart(2, '0');
    min_left.innerText = (min + 59).toString().padStart(2, '0');
    sec_left.innerText = (sec + 59).toString().padStart(2, '0');
}, 1000);


// CHANGES ACTIVE NAV ITEM ACCORDING TO SECTION SCROLLED
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav ul li a");

function makeActive(link) {
    navLinks.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
}

function checkSectionInView() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) { // You can adjust this value
            const correspondingLink = document.querySelector(`a[href="#${section.id}"]`);
            makeActive(correspondingLink);
        }
    });
}

window.addEventListener("scroll", checkSectionInView);

// HAMBERG MENU LOGIC
var isClicked = false;

const menu_btn = document.getElementById("menu");
const nav = document.getElementById("nav");
const bppimtlogo = document.getElementById("bppimtlogo");
const culogo = document.getElementById("cu-logo");
const header = document.getElementById("header");


function buttonClicked(){
    if(isClicked){
        menu_btn.src = "/assets/images/menu-icon.png";
        nav.style.display = "none";
        bppimtlogo.style.display = "block";
        culogo.style.display = "block";
        header.style.backgroundColor = "#fff"
        header.style.boxShadow = "0px -2px 7px #212121";
    } else {
        menu_btn.src = "/assets/images/cross.png";
        nav.style.display = "flex";
        bppimtlogo.style.display = "none";
        culogo.style.display = "none";
        header.style.backgroundColor = "transparent"
        header.style.boxShadow = "none";
    }
    isClicked = !isClicked;
}

menu_btn.onclick = buttonClicked;

const nav_items = document.querySelectorAll("header nav ul li");

nav_items.forEach(item => {
    if(window.getComputedStyle(menu_btn).getPropertyValue("display") == "block"){
        item.addEventListener("click", buttonClicked);
    }
});


// LINKED CFP TO BUTTON

const download_btn = document.getElementById("download_btn");
download_btn.onclick = () => {
    window.location.href = "https://firebasestorage.googleapis.com/v0/b/artco-bb7b5.appspot.com/o/CFP_NEW_compressed.pdf?alt=media&token=0b6c4aae-1a2b-42ed-9295-c6ba74be16dc&_gl=1*1g0qp0e*_ga*NjIzOTIyMzk5LjE2ODAzNDI0NzA.*_ga_CW55HF8NVT*MTY5NjUyNzIxMi42Mi4xLjE2OTY1MjczMzIuMjEuMC4w";
}