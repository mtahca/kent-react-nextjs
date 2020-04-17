import Head from "next/head";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Muğla Kent Gazetesi</title>
        <meta charset="UTF-8" />
      </Head>

      <main>{children}</main>
      <footer>Footer Area</footer>
    </div>
  );
}

export default Layout;
