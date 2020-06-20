import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { useEffect } from "react";
import {
  Link as ScrollLink,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";

export default function Nav() {
  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const scrollToElement = (element_name: string) => {
    scroller.scrollTo(element_name, {
      duration: 1200,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <Breadcrumbs>
      <Link onClick={() => scrollToElement("about")}>about</Link>
      <Link onClick={() => scrollToElement("projects")}>projects</Link>
      <Link onClick={() => scrollToElement("experience")}>experience</Link>
    </Breadcrumbs>
  );
}
