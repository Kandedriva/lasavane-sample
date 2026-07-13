const reviews = [
  {
    name: 'Lorem I.',
    location: 'New York',
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.",
    avatar: 'https://i.pravatar.cc/80?img=47',
  },
  {
    name: 'Ipsum D.',
    location: 'Chicago',
    stars: 5,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa.",
    avatar: 'https://i.pravatar.cc/80?img=12',
  },
  {
    name: 'Dolor A.',
    location: 'Los Angeles',
    stars: 5,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis.",
    avatar: 'https://i.pravatar.cc/80?img=45',
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-1 text-savane-400">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-savane-900 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-savane-400 to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle text-savane-400">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Lorem ipsum <span className="italic text-savane-300">dolor sit amet</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm">
              <Stars count={r.stars} />
              <p className="font-sans text-stone-300 font-light leading-relaxed mt-4 mb-6 italic">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-sans font-semibold text-white text-sm">{r.name}</p>
                  <p className="font-sans text-stone-500 text-xs">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
