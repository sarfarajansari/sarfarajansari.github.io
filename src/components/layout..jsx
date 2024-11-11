import React, { useEffect, useState } from "react";
import Style from "./BaseLayout.module.scss";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { Box, Grid } from "@mui/material";

import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import { Route, Routes } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  const [active, setActive] = useState(
    location.pathname === "/"
      ? "home"
      : location.pathname.slice(1, location.pathname.length)
  );

  let [darkMode, setDarkMode] = useState(true);

  function handleToggleDarkMode() {
    let oppositeOfCurrentDarkMode = !darkMode;
    console.log(oppositeOfCurrentDarkMode);
    localStorage.setItem("darkMode", `${oppositeOfCurrentDarkMode}`);
    setDarkMode(oppositeOfCurrentDarkMode);
  }

  useEffect(() => {
    let detectedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (detectedDarkMode!==null) {
      setDarkMode(detectedDarkMode);
    } else {
      localStorage.setItem("darkMode", "true");
    }
  }, []);

  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}
      >
        <Grid item>
          <Navbar
            darkMode={darkMode}
            handleClick={handleToggleDarkMode}
            active={active}
            setActive={setActive}
          />
        </Grid>
        <Grid item flexGrow={1}>
          <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route exact path={"/about"} element={<About />} />
            <Route exact path={"/portfolio"} element={<Portfolio />} />
          </Routes>
        </Grid>
      </Grid>
    </Box>
  );
}
