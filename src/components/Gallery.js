const photos = [
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', alt: 'Restaurant atmosphere', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80', alt: 'Interior dining room' },
  { src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80', alt: 'Gourmet plate' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', alt: 'Colorful dishes' },
  { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', alt: 'Open kitchen' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80', alt: 'Cocktail bar', span: 'col-span-2' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-earth-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle text-savane-400">Our World</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Lorem ipsum <span className="italic text-savane-300">dolor sit</span>
          </h2>
          <p className="font-sans text-stone-400 max-w-lg mx-auto font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua enim ad minim veniam.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`overflow-hidden group cursor-pointer ${photo.span || ''}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
            </div>
          ))}
        </div>

        {/* Instagram handle */}
        <div className="text-center mt-10">
          <p className="font-sans text-stone-500 text-sm uppercase tracking-widest">
            Follow us <span className="text-savane-400">@yopcityrestaurant</span>
          </p>
        </div>
      </div>
    </section>
  );
}
