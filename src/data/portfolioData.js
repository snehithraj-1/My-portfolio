export const personalData = {
  name: "Raj",
  surname: "",
  fullName: "Raj",
  title: "Full Stack Web Developer",
  tagline: "Building Modern Web Applications, Intelligent Products & 3D Experiences with the Power of AI.",
  bio: "I am a Full Stack Web Developer and Computer Science student who builds modern web frameworks and intelligent applications to engineer functional, scalable, and visually breathtaking software. I turn ambitious ideas into working, production-ready applications at lightning speed.",
  location: "India",
  status: "Available for Projects & Full-Time Roles",
  email: "rajsrmap2@gmail.com",
  socials: {
    github: "https://github.com/snehithraj-1",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com"
  },
  stats: [
    { label: "Live Web Apps", value: "2 Deployed", icon: "Rocket" },
    { label: "Tech Stacks Mastered", value: "12+", icon: "Cpu" },
    { label: "Coding Hours", value: "2,500+", icon: "Clock" },
    { label: "Problem Solving", value: "500+", icon: "Code2" }
  ]
};

export const skillsData = {
  categories: ["All", "Frontend", "Backend", "Databases", "Tools & AI"],
  skills: [
    // Frontend
    { name: "React.js", category: "Frontend", level: 92, icon: "react", color: "#61dafb", description: "Hooks, Context API, dynamic routing, component architecture" },
    { name: "JavaScript (ES6+)", category: "Frontend", level: 95, icon: "javascript", color: "#f7df1e", description: "Async/Await, Closures, DOM manipulation, Web APIs" },
    { name: "TypeScript", category: "Frontend", level: 88, icon: "code", color: "#3178c6", description: "Static typing, interfaces, generics, type-safe development" },
    { name: "HTML5 & Modern CSS3", category: "Frontend", level: 96, icon: "html", color: "#e34f26", description: "Semantic markup, Flexbox, CSS Grid, animations, responsive design" },
    { name: "Three.js / WebGL", category: "Frontend", level: 85, icon: "box", color: "#00f2fe", description: "3D scene creation, Shaders, particle systems, camera controls" },
    
    // Backend
    { name: "Python / Flask", category: "Backend", level: 90, icon: "server", color: "#3776ab", description: "Flask REST APIs, PyMySQL database routing, session auth, Vercel WSGI" },
    { name: "Node.js & Express", category: "Backend", level: 88, icon: "nodejs", color: "#68a063", description: "Event-driven runtime, RESTful APIs, middleware, secure endpoints" },
    { name: "Java & C++", category: "Backend", level: 86, icon: "coffee", color: "#ea2d2e", description: "Object-oriented programming, data structures, algorithms" },
    
    // Databases
    { name: "MySQL & PyMySQL", category: "Databases", level: 90, icon: "database", color: "#336791", description: "Relational modeling, complex queries, transactions, cloud connectors" },
    { name: "SQLite", category: "Databases", level: 92, icon: "database", color: "#003b57", description: "Embedded databases, zero-config persistence, cloud edge fallback" },
    { name: "MongoDB", category: "Databases", level: 85, icon: "database", color: "#47a248", description: "Schema modeling, aggregation pipelines, Mongoose ODM" },

    // Tools & AI
    { name: "Git & GitHub", category: "Tools & AI", level: 94, icon: "git-branch", color: "#f05032", description: "Branching workflows, version control, multi-repo deployment" },
    { name: "Vercel & Cloud CI/CD", category: "Tools & AI", level: 92, icon: "cloud", color: "#ffffff", description: "Production deployments, serverless functions, edge routing" },
    { name: "Vite & Modern Tooling", category: "Tools & AI", level: 94, icon: "zap", color: "#646cff", description: "High-speed bundling, hot reload, environment configs" },
    { name: "AI Tools & LLMs", category: "Tools & AI", level: 90, icon: "sparkles", color: "#a855f7", description: "OpenAI, Gemini APIs, prompt engineering, AI development tools" }
  ]
};

export const projectsData = [
  {
    id: "campus-trade",
    title: "Campus-Trade - University Marketplace",
    tagline: "Hyperlocal College Marketplace for Books, Tech & Essentials",
    category: "Full Stack",
    liveStatus: "Live on Vercel",
    featured: true,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    description: "A dedicated university marketplace web application allowing students to buy, sell, and trade textbooks, electronics, and study materials securely.",
    fullDescription: "Campus-Trade provides a trusted, student-only circular economy within university campuses. Engineered with Python, Flask, PyMySQL with automated SQLite fallback, and a modern responsive frontend. Features user authentication, product listings with image uploads, category filtering, and direct peer-to-peer contact. Hosted and running live in production on Vercel.",
    technologies: ["Python", "Flask", "PyMySQL", "SQLite", "JavaScript", "HTML5/CSS3", "Vercel"],
    demoUrl: "https://campus-trade-blond.vercel.app/",
    githubUrl: "https://github.com/snehithraj-1/Campus-trade",
    highlights: [
      "Live production deployment on Vercel with high availability",
      "Secure student user registration and session-based authentication",
      "Dynamic database architecture with PyMySQL and SQLite resilience",
      "Zero-fee peer-to-peer textbook, electronics, and gadget trading",
      "Search, categorization, and responsive UI for mobile and desktop"
    ]
  },
  {
    id: "uneeds-campus",
    title: "YOU NEEDS - Campus Peer Delivery Platform",
    tagline: "Peer-to-Peer College Delivery & Resource Sharing Suite",
    category: "Full Stack",
    liveStatus: "Live on Vercel",
    featured: true,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    description: "A secure peer-to-peer campus delivery platform connecting hostelers with day scholars for essential deliveries and resource sharing within college campuses.",
    fullDescription: "YOU NEEDS solves everyday campus logistical barriers by connecting hostel residents with day scholars for on-demand errand requests, food delivery, and supplies. Built with React, TypeScript, and Vite with responsive UI components, geolocation support, and real-time order matching. Hosted and running live in production on Vercel.",
    technologies: ["React", "TypeScript", "Vite", "Geolocation API", "Tailwind CSS", "Vercel"],
    demoUrl: "https://uneeds-ten.vercel.app/",
    githubUrl: "https://github.com/snehithraj-1/uneeds",
    highlights: [
      "Live production deployment on Vercel with instant edge caching",
      "Peer-to-peer request dispatch linking hostelers and day scholars",
      "Geolocation-based campus delivery coordination and routing",
      "TypeScript type-safe architecture with modular responsive components",
      "Real-time task tracking and campus errand settlement"
    ]
  }
];

export const experienceTimeline = [
  {
    period: "2023 - Present",
    title: "Computer Science & Engineering",
    role: "Undergraduate Student & Full Stack Developer",
    organization: "University Engineering Institute",
    description: "Deep-diving into Data Structures & Algorithms, Database Management Systems, Operating Systems, Web Technologies, and Full Stack Architecture.",
    badge: "Education",
    achievements: [
      "Solved 500+ algorithmic and data structure challenges in C++ and JavaScript",
      "Built and deployed production-grade applications: Campus-Trade and YOU NEEDS live on Vercel",
      "Active contributor to open-source software and developer communities on GitHub"
    ]
  },
  {
    period: "2024",
    title: "Full Stack & Cloud Database Engineering",
    role: "Full Stack Developer",
    organization: "Independent Projects",
    description: "Architected and shipped Campus-Trade, integrating Flask, PyMySQL database architectures with SQLite fallback, and modern responsive marketplace interfaces.",
    badge: "Milestone",
    achievements: [
      "Engineered secure student authentication and inventory management systems",
      "Built resilient database connectors supporting both PyMySQL and SQLite",
      "Configured seamless cloud serverless deployments on Vercel"
    ]
  },
  {
    period: "2024 - 2025",
    title: "Peer-to-Peer Campus Logistics & Modern React",
    role: "Lead Frontend & Product Architect",
    organization: "YOU NEEDS Platform",
    description: "Developed and launched the YOU NEEDS peer-to-peer delivery platform using React, TypeScript, Vite, and geolocation campus routing.",
    badge: "Innovation",
    achievements: [
      "Designed real-time peer dispatch connecting day scholars and hostelers",
      "Delivered high-performance TypeScript single-page application hosted on Vercel",
      "Optimized mobile-first interface for fast campus utility interactions"
    ]
  },
  {
    period: "Future Horizon",
    title: "Building Scalable Systems & Future Tech",
    role: "Aspiring Cloud & Full Stack Architect",
    organization: "Global Tech Community",
    description: "Continuously pushing boundaries in high-concurrency cloud distributed systems, AI agent workflows, and cutting-edge 3D web applications.",
    badge: "Vision",
    achievements: [
      "Deepening expertise in distributed systems and microservice architectures",
      "Contributing to leading open-source web frameworks",
      "Building impactful technology solutions for millions of worldwide users"
    ]
  }
];

export const terminalCode = `// raj.config.js - Developer Profile Configuration
const developer = {
  name: "Raj",
  github: "https://github.com/snehithraj-1",
  role: "Full Stack Web Developer",
  education: "B.Tech in Computer Science & Engineering",
  specialty: "Engineering high-performance web applications & interactive 3D platforms",
  status: "Available for high-impact projects & roles",
  
  featuredProjects: [
    {
      name: "Campus-Trade",
      live: "https://campus-trade-blond.vercel.app/",
      repo: "snehithraj-1/Campus-trade",
      stack: ["Python", "Flask", "PyMySQL", "SQLite", "Vercel"]
    },
    {
      name: "YOU NEEDS",
      live: "https://uneeds-ten.vercel.app/",
      repo: "snehithraj-1/uneeds",
      stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vercel"]
    }
  ],

  coreStack: {
    frontend: ["React.js", "TypeScript", "JavaScript (ES6+)", "Three.js", "Modern CSS3"],
    backend: ["Python / Flask", "Node.js", "Express.js", "C++", "Java"],
    databases: ["MySQL", "PyMySQL", "SQLite", "MongoDB"],
    tools: ["Vercel", "Git / GitHub", "Vite", "Docker", "AI Tools"]
  },

  philosophy: () => {
    return "Build fast, think user-first, and deploy production-grade software that solves real everyday challenges.";
  }
};

export default developer;`;
