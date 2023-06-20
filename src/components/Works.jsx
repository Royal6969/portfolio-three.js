import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { tailwind_styles } from '../utils/tailwind_styles'
import { github } from '../assets'
import { SectionWrapper } from '../HOC'
import { projects } from '../utils/constants'
import { fadeIn, textVariant } from "../utils/framer-motion"


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={tailwind_styles.sectionSubText}>My Work</p>
        <h2 className={tailwind_styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]" 
          variants={fadeIn('', '', 0.1, 1)}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum illo ullam commodi iusto, obcaecati soluta quae temporibus ratione porro ea aliquam molestiae corporis non architecto pariatur suscipit vero recusandae eveniet ipsa, voluptatem, consequuntur quibusdam. Non cum blanditiis architecto ullam quaerat, laudantium culpa id saepe, eligendi aliquid dicta necessitatibus perspiciatis? Nostrum.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt 
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        options={{ max: 45, scale: 1, speed: 450 }}
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image} alt={name}
            className="w-full h-full object-cover rounded-2xl" 
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, '_blank')}
            >
              <img 
                src={github} alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">
            {name}
          </h3>

          <p className="mt-2 text-secondary text-[14px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}


export default SectionWrapper(Works, 'work')