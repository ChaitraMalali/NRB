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


const AboutUsComponent = lazy(() => import("./Components/AboutUsComponent.js"));
const ProfileComponent = lazy(() => import("./Components/ProfileComponent.js"));

const HeadingComponent = () => {
    const{theme,setTheme} = useContext(ThemeContext);
  return (
    <div id="title" className="title-class" tabIndex="1" style={{
        backgroundColor : theme === "light"? "#fff" : "#000"
    }}>
      <h2>{title}</h2>
      <Link to = "/search"><span>Search Here</span></Link>
      <span></span>
      <Link to = "/aboutus"><span>AboutUs</span></Link>
      <button onClick={()=> setTheme(theme === "dark"? "light" : "dark")}>ThemeMode : {theme}</button>
    </div>
  );
};

const AppLayout = () => { 
const[theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={ {theme: theme, setTheme : setTheme}}>
      <HeadingComponent />
      <Outlet />
    </ThemeContext.Provider>
   
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

//root.render(AppLayout());
