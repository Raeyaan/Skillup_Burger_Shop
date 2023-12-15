// Write all the code here
import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";

function Home() {
  console.log("Home component rendered"); // Example log statement
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  }
  return (
    <motion.div
      initial = {options.initial}
      whileInView = {options.whileInView}
    >
      <Founder />
      <Menu />
    </motion.div>
  );
}
export default Home;