import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { tailwind_styles } from '../utils/tailwind_styles'
import { services } from '../utils/constants'
import { fadeIn, textVariant } from '../utils/framer-motion'
import { SectionWrapper } from '../HOC'


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={tailwind_styles.sectionSubText}>Introduction</p>
        <h2 className={tailwind_styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p 
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]" 
        variants={fadeIn('', '', 0.1, 1)}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus atque dolor quasi enim voluptatibus. Facere, suscipit ab autem, voluptatibus explicabo maxime labore doloremque quo libero molestiae veniam quaerat, ad similique asperiores odit dolore nam nesciunt aliquam corporis deserunt atque ullam! Assumenda, dolores? Molestias quas, magnam qui aut nesciunt harum libero.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card" 
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      >
        <div 
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
          options={{ max: 45, scale: 1, speed: 450 }}
        >
          <img
            className="w-16 h-16 object-contain" 
            src={icon}  
            alt={title}
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


export default SectionWrapper(About, 'about');