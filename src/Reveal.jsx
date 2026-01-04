// ملف Reveal.jsx (أو ضعه في components)
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Reveal = ({ children, variant = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" }); // يشتغل مرة واحدة، وشوي قبل الوصول

  const variants = {
    up: { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 } },
    scale: { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      initial={variants[variant].initial}
      animate={isInView ? variants[variant].animate : variants[variant].initial}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;