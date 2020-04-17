import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import unfetch from "isomorphic-unfetch";
import renderHTML from "react-render-html";

function HomePage({ characters }) {
  return (
    <Layout>
      <Head>Ana Sayfa</Head>
      <h2>Home Linked2</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Link
              href="/character/[slug]"
              as={`/character/${character.slug}-${character.id}`}
            >
              <a>{renderHTML(character.title.rendered)}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
export async function getStaticProps() {
  const data = await unfetch(
    //"https://rickandmortyapi.com/api/character/"
    "https://www.muglakentgazetesi.com/wp-json/wp/v2/posts/?per_page=30&page=1"
  );
  const characters = await data.json();
  return {
    props: {
      characters,
    },
  };
}

export default HomePage;
