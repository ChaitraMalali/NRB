import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import CardComponent from "./Components/CardComponent.js";
import TeamComponent from "./Components/TeamComponent.js";
import { title } from "./Utils/constants.js";
import SearchBarComponent from "./Components/SearchBarComponent.js";
import NoResultsComponent from "./Components/NoResultsComponent.js";
import getGitHubData from "./apiServices/gitHubUserService.js";
import ErrorComponent from "./Components/ErrorComponent.js";
import TeamMemberComponent from "./Components/TeamMemberComponent.js";
import AboutUsComponent from "./Components/AboutUsComponent.js";
import ProfileComponent from "./Components/ProfileComponent.js";

const HeadingComponent = () => {
  return (
    <div id="title" className="title-class" tabIndex="1">
      <h2>{title}</h2>
    </div>
  );
};

const CardContainer = ({ filteredTeamMembers }) => {
  if (!filteredTeamMembers.length) return <NoResultsComponent />;
  else {
    const cards =
      filteredTeamMembers &&
      filteredTeamMembers.map(
        (
          teamMember //Checks for empty array
        ) => (
          <Link to={`/teammember/${teamMember.login}`}>
            <CardComponent teamMember={teamMember} key={teamMember.login} />
          </Link>
        )
      );
    return cards;
  }
};

const BodyComponent = () => {
  const [listOfTeammembers, SetListOfTeamMembers] = useState([]);
  const [filteredTeamMembers, setFilteredTeamMembers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const userNames = [
      "ap221882",
      "ChaitraMalali",
      "roshantrivedi",
      "laxmi20936",
      "balajigaikwad",
      "vijeshnk",
    ];
    let data = await await getGitHubData(userNames);
    SetListOfTeamMembers(data);
    setFilteredTeamMembers(data);
  }

  return (
    <div id="card-container" className="card-container">
      <SearchBarComponent
        listOfTeammembers={listOfTeammembers}
        setFilteredTeamMembers={setFilteredTeamMembers}
      />
      <CardContainer
        filteredTeamMembers={
          filteredTeamMembers.length ? (
            filteredTeamMembers
          ) : (
            <NoResultsComponent />
          )
        }
      />
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <HeadingComponent />
      <Outlet />
    </>
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
        element: <BodyComponent />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "/aboutus",
        element: <AboutUsComponent />,
        errorElement: <ErrorComponent />,
        children: [
          {
             path: "profile",
             element: <ProfileComponent name = {"Chaitra J"}/>,
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
