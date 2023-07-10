import React, { useEffect, useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { planetVariants } from '../utils/motion';

const WhatsappButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      setIsVisible(scrollPosition > 0); // Adjust the scroll threshold as per your requirement
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      variants={planetVariants('left')}
      initial="hidden"
      animate={isVisible ? 'show' : 'hidden'}
      className={`fixed bottom-[74px] right-[70px] z-[20] cursor-pointer ${
        isVisible ? '' : 'hidden'
      }`}
    >
      <a
        href="https://wa.me/+59897162551"
        rel="noreferrer"
        target="_blank"
        className="w-[60px] h-[60px] bg-[] rounded-[50%] flex justify-center  text-center pt-[12px] bg-[#0dc143] drop-shadow-[0 2px 10px rgba(0, 0, 0, 0.2)] transition-transform-[0.3s ease-in-out]"
      >
        <BsWhatsapp size={30} color="white" />
      </a>
    </motion.div>
  );
};

export default WhatsappButton;
