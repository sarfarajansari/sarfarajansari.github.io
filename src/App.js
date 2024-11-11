import React from 'react';
import './App.module.scss';
import Layout from "./components/layout.";
import {HashRouter} from "react-router-dom";

function App() {
   return (
      <div>
         <HashRouter>
            <Layout/>
         </HashRouter>
      </div>
   );
}


export default App;
