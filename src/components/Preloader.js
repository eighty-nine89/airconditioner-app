import React, { useState, useEffect } from "react";

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);

      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="w-5 h-5 border-4 border-black border-dashed rounded-full animate-spin"></div>
        <span className="ml-1 text-black text-sm">
          Loading...
        </span>
      </div>
    );
  } else {
    return null;
  }
};
