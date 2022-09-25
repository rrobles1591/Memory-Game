const cards= document.querySelectorAll('.memory-card');

let hasFlippedCard= false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');
   if (!hasFlippedCard){
    hasFlippedCard =true;
    firstCard= this;
    console.log({hasFlippedCard, firstCard})
   } else {
    hasFlippedCard =false;
    secondCard= this;
    checkForMatch();
}
}

function checkForMatch() {
    if(firstCard.id === secondCard.id) {
       disableCards();
    }
    else {
        unflipCards();
    }
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click',flipCard);
}

function unflipCards(){ setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
}, 1000);}

(function shuffle() {
    cards.forEach(card =>{
         let randomPos = Math.floor(Math.random()* 12);
card.style.order= randomPos;
});
})()

cards.forEach( card => card.addEventListener ('click', flipCard));