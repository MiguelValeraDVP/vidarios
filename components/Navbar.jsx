'use client';

import { useState } from 'react';
import { RxDropdownMenu } from 'react-icons/rx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { burgerItems } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}
      >
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />
        <img
          src="/vidario-logo-removebg.png"
          alt="Logo"
          className="h-[75px] object-contain"
        />
        <RxDropdownMenu
          className="text-[#40aa55]"
          size={50}
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen ? (
          <motion.div
            className=" bg-[#fff127a4] absolute top-[14px]  right-[-7px] md:right-[33px] flex flex-col items-end rounded-lg p-8 leading-8 z-20"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <RxDropdownMenu
              className="text-[#40aa55]"
              size={50}
              onClick={() => setIsOpen(!isOpen)}
            />
            <motion.ul>
              {burgerItems.map((item) => (
                <li>
                  <Link
                    href={item.link}
                    key={item.id}
                    className=" text-shadow text-[#40aa55] "
                  >
                    {item.name}
                  </Link>
                  <hr className="my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
                </li>
              ))}
            </motion.ul>
          </motion.div>
        ) : (
          ''
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
