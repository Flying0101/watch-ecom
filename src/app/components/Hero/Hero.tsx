const Hero = ({
  path,
  title,
  text,
}: {
  path: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="w-full h-screen">
      <video
        autoPlay
        playsInline
        loop
        muted
        className="relative object-cover brightness-50 w-full h-full -z-10"
      >
        <source src={`${path}`} type="video/mp4" />
      </video>

      <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-white w-11/12">
        <h1 className="text-3xl text-center md:text-5xl mb-3 mx-auto w-fit">{title}</h1>
        <p className="text-lg text-center md:text-2xl mx-auto w-fit">{text}</p>
      </div>
    </div>
  );
};

export default Hero;
