// Get form elements
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitButton = document.getElementById('submit-button');

// const url = 'https://us-central1-open-classrooms-js-for-the-web.cloudfunctions.net/widgets';
const url ='https://jobs-backend.ju-admission.org/api/v1/auth/login-email-password'

// Get DOM elements for showing response
const responseMessage = document.getElementById('response-message');
const responseTitle = document.getElementById('response-title');
const responseId = document.getElementById('response-id');
const responseContent = document.getElementById('response-content');

submitButton.addEventListener('click', ($event) => {
    $event.preventDefault();
    // const post = {
    //     title: titleInput.value,
    //     content: contentInput.value
    // };
    const post = {
        "email": "nuralmumit@rootsoftit.com",
        "password": "11332244"
    }
    submitFormData(post)
});

function makeRequest(data) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        // request.open('POST', url + '/create-post');
        request.open('POST', url);
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status === 201) {
                    resolve(JSON.parse(request.response));
                } else {
                    reject(JSON.parse(request.response));
                }
            }
        };
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(data));
    });
};


async function submitFormData(post) {

    try{
        const requestPromise = makeRequest(post); 
        const response = await requestPromise;

        console.log(response);

        // responseMessage.textContent = response.message;
        // responseTitle.textContent = response.post.title;
        // responseId.textContent = response.post.id;
        // responseContent.textContent = response.post.content;

    }catch(errorResponse){

        responseMessage.textContent = errorResponse.error;
    };
    
};