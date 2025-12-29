
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Entrees' | 'Sides' | 'Desserts'>('All');
  
  const categories: ('All' | 'Entrees' | 'Sides' | 'Desserts')[] = ['All', 'Entrees', 'Sides', 'Desserts'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
        <p className="text-stone-500 italic">Fresh ingredients, cooked with love.</p>
      </header>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeCategory === cat 
                ? 'bg-orange-700 text-white shadow-lg' 
                : 'bg-white text-stone-600 hover:bg-stone-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredItems.map((item, idx) => (
          <div key={idx} className="flex flex-col border-b border-stone-200 pb-8 hover:bg-white p-4 transition-colors rounded-lg group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-2xl font-bold group-hover:text-orange-800 transition-colors">{item.name}</h3>
              <span className="text-stone-400 font-serif italic">{item.category}</span>
            </div>
            {item.description && (
              <p className="text-stone-600 leading-relaxed italic">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 bg-orange-50 rounded-2xl border border-orange-100 text-center">
        <h4 className="text-xl font-bold text-orange-900 mb-2">Note on Availability</h4>
        <p className="text-orange-800">
          Our menu is fresh and evolving. Items may vary based on seasonal availability and market selection.
        </p>
      </div>
    </div>
  );
};

export default Menu;
