import React from "react";
import { Outlet } from "react-router-dom";

class AboutUsComponent extends React.Component {

    constructor(props){
        super(props);
        console.log("Parent -AboutUs- constructor")
    }
    componentDidMount(){
        console.log("Parent - AboutUs - DidMount !!")
    }

    render(){
        console.log("parent -AboutUs- render !!")
        return (
                    <>
                    <h3>This is a kool Git users website information page !!!</h3>
                    <Outlet/>
                    </>
                )

        }

}
export default AboutUsComponent;
