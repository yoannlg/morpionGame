const cases = document.querySelectorAll('.case');
const casesArray = Array.from(cases);

//initiation des différentes variables
let coup = 0;
let stop = false;

//fonction qui déterminera quel joueurs joue en fonction du tour (si pair alors joueur rond si impaire joueur croix);
const tour = () => {
    return coup % 2 === 0 ? 'circle' : 'cross';
}
const isWin = (elem) =>{
    for (let i = 0; i < casesArray.length; i++) {

        let classTest = casesArray[i].classList.contains('circle');

    //    if(casesArray[0].classList.contains('circle')&&
    //     casesArray[1].classList.contains('circle')&&
    //     casesArray[2].classList.contains('circle')){
            
    //    };


//     switch (???) {
//         case casesArray[0].classList.contains('circle'):
//         console.log("TEEEEEESSSSST");
//             break;

//         default:
//             break;
//         }
    }
               

    if(elem.classList.contains('circle')){
        return stop = true;
    }
}

//fonction de jeu qui récupère notre event liée au listener('click)
const play = (e) =>{
    console.log("Evenement vaut : "+e);
    const element = e.target;
     if(!element.classList.contains('circle'||'cross')){
        element.classList.add(tour());
        isWin(element);
        coup++;
     }
}

cases.forEach(elem => elem.addEventListener('click', play));


