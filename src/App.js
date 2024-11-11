import React from 'react';
import './App.module.scss';
import Layout from "./components/layout.";
import {BrowserRouter} from "react-router-dom";

function App() {
   return (
      <div>
         <BrowserRouter>
            <Layout/>
         </BrowserRouter>
      </div>
   );
}


export default App;
