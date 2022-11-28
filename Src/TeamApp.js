import React from "react";
import  ReactDOM  from "react-dom/client";
import CardComponent from "./Components/CardComponent.js";
import TeamComponent from "./Components/TeamComponent.js";

const title = "TEAM AVENGERS"

const HeadingComponent = () =>
{
    return(
    <div id="title" className="title-class" tabIndex= "1">
    <h2>{title}</h2>
    </div>
    );
}


const CardContainer = () => {
  
    const cards = TeamComponent.map((teamMember) => {
        return <CardComponent teamMember = {teamMember} key ={teamMember.id} />
    });
    
   return cards;

}

const BodyComponent = () => { 

    return(
        <div id="card-container" className="card-container">
        <CardContainer/>
    </div>
    );
}

const AppLayout = () =>
{
    return(  
    <>
    <HeadingComponent/>
    <BodyComponent/>
    </>
    );
 }
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(AppLayout());
// console.log(<AppLayout/>);
root.render(AppLayout());
// root.render(<AppLayout/>);
