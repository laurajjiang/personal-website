import Head from "next/head";
import Chip from "@material-ui/core/Chip";
import { useEffect } from "react";

export default function Projects() {
  let chips = [];

  const extensionLabels = ["project management", "typescript", "open source"];

  const buildLabels = (labels: Array<string>) => {
    labels.forEach((item, i) => chips.push(<Chip label={item} />));
  };

  useEffect(() => {
    buildLabels;
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Laura Jiang</title>
      </Head>
      <a id="projects" />
      <main>
        <h2 className="small-title">projects</h2>
        <div className="grid">
          <div className="card">
            <h3>extension generator (ongoing)</h3>
            <p>
              a command-line based tool that builds a template for different
              extensions that can be developed for Azure Data Studio (ADS)
            </p>
            <br />
            {chips}
          </div>
          <div className="card">
            <h3>placeholder - new</h3>
            <p>description</p>
          </div>
          <div className="card">
            <h3>placeholder - new</h3>
            <p>description</p>
          </div>
          <div className="card">
            <a href="https://github.com/laurajjiang/recipe-builder">
              <h3>recipe builder</h3>
              <p>
                a full-stack web application built using MySQL, Express, React,
                and NodeJS
              </p>
            </a>
          </div>
        </div>
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

        a {
          color: inherit;
          text-decoration: none;
        }

        .small-title {
          margin: 0;
          line-height: 1.15;
          font-size: 3rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        a:hover,
        a:focus,
        a:active {
          color: #c397bb;
          border-color: #c397bb;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: center;
          color: inherit;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #c397bb;
          border-color: #c397bb;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
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
