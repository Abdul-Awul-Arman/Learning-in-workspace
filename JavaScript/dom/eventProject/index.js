const header = document.getElementsByTagName('header')[0];


const blueButton = document.getElementById('color-button-blue');

const greenButton = document.getElementById('color-button-green');

const brownButton = document.getElementById('color-button-brown');

const noneButton = document.getElementById('color-button-none');

blueButton.addEventListener('click', () => {
    header.classList.remove('green-background', 'brown-background');
    header.classList.add('blue-background', 'text-white');
});

greenButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'brown-background',);
    header.classList.add('green-background', 'text-white');
})

brownButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'green-background');
    header.classList.add('brown-background', 'text-white');
})

noneButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'brown-background', 'green-background', 'text-white');
    header.classList.add('black');
})

let createNewPost = () => {
    const article = document.createElement('article')
    const newHeading = document.createElement('h5');
    const newParagraph = document.createElement('p');

    newHeading.textContent = 'Another blog post';
    newParagraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium justo non nisi vehicula, ac consectetur libero faucibus. Quisque vel placerat ante, vel mollis dolor. Maecenas purus nibh, blandit ac imperdiet sed, faucibus eu orci. Maecenas placerat, felis sed vehicula mattis, quam nulla semper felis, a tincidunt neque eros id nunc. Aliquam vitae neque odio. In aliquet sagittis venenatis. Praesent vestibulum massa nec massa dignissim convallis. Curabitur in quam id neque sagittis consectetur sed ac velit. Vivamus tincidunt pulvinar volutpat. Vivamus in tortor vulputate, consectetur leo quis, semper neque. Vivamus id tempor quam. Suspendisse potenti. Nulla mauris lacus, pellentesque a purus ac, iaculis sodales dolor. Curabitur mi ex, convallis ac ornare in, aliquet sit amet metus. Sed tempus nunc nulla, vel venenatis sem dictum a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'

    article.appendChild(newHeading);
    article.appendChild(newParagraph)

    article.classList.add('list-group-item');

    return article;


};



//add post button
const addPost = document.querySelector('#add-post');

const articleSection = document.querySelector('section');

addPost.addEventListener('click', () => {
    const newPost = createNewPost();

    articleSection.appendChild(newPost);
});


//removeButton
const removeButton = document.querySelector('#remove-post');


removeButton.addEventListener('click', () => {
    articleCount=articleSection.childElementCount;

    if(articleCount>1){
        articleSection.removeChild(articleSection.lastChild);
    }
})













