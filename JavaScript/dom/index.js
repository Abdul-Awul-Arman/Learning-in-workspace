    const header = document.getElementsByTagName('header')[0];


    const blueButton = document.getElementById('color-button-blue');

    const greenButton = document.getElementById('color-button-green');

    const brownButton = document.getElementById('color-button-brown');

const noneButton = document.getElementById('color-button-none');

    blueButton.addEventListener('click', () => {
         header.classList.remove('green-background','brown-background');
         header.classList.add('blue-background', 'text-white'); });

    greenButton.addEventListener('click',()=>{
        header.classList.remove('blue-background','brown-background');
        header.classList.add('green-background');
    })

    brownButton.addEventListener('click',()=>{
        header.classList.remove('blue-background','green-background');
        header.classList.add('brown-background');
    })

    noneButton.addEventListener('click',()=>{
        header.classList.remove('blue-background','brown-background','green-background');
        header.classList.add('text-black');
    })





