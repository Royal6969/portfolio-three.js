import { motion } from "framer-motion"
import { tailwind_styles } from '../utils/tailwind_styles'
import { staggerContainer } from "../utils/framer-motion"


const SectionWrapper = (Component, idSectionName) => function HOC() {
  return (
    <motion.section 
      className={`${tailwind_styles.padding} max-w-7xl mx-auto relative z-0`}
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
    >
      <span className="hash-span" id={idSectionName}>
        &nbsp;
      </span>

      <Component />
    </motion.section>
  )
}


export default SectionWrapper