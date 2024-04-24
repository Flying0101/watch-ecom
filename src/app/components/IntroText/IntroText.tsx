const IntroText = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 py-20 flex gap-8 flex-wrap md:flex-nowrap">
      <div className="w-full max-w-1/2 flex items-center justify-center">
        <h2 className="w-full text-4xl md:w-4/5 h-fit font-bold bg-gradient-to-r from-blue-900 to-black text-transparent bg-clip-text">
          With its latest creations, SM brings a fresh new look to some of its
          most iconic models.
        </h2>
      </div>
      <div className="w-full max-w-1/2">
        <p className="text-lg md:max-w-xl md:mx-auto">
          Offering unique harmonies of materials, colours and textures, the 2024
          watches illustrate our desire to constantly reawaken watchmaking
          emotions, while demonstrating uncompromising quality down to the
          smallest detail. Thanks to our in-house mastery of watchmaking
          expertise, the new watches play with contrasts to achieve a harmonious
          balance of functionality and aesthetics, performance and preciousness,
          tradition and innovation.
        </p>
      </div>
    </div>
  );
};

export default IntroText;
