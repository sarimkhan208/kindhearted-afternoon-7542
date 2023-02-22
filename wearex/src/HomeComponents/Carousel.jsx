import React, { useState, useEffect } from "react";
import "../Pages/home.css"

const Carousel = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex =
        currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  

  return (
    <div className="hover-image"  >
      <figure><img src={images[currentIndex]}  alt="Carousel Image" /></figure>
    </div>
  );
};

export default Carousel;
