import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import Book from "@material-ui/icons/Book";
import Code from "@material-ui/icons/Code";

import { IconButton } from "@material-ui/core";

const Links = () => {
  const gitHubLink = "https://github.com/Dave8289";
  const linkedInLink = "https://www.linkedin.com/in/davinder495/";
  const scalerPortal = "https://www.scaler.com/academy/profile/cf4169f8aaa5/";
  const leetCodePortal = "https://leetcode.com/Davinder8289/";
  return (
    <div>
      <IconButton>
        <LinkedInIcon onClick={() => window.open(linkedInLink, "_blank")} />
      </IconButton>

      <IconButton>
        <GitHub onClick={() => window.open(gitHubLink, "_blank")} />
      </IconButton>
      <IconButton>
        <Book onClick={() => window.open(scalerPortal, "_blank")} />
      </IconButton>
      <IconButton>
        <Code onClick={() => window.open(leetCodePortal, "_blank")} />
      </IconButton>
    </div>
  );
};

export default Links;
