// DOM ELEMENT REFERENCES
const hobbiesResult = document.getElementById('hobbies-result');
const transportResult = document.getElementById('transport-result');
const musicResult = document.getElementById('music-result');

const sportChecked = document.getElementById('sports-checkbox');
const gamesChecked = document.getElementById('games-checkbox');
const musicChecked = document.getElementById('music-checkbox');



sportChecked.addEventListener('change',($event)=>{

    if($event.target.checked){
        hobbiesResult.children[0].classList.remove('text-secondary');
    }
    else{
        hobbiesResult.children[0].classList.add('text-secondary');
    }
});


gamesChecked.addEventListener('change',($event)=>{

    if($event.target.checked){
        hobbiesResult.children[1].classList.remove('text-secondary');
    }
    else{
        hobbiesResult.children[1].classList.add('text-secondary');
    }
});

musicChecked.addEventListener('change',($event)=>{

    if($event.target.checked){
        hobbiesResult.children[2].classList.remove('text-secondary');
    }
    else{
        hobbiesResult.children[2].classList.add('text-secondary');
    }
});


const radioButtons = document.getElementsByName('transport-method');

const fevTrans = document.getElementById('transport-result');


//radio button
for(let i=0;i<radioButtons.length;i++){
    radioButtons[i].addEventListener('change',($event)=>{
        fevTrans.textContent=$event.target.value
    });
}

let dropDown = document.getElementById('music-preference');
let fevmus = document.getElementById('music-result');

fevmus.textContent=dropDown.value;

dropDown.addEventListener('change',($event)=>{
     fevmus.textContent=$event.target.value;
})

