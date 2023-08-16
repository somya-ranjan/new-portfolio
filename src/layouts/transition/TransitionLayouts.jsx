import React from "react";
import { motion } from "framer-motion";

function TransitionLayouts({ children, className }) {
  // const opacityAnimation = {
  //   initial: { opacity: 0 },
  //   animate: { opacity: 1 },
  //   exit: { opacity: 0 },
  //   // initial: { opacity: 0, scale: 0 },
  //   // animate: { opacity: 1, scale: 1 },
  //   // exit: { opacity: 0, scale: 0 },
  //   // transition: { ease: "easeInOut", duration: 0.4 },
  // };

  // const rotateAnimation = {
  //   initial: { rotateY: 90 },
  //   animate: { rotateY: 0 },
  //   exit: { rotateY: -90 },
  // };

  // const zoomAnimation = {
  //   initial: { scale: 0.7, opacity: 1 },
  //   animate: { scale: 1, opacity: 1 },
  //   exit: { scale: 0.7, opacity: 0 },
  // };

  // const widthAnimation = {
  //   initial: { width: 0 },
  //   animate: { width: "100%" },
  //   exit: { width: "100%", x: window.innerWidth },
  // };

  // const heightAnimation = {
  //   initial: { height: 0 },
  //   animate: { height: "-100%" },
  //   exit: { height: "-100%", y: -window.innerHeight },
  // };

  const topToBottomAnimation = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
  };
  // const titleVariants = {
  //   initial: {
  //     y: 100,
  //     opacity: 0,
  //     transition: {
  //       type: "spring",
  //       mass: 1,
  //       damping: 10,
  //       stiffness: 80
  //     }
  //   },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       type: "spring",
  //       mass: 1,
  //       damping: 10,
  //       stiffness: 80
  //     }
  //   }
  // };
  return (
    <motion.div
      className={`container-fluid primary_bg text_primary ${className}`}
      variants={topToBottomAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export default TransitionLayouts;
