
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pb-20">
      <section className="relative h-96 flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=2000&q=80" 
          alt="Atmosphere" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
        />
        <h1 className="relative z-10 text-6xl text-white font-bold serif italic text-center">The Fish Eye Story</h1>
      </section>

      <div className="max-w-4xl mx-auto px-4 mt-20 space-y-20">
        <article className="prose prose-stone prose-lg max-w-none text-center">
          <p className="text-2xl text-stone-700 leading-relaxed serif italic">
            "Fish Eye Grill is a casual, southern-style restaurant located in rural Girard, Georgia. 
            We pride ourselves on steaks, seafood, and BBQ-inspired dishes served with a side of warm hospitality."
          </p>
        </article>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
            <ul className="space-y-4">
              {[
                "Quality food and exceptional service",
                "Friendly, welcoming environment for all",
                "Fresh and evolving menu offerings",
                "Community-oriented dining experience"
              ].map((val, i) => (
                <li key={i} className="flex items-center space-x-3 text-lg text-stone-700">
                  <span className="w-2 h-2 bg-orange-700 rounded-full"></span>
                  <span>{val}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80" alt="Restaurant Interior" />
          </div>
        </section>

        <section className="bg-orange-800 text-white rounded-3xl p-12 text-center shadow-xl">
          <h2 className="text-4xl font-bold mb-6">A Rural Gem</h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto leading-relaxed italic">
            Whether you're a regular or just passing through Burke County, we aim to give every guest a memorable dining experience. 
            At Fish Eye Grill, we're more than just a restaurant; we're a part of the local fabric.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
