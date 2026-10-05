import {
  meta,
  shopify,
  starbucks,
  tesla,
  titancorp,
  ac_jsc,
} from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  movie,
  furniture,
  taskly,
} from "../assets/icons";

export const skills = [
  // Frontend & UI
  {
    imageUrl: react,
    name: "React.js",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML5",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS3",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },

  // Backend & Database
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express.js",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Backend",
  },

  // Tools & Version Control
  {
    imageUrl: git,
    name: "Git",
    type: "Tools",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Tools",
  },
];

export const experiences = [
  {
    title: "Intern Frontend Developer",
    company_name: "Apps Cyclone Technology JSC",
    icon: ac_jsc,
    iconBg: "#accbe1",
    date: "December 2025 - January 2026",
    points: [
      "Developed and optimized responsive web interfaces using React.js and Tailwind CSS, ensuring high-quality UI/UX across various devices.",
      "Integrated RESTful APIs to handle dynamic data rendering and improved application performance.",
      "Participated in daily stand-ups and code reviews with the development team to ensure code quality and adhere to project timelines.",
      "Resolved UI bugs and cross-browser compatibility issues, enhancing the overall user experience of the product.",
    ],
  },
  {
    title: "Intern Frontend Developer",
    company_name: "Titan Technology Corporation",
    icon: titancorp,
    iconBg: "#accbe1",
    date: "July 2025 - September 2025",
    points: [
      "Contributed to developing and refining UI components for web applications using Next.js, React, and TailwindCSS.",
      "Assisted in integrating APIs and implementing page routing, ensuring smooth data flow between front-end and back-end.",
      "Worked closely with senior developers to improve layout consistency, responsive behavior, and code structure.",
      "Gained hands-on experience with version control, collaborative workflow, and front-end optimization techniques.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#fbc3bc",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#b7e4c7",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#a2d2ff",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/tphatwebdev",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: taskly,
    theme: "btn-back-blue",
    name: "Taskly (Full-stack Kanban Platform)",
    tags: [
      "React 19",
      "Redux Toolkit",
      "Material-UI",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "@dnd-kit",
    ],
    description:
      "Engineered an enterprise-grade collaborative Kanban platform inspired by Trello with React 19, Redux Toolkit, Material-UI, Node.js, Express, Socket.io, and MongoDB Native Driver. Features @dnd-kit multi-directional drag-and-drop, MongoDB multi-stage aggregation pipelines, dual JWT authentication (HttpOnly cookies with silent refresh queueing), real-time notifications, and zero-disk media streaming to Cloudinary. Deployed with Vercel (frontend) and Render (backend).",
    link: "https://trello-clone-eight-chi.vercel.app",
    linkText: "Live Link",
    sourceCode: "https://github.com/tphatwebdev/Trello_Clone",
    sourceCodeText: "Frontend Code",
    backendSourceCode: "https://github.com/tphatwebdev/Trello_Clone_API",
    backendSourceCodeText: "Backend API",
  },
  {
    iconUrl: movie,
    theme: "btn-back-red",
    name: "Movie Trailer Website",
    tags: ["React.js", "Tailwind CSS", "Vite", "RESTful API", "Vercel"],
    description:
      "Developed a movie-trailer web app with ReactJS and TailwindCSS, featuring a smooth search experience and fast page loading. Deployed on Vercel, ensuring optimal performance and responsive UI across devices.",
    link: "https://fe-movie-trailer.vercel.app/",
    sourceCode: "https://github.com/tienphat112333/FE_Movie-trailer",
  },
  {
    iconUrl: furniture,
    theme: "btn-back-green",
    name: "Furniture Website (Full-stack)",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "Render",
      "Vercel",
    ],
    description:
      "Created a full-stack furniture e-commerce platform with ReactJS, NodeJS, Express, and MongoDB. Implemented user authentication, CRUD operations, and RESTful APIs, deployed with Render (backend) and Vercel (frontend)",
    link: "https://interior-rho-woad.vercel.app/login",
    sourceCode: "https://github.com/tienphat112333/FE_Interior",
  },
  // {
  //   iconUrl: car,
  //   theme: "btn-back-blue",
  //   name: "Car Finding App",
  //   description:
  //     "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
  //   link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  // },
  // {
  //   iconUrl: snapgram,
  //   theme: "btn-back-pink",
  //   name: "Full Stack Instagram Clone",
  //   description:
  //     "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
  //   link: "https://github.com/adrianhajdin/social_media_app",
  // },
  // {
  //   iconUrl: estate,
  //   theme: "btn-back-black",
  //   name: "Real-Estate Application",
  //   description:
  //     "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
  //   link: "https://github.com/adrianhajdin/projects_realestate",
  // },
  // {
  //   iconUrl: summiz,
  //   theme: "btn-back-yellow",
  //   name: "AI Summarizer Application",
  //   description:
  //     "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
  //   link: "https://github.com/adrianhajdin/project_ai_summarizer",
  // },
];
