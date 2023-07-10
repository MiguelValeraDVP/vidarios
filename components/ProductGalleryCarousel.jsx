/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { vidariosDataList } from '../constants';

const ProductGalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex =
      currentIndex === 0 ? vidariosDataList.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex =
      currentIndex === vidariosDataList.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-[1400px] h-[100%] w-full m-auto py-16 px-4 relative group">
      <div
        style={{
          backgroundImage: `url(${vidariosDataList[currentIndex].img})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          maxHeight: '100%',
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
        <div className="block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-[#40aa55] cursor-pointer">
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </div>
        <div className="block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-[#40aa55] cursor-pointer">
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
        <div className="flex justify-center items-center py-2">
          {vidariosDataList.map((vidario, index) => (
            <RxDotFilled
              key={vidario.id}
              className=" text-[#40aa55]"
              size={`${index === currentIndex ? '50' : '30'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGalleryCarousel;
