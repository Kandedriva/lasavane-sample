export default function About() {
  return (
    <section id="about" className="py-24 bg-savane-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images mosaic */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80"
                alt="Restaurant interior"
                className="rounded-sm object-cover h-64 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
                alt="African dishes"
                className="rounded-sm object-cover h-64 w-full mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80"
                alt="Chef in the kitchen"
                className="rounded-sm object-cover h-48 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80"
                alt="African spices"
                className="rounded-sm object-cover h-48 w-full mt-4"
              />
            </div>
            {/* Accent badge */}
            <div className="absolute -bottom-6 -right-4 bg-savane-500 text-white p-6 shadow-xl hidden md:block">
              <p className="font-serif text-3xl font-bold leading-none">15+</p>
              <p className="font-sans text-xs uppercase tracking-widest mt-1">Years of Experience</p>
            </div>
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="section-subtitle">Our Story</p>
            <h2 className="section-title mb-6">
              Lorem ipsum dolor<br />
              <span className="italic text-savane-600">sit amet consectetur</span>
            </h2>

            <div className="space-y-5 text-stone-600 font-sans font-light leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, <strong className="font-semibold text-earth-mid">Yopcity Restaurant</strong> consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam quis nostrud exercitation.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.
              </p>
              <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-savane-200 pt-8">
              {[
                { number: '80+', label: 'Menu Dishes' },
                { number: '200', label: 'Seats' },
                { number: '4.9★', label: 'Customer Rating' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-3xl font-bold text-savane-600">{stat.number}</p>
                  <p className="font-sans text-xs uppercase tracking-widest text-stone-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <a href="#menu" className="btn-primary mt-10 inline-block">
              View the Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
