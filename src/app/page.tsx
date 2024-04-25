import Hero from "./components/Hero/Hero";
import IntroText from "./components/IntroText/IntroText";
import OurLatest from "./components/OurLatest/OurLatest";
import Quality from "./components/Quality/Quality";
import Manufacture from "./components/Manufacture/Manufacture";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroText />
      <OurLatest />
      <Quality />
      <Manufacture />
      <Footer />
    </main>
  );
}
