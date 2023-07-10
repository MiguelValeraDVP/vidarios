'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import ProductGalleryCarousel from '../components/ProductGalleryCarousel';
import { TypingIcons } from '../components/CustomTexts';
import { iconsList } from '../constants';

const OurProducts = () => (
  <section className={`${styles.paddings} relative z-10 mt-5`}>
    <div className="gradient-02" />
    <TypingText title="| Nuestros productos" textStyles="text-center" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col md:flex-row items-center  `}
    >
      <div className="h-[420px] flex flex-col justify-around mr-[20px]">
        <TitleText
          title={<>Que vidario se alinea con vos?</>}
          textStyles="md:leading-[60px] leading-[45px] text-center"
        />
        <div className="flex justify-between">
          <TypingIcons iconsArray={iconsList} />
        </div>
      </div>
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative flex w-full h-[550px] ml-[20px]"
      >
        <ProductGalleryCarousel />
      </motion.div>
    </motion.div>
  </section>
);

export default OurProducts;
