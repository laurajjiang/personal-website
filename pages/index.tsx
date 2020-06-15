import { useEffect } from "react";
import Landing from "../components/landing";
import About from "../components/about";
import Experience from "../components/experience";
import Projects from "../components/projects";
import * as Scroll from "react-scroll";
import { IconButton } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import config from "react-reveal/globals";
import Fade from "react-reveal/Fade";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const items = {
  home: Landing,
  about: About,
  projects: Projects,
  experience: Experience,
};

config({ ssrFadeout: true });

export default function Home() {
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
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollDownSize = (size: number) => {
    scroller;
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="container">
      {Object.keys(items).map((idx, item) => {
        const Page = items[idx];
        console.log(idx);
        return (
          <div>
            <Fade top>
              <Page name={idx} />
              {idx === "home" ? (
                <span />
              ) : (
                <IconButton onClick={scrollToTop} aria-label="back to top">
                  <ArrowUpwardIcon />
                </IconButton>
              )}
            </Fade>
          </div>
        );
      })}

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .MuiButtonBase-root {
          color: #000;
        }

        .MuiButtonBase-root:hover,
        .MuiButtonBase-root:focus,
        .MuiButtonBase-root:active {
          color: #c397bb;
          border-color: #c397bb;
        }
      `}</style>
    </div>
  );
}
