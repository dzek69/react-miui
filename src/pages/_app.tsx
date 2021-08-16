import React from "react";
import type { AppProps } from "next/app";

import "../global.scss";
import "../demo-global.scss";

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Component {...pageProps} />
);

export default MyApp;
