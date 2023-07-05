import React from "react";

import "../styles/Home.css";
import Links from "../components/Links";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Davinder</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating</p>
          <Links />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn,
              TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, Java, ExpressJS, MySQL, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
