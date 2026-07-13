const categories = [
  {
    name: 'Starters',
    items: [
      {
        name: 'Lorem Ipsum I',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor',
        price: '$10',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80',
        badge: 'Must-Try',
      },
      {
        name: 'Dolor Sit Amet',
        desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip',
        price: '$12',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80',
      },
      {
        name: 'Consectetur Elit',
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat',
        price: '$9',
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80',
        badge: 'Vegetarian',
      },
    ],
  },
  {
    name: 'Main Courses',
    items: [
      {
        name: 'Adipiscing Magna',
        desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
        price: '$24',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80',
        badge: 'Signature',
      },
      {
        name: 'Tempor Incididunt',
        desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
        price: '$21',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=400&q=80',
      },
      {
        name: 'Labore Dolore',
        desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed',
        price: '$23',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
        badge: 'Popular',
      },
    ],
  },
  {
    name: 'Desserts',
    items: [
      {
        name: 'Voluptatem Velit',
        desc: 'Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam',
        price: '$8',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80',
      },
      {
        name: 'Accusantium Laudantium',
        desc: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil',
        price: '$9',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80',
        badge: "Chef's Pick",
      },
      {
        name: 'Natus Error Sit',
        desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium',
        price: '$5',
        image: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=400&q=80',
        badge: 'House',
      },
    ],
  },
];

const badgeColors = {
  Signature:    'bg-savane-600 text-white',
  'Must-Try':   'bg-earth-mid text-white',
  Vegetarian:   'bg-jungle-mid text-white',
  Popular:      'bg-amber-600 text-white',
  "Chef's Pick": 'bg-savane-500 text-white',
  House:        'bg-stone-600 text-white',
};

function MenuCard({ item }) {
  return (
    <div className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {item.badge && (
          <span className={`absolute top-3 left-3 text-xs font-sans font-semibold uppercase tracking-wider px-2 py-1 ${badgeColors[item.badge] || 'bg-savane-500 text-white'}`}>
            {item.badge}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h4 className="font-serif text-lg font-semibold text-earth-mid leading-snug">{item.name}</h4>
          <span className="font-sans font-bold text-savane-600 text-lg whitespace-nowrap">{item.price}</span>
        </div>
        <p className="font-sans text-sm text-stone-500 font-light leading-relaxed flex-1">{item.desc}</p>
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Our Menu</p>
          <h2 className="section-title mb-4">
            Lorem ipsum dolor<br />
            <span className="italic text-savane-600">sit amet</span>
          </h2>
          <p className="font-sans text-stone-500 max-w-xl mx-auto font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua enim ad minim.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {categories.map((cat) => (
            <div key={cat.name}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-savane-400" />
                <h3 className="font-serif text-2xl font-bold text-earth-mid">{cat.name}</h3>
                <div className="flex-1 h-px bg-stone-200" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((item) => (
                  <MenuCard key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="font-sans text-stone-500 mb-6 font-light">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          </p>
          <a href="#reservation" className="btn-primary">
            Book for Dinner
          </a>
        </div>
      </div>
    </section>
  );
}
