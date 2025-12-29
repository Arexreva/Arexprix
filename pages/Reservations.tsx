
import React from 'react';
import { PHONE } from '../constants';

const Reservations: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 p-12 bg-stone-50">
          <h1 className="text-4xl font-bold mb-6 serif">Book Your Table</h1>
          <p className="text-stone-600 mb-8 leading-relaxed">
            We recommended reservations for larger parties, especially groups of 6 or more. 
            Planning a bigger gathering? We have private rooms for groups of 12+.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-full text-orange-700">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold">15-Minute Grace Period</h4>
                <p className="text-sm text-stone-500">Reservations are held for 15 minutes past the scheduled time.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-full text-orange-700">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Call to Reserve</h4>
                <p className="text-lg font-bold text-orange-800">{PHONE}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 bg-orange-700 text-white p-12 flex flex-col justify-center text-center">
          <h3 className="text-3xl font-bold mb-6 italic">Large Group or Event?</h3>
          <p className="mb-10 opacity-90 text-lg">
            Our private dining rooms are the perfect spot for your next family reunion or celebration. 
            Please call in advance to ensure availability.
          </p>
          <div className="border-2 border-white/30 rounded-2xl p-6">
            <h5 className="text-sm uppercase tracking-widest mb-2 font-bold">Recommended for</h5>
            <p className="text-2xl font-serif">Parties of 12 or more</p>
          </div>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center serif">Find Us</h2>
        <div className="h-96 rounded-3xl overflow-hidden shadow-xl grayscale contrast-125 brightness-75 bg-stone-200 flex items-center justify-center">
           <div className="text-center p-8 bg-white/80 backdrop-blur rounded-lg">
              <p className="text-lg font-bold text-stone-800">10001 GA-23 S, Girard, GA 30426</p>
              <p className="text-stone-500 italic mt-2">Open Map Navigation</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;
