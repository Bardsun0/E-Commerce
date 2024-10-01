function HomePage() {
  return (
    <div className="home-page">
      <div>
        <div className="bg-cyan-400 h-[716px] flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white mb-4">SUMMER 2020</h2>
            <h1 className="text-7xl font-bold text-white mb-8">
              NEW COLLECTION
            </h1>
            <p className="text-xl text-white mb-8">
              We know how large objects will act, <br /> but things on a small
              scale.
            </p>
            <button className="bg-[#2DC071] text-white font-bold py-4 px-8 rounded-md">
              SHOP NOW
            </button>
          </div>
        </div>
        {/* Other slider elements can be added here */}
      </div>
    </div>
  );
}

export default HomePage;
