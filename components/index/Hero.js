const Hero = () => {
  return (
    <div className="hero min-h-screen relative">
      <div
        className="absolute inset-0 bg-center opacity-40"
        style={{
          backgroundImage: `url('/banner.png')`,
        }}
      ></div>
      <div className="hero-overlay bg-base-100/20"></div>
      <div className="hero-content text-center relative">
        <div className="max-w-md bg-base-100/50 p-8 rounded-xl">
          <h1 className="mb-5 text-5xl font-bold font-libre text-secondary">
            Nutrifit
          </h1>
          <p className="mb-5 font-subtitle text-primary">
            Achieve physical goals
          </p>
          <button className="btn btn-accent font-title hover:btn-primary">Generate a diet</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
