import React from 'react';
// import FunFact from './Project_Part_1';
import Main from './MainCom'
import Header from "./Header";
import Footer from "./Footer"


// const reactElement = React.createElement("h1", null, "bismillah");

const App = () => {
  return (
    <div className='card'>
    <Header/>
    <Main/>
    <Footer/>
    </div>
  );
}


export default App;
