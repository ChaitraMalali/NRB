
import  ReactDOM  from "react-dom/client";
import CardComponent from "./Components/CardComponent.js";
import TeamComponent from "./Components/TeamComponent.js";
import { title } from "./constants.js";
import SearchBarComponent from "./Components/SearchBarComponent.js";
import { useState, useEffect } from "react";
import NoResultsComponent from "./Components/NoResultsComponent.js";
import  getGitHubData  from "./apiServices/gitHubUserService.js";


const HeadingComponent = () =>
{
    return(
    <div id="title" className="title-class" tabIndex= "1">
    <h2>{title}</h2>
    </div>
    );
}

const CardContainer = ({filteredTeamMembers }) => 
{
    if(!filteredTeamMembers.length) return <NoResultsComponent/>

    else{
        const cards = filteredTeamMembers && filteredTeamMembers.map(teamMember => (  //Checks for empty array
            <CardComponent teamMember = {teamMember} key ={teamMember.id} />
        ));
            return cards;
    }  
    
}

const BodyComponent = () => {  
    const [listOfTeammembers, SetListOfTeamMembers] = useState([]);
    const [filteredTeamMembers, setFilteredTeamMembers] =  useState([]);   

     useEffect(() =>{
      getData ();
     },[])   

     async function getData() {

        const userNames = ["ap221882", "ChaitraMalali", "roshantrivedi","laxmi20936","balajigaikwad","vijeshnk"];
        let data = await (await getGitHubData(userNames));
        SetListOfTeamMembers(data);
        setFilteredTeamMembers(data);

     }

    return(
        <div id="card-container" className="card-container">  
        <SearchBarComponent listOfTeammembers = { listOfTeammembers } 
        setFilteredTeamMembers = { setFilteredTeamMembers }/>    
        <CardContainer filteredTeamMembers = { filteredTeamMembers.length ? filteredTeamMembers : <NoResultsComponent/> } />
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
