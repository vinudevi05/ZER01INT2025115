import React from 'react';

export default function Hero() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 w-full p-4">
          <img
            src="https://www.worldatlas.com/r/w1200-q80/upload/8b/72/3e/shutterstock-690150508.jpg"
            alt="Cute Pets"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Description Section */}
        <div className="md:w-1/2 w-full p-4 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Discover the Joy of Pets
          </h1>
          <p className="text-gray-600 text-lg">
            Pets bring love, joy, and companionship into our lives. Explore the beauty of the animal kingdom and learn how pets can become an integral part of your family.
          </p>
        </div>
      </div>
    </div>
  );
}
