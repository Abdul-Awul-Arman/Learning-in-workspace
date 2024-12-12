import React from "react";
import Header from "../components/header";
import Entry from "../components/Entry";

export default function App(){
  return(
    <>
    <Header/>
    <div className="w-[100%] flex  justify-center ">
    <Entry/>
    </div>
    </>
  )
}