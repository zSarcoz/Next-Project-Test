"use client";

import Feed from "@components/Feed";
import { motion } from "framer-motion";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <motion.h1
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="head_text text-center"
    >
      Discover & Share
      <br className="max-md:hidden" />
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3 }}
        className="orange_gradient text-center"
      >
        {" "}
        AI-Powered Prompts
      </motion.span>
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5 }}
      className="desc text-center"
    >
      Promptopia is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </motion.p>

    <Feed />
  </section>
);

export default Home;
