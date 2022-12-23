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
    <input className="border-gray-600" id="teamname" placeholder="TeamMemberSearch"
     onChange = {
        (e) => {
            SetSearchText(e.target.value);
        }
     }></input>
   
    <button className="bg-pink-300 rounded-xl m-5 overflow-hidden b">Search</button>
    </form>
   </div>  
   );
}

export default SearchBarComponent;