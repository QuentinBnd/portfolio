import React from 'react';

function Section({ children }) {
  return (
    <div className="w-full flex-shrink-0 min-h-screen flex items-center justify-center bg-gray-50">
      {children}
    </div>
  );
}

export default Section;