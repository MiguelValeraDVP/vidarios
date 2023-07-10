'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10 h-[60vh]`} id="about">
    <div className="gradient-02 z-10" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col h-[100%]`}
    >
      <TypingText title="| Acerca de Vidarios" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[2.5rem] font-normal sm:text-[1.25rem] text-center text-[#40aa55] text-shadow"
      >
        Llevamos la naturaleza hacia ti, de una forma creativa y artesanal.
      </motion.p>
      <motion.p
        variants={fadeIn('up', 'tween', 0.4, 1)}
        className="mt-[0.5rem] font-normal sm:text-[1.25rem] text-center text-[#40aa55] text-shadow"
      >
        Tenemos envíos a domicilio o retiros en nuestro taller.
      </motion.p>
    </motion.div>
  </section>
);

export default About;
