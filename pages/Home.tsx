
import React from 'react';
import { Link } from 'react-router-dom';
import { TAGLINE, BRAND_NAME } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Delicious Steak" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            {BRAND_NAME}
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-10 serif italic">
            {TAGLINE}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/menu" 
              className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
            >
              View Menu
            </Link>
            <Link 
              to="/reservations" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { 
            title: "Premium Steaks", 
            img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80",
            desc: "Hand-cut ribeyes and brisket slow-cooked to juicy perfection."
          },
          { 
            title: "Fresh Seafood", 
            img: "https://images.unsplash.com/photo-1599487488170-d11ec93a730d?auto=format&fit=crop&w=800&q=80",
            desc: "The finest catfish and shrimp, fried golden or grilled light."
          },
          { 
            title: "Southern Sides", 
            img: "https://images.unsplash.com/photo-1534422298391-e4f8c170db76?auto=format&fit=crop&w=800&q=80",
            desc: "Collard greens, mac 'n cheese, and cornbread just like Grandma made."
          }
        ].map((item, idx) => (
          <div key={idx} className="group overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow">
            <div className="h-64 overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-stone-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-stone-100 py-20 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">Ready for a taste of Girard?</h2>
        <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto">
          We pride ourselves on fresh, made-to-order dishes and a friendly community atmosphere. 
          Come see why Fish Eye Grill is a local favorite.
        </p>
        <Link 
          to="/about" 
          className="inline-block border-2 border-stone-800 text-stone-800 px-10 py-4 rounded-full font-bold hover:bg-stone-800 hover:text-white transition-all"
        >
          Our Story
        </Link>
      </section>
    </div>
  );
};

export default Home;
