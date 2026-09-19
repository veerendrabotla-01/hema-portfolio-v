import React from 'react';

const Logo = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg 
        className="w-full h-full text-Primary hover:text-brand transition-colors duration-300" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left vertical pillar of H */}
        <line x1="30" y1="20" x2="30" y2="80" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
        
        {/* Right vertical pillar of H */}
        <line x1="70" y1="20" x2="70" y2="80" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
        
        {/* Horizontal crossbar of H */}
        <line x1="30" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
        
        {/* Dynamic orange/brown slash across the center matching the custom brand identity */}
        <line x1="15" y1="75" x2="85" y2="25" stroke="#BF4A1A" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default Logo;
