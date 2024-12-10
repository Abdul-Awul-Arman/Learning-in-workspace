// ReactDOM.render(<h1>Bismillah</h1>,document.getElementById('root'));
// const root = document.getElementById("root");
// ReactDOM.render(
//     <ul>
//         <li>First thing</li>
//         <li>Second thing</li>
//     </ul>, root);

// function MainContent(){
//     return(
//        <h1>I'm learning React</h1> 
//     );
// };

// ReactDOM.render(<div><MainContent/></div>,root);

let root = document.querySelector('div#root');
let h1 = document.createElement('h1');
h1.textContent = 'This is header';

h1.classList.add('header');

root.appendChild(h1);