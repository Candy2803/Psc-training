import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 right-1/10 w-20 h-20 bg-gradient-to-br from-purple-900 via-green-500 to-black rounded-full animate-bounce opacity-70"></div>
      <div className="absolute bottom-1/4 left-1/20 w-32 h-32 bg-gradient-to-br from-purple-900 via-green-500 to-black rounded-full animate-pulse opacity-60 animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/20 w-16 h-16 bg-gradient-to-br from-purple-900 via-green-500 to-black rounded-full animate-bounce opacity-50 animation-delay-4000"></div>
    </div>
  );
};

export default FloatingElements;