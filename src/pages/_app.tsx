"use client";

import Navigation from "@/components/navigation/Navigation";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Navigation>
      <Component {...pageProps} />
    </Navigation>
  );
};

export default App;
