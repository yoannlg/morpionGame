const aCase = document.querySelectorAll('.case');


//initiation des différentes variables
let coup = 0;
let circleOrCross = '';

const tour = () => {
    return coup % 2 === 0 ? 'circle' : 'cross';
}

const play = (e) =>{
    const element = e.target;

     if(!element.classList.contains('circle'||'cross')){
        element.classList.add(tour());
        coup++;
     }
}


aCase.forEach(elem => elem.addEventListener('click', play));



















// damier.addEventListener('click',function(event){
//     element = event.target;
//     console.log(element);
    
//     if (tour % 2 === 0) {
//         element.classList.add("circle");
//         tour++;
//     }
//     else{
//         element.classList.add("cross");
//         tour++;}
// });



//lancement des différentes fonction tant qu'on est pas à stop true
// while(!stop){
//     play();
// }



// let win = ()=>{
//     for (let i = 0; i < aCase.length; i++) {
//         const element = aCase[i];
        
//         if(aCase[i].classList.contains("circle")){
//             console.log("stooooop");
//         }
//         else{console.log("prout")};
//     }
// }







//test anthony welc

// const cases = document.querySelectorAll('.case');
// let coup = 0;


// const tour = ()=>{
//     coup++;
//     return i % 2 === 0 ? 'circle' : 'cross'; 
// }


// const play = () => {

// }

// cases.forEach(elem => elem.addEventListener('click', play));

