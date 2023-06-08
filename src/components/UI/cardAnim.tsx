import React, { useRef, useEffect } from 'react';

const ImageSlider = () => {
  const trackRef = useRef(null);
  const prevPercentageRef = useRef(0);
  const mouseDownAtRef = useRef(0);
  const minPercentage = -100;
  const maxPercentage = 0;

  useEffect(() => {
    const handleOnDown = (e) => {
      mouseDownAtRef.current = e.clientX;
    };

    const handleOnUp = () => {
      mouseDownAtRef.current = 0;
      prevPercentageRef.current = trackRef.current.dataset.percentage;
    };

    const handleOnMove = (e) => {
      if (mouseDownAtRef.current === 0) return;

      const mouseDelta = parseFloat(mouseDownAtRef.current) - e.clientX;
      const maxDelta = window.innerWidth / 2;

      prevPercentageRef.current = -50;

      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained = parseFloat(prevPercentageRef.current) + percentage;
      let nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, maxPercentage), minPercentage);

      if (nextPercentage < minPercentage || nextPercentage > maxPercentage) {
        const overflow = Math.abs(nextPercentage) - 100;
        nextPercentage = nextPercentage < minPercentage ? maxPercentage + overflow : minPercentage - overflow;
      }

      trackRef.current.dataset.percentage = nextPercentage;

      trackRef.current.style.transform = `translate(${nextPercentage}%, -50%)`;

      const images = trackRef.current.getElementsByClassName('image');
      for (const image of images) {
        image.style.objectPosition = `${100 + nextPercentage}% center`;
      }
    };

    window.addEventListener('mousedown', handleOnDown);
    window.addEventListener('touchstart', (e) => handleOnDown(e.touches[0]));
    window.addEventListener('mouseup', handleOnUp);
    window.addEventListener('touchend', (e) => handleOnUp(e.touches[0]));
    window.addEventListener('mousemove', handleOnMove);
    window.addEventListener('touchmove', (e) => handleOnMove(e.touches[0]));

    return () => {
      window.removeEventListener('mousedown', handleOnDown);
      window.removeEventListener('touchstart', (e) => handleOnDown(e.touches[0]));
      window.removeEventListener('mouseup', handleOnUp);
      window.removeEventListener('touchend', (e) => handleOnUp(e.touches[0]));
      window.removeEventListener('mousemove', handleOnMove);
      window.removeEventListener('touchmove', (e) => handleOnMove(e.touches[0]));
    };
  }, []);

  return (
    <div
      id="image-track"
      data-mouse-down-at="0"
      data-prev-percentage="0"
      ref={trackRef}
      className="flex gap-4vmin left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none overflow-hidden"
    >
      <img
        className="image image-animation w-40 h-56 object-cover object-center"
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
        alt="Slider Image 1"
      />
      <img
        className="image w-40 h-56  object-cover object-center"
        src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
        draggable="false"
        alt="Slider Image 2"
      />
      <img
        className="image w-40 h-56  object-cover object-center"
        src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
        alt="Slider Image 3"
      />
      <img
        className="image w-40 h-56  object-cover object-center"
        src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
        alt="Slider Image 4"
      />
      <img
        className="image w-40 h-56  object-cover object-center"
        src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
        alt="Slider Image 5"
      />
      <img
        className="image w-40 h-56  object-cover object-center"
        src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80"
        draggable="false"
        alt="Slider Image 6"
      />
      <img
        className="image w-40 h-56  object-cover object-center"
        src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80"
        draggable="false"
        alt="Slider Image 7"
      />
      <img
        className="image w-40 h-56  object-cover object-center"
        src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
        alt="Slider Image 8"
      />
    </div>
  );
};

export default ImageSlider;

