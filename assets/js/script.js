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

// const speakers = [
//     {
//         'name': 'Assoc Prof Anupam Chattopadhyay',
//         'position': 'Associate Professor, School of Computer Science and Engineering',
//         'contact': '',
//         'image': '',
//         'link': ''
//     },
//     {
//         'name': 'P. Ram',
//         'position': '',
//         'contact': '',
//         'image': '',
//         'link': ''
//     },
//     {
//         'name': 'Indivar Gupta',
//         'position': 'PPD',
//         'contact': '',
//         'image': '',
//         'link': ''
//     },
//     {
//         'name': 'Bimal Roy',
//         'position': '',
//         'contact': '',
//         'image': '',
//         'link': ''
//     },
//     {
//         'name': 'Tino cortesi',
//         'position': '',
//         'contact': '',
//         'image': '',
//         'link': ''
//     },
//     {
//         'name': 'Aditya Kr Sinha',
//         'position': '',
//         'contact': '',
//         'image': '',
//         'link': ''
//     },
//     {
//         'name': 'Shri Sanjay Kumar Das',
//         'position': 'W.B.C.S (Exe.), Managing Director',
//         'contact': '',
//         'image': '',
//         'link': ''
//     },
// ]

const speakerList = document.querySelector('.speaker-list');
speakers.forEach(speaker => {
    const indiSpeaker = document.createElement('div');
    const speakerImage = document.createElement('img');
    const speakerName = document.createElement('h2');
    const speakerPosition = document.createElement('p');
    const speakerLink = document.createElement('a');


    indiSpeaker.setAttribute('class', 'indi-speaker');
    if(speaker.image == ''){
        speakerImage.src = '/assets/images/default-image.png';
    } else {
        speakerImage.src = speaker.image;
    }
    indiSpeaker.appendChild(speakerImage);
    speakerName.textContent = speaker.name;
    indiSpeaker.appendChild(speakerName);
    if(speaker.position != ''){
        speakerPosition.textContent = speaker.position;
        indiSpeaker.appendChild(speakerPosition);
    }
    if(speaker.link != ''){
        speakerLink.setAttribute('href', speaker.link);
        speakerLink.textContent = 'Learn More';
        indiSpeaker.appendChild(speakerLink);
    }

    speakerList.appendChild(indiSpeaker);
});

{/* <div class="speaker-list">
    <div class="indi-speaker">
        <img src="/assets/images/default-image.png" alt="">
        <h2>Assoc Prof Anupam Chattopadhyay</h2>
        <p>Associate Professor, School of Computer Science and Engineering</p>
        <a href="#">Learn More</a>
    </div>
</div> */}