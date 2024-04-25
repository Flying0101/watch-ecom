const Hero = () => {
  return (
    <div className="w-full h-screen">
      <video
        autoPlay
        playsInline
        loop
        muted
        className="relative object-cover brightness-50 w-full h-full -z-10"
      >
        <source src="/mp4/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-white w-11/12">
        <h1 className="text-5xl mb-3 mx-auto w-fit">Experience our heritage</h1>
        <p className="text-2xl mx-auto w-fit">
          watches made with scrupulous attention to detail
        </p>
      </div>
    </div>
  );
};

export default Hero;
