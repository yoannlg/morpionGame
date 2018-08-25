const cases = document.querySelectorAll('.case');
const casesArray = Array.from(cases);


//initiation des différentes variables
let coup = 0;
let stop = false;

//fonction qui déterminera quel joueurs joue en fonction du tour (si pair alors joueur rond si impaire joueur croix);
const tour = () => {
    return coup % 2 === 0 ? 'circle' : 'cross';
}


//fonctions is circle et is cross qui vérifie si les lignes horizontale, verticale et diagonale sont remplie par des rond ou des croix
const isCircle = ()=>{
    if(casesArray[0].classList.contains('circle')&&
    casesArray[1].classList.contains('circle')&&
    casesArray[2].classList.contains('circle') ||
        casesArray[3].classList.contains('circle')&&
        casesArray[4].classList.contains('circle')&&
        casesArray[5].classList.contains('circle') ||
    casesArray[6].classList.contains('circle')&&
    casesArray[7].classList.contains('circle')&&
    casesArray[8].classList.contains('circle') ||
        casesArray[0].classList.contains('circle')&&
        casesArray[3].classList.contains('circle')&&
        casesArray[6].classList.contains('circle') ||
    casesArray[1].classList.contains('circle')&&
    casesArray[4].classList.contains('circle')&&
    casesArray[7].classList.contains('circle') ||
        casesArray[2].classList.contains('circle')&&
        casesArray[5].classList.contains('circle')&&
        casesArray[8].classList.contains('circle') ||
    casesArray[0].classList.contains('circle')&&
    casesArray[4].classList.contains('circle')&&
    casesArray[8].classList.contains('circle') ||
        casesArray[2].classList.contains('circle')&&
        casesArray[4].classList.contains('circle')&&
        casesArray[6].classList.contains('circle')){
        return true;
    }
}

const isCross = ()=>{
    if(casesArray[0].classList.contains('cross')&&
    casesArray[1].classList.contains('cross')&&
    casesArray[2].classList.contains('cross') ||
        casesArray[3].classList.contains('cross')&&
        casesArray[4].classList.contains('cross')&&
        casesArray[5].classList.contains('cross') ||
    casesArray[6].classList.contains('cross')&&
    casesArray[7].classList.contains('cross')&&
    casesArray[8].classList.contains('cross') ||
        casesArray[0].classList.contains('cross')&&
        casesArray[3].classList.contains('cross')&&
        casesArray[6].classList.contains('cross') ||
    casesArray[1].classList.contains('cross')&&
    casesArray[4].classList.contains('cross')&&
    casesArray[7].classList.contains('cross') ||
        casesArray[2].classList.contains('cross')&&
        casesArray[5].classList.contains('cross')&&
        casesArray[8].classList.contains('cross') ||
    casesArray[0].classList.contains('cross')&&
    casesArray[4].classList.contains('cross')&&
    casesArray[8].classList.contains('cross') ||
        casesArray[2].classList.contains('cross')&&
        casesArray[4].classList.contains('cross')&&
        casesArray[6].classList.contains('cross')){
        return true;
    }
}





const isWin = () =>{

       if(isCircle() || isCross()){
           stop = true;
           return true;
       }

    // switch (???) {
    //     case casesArray[0].classList.contains('circle'):
    //     console.log("TEEEEEESSSSST");
    //         break;

    //     default:
    //         break;
    //     }
}

const isFull = () =>{
    if((casesArray[0].classList.contains('circle') || casesArray[0].classList.contains('cross')) && 
    (casesArray[1].classList.contains('circle') || casesArray[1].classList.contains('cross')) &&
    (casesArray[2].classList.contains('circle')|| casesArray[2].classList.contains('cross'))&&
    (casesArray[3].classList.contains('circle')|| casesArray[3].classList.contains('cross'))&&
    (casesArray[4].classList.contains('circle')|| casesArray[4].classList.contains('cross'))&&
    (casesArray[5].classList.contains('circle')|| casesArray[5].classList.contains('cross'))&&
    (casesArray[6].classList.contains('circle')|| casesArray[6].classList.contains('cross'))&&
    (casesArray[7].classList.contains('circle')|| casesArray[7].classList.contains('cross'))&&
    (casesArray[8].classList.contains('circle')|| casesArray[8].classList.contains('cross'))){
        return true;
    }
}

const isNull= ()=>{
        if(!isWin() && isFull()){
            stop = true;
            return true;
        }
}

const refesh = () =>{
    cases.forEach(aCase => {
        aCase.classList.remove('circle');
        aCase.classList.remove('cross');
    });
    stop = false;
}

//fonction de jeu qui récupère notre event liée au listener('click)
const play = (e) =>{
    console.log("Evenement vaut : "+e.type);
    const element = e.target;
        if(!element.classList.contains('circle'||'cross') && !stop){
           element.classList.add(tour());
           coup++;
        }
     //timeOut qui permet d'afficher l'alert apres l'affichage du rond ou de la croix sans ça l'alert apparait avant l'affichage du dernier rond ou croix permetant la victoire
     
     setTimeout(()=>{
        if(isWin()){
            console.log("c'est gagner et ouai ouai");
            if(confirm("C'est Gagné!!\rVoulez vous rejouer?")){
                console.log("on supprime tout et on recommence");
                refesh();
                
            };
        }
        else if (isNull()){
            console.log("Match null?");
            alert("Aussi nul l'un que l'autre!^");
        }
        
     },500);   
}

cases.forEach(aCase => aCase.addEventListener('click', play));




//parti css

cases.forEach(aCase => aCase.addEventListener('mousedown', (aCase)=>{
    aCase.target.classList.add('push');
    aCase.target.classList.add('test');

    
}));

const removeTransition = (e)=>{
e.target.classList.remove('push');
e.target.classList.remove('test');
}


cases.forEach(aCase => aCase.addEventListener('mouseup', removeTransition));

