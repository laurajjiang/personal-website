import Head from "next/head";
import Typist from "react-typist";
import Link from "next/link";
import { Card } from "@material-ui/core";

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Laura Jiang | About </title>
      </Head>
      <a id="about" />
      <main>
        <h2 className="small-title">about</h2>
        <p className="description">
          hi! i'm laura, a senior majoring in computer science with a
          specialization in mobile and cloud application development. <br /> i
          am seeking full-time, new graduate software engineering roles
          (starting june 2021). <br /> i am most interested in back-end or
          full-stack development but i am open to other opportunities as well.{" "}
          <br />
          <br />
          my interests include:
        </p>
        <div className="grid">
          <div className="card">placeholder </div>
          <div className="card">placeholder</div>
          <div className="card">placeholder</div>
          <div className="card">placeholder</div>
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
          text-align: center;
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
          color: #0070f3;
          border-color: #0070f3;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
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
