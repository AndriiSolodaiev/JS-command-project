import {refs} from "../refs";
const { modalFooter, closeModalFooter, openModalFooter } = refs;
    

export function onOpenModalFooterClick() {
    
    modalFooter.classList.remove("is-hidden")
    document.addEventListener("keydown", onEscPress );
}

export function onEscPress(evt) {
    if (evt.code === "Escape") {
        onCloseModalFooterClick()
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
        img: 'https://i.postimg.cc/NFXWP6qv/Andrii-Solodaiev.jpg',
        linkedin: 'https://www.linkedin.com/in/andrii-solodaiev-0b041a264/',
         github: 'https://github.com/AndriiSolodaiev'
    },
    {
        name: 'Maksym Tulay',
        work: 'Scrum | Implementation of Loader (spinner) for asynchronous requests',
        img: 'https://i.postimg.cc/Dw6RDfD0/Maksym-Tulay.jpg',
        linkedin: 'https://www.linkedin.com/in/max-tulay-342b1210b',
         github: 'https://github.com/Maksym-Tulay'
    },
    {
        name: 'Oleksandra Kryvobok',
        work: 'Implemented of adding and rendering movies to my library',
        img: 'https://i.postimg.cc/9QkYzvw1/Oleksandra-Kryvobok.jpg',
        linkedin: 'https://www.linkedin.com/in/oleksandra-kryvobok-67527222a/',
         github: 'https://github.com/OleksandraKryvobok'
    },
    {
        name: 'Kateryna Pylypets',
        work: 'Fetch and render popular movies, fetch and create genres object  by ID',
        img: 'https://i.postimg.cc/GtzkRN1F/Kateryna-Pylypec.jpg',
        linkedin: 'https://www.linkedin.com/in/kateryna-pylypets-b07540264/',
         github: 'https://github.com/KaterinaPilipets'
    },
    {
        name: 'Lyudmila Maksymenko',
        work: 'Development of the pagination algorithm',
        img: 'https://i.postimg.cc/1X1WXbTb/Lyudmila-Maksymenko.jpg',
        linkedin: 'https://www.linkedin.com/in/liudmyla-fesenko-58a579188/',
         github: 'https://github.com/LyudmilaMax'
    },
    {
        name: 'Liydmila Fesenko',
        work: 'Implement search and display of movies by keyword',
        img: 'https://i.postimg.cc/qMXFhMpw/Liydmila-Fesenko.jpg',
        linkedin: 'https://www.linkedin.com/in/liydmila-fesenko-58a579188',
         github: 'https://github.com/LudaFesenko'
    },
    {
        name: 'Vasyl Horaichuk',
        work: 'Development of the layout header and box for movies. Naming team.',
        img: 'https://i.postimg.cc/DzsL0mTy/Vasyl-Horaichuk.jpg',
        linkedin: ' https://www.linkedin.com/in/vasyl-horaichuk-768170bb/',
         github: 'https://github.com/vasyl-horaichuk'
    },
    {
        name: 'Anna Belous',
        work: 'Developer, library rendering implementation',
        img: 'https://i.postimg.cc/tCySjQFx/Anna-Belous.jpg',
        linkedin: 'https://www.linkedin.com/in/anna-belous-frontend/',
         github: 'https://github.com/annabelous75'
    },
        
         
    {
        name: 'Anastasiia Oliinyk',
        work: 'Card template and showing the trailer',
        img: 'https://i.postimg.cc/tCxXL6tT/Anastasiia-Oliinyk.jpg',
        linkedin: 'https://www.linkedin.com/mwlite/in/anastasiia-oliinyk-572a80242',
         github: 'https://github.com/Miss-Anastasiia'
    },
       
    {
        name: 'Kostiantyn Chernetskyi',
        work: 'Modal window',
        img: 'https://i.postimg.cc/44vPwLjN/Kostiantyn-Chernetskyi.jpg',
        linkedin:'https://www.linkedin.com/in/chernetskyi-kostiantyn-5028b5263/',
        github: 'https://github.com/kostya3004'   
    },
    {
        name: 'Nina Slominska',
        work: 'Development of footer, MW footer, team logo',
        img: 'https://i.postimg.cc/6q6vM0Gy/Nina-Slominska.jpg',
        linkedin: 'https://www.linkedin.com/in/nina-slominska-017553264/',
        github:'https://github.com/NinaSlominska'
    },     
]
const modalList = document.querySelector('.team-list')
function markupTeam(team) {
    
     modalList.innerHTML = team.map(el => {
     let teamIn=""
         if (el.linkedin) {
     teamIn=`<a href="${el.linkedin}" class="social__link">in</a>`
         }
         else { teamIn = "" } 
      let teamGithub=""
         if (el.github) {
     teamGithub=`<a href="${el.github}" class="social__link social__github"></a>`
         }
      else {teamGithub=""}      
         return `<li class="team-item"><img src="${el.img}" alt="Foto ${el.name}" class="team-img" /><div class="team-description"><div class="social">${teamIn}${teamGithub}</div><h3 class="team-name">${el.name}</h3><p class="team-work">${el.work}</p></div></li>`}).join('');
    
    return
}
markupTeam(team);

