'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from '../components';

const Feedback = () => (
  <section
    className={`${styles.paddings} relative z-10`}
    id="meetVidariosOwners"
  >
    <TypingText
      title="| Conoce a los creadores"
      textStyles="text-center my-[40px] "
    />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-6 `}
    >
      <div className="feedback-gradient" />
      <div className="flex h-full items-center justify-center sm:flex-row flex-col ">
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-1 w-full md:w-2/3 mb-2 h-[100%] sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] bg-[#fff127a4] relative mr-2 "
        >
          <h4 className="font-bold text-3xl sm:text-4xl text-black text-shadow leading-[1.25]">
            Simon Cuberos
          </h4>
          <p className="mt-2 font-normal text-lg sm:text-xl text-[#40aa55] text-shadow leading-[1.375]">
            CEO | Founder
          </p>
          <p className="mt-6 font-normal text-base sm:text-lg text-black text-shadow leading-[1.5]">
            Mi nombre es Simón Cuberos, soy de Caracas, Venezuela y vivo hace 4
            años en Montevideo. Vidarios para mí ha sido la herramienta de
            expresión artística donde mi corazón y mi mente se unen con la
            naturaleza para crear piezas irrepetibles. Me acercó al mundo de las
            plantas para ayudarme a evolucionar como emprendedor y ofrecer
            diseños de mayor calidad con gran nivel creativo. Queremos
            convertirnos en referencia en cuanto al reciclaje del vidrio y
            producir a través de la economía plateada.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="relative flex-1 flex justify-center items-center ml-2 mt-2"
        >
          <div className="w-full h-full rounded-[40px] overflow-hidden">
            <img
              src="/simon-cubero.jpeg"
              alt="Simon CEO"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
      {/* Simon arriba, Ale abajo */}
      <div className="flex h-full items-center justify-center sm:flex-row flex-col">
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="relative flex-1 flex justify-center items-center mr-2 mb-2"
        >
          <img
            src="/alejandra-rivero.jpeg"
            alt="Simon CEO"
            className="w-full h-auto min-h-[210px] object-contain  rounded-[40px]"
          />
        </motion.div>
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-1  w-full md:w-2/3  h-[100%] sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] bg-[#fff127a4] relative ml-2 mt-2"
        >
          <h4 className=" font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-black text-shadow">
            Alejandra Rivero
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-[#40aa55] text-shadow">
            CEO | Founder |
          </p>
          <p className="mt-6 font-normal text-base sm:text-lg text-black text-shadow leading-[1.5]">
            Hola, soy Alejandra. Me caracterizo por ser alegre y muy sensible.
            Estudié comunicación social y, desde hace 3 años, soy parte de
            Vidarios. Un emprendimiento en el que he colaborado desde la
            organización financiera y las redes sociales.
          </p>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Feedback;
