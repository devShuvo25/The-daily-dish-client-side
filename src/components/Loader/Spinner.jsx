import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="relative w-32 h-32">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin"></div>

        {/* Middle rotating ring (opposite direction) */}
        <div
          className="absolute inset-2 rounded-full border-4 border-transparent border-b-orange-400 border-l-orange-400 animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
        ></div>

        {/* Inner rotating ring */}
        <div
          className="absolute inset-4 rounded-full border-3 border-transparent border-t-yellow-400 border-r-yellow-400 animate-spin"
          style={{ animationDuration: "0.8s" }}
        ></div>

        {/* Center icon/logo area */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-pulse shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Loading text */}
      <div className="absolute bottom-24 text-center">
        <p className="text-gray-700 font-semibold text-lg mb-2">
          Preparing your meals
        </p>
        <div className="flex justify-center gap-1">
          <span
            className="w-2 h-2 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          ></span>
          <span
            className="w-2 h-2 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></span>
          <span
            className="w-2 h-2 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
