import {refs} from "../refs";
const { modalFooter, closeModalFooter, openModalFooter } = refs;
    

export function onOpenModalFooterClick() {
    modalFooter.classList.remove("is-hidden")
    document.addEventListener("keydown", onEscPress );
}

export function onEscPress(evt) {
    if (evt.code === "Escape") {
        onCloseModalFooterClick()
        console.log(evt.code)
        };
}

export function onCloseModalFooterClick() {
    modalFooter.classList.add("is-hidden");
    document.removeEventListener("keydown", onEscPress)
    
}

export function onBackdropClickToClose (evt) {
    if (evt.target === evt.currentTarget) {
        onCloseModalFooterClick()
    }
}


const team = [
    {
        name: 'Andrii Solodaiev',
        work: 'Team Lead',
        img: ''
        
    },
     {
        name: 'Maksym Tulay',
        work: 'Scrum master',
        img: './sass/img/team/Anna.jpg'
    },
        {
        name: 'Люда Максименко',
        work: 'Developer - ',
        img: './sass/img/team/Anna.jpg'
    },
        {
        name: 'Люда Фесенко',
        work: 'Developer - ',
        img: './sass/img/team/Anna.jpg'
    },
        {
        name: 'Анна Белоус',
        work: 'Developer - кнопки "watched" та "queue" - відображаються переглянуті та додані в чергу фільми.',
        img: './sass/img/team/Anna.jpg'
    },
        {
        name: 'Костянтин Чернецький',
        work: 'Developer - modal window.',
        img: './sass/img/team/Anna.jpg'
    },
        {
        name: 'Olexandra Kryvobok',
        work: 'Developer - ',
        img: './sass/img/team/Anna.jpg'
    }, 
       {
        name: 'Анастасія',
        work: 'Developer - ',
        img: './sass/img/team/Anna.jpg'
    },
       {
        name: 'Катерина Пилипец',
        work: 'Developer - ',
        img: './sass/img/team/Anna.jpg'
    },
        {
        name: 'Vasyl',
        work: 'Developer - ',
        img: './sass/img/team/Anna.jpg'
    },
     {
        name: 'Ніна Сломінська',
        work: 'Developer - верстка футера, модальне вікно команди.',
        img: ''
    },     
]
const modalList = document.querySelector('.team-list')
 let markup = ''
function markupTeam(team) {
    
     modalList.innerHTML = team.map(el => {
        
         return `<li class="team-item"><img src="${el.img}" alt="Foto ${el.name}" class="team-img" /><div class="team-description"><h3 class="team-name">${el.name}</h3><p class="team-work">${el.work}</p></div></li>`}).join('');
    
    return
}
markupTeam(team);

