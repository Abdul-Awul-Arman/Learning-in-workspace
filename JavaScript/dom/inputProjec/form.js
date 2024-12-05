// DOM ELEMENT REFERENCES
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const submitButton = document.getElementById('submit-button');
const sidebar = document.getElementById('sidebar');

const commentForm=document.getElementById('comment-form');


console.log(commentForm)

submitButton.addEventListener('click', ($event) => {
    sidebar.textContent = 'Hi there, ' + firstNameInput.value + ' ' + lastNameInput.value;
    $event.preventDefault();

    commentForm.reset();
});