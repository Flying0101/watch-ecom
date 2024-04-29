import Hero from "../components/Hero/Hero";
import CollectionOverview from "../components/CollectionOverview/CollectionOverview";

export default function collection() {
  return (
    <main>
      <Hero
        title="DISCOVER THE UNKOWN"
        text="THE COLLECTION"
        path="/mp4/collection-intro.mp4"
      />
      <CollectionOverview />
    </main>
  );
}
