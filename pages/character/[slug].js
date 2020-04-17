import Layout from "../../components/layout";
import Head from "next/head";
import unfetch from "isomorphic-unfetch";
import renderHTML from "react-render-html";

function CharacterDetail({ character }) {
  return (
    <Layout>
      <Head>
        <title>Single Page</title>
      </Head>

      <div>{renderHTML(character.content.rendered)}</div>
      <figure>
        <img
          src={character.featured_image_src}
          alt={character.title.rendered}
        ></img>
      </figure>
    </Layout>
  );
}
export async function getStaticPaths() {
  const data = await unfetch(
    "https://www.muglakentgazetesi.com/wp-json/wp/v2/posts/"
  );
  const characters = await data.json();
  return {
    paths: characters.map((character) => {
      return { params: { slug: `${character.slug}-${character.id}` } };
    }),

    fallback: false, // See the "fallback" section below
  };
}
export async function getStaticProps({ params }) {
  const id = params.slug.split("-").slice(-1)[0];
  const data = await unfetch(
    "https://www.muglakentgazetesi.com/wp-json/wp/v2/posts/" + id
  );
  const character = await data.json();
  return {
    props: {
      character,
    },
  };
}

export default CharacterDetail;
