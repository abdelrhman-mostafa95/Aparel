function About() {
  return (
    <div>
      {/* About Section */}
      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div className="p-8 md:p-12 lg:p-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                Why Choose Us
              </h1>

              <p className="text-gray-600 text-base sm:text-lg mb-6">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✔</span>
                  Separated they live Bookmarksgrove right at the coast
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✔</span>
                  Large language ocean
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✔</span>
                  4,000+ Students 49 Teachers 12 Awards
                </li>
              </ul>
              <p className="text-black font-semibold mb-6">
                4,000+ Students • 49 Teachers • 12 Awards
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-4">
                <a
                  href="#shop"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-black text-white font-semibold shadow-md hover:bg-gray-900 transition"
                >
                  Shop Now
                </a>

                <a
                  href="#learn"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition text-sm"
                >
                  Learn more
                </a>
              </div>

              {/* Features */}
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

            {/* Image Section */}
            <div className="relative">
              <div className="absolute -left-24 -top-12 w-64 h-64 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full blur-3xl opacity-40 pointer-events-none hidden lg:block"></div>

              <div className="h-72 sm:h-96 lg:h-full w-full flex items-center justify-center overflow-hidden">
                <img
                  src="/hero_bg_6.jpg"
                  alt="Hero"
                  className="w-full h-full object-cover md:object-contain transform hover:scale-105 transition duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src="person_1.jpg"
                alt="Mina Collins"
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Mina Collins
                </h3>
                <p className="text-black font-semibold mb-3">Teacher in Math</p>
                <p className="text-gray-600 text-sm">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src="person_2.jpg"
                alt="Anderson Matthew"
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Anderson Matthew
                </h3>
                <p className="text-black font-semibold mb-3">
                  Teacher in Music
                </p>
                <p className="text-gray-600 text-sm">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src="person_3.jpg"
                alt="Cynthia Misso"
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Cynthia Misso
                </h3>
                <p className="text-black font-semibold mb-3">
                  Teacher in English
                </p>
                <p className="text-gray-600 text-sm">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
