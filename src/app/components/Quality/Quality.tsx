import Image from "next/image";

const Quality = () => {
  return (
    <section className="py-10 md:py-20">
      <h2 className="mx-auto px-5 text-3xl mb-4 max-w-6xl">
        THE QUALITY OF A SM WATCH IS THE RESULT OF A STRICT METHODOLOGY.
      </h2>
      <p className="mx-auto px-5 text-lg mb-8 max-w-5xl">
        From the design of a new model to the individual testing of each watch
        when it comes out of production, every effort is made to ensure that the
        brands standards of excellence are met. T3 has played a pioneering role
        in developing tests and protocols to guarantee the reliability and
        robustness of its timepieces.
      </p>

      <Image
        width={1920}
        height={750}
        alt="watch dial"
        src="/content/dial.jpg"
        className="w-full h-fit min-h-80 max-h-96 object-cover"
      />
    </section>
  );
};

export default Quality;
