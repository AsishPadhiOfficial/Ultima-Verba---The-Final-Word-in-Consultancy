import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 shadow-2xl">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-primary-200 rounded-full animate-spin"></div>
            <div className="absolute top-0 left-0 w-12 h-12 border-4 border-accent-500 rounded-full animate-spin border-t-transparent"></div>
          </div>
          <p className="text-primary-700 font-medium">Processing your request...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;