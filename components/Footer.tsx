
import React from 'react';
import { BRAND_NAME, ADDRESS, PHONE, BUSINESS_HOURS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 serif">{BRAND_NAME}</h3>
          <p className="mb-4">{ADDRESS}</p>
          <p className="text-xl font-semibold text-orange-400">{PHONE}</p>
        </div>
        
        <div>
          <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Opening Hours</h4>
          <ul className="space-y-2">
            {BUSINESS_HOURS.map((h, i) => (
              <li key={i} className="flex justify-between">
                <span>{h.day}</span>
                <span className="text-stone-500">{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">Accessibility</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-stone-800 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved. Southern Hospitality Served Fresh Daily.</p>
      </div>
    </footer>
  );
};

export default Footer;
