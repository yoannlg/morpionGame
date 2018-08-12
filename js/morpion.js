const aCase = document.querySelectorAll('.case');
console.log(aCase);


for (let i = 0; i < aCase.length; i++) {

    const ajoutClassCircle = () => {
        aCase[i].classList.add('circle');
    }
    const ajoutClassCross = () => {
        aCase[i].classList.add('cross');
    }
    aCase[i].addEventListener("click", ajoutClassCircle);
// if(player1){
//     aCase[i].addEventListener("click", ajoutClassCircle);
// }
// else {
//     aCase[i].addEventListener("click", ajoutClassCross);
// }
     
};