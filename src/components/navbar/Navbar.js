import React, { useState } from "react";
import { Link} from "react-router-dom";
import * as Fa from "react-icons/fa";
import * as Ai from "react-icons/ai";
import * as Gr from "react-icons/gr";

import { sidebarData } from "./sidebarData";
import { app_data } from "../app_data/App_data"
import "./Navbar.css";
import { IconContext } from "react-icons";

function get_icon2(s) {
  if (!s) {
    return <Fa.FaBars color={"#f82c15"} />;
  } else {
    return <Ai.AiOutlineClose color={"rgb(177, 37, 13)"} />;
  }
}

function Navbar() {
  const [sidebar, setsidebar] = useState(false);
  const [active, setactive] = useState(-1)

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div>
          <div className="Navbar-cust nav-box-element" >
              <div className="navbar-brand text-center">
                <div className="clay-logo">
                </div>
                <div>{app_data.name}</div>
              </div>
              <div className="toggle">
                <Link
                  to="#"
                  id="toggle-btn"
                  onClick={()=>setsidebar(!sidebar)}
                  className={sidebar?"menu-bars toggles-nav-sm active":"menu-bars toggles-nav-sm"}
                >
                  {get_icon2(sidebar)}
                </Link>
             </div>

              <div className="nav-menu-lg">
              
              {sidebarData.map((item,index)=>{
                return(
                  
                  <>
                  
                  <Link to={item.path}>
                    <div className={index==active?" active":"menu-bars"} onClick={()=>setactive(index)}>
                      {item.title}
                    </div>
                  </Link>
                  </>
                )
              })}
              </div>
              
          
          </div>
          <nav
            className={sidebar ? "nav-menu active" : "nav-menu nav-menu-inactive"}
          >
            <ul className="nav-menu-items">
              {sidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path} className={sidebar?"linkk":"svg"}>
                      <span id="title">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
      </div>
    </IconContext.Provider>
  );
}

export default Navbar;
