import React from "react";
import { GitHub } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { IconButton } from "@material-ui/core";
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <div className="project-inner">
        <h1>{project.name}</h1>
        <a href={project.link} target="_blank">
          <div className="project-img">
            <img
              src={project.image}
              alt={project.name}
            />
          </div>
        </a>

        <div className="project-skills">

          <b>Skills Used : </b> {project.skills}

        </div>
        <IconButton>
          <GitHub onClick={() => window.open(project.github, "_blank")} />
        </IconButton>
      </div>
    </div>
  );
};

export default ProjectDisplay;
