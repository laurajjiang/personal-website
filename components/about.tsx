import Head from "next/head";
import Typist from "react-typist";
import Link from "next/link";

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Laura Jiang | About </title>
      </Head>

      <main>about</main>

      <style jsx>{``}</style>

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
