import React from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info, mainSkills, learning, tools } from "../../info/Info";

export default function About({ innerRef }) {
  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            sarfarajansari$
          </span>{" "}
          cat aboutsarfaraj{" "}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            aboutsarfaraj<span className={Style.green}>(main)</span> ${" "}
          </span>
          <ul className="about-list">
            <li>
              🔭 Full-stack developer with 3+ years in scalable app development
            </li>
            <li>
              🌱 Skilled in React, Ionic, Node.js, Python, Flask, FastAPI,
              Django
            </li>
            <li>
              👍 Experienced in DevOps, CI/CD, and cloud (Azure, GCP, AWS)
            </li>
            <li>
              🏢 Currently at{" "}
              <a href="https://settyl.com" target="_blank">
                Settyl
              </a>{" "}
              | Company GitHub:{" "}
              <a href="https://github.com/sarfaraj-settyl" target="_blank">
                Sarfaraj-Settyl
              </a>
            </li>
            <li>
              😍 Built AI apps, workflow automation, and various side projects
            </li>
            <li>😉 Some ML/DL experience (TensorFlow); now learning PyTorch</li>
          </ul>
        </p>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd mainskills
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            mainskills <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <p style={{ color: info.baseColor }}> Proficient With</p>
        {mainSkills.map((item) => {
          return (
            <a href={item.docsUrl} target="_blank">
              <img
                src={item.img}
                alt={item.name}
                height="100"
                title={`${item.name} documentation`}
              />
            </a>
          );
        })}

        <p style={{ color: info.baseColor }}>Learning</p>
        <ul className={Style.skills}>
          {learning.map((item) => {
            return (
              <a href={item.docsUrl} target="_blank">
                <img
                  src={item.img}
                  alt={item.name}
                  height="100"
                  title={`${item.name} documentation`}
                />
              </a>
            );
          })}
        </ul>
      </>
    );
  }
  function alltools() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd sarfaraj/tools
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            sarfaraj/tools <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {tools.map((item) => {
            return (
              <div style={{ width: 96 }}>
                <img src={item.url} alt="icon" width="65" height="65" />
                <br />
                {item.name}
              </div>
            );
          })}
        </div>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd hobbies/interests
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            hobbies/interests <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box
      ref={innerRef}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
      id={"about"}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={alltools()} />
      <Terminal text={miscText()} />
    </Box>
  );
}
