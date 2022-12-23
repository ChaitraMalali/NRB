import React from "react";
import { Link, Outlet } from "react-router-dom";

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
            <div>
                    <div className="flex">
                    <img src="https://cdn.pixabay.com/photo/2015/10/31/11/59/information-1015297_1280.jpg" className="w-40"></img>
                    <h3 className="text-gray-600 text-center text-lg">This is a kool Git users website information page !!!</h3>
                    </div>
                    <div>
                    <Link className="font-bold text-gray-700 m-5 p-5" to = "/aboutus/profile"> Profile </Link>
                    <Outlet/>
                    </div>
             </div>
                )

        }

}
export default AboutUsComponent;
