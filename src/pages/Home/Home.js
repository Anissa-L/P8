import Banner from "../../components/Banner/Banner";

import Cards from "../../components/Cards/Cards";

function Home() {
  return (
    <main>
      <Banner
        title="Chez vous, partout et ailleurs"
        src="/asset/banner-home-img.png"
        alt="Image d'un paysage"
      />
      <Cards />
    </main>
  );
}

export default Home;
