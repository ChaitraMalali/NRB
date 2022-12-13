import React, { useState } from "react";

class ProfileComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           userInfo : {}
        }

        console.log("ProfileComponent - Child -Constructor !!")
    }
    async componentDidMount(){
            console.log("Child DidMount!!")
            const data = await fetch ("https://api.github.com/users/ChaitraMalali");
            const json  = await data.json();
            console.log(json);
            this.setState({
                userInfo : json,
            })          
        }

    render()
    {
        console.log("ProfileComponent - Child - render !!");
        return (
                    <>
                    <h4>This is all about my profile</h4>
                    <h5> Name : {this.props.name}</h5>
                    <h5> Id : {this.state.userInfo.id}</h5>
                    </>
                )
    }
  
}
export default ProfileComponent;