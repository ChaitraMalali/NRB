      
       import React from 'react';
       import ReactDOM from 'react-dom/client';
       
       /* Hello World Using JS!!*/
       //  const app =   document.getElementById("rootJS");
       //  const heading = document.createElement("h1");
       //  heading.innerHTML = "Hello JS World";
       //  app.appendChild(heading);
   

       //   /*Hello World Using React !!*/
       //  const reactapp = React.createElement("h1", {id : "title"}, "Hello World Using React !!");
       //  const root = ReactDOM.createRoot(document.getElementById("rootReact"));
       //  root.render(reactapp);

        //Nested header element creation
              
        const heading = React.createElement("div", null, [React.createElement("h1", {id: "title"}, "Namaste React")],
         [React.createElement("h2", {id: "titleh2"}, "in 3 months")],
         [React.createElement("h3", {id: "titleh3"}, "zero to hero!")]);        

        const rootone = ReactDOM.createRoot(document.getElementById("rootReact"));
        rootone.render(heading);

        //Creating using JSX functional components !!
        const TitleComponent = () => <h2> Learn React</h2>

        const JSXComponent = () =>
        {
              return (
                     <div>
                            <h1>
                                   Namaste React BootCamp
                            </h1>
                            <TitleComponent/>
                            <h3>In 3 months !!! </h3>
                     </div>
              )
        }

        const rootJsx = ReactDOM.createRoot(document.getElementById("rootJsx"));
        rootJsx.render(<JSXComponent/>);
