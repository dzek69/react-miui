import React from "react";

import Head from "next/head";

import type { AppProps } from "next/app";

import "../global.scss";
import "../demo-global.scss";
import "../scrollbars.scss";

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <title>MIUI in React</title>
        </Head>
        <Component {...pageProps} />
    </>
);

// eslint-disable-next-line import/no-default-export
export default MyApp;
