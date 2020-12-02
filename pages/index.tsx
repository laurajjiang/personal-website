import { useState, useEffect, SyntheticEvent } from "react";
import Landing from "../components/landing";
import About from "../components/about";
import Nav from "../components/nav";
import Experience from "../components/experience";
import Projects from "../components/projects";
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
  const [currentScrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
      if (currentScrollHeight != newScrollHeight) {
        setScrollHeight(newScrollHeight);
      }
    };

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

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className='container'>
      {Object.keys(items).map((idx, item) => {
        const Page = items[idx];
        console.log(idx);
        return (
          <div>
            <Fade top>
              <Page />
            </Fade>
            {idx === "home" ? (
              <span />
            ) : (
              <IconButton
                className='arrow'
                onClick={scrollToTop}
                aria-label='back to top'>
                <ArrowUpwardIcon />
              </IconButton>
            )}
          </div>
        );
      })}

      <style jsx>{`
        .fadeOut {
          opacity: 0;
          width: 0;
          height: 0;
          transition: width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s;
        }
        .fadeIn {
          opacity: 1;
          width: 100px;
          height: 100px;
          transition: width 0.5s, height 0.5s, opacity 0.5s 0.5s;
        }
      `}</style>

      <style jsx global>{`
        .arrow {
          display: flex;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
          left: 0;
          bottom: 0;
          justify-content: center;
          align-items: center;
        }

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
