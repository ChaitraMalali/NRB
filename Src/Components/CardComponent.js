import { useContext } from "react";
import ThemeContext from "./ThemeContext";


const CardComponent = (props) =>
{   const teamMember = props.teamMember;
    console.log (teamMember.id);
    //const {img,name,place,company,designation} = teamMember;
    //console.log(teamMember.login);
    const {login, id,avatar_url} = teamMember;
    const {theme , setTheme} = useContext(ThemeContext)
    return(
 
        <div className= {`${theme === "light"?'bg-pink-100' : 'bg-blue-200'}`}>
        <img className="h-40 m-5 border-spacing-1 rounded-lg pr-4" src={avatar_url}></img> 
        <h2 className="text-gray-500 pl-6">{login}</h2>
        <h3 className=" text-gray-500 pl-6">{id}</h3>          
        </div>
       
    )
}

export default CardComponent;