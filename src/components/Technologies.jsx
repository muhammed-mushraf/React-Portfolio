import { SiPython } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";

// import { SiHtml5 } from "react-icons/si";
// import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
// import { SiXml } from "react-icons/si";

import { SiDjango } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMysql } from "react-icons/si";

import { SiGit } from "react-icons/si";

import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiHtml5 className="text-7xl" style={{ color: "#E34F26" }} />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCss3 className="text-7xl" style={{ color: "#1572B6" }} />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiXml className="text-7xl" style={{ color: "#0067A3" }} />
        </div> */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPython className="text-7xl" style={{ color: "#306998" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl" style={{ color: "#F7DF1E" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiReact className="text-7xl" style={{ color: "#61DAFB" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiNodedotjs className="text-7xl" style={{ color: "green" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiDjango className="text-7xl" style={{ color: "#0d432f" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPostgresql className="text-7xl" style={{ color: "#336791" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl" style={{ color: "#4479A1" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiGit className="text-7xl" style={{ color: "#F05032" }} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
