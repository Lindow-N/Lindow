// pages/_app.js
import "../styles/reset.scss";
import "../styles/palette.scss";
import "./styles/index.module.css";
import "./styles/toastify.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Lindow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Description of the home page" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
