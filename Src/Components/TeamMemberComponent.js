
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "./CardComponent";

const TeamMemberComponent = () => {
    const [memberInfo,setMemberInfo] = useState([]);
    const { id } = useParams();
    

    useEffect(()=> {
        fetchTeamMemberInfo();
    },[]);

    async function fetchTeamMemberInfo () {
        const data = await fetch ("https://api.github.com/users/"+id );
        const json = await data.json();
        console.log(json);
        console.log(id);
        setMemberInfo(json);
    }

    return (
        <>
            <h2 className="text-gray-500"> TeamMember Data! </h2>
            <CardComponent teamMember = { memberInfo }/>
        </>);
}
export default TeamMemberComponent;