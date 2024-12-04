import Head from "next/head";

export default function CustomHead() {
  return (
    <Head>
      <title>DevStoic Hub</title> {/* Title of your app */}
      <meta
        name="description"
        content="A place for developers to cultivate productive habits."
      />{" "}
      {/* Description */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />{" "}
      {/* For responsive design */}
      <meta name="theme-color" content="#1E293B" /> {/* Theme color */}
      <link rel="icon" href="/favicon.ico" /> {/* Favicon */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400&family=Fira+Mono:wght@400&display=swap"
      />{" "}
      {/* Google Fonts */}
      {/* You can add more meta tags or links as necessary */}
      <meta property="og:title" content="DevStoic Hub" />
      <meta
        property="og:description"
        content="A place for developers to cultivate productive habits."
      />
      <meta property="og:image" content="/og-image.png" />{" "}
      {/* Open Graph Image */}
      <meta property="og:url" content="https://your-site-url.com" />{" "}
      {/* Open Graph URL */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@yourtwitterhandle" />
    </Head>
  );
}
