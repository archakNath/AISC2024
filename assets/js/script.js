const indi_screens = document.querySelectorAll("section.display .screen .indi-screen");
const menu_btns = document.querySelectorAll("section.display .menu li");
const footer_links = document.querySelectorAll("footer li");
const download_button = document.getElementById("download");

for (let i = 0; i < menu_btns.length; i++) {
    const button = menu_btns[i];
    button.onclick = () => {
        for (let j = 0; j < indi_screens.length; j++) {
            const screen = indi_screens[j];
            screen.style.display = "none";
        }
        for (let j = 0; j < menu_btns.length; j++) {
            const button = menu_btns[j];
            button.removeAttribute("class");
        }
        menu_btns[i].setAttribute("class", "active");
        indi_screens[i].style.display = "block";
    }
}
for (let i = 0; i < footer_links.length; i++) {
    const button = footer_links[i];
    button.onclick = () => {
        for (let j = 0; j < indi_screens.length; j++) {
            const screen = indi_screens[j];
            screen.style.display = "none";
        }
        for (let j = 0; j < menu_btns.length; j++) {
            const button = menu_btns[j];
            button.removeAttribute("class");
        }
        menu_btns[i].setAttribute("class", "active");
        indi_screens[i].style.display = "block";
        scrollToSection();
    }
}

download_button.onclick = () => {
    window.open("https://firebasestorage.googleapis.com/v0/b/artco-bb7b5.appspot.com/o/CFP-%20AISC%C2%A02024.pdf?alt=media&token=90480a67-ae66-44ff-ae0a-fbf539ce1223", "_blank")
}

function scrollToSection() {
    var targetSection = document.getElementById('display');
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }