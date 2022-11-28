
const CardComponent = (props) =>
{   const teamMember = props.teamMember;
    const {img,name,place,company,designation} = teamMember;
    return(
        <div id ="card" className="card">
         <img src={img}></img>
        <h2>{name}</h2>
        <h3>{place}</h3>          
        <h4>{company}</h4>
        <h5>{designation}</h5>
        </div>
       
    )
}

export default CardComponent;