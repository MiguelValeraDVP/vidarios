'use client';

import { motion } from 'framer-motion';
import { FcShop } from 'react-icons/fc';
import { AiTwotoneShop } from 'react-icons/ai';
import Link from 'next/link';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="relative"
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div
        className={`${styles.xPaddings} flex items-center justify-center flex-wrap gap-5`}
      >
        <h4 className="font-bold md:text-[64px] text-[44px] text-[#40aa55] text-center text-shadow">
          Listo para tener tu propio vidario?
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#fff127] rounded-[32px] gap-[12px]"
        >
          <Link href="/" className="flex items-center justify-center">
            <FcShop />
            <span className="font-normal text-[16px] text-white">
              Vamos por el!
            </span>
          </Link>
        </button>
      </div>

      <div className={` ${styles.xPaddings} py-6 flex flex-col bg-[#40aa55]`}>
        <div className="mb-[50px] h-[2px] opacity-10" />

        <div className="flex items-center justify-center lg:justify-between flex-wrap gap-4">
          <Link href="https://www.vidarios.com/shop" target="_blank">
            <img
              src="/vidario-logo-removebg.png"
              alt="Logo"
              className="h-[36px] object-contain"
            />
          </Link>
          <p className="font-normal text-[14px] text-white opacity-50 text-center">
            Copyright © Vidarios&
            <Link
              href="https://portfolio-miguel-valera-2023.netlify.app/"
              target="_blank"
            >
              <span className="cursor-pointer">MiguelFullStackDev.</span>
            </Link>
            All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link href="https://www.vidarios.com/shop" target="_blank">
              <AiTwotoneShop className="w-[24px] h-[24px] object-contain cursor-pointer text-white " />
            </Link>
            {socials.map((social) => (
              <Link href={social.link} target="_blank">
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer text-white"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
