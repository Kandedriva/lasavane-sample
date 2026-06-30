export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800&q=80')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Decorative side lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-24 bg-savane-400/60" />
        <span className="text-savane-400/80 text-xs tracking-[0.3em] uppercase rotate-90 whitespace-nowrap my-4">
          African Cuisine
        </span>
        <div className="w-px h-24 bg-savane-400/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <p className="section-subtitle text-savane-300 mb-6">Authentic African Restaurant</p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4">
          La Savane
        </h1>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light italic text-savane-200 mb-8">
          d'Afrique
        </h2>

        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-16 h-px bg-savane-400" />
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-stone-300">
            Flavors · Sharing · Authenticity
          </span>
          <div className="w-16 h-px bg-savane-400" />
        </div>

        <p className="font-sans text-base md:text-lg text-stone-300 max-w-xl mx-auto mb-12 font-light leading-relaxed">
          A culinary journey to the heart of Africa. Wild flavors, enchanting spices,
          and recipes passed down from generation to generation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#menu" className="btn-primary">
            Explore the Menu
          </a>
          <a href="#reservation" className="btn-outline">
            Book a Table
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="font-sans text-xs uppercase tracking-widest">Discover</span>
        <div className="w-px h-10 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}
