import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

export default function SimpleBreadcrumbs() {
  return (
    <Breadcrumbs>
      <Link color="inherit" href="/about">
        about
      </Link>
      <Link color="inherit" href="/projects">
        projects
      </Link>
      <Link color="inherit" href="/experience">
        experience
      </Link>
    </Breadcrumbs>
  );
}
