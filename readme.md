# Portfolio Three.js

### Creamos una aplicación de React con Vite

Creamos una nueva carpeta para este proyecto y la abrimos con VScode, y una vez dentro, abrimos abrimos una terminal para ejecutar el siguiente comando de npm, seleccionando las opciones de React con Javascript:

```bash
npm create vite@latest ./ -- --template react
```

### Instalar el framework de css de Tailwind

```bash
npm install -D tailwindcss
```

```bash
npm install --legacy-peer-deps -D postcss autoprefixer
```

```bash
npx tailwindcss init -p
```

```bash
npx tailwindcss init
```

### Instalamos Three.js y una serie de dependencias que vamos a utilizar

```bash
npm install --legacy-peer-deps three
```

```bash
npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
```

**Nota:** *--legacy-peer-deps* lo usamos cuando vamos a utilizar algún paquete antiguo, como es en este caso el *react-tilt*, de modo que esto nos provee una lista de todos los paquetes que necesitaríamos para que la compatibilidad sea correcta.

## Snippets iniciales

### tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#050816",
      secondary: "#aaa6c3",
      tertiary: "#151030",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/herobg.png')",
    },
  },
};
export const plugins = [];
```

### utils --> constants.js

```js
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
```

### utils --> framer-motion.js

```js
export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
```

### utils --> tailwind.js

```js
const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

export { styles };
```

### carpetas de *assets* y *components*

[GitHub Gist Code Snippets](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqazU4UGt4TEJMMEtoUm9ackphcWM1UUFHZXRSZ3xBQ3Jtc0ttaEVKejhKR0RMWUFhZGthOXRaWEp5QmNSRmlNaXcyRjE1eVVEbVhRZUNrRVZQajJtajhTM3FEYW16c1l0b2VqMDNtMWloLWVrSFBxS2RReFAyUGxNWkR1UWI0VENNY290R3I5T3dDSm5CZWIteXo4cw&q=https%3A%2F%2Fgist.github.com%2Fadrianhajdin%2Fb1d33c262941a7e21aad833a1cfc84b1&v=0fYi8SGA20k)

# 1. Layout --> App.jsx

```jsx
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}
```

# 2. Componentes

# 2.1. Navbar

```jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { tailwind_styles } from '../utils/tailwind_styles'
import { navLinks } from '../utils/constants'
import { logo, menu, close } from '../assets'


const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [toggleNav, setToggleNav] = useState(false);


  return (
    <nav className={`${tailwind_styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
          className='flex items-center gap-2'
          to='/'
          onClick={() => {
            setActiveLink('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-12 h-12 object-contain' />
          <p className='text-white text-[14px] font-bold cursor-pointer flex'>Sergio&nbsp;<span className='sm:block hidden'>|&nbsp;Frontend Developer</span></p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li 
              key={link.id} 
              className={`${activeLink === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActiveLink(link.title)}
            >
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggleNav ? close : menu} 
            alt="menu" 
            className='w-[28px] h-[28px] object-contain cursor-pointer' 
            onClick={() => setToggleNav(!toggleNav)}
          />
        </div>

        <div className={`${!toggleNav ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li 
                key={link.id} 
                className={`${activeLink === link.title ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggleNav(!toggleNav);
                  setActiveLink(link.title);
                }}
              >
                <a href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Navbar
```

## 2.2. components --> Hero.jsx

```jsx
import { motion } from "framer-motion"
import { ComputersCanvas } from "./canvas";
import { tailwind_styles } from '../utils/tailwind_styles'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${tailwind_styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        <div>
          <h1 className={`${tailwind_styles.heroHeadText} text-white`}>
            Hi, I'm&nbsp;
            <span className="text-[#915eff]">Sergio</span>
          </h1>

          <p className={`${tailwind_styles.heroSubText} mt-2 text-white-100`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dolorum!
          </p>
        </div>
      </div>
        
      <ComputersCanvas />

      <div className="absolute bottom-5 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev 
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
```

### 2.2.1. components --> canvas --> Computers.jsx

```jsx
import { Suspense, useEffect, useState } from "react" 
import { Canvas } from "@react-three/fiber" // is just an empty canvas allowing us to place something on it
import { 
  OrbitControls, // helper to drag on that canvas
  Preload,       
  useGLTF        // most important because it's going to allow us to import 3D models
} from "@react-three/drei" 
import CanvasLoader from '../Loader'

const Computers = ({ isMobileView }) => {
  const computerGltfModel = useGLTF('./desktop_pc/scene.gltf');

  return ( // when we're creating 3D elements we have to start with <mesh> tag
    <mesh>
      {/* we have to create the light */}
      <hemisphereLight intensity={0.15} groundColor='black' />
      
      {/* we need a point light */}
      <pointLight intensity={1} />

      {/* also the main light */}
      <spotLight position={[-20, 50, 10]} 
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      
      {/* to pass the computer model */}
      <primitive 
        object={computerGltfModel.scene} 
        scale={isMobileView ? 0.7 : 0.75}
        position={isMobileView ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

// finally to see the computer model, we need to load it into a canvas
const ComputersCanvas = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // first we want to check if we're on a mobile device
    // we get the media and check for a match with max-width
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobileView(mediaQuery.matches);

    // whenever the width changes we need to modify that
    const handleMediaQueryChange = (event) => {
      setIsMobileView(event.matches);
    }

    // now since we're in react and within the useEffect we have to add an event listener, and later we have to remove it
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    // we have to close that media query listener
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  }, [])
  
  return (
    <Canvas 
      frameloop="demand" 
      shadows 
      camera={{ position: [20, 3, 5], fov: 25 }} // most important because it's where are we looking at this model from (position + field of view)
      gl={{ preserveDrawingBuffer: true }} // to render our model porperly
    >
      {/* Suspense allow us to have a loader while our model is loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls to allow us to move the model left and right */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          // polar angles to not to rotate the model all the way around, to rotate it around a specific angle around teh specific axis 
        />
          <Computers isMobileView={isMobileView} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
```

### 2.2.2. components --> Loader.jsx

```jsx
import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load">
        <p style={{ fontSize: 14, fontWeight: 800, color: '#f1f1f1', marginTop: 40 }}>
          {progress.toFixed(2)}%
        </p>
      </span>
    </Html>
  )
}

export default Loader
```

## 2.3. components --> About.jsx

```jsx
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
```

### 2.3.1. HOC --> SectionWrapper.jsx

```jsx
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
```

## 2.4. components --> Experience.jsx

```jsx
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import { tailwind_styles } from '../utils/tailwind_styles'
import { experiences } from '../utils/constants'
import { SectionWrapper } from '../HOC'
import { textVariant } from "../utils/framer-motion"

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={tailwind_styles.sectionSubText}>What I've done so far</p>
        <h2 className={tailwind_styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background:'#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={ 
        <div className="flex justify-center items-center w-full h-full"> 
          <img 
            src={experience.icon} 
            alt={experience.company_name} 
            className="w-[60%] h-[60%] object-contain" 
          />
        </div> 
      }
    >
      <div>
        <h3 className="text-white text-[24px]">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li 
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  )
}

export default SectionWrapper(Experience, 'experience')
```

## 2.5. components --> Tech.jsx

```jsx
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../HOC'
import { technologies } from '../utils/constants'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div key={technology.name} className='w-28 h-28'>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, 'tech');
```

### 2.5.1. components --> canvas --> Ball.jsx

```jsx
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { 
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture 
} from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />

      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        
        <meshStandardMaterial 
          color='#fff8eb' 
          polygonOffset 
          polygonOffsetFactor={-5}
          flatShading 
        />

        <Decal 
          position={[0, 0, 1]} 
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal} 
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas 
      frameloop="demand" 
      // shadows 
      // camera={{ position: [20, 3, 5], fov: 25 }} // most important because it's where are we looking at this model from (position + field of view)
      gl={{ preserveDrawingBuffer: true }} // to render our model porperly
    >
      {/* Suspense allow us to have a loader while our model is loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls to allow us to move the model left and right */}
        <OrbitControls
          enableZoom={false}
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
          // polar angles to not to rotate the model all the way around, to rotate it around a specific angle around teh specific axis 
        />
          <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas
```

## 2.6. components --> Work.jsx

```jsx
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

export default SectionWrapper(Works, 'works')
```

## 2.7. Feedbacks.jsx

```jsx
import { motion } from "framer-motion"
import { tailwind_styles } from '../utils/tailwind_styles'
import { SectionWrapper } from '../HOC'
import { fadeIn, textVariant } from "../utils/framer-motion"
import { testimonials } from '../utils/constants'

const Feedbacks = () => {
  return (
    <div className="mt-12-bg-black-100 rounded-[20px]">
      <div className={`${tailwind_styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={tailwind_styles.sectionSubText}>What others says</p>
          <h2 className={tailwind_styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>

      <div className={`${tailwind_styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard 
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => {
  return (
    <motion.div
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    >
      <p className="text-white font-black text-[48px]">"</p>
      
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">
          {testimonial}
        </p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img 
            src={image}
            alt={`feedback-by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Feedbacks, 'feedbacks')
```

## 2.8. components --> Contact.jsx

```jsx
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { tailwind_styles } from '../utils/tailwind_styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../HOC'
import { slideIn } from '../utils/framer-motion'

const Contact = () => {
  const contactFormRef = useRef();

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  
  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setContactForm({
      ...contactForm,
      [name]: value
    });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    emailjs.send(
      'service_wlx9a41',
      'template_jgaxawe',
      {
        from_name: contactForm.name,
        to_name: 'Sergio',
        from_email: contactForm.email,
        to_email: 'sergiodiazcampos@gmail.com',
        message: contactForm.message
      },
      'gf8dryPUX0DRAMY-z'
    
    ).then(() => {
      setIsLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');

      setContactForm({
        name: '',
        email: '',
        message: ''
      })
    
    }, (error) => {
      setIsLoading(false);
      console.log(error);
      alert('Something went wrong.');
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        variants={slideIn('left', 'tween', 0.2, 1)}
      >
        <p className={tailwind_styles.sectionSubText}>Get in touch</p>
        <h3 className={tailwind_styles.sectionHeadText}>Contact</h3>

        <form
          ref={contactFormRef}
          onSubmit={handleFormSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input 
              type='text' 
              name='name' 
              value={contactForm.name} 
              onChange={handleFormChange} 
              placeholder="What's your name?" 
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input 
              type='email' 
              name='email' 
              value={contactForm.email} 
              onChange={handleFormChange} 
              placeholder="What's your email?" 
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your message</span>
            <textarea
              rows='7'
              style={{ resize: 'none' }}
              // type='text' 
              name='message' 
              value={contactForm.message} 
              onChange={handleFormChange} 
              placeholder="What do you want to say?" 
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        variants={slideIn('right', 'tween', 0.2, 1)}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
```

### 2.8.1. Earth.jsx

```jsx
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { 
  OrbitControls,
  Preload,
  useGLTF 
} from "@react-three/drei"
import CanvasLoader from '../Loader'

const Earth = () => {
  const earthGltfModel = useGLTF('./planet/scene.gltf');

  return (
    <primitive 
      object={earthGltfModel.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls 
          autoRotate
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas
```

### 2.8.2. Stars.jsx

```jsx
import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points 
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial 
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
```

## Webgrafía y enlaces de interés

### [1. create react app with vite](https://vitejs.dev/guide/)

### [2. install tailwind](https://tailwindcss.com/docs/installation)

### [3. React Three Fiber - Your first scene](https://docs.pmnd.rs/react-three-fiber/getting-started/your-first-scene)

### [4. Download Free 3D Models - Royalty Free & Creative Commons](https://sketchfab.com/features/free-3d-models)