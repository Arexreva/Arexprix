
import React from 'react';
import { CATERING_DATA, PHONE } from '../constants';

const Catering: React.FC = () => {
  const groupedCatering = CATERING_DATA.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Catering Services</h1>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto italic">
          Let Fish Eye Grill bring the Southern hospitality to your next event. 
          Perfect for weddings, reunions, and corporate gatherings.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Manual categorization for cleaner display based on the provided profile */}
        <CateringSection title="Meats & Main Dishes" items={["Pulled Pork", "Brisket", "Ribs", "Chicken halves/quarters", "Pork loin", "Prime Rib", "Beef Tenderloin", "Smoked Turkey Breast", "Fried Chicken & Pork Chops"]} />
        <CateringSection title="Sides & Veggies" items={["Mac ’n cheese", "Potato Salad", "Cole Slaw", "Baked Beans", "Green Beans", "Collard/Turnip Greens", "Mashed Potatoes", "Sweet Potato Souffle", "Rice"]} />
        <CateringSection title="Pastas & Specialty" items={["Cobb Pasta with Cajun Chicken/Shrimp", "Penne Alfredo", "Low Country Boil (Shrimp, Sausage, Corn, Potatoes, Onions)"]} />
        <CateringSection title="Sweet Endings" items={["Banana Pudding", "Eclair", "Chocolate & Vanilla Butter Cake", "Topped Vanilla Cakes", "Dirt Cake"]} />
        <CateringSection title="Extras" items={["Bread Options", "Sweet/Unsweet Tea", "Lemonade", "Paper Products & Condiments"]} />
        
        <div className="bg-stone-900 text-white rounded-2xl p-8 flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold mb-4 serif">Custom Orders?</h3>
          <p className="mb-6 opacity-80">We can tailor our menu to your specific needs.</p>
          <a href={`tel:${PHONE.replace(/\D/g,'')}`} className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-3 rounded-full font-bold transition-all">
            Call to Discuss
          </a>
        </div>
      </div>
    </div>
  );
};

const CateringSection: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100 hover:border-orange-200 transition-colors">
    <h3 className="text-2xl font-bold mb-6 text-orange-900 serif border-b pb-4">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="text-stone-700 flex items-start space-x-2">
          <span className="text-orange-700 mt-1">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Catering;
