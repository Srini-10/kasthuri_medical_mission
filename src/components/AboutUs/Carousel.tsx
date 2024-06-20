import React, { useState, useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useSwipeable } from "react-swipeable";
import "./css/Testimonial.css"; // Import the custom CSS file

import People1 from "../../assets/People1.png";
import People2 from "../../assets/People2.png";
import People3 from "../../assets/People3.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const images = [People1, People2, People3];
const totalImages = images.length;

const testimonialData = [
  {
    testimonial:
      "Kasthuri Medical Mission has truly transformed my understanding of medicine. The hands-on training and supportive faculty have prepared me well for medical school and beyond.",
    author: "Sarath T",
    location: "Erode, Tamil Nadu",
  },
  {
    testimonial:
      "I'm grateful for the personalized guidance I received at Kasthuri Medical Mission. The faculty's expertise and the immersive learning experiences have shaped me into a confident medical professional.",
    author: "Jayanthi S",
    location: "Erode, Tamil Nadu",
  },
  {
    testimonial:
      "Choosing Kasthuri Medical Mission was the best decision of my career. The rigorous curriculum and emphasis on practical skills have equipped me with the knowledge needed to excel in healthcare.",
    author: "Kamali M",
    location: "Erode, Tamil Nadu",
  },
];

const CarouselItem = ({ image, testimonial, author, location }) => (
  <div className="Carousel_Images w-full flex-shrink-0 pt-[50px]">
    <LazyLoadImage
      src={image}
      effect="blur"
      alt={`Slide ${author}`}
      className="w-[100px] h-[100px] rounded-full border-2 border-gray-300 mx-auto"
      onContextMenu={(e) => e.preventDefault()}
      draggable="false"
    />
    <div className="Carousel_Contents mt-[30px]">
      <h1 className="font-bold w-[750px] mx-auto text-[30px]">{testimonial}</h1>
      <div className="mt-[30px]">
        <b className="text-[20px] font-semibold text-black">{author}</b>
        <p className="text-[14px] text-gray-700">{location}</p>
      </div>
    </div>
  </div>
);

const Scroll: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrevClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextClick,
    onSwipedRight: handlePrevClick,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    if (isTransitioning) {
      const transitionEnd = () => setIsTransitioning(false);
      const timer = setTimeout(transitionEnd, 500); // Match duration-500 from CSS
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isTransitioning]);

  // Adjusted logic to handle continuous looping in the same direction
  const adjustedIndex = (currentIndex + totalImages) % totalImages;

  return (
    <div className="Carousel_Main relative w-full max-w-4xl mx-auto">
      <div
        className="relative h-[450px] overflow-hidden rounded-lg"
        {...swipeHandlers}
      >
        <div
          className={`flex transition-transform duration-500 ease-in-out ${
            isTransitioning ? "" : "duration-0"
          }`}
          style={{ transform: `translateX(-${adjustedIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              image={image}
              testimonial={testimonialData[index].testimonial}
              author={testimonialData[index].author}
              location={testimonialData[index].location}
            />
          ))}
        </div>
      </div>
      <button
        onClick={handlePrevClick}
        className="Carousel_Prev absolute top-1/2 transform -translate-y-1/2 -ml-[80px] left-0 p-2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full"
      >
        <BiChevronLeft size={24} />
      </button>
      <button
        onClick={handleNextClick}
        className="Carousel_Next absolute top-1/2 transform -translate-y-1/2 -mr-[80px] right-0 p-2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full"
      >
        <BiChevronRight size={24} />
      </button>
    </div>
  );
};

export default Scroll;
