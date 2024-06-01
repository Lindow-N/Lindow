import "../styles/reset.scss";
import "../styles/palette.scss";
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
    </>
  );
}

export default MyApp;
