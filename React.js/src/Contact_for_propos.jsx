import React from "react"
import ReactDom from "react-dom/client"
import Contact from "./Contact_page";
import felix from "./assets/images/felix.png"
import fluffykins from "./assets/images/fluffykins.png"
// import mail from "./assets/images/mail-icon.png"
// import phone_icon from "./assets/images/phone-icon.png"
import mrw from "./assets/images/mr-whiskerson.png"
// import pumpkin from "./assets/images/pumpkin.png"


function App() { 
    return (
        <>
            <Contact
                img={mrw}
                name="Mr. Whiskerson"
                phone="(444)4444444"
                email="mr.whiskaz@catnap.com"
            />
            <Contact 
        img={fluffykins}
            name="fluffykins"
            phone="(444)4444444"
            email="fluffykins@catnap.com"
        />
            <Contact
                img={felix}
                name="felix"
                phone="(444)4444444"
                email="felix@catnap.com"
            />
        </>
    )
};

ReactDom.createRoot(document.getElementById("root")).render(<App />)
