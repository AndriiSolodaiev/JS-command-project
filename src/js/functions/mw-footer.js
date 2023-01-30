

const closeModal = document.querySelector("[data-modal-close]")
const modalFooter = document.querySelector("[data-modal]")
    
closeModal.addEventListener('click', modalHidden)
     document.addEventListener("keydown", modalEscape );
function modalEscape(event) {
     
    if (event.code === "Escape") {
      modalHidden()
    };
         
     }
function modalHidden() {
    modalFooter.classList.add("is-hidden")
    // document.removeEventListener("keydown", modalEscape );
}
export function modalRemoveHidden() {
     modalFooter.classList.remove("is-hidden") 
  }


const team = [
    {
        name: 'Andrii Solodaiev',
        work: 'Team Lead',
        img: 'https://i.postimg.cc/NFXWP6qv/Andrii-Solodaiev.jpg'
        
    },
     {
        name: 'Maksym Tulay',
        work: 'Scrum | Implementation of Loader (spinner) for asynchronous requests',
        img: 'https://i.postimg.cc/Dw6RDfD0/Maksym-Tulay.jpg'
    },
        {
        name: 'Lyudmila Maksymenko',
        work: 'Development of the pagination algorithm',
        img: 'https://i.postimg.cc/1X1WXbTb/Lyudmila-Maksymenko.jpg'
    },
        {
        name: 'Liydmila Fesenko',
        work: 'Implement search and display of movies by keyword',
        img: 'https://i.postimg.cc/qMXFhMpw/Liydmila-Fesenko.jpg'
    },
        {
        name: 'Anna Belous',
        work: 'Developer - кнопки "watched" та "queue" - відображаються переглянуті та додані в чергу фільми.',
        img: 'https://i.postimg.cc/tCySjQFx/Anna-Belous.jpg'
    },
        {
        name: 'Kostiantyn Chernetskyi',
        work: 'Modal window',
        img: 'https://i.postimg.cc/44vPwLjN/Kostiantyn-Chernetskyi.jpg'
    },
        {
        name: 'Oleksandra Kryvobok',
        work: 'Rendering library’s movies by pressed buttons “watched”/“queue”. Adding the functionality of the modal window’s buttons ("add to watched" and "add to queue")',
        img: 'https://i.postimg.cc/9QkYzvw1/Oleksandra-Kryvobok.jpg'
    }, 
       {
        name: 'Anastasiia Oliinyk',
        work: 'Card template + showing the trailer',
        img: 'https://i.postimg.cc/tCxXL6tT/Anastasiia-Oliinyk.jpg'
    },
       {
        name: 'Kateryna Pylypets',
        work: 'Etch and render popular movies on the main page, fetch and create genres object  by ID',
        img: 'https://i.postimg.cc/GtzkRN1F/Kateryna-Pylypec.jpg'
    },
        {
        name: 'Vasyl Horaichuk',
        work: 'Development of the layout header and box for movies',
        img: 'https://i.postimg.cc/DzsL0mTy/Vasyl-Horaichuk.jpg'
    },
     {
        name: 'Nina Slominska',
        work: 'Developer - верстка футера, модальне вікно команди.',
        img: 'https://i.postimg.cc/6q6vM0Gy/Nina-Slominska.jpg'
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

