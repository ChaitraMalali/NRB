import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { title } from "./Utils/constants.js";
import ErrorComponent from "./Components/ErrorComponent.js";
import TeamMemberComponent from "./Components/TeamMemberComponent.js";
import SearchPageComponent from "./Components/SearchPageComponent.js";
import { lazy, Suspense, useContext, useState } from "react";
import ThemeContext from "./Components/ThemeContext.js";
import LoginComponent from "./Components/LoginComponent.js";
import { useSelector, Provider } from "react-redux";
import {store} from "./ReduxStore/store.js";


const AboutUsComponent = lazy(() => import("./Components/AboutUsComponent.js"));
const ProfileComponent = lazy(() => import("./Components/ProfileComponent.js"));

const HeadingComponent = () => {
    const{theme,setTheme} = useContext(ThemeContext);
   const loginValue = useSelector((state) => state.login.value);
   let isLoggedintoapp = useSelector((state) => state.login.isLoggedIn);
   {isLoggedintoapp === 'true' ? 'visible' : 'invisible'}

  if(isLoggedintoapp)
     isLoggedintoapp = 'visible'
  else 
    isLoggedintoapp = 'invisible'

  return (
      <div id = "title" className= {`flex justify-between font-bold p-10 bg-pink-100 ${theme === "light"?'bg-pink-100' : 'bg-blue-200'}`} >
      <h2 className = "flex text-3xl text-gray-500">{title}</h2>
      <img className="w-60" src="https://res.infoq.com/articles/who-is-on-the-team/en/headerimage/who-is-on-the-team-header-1612952290708.jpg"></img>
      <div>
        <div className="flex justify-between space-x-2 text-gray-400">
        <span className= {`${isLoggedintoapp}`}>Welcome { loginValue.email }</span>
        <Link to = "/search" className={`${isLoggedintoapp}`}><span>SearchHere</span></Link>
        <span></span>
      <Link to = "/aboutus"  className={`${isLoggedintoapp}`}><span>AboutUs</span></Link>
      <button onClick={()=> setTheme(theme === "dark"? "light" : "dark")}>ThemeMode : {theme}</button>
        </div>
      </div>
    </div>
  );
};

const BodyComponent = () =>
{
  return (
    <div>
      <span>Welcome { loginValue.email }</span>
      <Link to = "/search"><span>SearchHere</span></Link>
      <span></span>
    </div>
  )
}
const AppLayout = () => { 
const[theme, setTheme] = useState("light");
  return (
    <Provider store = { store }>        
    <ThemeContext.Provider value={ {theme: theme, setTheme : setTheme}}>
      <HeadingComponent/>
      <Outlet/>        
    </ThemeContext.Provider>    
    </Provider> 
  );
   
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:
    (
     // <ProtectedLogin>
      <AppLayout/>
      //</ProtectedLogin>
    ),
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/teamMember/:id",
        element: <TeamMemberComponent />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "/search",
        element: <SearchPageComponent />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "/aboutus",
        element: <Suspense><AboutUsComponent/></Suspense>,
        errorElement: <ErrorComponent />,
        children: [
          {
             path: "profile",
             element: <Suspense><ProfileComponent name = {"Chaitra J"}/></Suspense>,
             errorElement: <ErrorComponent />,
          },
        ],
      },
      {
        path: "/login",
        element : <LoginComponent/>
      }     
    ],
  
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

//root.render(AppLayout());
