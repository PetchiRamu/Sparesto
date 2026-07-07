// components/Hero.jsx
const Hero = () => {
  const bg = "/windmill (1).png";

  return (
    <section
      className="h-screen bg-center bg-cover flex items-center justify-center text-center"
      style={{ backgroundImage: `url('${bg}')` }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          Your Global Partner For Wind Turbine Parts & Logistics
        </h1>

        <p className="mt-6 text-white/80 text-sm md:text-lg">
          New Refurbished & Wearable Parts — Fast Delivery / Full Service Support
        </p>

        <button className="mt-8 px-6 py-3 rounded-md bg-white/20 backdrop-blur-sm border border-white/40 text-white font-semibold hover:bg-white/25">
          Request & Quote
        </button>
      </div>
    </section>
  );
};

export default Hero;


