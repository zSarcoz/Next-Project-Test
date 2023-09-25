"use client";

import Feed from "@components/Feed";
import { motion } from "framer-motion";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="head_text text-center"
    >
      Discover & Share
      <br className="max-md:hidden" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="orange_gradient text-center"
      >
        {" "}
        AI-Powered Prompts
      </motion.span>
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 2 }}
      className="desc text-center"
    >
      Promptopia is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </motion.p>

      <Feed />

  </section>
);

export default Home;
