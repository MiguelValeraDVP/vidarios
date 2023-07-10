'use client';

import { motion } from 'framer-motion';
import { iconsVariant, textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-[#40aa55] ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === '' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);
export const TypingIcons = ({ iconsArray, textStyles }) => (
  <motion.div
    variants={textContainer}
    className={`font-normal text-[14px] text-[#40aa55] ${textStyles} flex justify-between w-[100%]`}
  >
    {iconsArray.map((icon, index) => (
      <motion.span
        variants={iconsVariant(index * 0.6)}
        key={index}
        className="flex justify-between"
      >
        {icon}
      </motion.span>
    ))}
  </motion.div>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-[#40aa55] ${textStyles} text-shadow`}
  >
    {title}
  </motion.h2>
);
