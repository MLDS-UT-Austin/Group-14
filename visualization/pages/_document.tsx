import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>DataHack '24 Results</title>
      </Head>
      <body className="prose max-w-lg p-x-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
