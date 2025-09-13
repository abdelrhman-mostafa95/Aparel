export default function Hero() {
  return (
    <div className="relative">
      <img src="hero_bg.jpg" />
      <div className="absolute top-1/5 right-1/5 transform translate-x-1/2">
        <h1 className="text-5xl font-bold text-gray-900">Welcome to</h1>
        <img className="my-2" src="logo.png" />
        <p className="mt-4 text-lg text-gray-700">
          Discover our latest fashion collection
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg">
          Shop Now
        </button>
      </div>
    </div>
  );
}
