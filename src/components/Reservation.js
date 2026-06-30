import { useState } from "react";

export default function Reservation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="reservation"
      className="py-24 bg-stone-100 relative overflow-hidden"
    >
      {/* Side image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80"
          alt="Restaurant dining room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-100 via-stone-100/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-lg">
          <p className="section-subtitle">Reservation</p>
          <h2 className="section-title mb-4">
            Reserve Your
            <br />
            <span className="italic text-savane-600">table</span>
          </h2>
          <p className="font-sans text-stone-500 font-light mb-10 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          {submitted ? (
            <div className="bg-jungle-mid/10 border border-jungle-mid/30 p-8 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-serif text-2xl font-bold text-earth-mid mb-2">
                Thank you, {form.name} !
              </h3>
              <p className="font-sans text-stone-600 font-light">
                Lorem Ipsum has been the industry's standard dummy text ever
                since 1966, when designers at Letraset and James Mosley, the
                librarian at St Bride Printing Library in London, took a 1914
                Cicero.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block font-sans text-xs uppercase tracking-widest text-stone-500 mb-1">
                    Full name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full border border-stone-300 bg-white px-4 py-3 font-sans text-sm focus:outline-none focus:border-savane-500 transition-colors"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block font-sans text-xs uppercase tracking-widest text-stone-500 mb-1">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full border border-stone-300 bg-white px-4 py-3 font-sans text-sm focus:outline-none focus:border-savane-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-stone-500 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full border border-stone-300 bg-white px-4 py-3 font-sans text-sm focus:outline-none focus:border-savane-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3 sm:col-span-1">
                  <label className="block font-sans text-xs uppercase tracking-widest text-stone-500 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="w-full border border-stone-300 bg-white px-4 py-3 font-sans text-sm focus:outline-none focus:border-savane-500 transition-colors"
                  />
                </div>
                <div className="col-span-3 sm:col-span-1">
                  <label className="block font-sans text-xs uppercase tracking-widest text-stone-500 mb-1">
                    Time
                  </label>
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                    className="w-full border border-stone-300 bg-white px-4 py-3 font-sans text-sm focus:outline-none focus:border-savane-500 transition-colors"
                  >
                    <option value="">Choose</option>
                    {[
                      "12:00",
                      "12:30",
                      "13:00",
                      "13:30",
                      "19:00",
                      "19:30",
                      "20:00",
                      "20:30",
                      "21:00",
                      "21:30",
                    ].map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-3 sm:col-span-1">
                  <label className="block font-sans text-xs uppercase tracking-widest text-stone-500 mb-1">
                    People
                  </label>
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className="w-full border border-stone-300 bg-white px-4 py-3 font-sans text-sm focus:outline-none focus:border-savane-500 transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((n) => (
                      <option key={n} value={n}>
                        {n} People{n > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-stone-500 mb-1">
                  Message (optional)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Allergies, special occasion, special requests..."
                  className="w-full border border-stone-300 bg-white px-4 py-3 font-sans text-sm focus:outline-none focus:border-savane-500 transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full text-center">
                Confirm the Reservation
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
