import React from "react";
import Entry from "../components/Entry";
import Header from "../components/header";
import data from "./data";

export default function App() {
  return (
    <>
      <Header />
      <main className="w-[100%] flex flex-col items-center ">
       
        {
          data.map((entry)=>{
            return(
              <Entry
                key={entry.id}
                // img={entry.img}
                // title={entry.country}
                // country={entry.country}
                // googleMapsLink={entry.googleMapsLink}
                // dates={entry.dates}
                // text={entry.text}

                {...entry} 
              
              
              
              
              />
            )
          })
        }
      </main>
    </>
  )
}