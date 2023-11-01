import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import swDev from "./swDev";

if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
      navigator.serviceWorker.register('./sw.js')
      .then((reg)=> console.log('Success: ', reg.scope))
      .catch((err)=>console.log('Failure: ', err));
    })
  }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
swDev();


// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>, 
//     document.getElementById('root')
// )







// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// import reportWebVitals from "./reportWebVitals";


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
