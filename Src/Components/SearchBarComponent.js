import { useState } from "react";
import TeamComponent from "./TeamComponent.js";

const SearchTeamMember =(searchText, listOfTeammembers) =>
{
    return listOfTeammembers.filter((team) => team.login.includes(searchText));
}


const SearchBarComponent = ({ listOfTeammembers,setFilteredTeamMembers }) =>
{
    const [searchText,SetSearchText] = useState(""); 
    return(
    <div className="search-bar">
    <form onSubmit={(e) =>{
      e.preventDefault(); //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
      const filteredTeamMembers =  SearchTeamMember(searchText,listOfTeammembers); 
      setFilteredTeamMembers(filteredTeamMembers); 
    }
    }>
    <input id="teamname" placeholder="Team Member"
     onChange = {
        (e) => {
            SetSearchText(e.target.value);
        }
     }></input>
   
    <button>Search</button>
    </form>
   </div>  
   );
}

export default SearchBarComponent;