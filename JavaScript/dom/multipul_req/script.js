// Get DOM elements
const generateButton = document.getElementById('generate-button');
const postTitle = document.getElementById('post-title');
const postId = document.getElementById('post-id');
const postContent = document.getElementById('post-content');

// API URL
// const api = 'https://us-central1-open-classrooms-js-for-the-web.cloudfunctions.net/widgets';
const api = 'https://jsonplaceholder.typicode.com/todos/1';

const makeRequest = (verb, url, data) => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open(verb, url);

        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status === 201 || request.status === 200) {
                    try {
                        resolve(JSON.parse(request.response));
                    } catch (e) {
                        reject('Invalid JSON response');
                    }
                } else {
                    try {
                        reject(JSON.parse(request.response));
                    } catch (e) {
                        reject(request.response || 'Unknown error occurred');
                    }
                }
            }
        };

        if (verb === 'POST') {
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(data));
        } else {
            request.send();
        }
    });
};

async function createPost() {
    try {
        // const uidPromise = makeRequest('GET', api + '/generate-uid');
        const uidPromise = makeRequest('GET', api + '/posts');
        // const titlePromise = makeRequest('GET', api + '/generate-title');
        const titlePromise = makeRequest('GET', api + '/comments');
        // const loremPromise = makeRequest('GET', api + '/generate-lorem');
        const loremPromise = makeRequest('GET', api + '/photos');

        const [uidResponse, titleResponse, loremResponse] = await Promise.all([uidPromise, titlePromise, loremPromise]);

        const postPromise = makeRequest('POST', api + '/create-post-with-uid', {
            uid: uidResponse.uid,
            title: titleResponse.title,
            content: loremResponse.lorem,
        });

        const postResponse = await postPromise;

        postTitle.textContent = postResponse.post.title;
        postId.textContent = postResponse.post.id;
        postContent.textContent = postResponse.post.content;
    } catch (error) {
        console.error('Error creating post:', error);
    }
}

generateButton.addEventListener('click', () => {
    createPost();
});
