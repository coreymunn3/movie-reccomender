import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        style={{
          backgroundImage: "url('/pattern.png')",
          backgroundAttachment: "fixed",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
