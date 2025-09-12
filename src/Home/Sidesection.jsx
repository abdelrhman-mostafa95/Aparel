export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="p-8 md:p-12 lg:p-16">
            <p className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Limited Offers • 20% OFF
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Week Deal
            </h1>

            <p className="text-gray-600 text-base sm:text-lg mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              illum cum itaque cupiditate totam explicabo possimus omnis qui,
              accusantium error.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-4">
              <a
                href="#shop"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition"
              >
                Shop Now
              </a>

              <a
                href="#learn"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 transition text-sm"
              >
                Learn more
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                Free shipping
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                24/7 Support
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                Easy returns
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -left-24 -top-12 w-64 h-64 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full blur-3xl opacity-40 pointer-events-none hidden lg:block"></div>

            <div className="h-72 sm:h-96 lg:h-full w-full flex items-center justify-center overflow-hidden">
              <img
                src="/hero_bg_1.jpg"
                alt="Hero"
                className="w-full h-full object-cover md:object-contain transform hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
