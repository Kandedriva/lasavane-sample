const hours = [
  { day: "Monday – Tuesday", time: "Closed" },
  {
    day: "Wednesday – Thursday",
    time: "12:00 PM – 2:30 PM · 7:00 PM – 10:30 PM",
  },
  { day: "Friday", time: "12:00 PM – 2:30 PM · 7:00 PM – 11:00 PM" },
  { day: "Saturday", time: "12:00 PM – 3:00 PM · 7:00 PM – 11:00 PM" },
  { day: "Sunday", time: "12:00 PM – 4:00 PM" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-earth-dark text-stone-400">
      {/* Map-like banner */}
      <div className="relative h-56 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=60"
          alt="Map background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-savane-300 mb-2">
              Find Us
            </p>
            <p className="font-serif text-2xl md:text-3xl font-bold">
              239 W 116th St New York, NY 10026
            </p>
            {/* <p className="font-sans text-sm text-stone-400 mt-1">Metro: République · Parking available</p> */}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <p className="font-serif text-white text-2xl font-bold">La Savane</p>
          <p className="font-serif text-savane-400 text-sm italic mb-4">
            d'Afrique
          </p>
          <p className="font-sans text-sm font-light leading-relaxed text-stone-500">
            Authentic African restaurant in the heart of Paris. An invitation to
            travel, an ode to the flavors of a continent.
          </p>
          <div className="flex gap-4 mt-6">
            {["facebook", "instagram", "tiktok"].map((s) => (
              <a
                key={s}
                href="#contact"
                className="w-9 h-9 border border-stone-700 flex items-center justify-center hover:border-savane-400 hover:text-savane-400 transition-colors"
                aria-label={s}
              >
                <span className="text-xs uppercase">{s[0]}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-sans text-xs uppercase tracking-widest text-white mb-5">
            Navigation
          </h4>
          <ul className="space-y-3">
            {["Home", "Our Story", "Menu", "Gallery", "Reservation"].map(
              (l) => (
                <li key={l}>
                  <a
                    href="#hero"
                    className="font-sans text-sm font-light hover:text-savane-300 transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-sans text-xs uppercase tracking-widest text-white mb-5">
            Hours
          </h4>
          <ul className="space-y-2">
            {hours.map((h) => (
              <li key={h.day} className="flex flex-col">
                <span className="font-sans text-xs text-stone-500 uppercase tracking-wider">
                  {h.day}
                </span>
                <span className="font-sans text-sm font-light text-stone-300">
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans text-xs uppercase tracking-widest text-white mb-5">
            Contact
          </h4>
          <ul className="space-y-4">
            {[
              {
                label: "Address",
                value: "42 Rue de la Savane\n75010 Paris, France",
              },
              { label: "Phone", value: "+33 1 23 45 67 89" },
              { label: "Email", value: "contact@lasavanedafrique.fr" },
            ].map((c) => (
              <li key={c.label}>
                <p className="font-sans text-xs text-stone-500 uppercase tracking-wider mb-1">
                  {c.label}
                </p>
                <p className="font-sans text-sm font-light text-stone-300 whitespace-pre-line">
                  {c.value}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-stone-600">
            © {new Date().getFullYear()} La Savane d'Afrique · All rights
            reserved
          </p>
          <div className="flex gap-6">
            {["Legal Notice", "Privacy Policy", "Terms of Use"].map((l) => (
              <a
                key={l}
                href="#hero"
                className="font-sans text-xs text-stone-600 hover:text-stone-400 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
