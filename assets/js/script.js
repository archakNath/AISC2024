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
    window.open("https://firebasestorage.googleapis.com/v0/b/artco-bb7b5.appspot.com/o/CFP-%20AISC%C2%A02024.pdf?alt=media&token=4a5ae9b0-c296-412c-8310-d01ea0833602", "_blank")
}

function scrollToSection() {
    var targetSection = document.getElementById('display');
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

const speakers = [
    {
        'name': 'Prof. Lau Sian Lun',
        'position': 'Department of Computing and Information Systems, Sunway University',
        'contact': '',
        'image': '/assets/images/speaker/lau.jpeg',
        'link': 'https://studyonline.sunway.edu.my/faculty/professor-lau-sian-lun'
    },
    {
        'name': 'Assoc Prof Anupam Chattopadhyay',
        'position': 'Associate Professor, School of Computer Science and Engineering',
        'contact': '',
        'image': '/assets/images/speaker/anupam.jpg',
        'link': 'https://dr.ntu.edu.sg/cris/rp/rp01076'
    },
    {
        'name': 'Tino Cortesi',
        'position': 'Full Professor, Università Ca’ Fioscari Venezia',
        'contact': '',
        'image': '/assets/images/speaker/tino.jpg',
        'link': 'https://www.unive.it/data/people/5591776'
    },
    {
        'name': 'Dr. Prahlad Ram',
        'position': 'Scientist, Scince and Engineering Research Board',
        'contact': '',
        'image': '/assets/images/speaker/prahlad.jpg',
        'link': 'https://www.linkedin.com/in/dr-prahlad-ram-a0624a154/?originalSubdomain=in'
    },
    {
        'name': 'Indivar Gupta',
        'position': 'Defence Research and Development Organization',
        'contact': '',
        'image': '/assets/images/speaker/indivir.jpg',
        'link': 'https://scholar.google.co.in/citations?user=-bzRyQMAAAAJ&hl=en'
    },
    {
        'name': 'Dr. Partha Pratim Das (PPD)',
        'position': 'Professor, Dept. of CSE, IIT Kharagpur',
        'contact': '',
        'image': '/assets/images/speaker/ppd.png',
        'link': 'https://www.linkedin.com/in/ppdas/'
    },
    {
        'name': 'Bimal Roy',
        'position': 'ISI, Kolkata',
        'contact': '',
        'image': '/assets/images/speaker/bimal.jpg',
        'link': 'https://www.isical.ac.in/~bimal/'
    },
    {
        'name': 'Aditya Kr Sinha',
        'position': 'Director at C-DAC Patna & C-DAC Kolkata',
        'contact': '',
        'image': '/assets/images/speaker/sinha.jpeg',
        'link': 'https://www.linkedin.com/in/adityaksinha/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
        'name': 'Shri Sanjay Kumar Das',
        'position': 'W.B.C.S (Exe.), Managing Director',
        'contact': '',
        'image': '/assets/images/speaker/sanjay.jpeg',
        'link': 'https://www.linkedin.com/in/sanjaykumardas/?originalSubdomain=in'
    },
    {
        'name': 'Sourabh Mukherjee',
        'position': 'Lead - Modern Data Architecture, Accenture',
        'contact': '',
        'image': '/assets/images/speaker/sourabh.jpeg',
        'link': 'https://www.linkedin.com/in/sourabhmukherjee/'
    },
    {
        'name': 'Dr. Saptarsi Goswami',
        'position': 'Bangabasi Morning College',
        'contact': '',
        'image': '/assets/images/speaker/saptashri.jpeg',
        'link': 'https://scholar.google.com/citations?user=kdlCB6sAAAAJ&hl=enc:\Users\archa\Downloads\saptashri.jpeg'
    },
]

const speakerList = document.querySelector('.speaker-list');
speakers.forEach(speaker => {
    const indiSpeaker = document.createElement('div');
    const speakerImage = document.createElement('img');
    const speakerName = document.createElement('h2');
    const speakerPosition = document.createElement('p');
    const speakerLink = document.createElement('a');


    indiSpeaker.setAttribute('class', 'indi-speaker');
    if (speaker.image == '') {
        speakerImage.src = '/assets/images/default-image.png';
    } else {
        speakerImage.src = speaker.image;
    }
    indiSpeaker.appendChild(speakerImage);
    speakerName.textContent = speaker.name;
    indiSpeaker.appendChild(speakerName);
    if (speaker.position != '') {
        speakerPosition.textContent = speaker.position;
        indiSpeaker.appendChild(speakerPosition);
    }
    if (speaker.link != '') {
        speakerLink.onclick = () => {
            window.open(speaker.link, '_blank')
        }
        speakerLink.textContent = 'More Details';
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