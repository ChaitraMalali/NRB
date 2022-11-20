      
       import React from 'react';
       import ReactDOM from 'react-dom/client';
       
       /* Hello World Using JS!!*/
        const app =   document.getElementById("rootJS");
        const heading = document.createElement("h1");
        heading.innerHTML = "Hello JS World";
        app.appendChild(heading);
   

         /*Hello World Using React !!*/
        const reactapp = React.createElement("h1", {id : "title"}, "Hello World Using React !!");
        const root = ReactDOM.createRoot(document.getElementById("rootReact"));
        root.render(reactapp);
