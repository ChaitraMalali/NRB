import SearchBarComponent from "./SearchBarComponent";
import NoResultsComponent from "./NoResultsComponent";
import getGitHubData from "../apiServices/gitHubUserService";
import CardComponent from "./CardComponent";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";

const SearchPageComponent = () => {
    const [listOfTeammembers, SetListOfTeamMembers] = useState([]);
    const [filteredTeamMembers, setFilteredTeamMembers] = useState([]);
    const {theme, setTheme} = useContext(ThemeContext);
  
    useEffect(() => {
      getData();
    }, []);
  
    async function getData() {
      const userNames = [
        "ap221882",
        "ChaitraMalali",
        "roshantrivedi",
        "laxmi20936",
        "balajigaikwad",
        "vijeshnk",
      ];
      let data = await await getGitHubData(userNames);
      SetListOfTeamMembers(data);
      setFilteredTeamMembers(data);
    }
  
    return (
      <div id="card-container" className="card-container">
        <SearchBarComponent
          listOfTeammembers={listOfTeammembers}
          setFilteredTeamMembers={setFilteredTeamMembers}
        />
        <CardContainer
          filteredTeamMembers={
            filteredTeamMembers.length ? (
              filteredTeamMembers
            ) : (
              <NoResultsComponent />
            )
          }
        />
      </div>
    );
  };


const CardContainer = ({ filteredTeamMembers }) =>  
    !filteredTeamMembers.length? (<NoResultsComponent/>):(
      <div className="flex flex-wrap">{
        filteredTeamMembers &&
        filteredTeamMembers.map((teamMember)=>(       
            <Link to={`/teammember/${teamMember.login}`}>
              <CardComponent teamMember={teamMember} key={teamMember.login} />
            </Link>
          )
        )
      }
      </div>  
    );

  export default SearchPageComponent;