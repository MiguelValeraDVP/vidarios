'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:px-16 px-6 h-[85vh] `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex justify-center items-center h-[100%] `}
    >
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-[50%] md:-mt-[20px] -mt-[12px] h-[100%] "
      >
        <div className="absolute w-[90%] h-[100%]  hero-gradient rounded-tl-[140px] rounded-bl-[140px] z-[0] " />
        {/* <div className="absolute w-[90%] h-[100%] sm:h-[58%] hero-gradient rounded-tl-[140px] rounded-bl-[140px] z-[0] " /> */}
        <img
          src="/vidarios_01-alta-removebg.png"
          alt="hero_cover"
          className="w-full  h-full  object-contain rounded-tl-[140px] z-10 relative  top-[-3px] sm:top-[9px]"
        />
      </motion.div>
      <div className="flex w-[30%]  items-center flex-col h-[100%] relative z-10">
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-col items-start justify-center h-[100%]"
        >
          <p className={styles.heroHeading}>vi</p>
          <div className={styles.heroDText} />
          <p className={styles.heroHeading}>ar</p>
          <p className={styles.heroHeading}>ios</p>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
