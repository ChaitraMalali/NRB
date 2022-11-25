import React from "react";
import ReactDOM from 'react-dom/client';
import logo from './images/SearchImage.png';
import userIcon from './images/usericon.png';


const SearchBar = () =>
{
    return(
    <div className="searchBar">
        
        <input type= "text" placeholder="SearchBar"></input>
    </div>
    )
};

const SearchLogo = () => {
    return(
    <div>
      <img src = {logo} alt="" />
    </div>
    )
};

  const UserIcon =()=> {
    return(
        <div>
            <img src ={userIcon} alt=""></img>
        </div>
    )

  };
  

  const Header = () => {
    return(
    <div className="header">
    <UserIcon/> 
    <SearchLogo/>    
    <SearchBar />     
    </div>
    )
  };

const root = ReactDOM.createRoot(document.getElementById("search"));
root.render(<Header/>);




