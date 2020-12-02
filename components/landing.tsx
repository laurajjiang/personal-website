import { useEffect } from "react";
import Head from "next/head";
import Typist from "react-typist";
import ArrowDownwardSharpIcon from "@material-ui/icons/ArrowDownwardSharp";
import { Link, Events, animateScroll as scroll, scroller } from "react-scroll";

export default function Landing() {
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
    <div className='container'>
      <Head>
        <title>Laura Jiang</title>
      </Head>

      <main>
        <h1 className='title'>laura jiang</h1>
        <Typist startDelay={300} cursor={{ hideWhenDone: true }}>
          senior @ oregon state university, incoming PM @ microsoft
        </Typist>
        <p className='description'>
          <a className='hvr-bob' onClick={() => scrollToElement("about")}>
            about
          </a>{" "}
          /{" "}
          <a className='hvr-bob' onClick={() => scrollToElement("projects")}>
            {" "}
            projects{" "}
          </a>{" "}
          /{" "}
          <a className='hvr-bob' onClick={() => scrollToElement("experience")}>
            experience
          </a>
        </p>
        <p className='description'>
          <a href='https://www.linkedin.com/in/laura-jiang/'>
            <img src='/linkedin.jpeg' />
          </a>
          <a href='https://github.com/laurajjiang'>
            <img src='/github.jpeg' />
          </a>
        </p>
        <footer className='scroll-arrow'>
          <a className='hvr-bob'>
            <ArrowDownwardSharpIcon
              onClick={() => scroll.scrollTo(window.screen.availHeight)}
            />
          </a>
        </footer>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .scroll-arrow {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
          position: absolute;
          left: 0;
          bottom: 0;
          height: 70px;
          width: 100%;
        }

        .description img {
          margin-top: -5rem;
          width: 5%;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.55;
          color: #271623;
          font-size: 4rem;
        }

        .title,
        .description {
          color: #271623;
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        a:hover,
        a:focus,
        a:active {
          color: #c397bb;
          border-color: #c397bb;
        }

        @-webkit-keyframes hvr-bob {
          0% {
            -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
          }
          50% {
            -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
          }
          100% {
            -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
          }
        }
        @keyframes hvr-bob {
          0% {
            -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
          }
          50% {
            -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
          }
          100% {
            -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
          }
        }
        @-webkit-keyframes hvr-bob-float {
          100% {
            -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
          }
        }
        @keyframes hvr-bob-float {
          100% {
            -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
          }
        }
        .hvr-bob {
          display: inline-block;
          vertical-align: middle;
          -webkit-transform: perspective(1px) translateZ(0);
          transform: perspective(1px) translateZ(0);
          box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        }
        .hvr-bob:hover,
        .hvr-bob:focus,
        .hvr-bob:active {
          -webkit-animation-name: hvr-bob-float, hvr-bob;
          animation-name: hvr-bob-float, hvr-bob;
          -webkit-animation-duration: 0.3s, 1.5s;
          animation-duration: 0.3s, 1.5s;
          -webkit-animation-delay: 0s, 0.3s;
          animation-delay: 0s, 0.3s;
          -webkit-animation-timing-function: ease-out, ease-in-out;
          animation-timing-function: ease-out, ease-in-out;
          -webkit-animation-iteration-count: 1, infinite;
          animation-iteration-count: 1, infinite;
          -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
          -webkit-animation-direction: normal, alternate;
          animation-direction: normal, alternate;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

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
      `}</style>
    </div>
  );
}
