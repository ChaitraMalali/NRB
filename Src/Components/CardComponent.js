
const CardComponent = (props) =>
{   const teamMember = props.teamMember;
    console.log (teamMember.id);
    //const {img,name,place,company,designation} = teamMember;
    //console.log(teamMember.login);
    const {login, id,avatar_url} = teamMember;
    return(
        <div id ="card" className="card">
          <img src={avatar_url}></img> 
        <h2>{login}</h2>
        <h3>{id}</h3>          
        {/* <h4>{company}</h4>
        <h5>{designation}</h5> */}
        </div>
       
    )
}

export default CardComponent;