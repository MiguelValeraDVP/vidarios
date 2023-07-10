'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TypingText } from '../components';

const sendEmail = () => {
  //   e.preventDefault();
  //   emailjs.sendForm(
  //     'service_2e87yvg',
  //     'template_shq1f4s',
  //     form.current,
  //     'G-2V_h30ttQT8gm5U'
  //   );
  //   e.target.reset();
  // };
};
const Contact = () => (
  <section className={`${styles.paddings} relative z-10`} id="whatIsNew">
    <TypingText title="| Contacto" textStyles="text-center" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8 items-center`}
    >
      <TypingText
        title=" Si quieres dejar alguna consulta, sugerencia o un mensaje para nosotros,
      puedes hacerlo acá!"
        textStyles="text-center font-extrabold text-[27px]"
      />
      <div className="gradient-02" />

      <motion.div
        variants={fadeIn('up', 'spring', 1, 0.75)}
        className={`${styles.flexCenter} flex-1 w-[90%]`}
      >
        <form
          onSubmit={sendEmail}
          className=" flex flex-col gap-[1.2rem] md:p-[20px] w-[100%] md:w-[90%]"
        >
          <input
            type="text"
            name="name"
            id="name"
            className="bg-transparent border border-solid border-green-600 w-full p-6 rounded-md text-green-600"
            placeholder="Type your full name"
            required
          />
          <input
            className="bg-transparent border border-solid border-green-600 w-full p-6 rounded-md text-green-600"
            type="email"
            name="email"
            id="email"
            placeholder="enter your email address"
            required
          />
          <textarea
            type="text"
            name="message"
            id="message"
            rows={7}
            required
            className="bg-transparent border border-solid border-green-600 w-full p-6 rounded-md text-white placeholder-white"
            placeholder="Typer your message, i will text you back as soon as possible."
          />
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Send message
          </button>
        </form>
      </motion.div>
    </motion.div>
  </section>
);

export default Contact;
