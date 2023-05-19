//import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const ProtectedLogin = (props) => {  
 
   // const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
    
    //console.log(isLoggedIn);
    if (!isLoggedIn) {
     return (
            <><Navigate to="/login" replace />
            { props.children }
            </>
     )
    }    

   // return <><h1>kool</h1></>
    
}
export default ProtectedLogin;
