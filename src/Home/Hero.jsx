export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="hero_bg.jpg"
        className="w-full h-full object-cover"
        alt="Hero Background"
      />

      {/* Content */}
      <div
        className="
          absolute inset-0 
          flex flex-col justify-center items-end
          text-center md:text-right
          px-6 md:px-20
        "
      >
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Welcome to
          </h1>
          <img className="my-4 w-40 md:w-56" src="logo.png" alt="Logo" />
          <p className="mt-2 md:mt-4 text-lg md:text-xl text-gray-700">
            Discover our latest fashion collection
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
