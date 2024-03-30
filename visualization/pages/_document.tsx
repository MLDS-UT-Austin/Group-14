import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>DataHack '24 Results</title>
      </Head>
      <body className="prose max-w-2xl p-x-auto mx-16 mt-5">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
