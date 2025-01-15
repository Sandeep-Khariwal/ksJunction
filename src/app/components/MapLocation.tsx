import React from 'react';

const MapLocation = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-screen mt-10">
      <div className="overflow-hidden w-full h-full">
        <iframe
          className="w-full h-full"
          frameBorder="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Khariwal software junction Subhash colony, Near town park huda complex, opposite The sirsa school,Sirsa, Haryana, 125055&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default MapLocation;
