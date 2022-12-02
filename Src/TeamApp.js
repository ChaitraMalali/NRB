import React, { useState } from "react";
import  ReactDOM  from "react-dom/client";
import CardComponent from "./Components/CardComponent.js";
import TeamComponent from "./Components/TeamComponent.js";
import { title } from "./constants.js";
import SearchBarComponent from "./Components/SearchBarComponent.js";
import { useState } from "react";


const HeadingComponent = () =>
{
    return(
    <div id="title" className="title-class" tabIndex= "1">
    <h2>{title}</h2>
    </div>
    );
}


const CardContainer = ({filteredTeamMembers }) =>  
     filteredTeamMembers.map(teamMember => (
     <CardComponent teamMember = {teamMember} key ={teamMember.id} />
     ));

const BodyComponent = () => { 
    debugger;     
     const [filteredTeamMembers , setFilteredTeamMembers] = useState(TeamComponent);
    
    return(
        <div id="card-container" className="card-container">  
        <SearchBarComponent setFilteredTeamMembers = { setFilteredTeamMembers }/>    
        <CardContainer filteredTeamMembers = { filteredTeamMembers } />
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

root.render(AppLayout());
