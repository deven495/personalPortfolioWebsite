import React from "react";

import "../styles/Home.css";
import daveImg from "../assets/dave.png";
import Links from "../components/Links";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <div className="dave-img">
          <img src={daveImg} alt="" />
        </div>
        <h2>Hi, My Name is Davinder</h2>
        <div className="prompt">
          <p>
            A software developer with a passion for learning and Solving Real
            World Problems through Code
          </p>
          <p>Solved 1400+ Leetcode problems</p>
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
              TailwindCSS, StyledComponents.
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java, ExpressJS, MySQL, MongoDB, Design Patterns, Schema
              Designing, System Designs.
            </span>
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
