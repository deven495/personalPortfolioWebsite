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
      <h1>{project.name}</h1>
      <IconButton>
        <img
          src={project.image}
          alt={project.name}
          onClick={() => window.open(project.link, "_blank")}
        />
      </IconButton>

      <p>
        <b>Skills Used : </b> {project.skills}
      </p>
      <IconButton>
        <GitHub onClick={() => window.open(project.github, "_blank")} />
      </IconButton>
    </div>
  );
};

export default ProjectDisplay;
