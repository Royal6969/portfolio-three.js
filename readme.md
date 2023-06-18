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

```

## Webgrafía y enlaces de interés

### [1. create react app with vite](https://vitejs.dev/guide/)

### [2. install tailwind](https://tailwindcss.com/docs/installation)

### [3. React Three Fiber - Your first scene](https://docs.pmnd.rs/react-three-fiber/getting-started/your-first-scene)

### [4. Download Free 3D Models - Royalty Free & Creative Commons](https://sketchfab.com/features/free-3d-models)