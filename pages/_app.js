import { GlobalStyles } from "@/styles/Global.styles";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import ThemeProvider from "@/styles/Theme/ThemeProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Set title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script defer type="text/javascript" src="/theme.js" />
      </Head>
      <GlobalStyles />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
