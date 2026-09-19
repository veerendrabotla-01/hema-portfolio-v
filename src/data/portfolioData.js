import ReactImg from '../assets/images/react.svg'
import JsIcon from '../assets/images/JsIcon.jpg'
import TailwindCssIcon from '../assets/images/TailwindCssIcon.svg'
import CssIcon from '../assets/images/CssIcon.svg'
import HtmlIcon from '../assets/images/HtmlIcon.svg'
import { SiExpress, SiCplusplus, SiAngular, SiFlask, SiNodedotjs, SiGithub, SiKotlin, SiSupabase } from 'react-icons/si'
import { FaJava, FaPython, FaAws } from "react-icons/fa";
import { TbApi } from 'react-icons/tb'

// Project Thumbnails
import UnstopThumb from '../assets/images/unstop_platform_preview_1789798607431.jpg'
import OppHubThumb from '../assets/images/opportunity_hub_preview_1789798621377.jpg'
import DaadiThumb from '../assets/images/daadi_game_preview_1789798635349.jpg'
import AriseThumb from '../assets/images/arise_life_os_preview_1789798647756.jpg'
import FakeNewsThumb from '../assets/images/fake_news_system_preview_1789798660278.jpg'

// Profile Image
import ProfilePic from '../assets/images/hema_nandam_whatsapp_profile.jpg'

export const portfolioData = {
  user: {
    name: "Hema Nandam",
    role: "B.Tech CSE (AI & ML) Graduate | Software Engineer",
    image: ProfilePic,
    bio: "B.Tech CSE (AI & ML) graduate with hands-on experience in Java, Python, AWS, machine learning, NLP, web development, and cloud-based applications.",
    detailedBio: [
      "B.Tech CSE (AI & ML) graduate with hands-on experience in Java, Python, AWS, machine learning, NLP, web development, and cloud-based applications. Completed internships in AWS, serverless technologies, full-stack development, and database integration.",
      "Built projects in machine learning, AI chatbots, and energy-aware path planning in 2D and 3D environments. Seeking an entry-level Software Engineer role."
    ],
    location: "Mandapeta, Andhra Pradesh, India",
    phone: "+91 6301171106",
    email: "hemanandam6301171106@gmail.com",
    tagline: "Building stuff That Does More Than Impress",
    subTagline: "Aspiring Software Engineer based in India",
    languages: ["English"],
    typeAnimationRoles: [
      "Software Engineer",
      1000,
      "AWS Developer",
      1000,
      "Full-Stack Developer",
      1000,
      "AI & ML Enthusiast",
      1000,
    ]
  },
  pages: {
    about: {
      kicker: 'MY JOURNEY',
      kickerMobile: "Let's Work Together",
      title: 'ABOUT ME',
      description: 'A learner, creator, and coder exploring the art of web development',
    },
    projects: {
      kicker: 'View My Works',
      title: 'PROJECTS',
      description: 'Explore a showcase of my creative journey, where passion meets design to craft engaging digital experiences.',
    },
    contact: {
      kicker: 'Build Something Amazing Together',
      kickerMobile: "Let's Work Together",
      title: 'CONTACT',
      description: "Excited about a new project? Let's connect and bring it to life together",
    }
  },
  navLinks: [
    { label: 'Home', path: '/', iconName: 'Home' },
    { label: 'About', path: '/about', iconName: 'About' },
    { label: 'Projects', path: '/projects', iconName: 'Projects' },
    { label: 'Contact', path: '/contact', iconName: 'Contact' },
  ],
  workHighlights: [
    'AWS Certified Developer',
    'Full-Stack Expertise',
    'AI & ML Solutions',
    'Serverless Architecture',
  ],
  workMetrics: [
    { value: '5+', label: 'Projects Built' },
    { value: '200+', label: 'Solved Problems' },
    { value: '100%', label: 'Dedicated Delivery' },
  ],
  homeServices: [
    {
      number: '01',
      title: 'Cloud Development',
      label: 'AWS & Serverless',
      iconName: 'Api',
      theme: 'dark',
      description: 'Expertise in building scalable serverless applications using AWS Lambda, API Gateway, and Boto3 for automated cloud service integration.',
      points: ['Serverless Architecture', 'AWS Lambda & S3', 'Cloud Automation'],
    },
    {
      number: '02',
      title: 'Full-Stack Web',
      label: 'Modern Web Apps',
      iconName: 'Globe',
      theme: 'light',
      description: 'Developing high-performance web applications using React, Angular, Node.js, and DynamoDB for seamless end-to-end user experiences.',
      points: ['React & Angular', 'Node.js Backend', 'Scalable Databases'],
    },
    {
      number: '03',
      title: 'AI & ML Solutions',
      label: 'Intelligence & NLP',
      iconName: 'Figma',
      theme: 'dark',
      description: 'Implementing machine learning models and NLP systems for tasks like fake news detection and intelligent chatbot distribution.',
      points: ['NLP & TF-IDF', 'ML Classification', 'Predictive Analysis'],
    },
    {
      number: '04',
      title: 'System Architecture',
      label: 'Reliable Scalability',
      iconName: 'Care',
      theme: 'light',
      description: 'Designing modular system architectures with structured metadata pipelines and automated deduplication workflows for job aggregation.',
      points: ['Modular Design', 'Metadata Pipelines', 'Content Normalization'],
    },
  ],
  services: [
    {
      id: '01',
      iconName: 'Api',
      shortTitle: 'Cloud Dev',
      title: 'Cloud Architecture',
      description: 'Designing and implementing scalable, serverless backend solutions using AWS and modern cloud patterns.',
      tags: ['AWS Lambda', 'Boto3', 'Serverless'],
    },
    {
      id: '02',
      iconName: 'Globe',
      shortTitle: 'Web Apps',
      title: 'Full-Stack Web',
      description: 'Building robust end-to-end applications with modern frontend frameworks and efficient backend services.',
      tags: ['React', 'Node.js', 'DynamoDB'],
    },
    {
      id: '03',
      iconName: 'Mobile',
      shortTitle: 'Mobile',
      title: 'Android Dev',
      description: 'Creating native Android experiences with Kotlin and Jetpack Compose for productivity and gaming.',
      tags: ['Kotlin', 'Compose', 'MVVM'],
    },
    {
      id: '04',
      iconName: 'Care',
      shortTitle: 'AI/ML',
      title: 'AI Solutions',
      description: 'Leveraging machine learning and NLP to build intelligent systems and data-driven applications.',
      tags: ['Python', 'NLP', 'TensorFlow'],
    },
    {
      id: '05',
      iconName: 'Figma',
      shortTitle: 'Systems',
      title: 'System Design',
      description: 'Architecting complex data pipelines and automated workflows for high-performance applications.',
      tags: ['Pipelines', 'Scaling', 'Automation'],
    },
  ],
  reviews: [
    {
      name: "Srinivas Rao",
      role: "Technical Lead",
      content: "Nandam's approach to serverless architecture during her internship was impressive. She has a strong grasp of AWS services and clean code principles.",
      rating: 5,
      image: "https://avatar.iran.liara.run/public/boy?username=Srinivas"
    },
    {
      name: "Priyanka Sharma",
      role: "Project Manager",
      content: "A proactive developer who delivers results. Her work on the E-Learning platform was both scalable and maintainable. Highly recommended for full-stack roles.",
      rating: 5,
      image: "https://avatar.iran.liara.run/public/girl?username=Priyanka"
    },
    {
      name: "Dr. K. V. Kumar",
      role: "Academic Mentor",
      content: "Exceptional analytical skills in AI and ML. Her project on energy-aware path planning showed great promise and technical depth.",
      rating: 5,
      image: "https://avatar.iran.liara.run/public/boy?username=Kumar"
    }
  ],
  stats: [
    { label: 'Completed builds', value: 5, suffix: '+' },
    { label: 'Problems Solved', value: 200, suffix: '+' },
    { label: 'AWS Internships', value: 2, suffix: '' },
    { label: 'Coding Practice', value: 100, suffix: '+' },
  ],
  socials: [
    { name: "Github", url: "https://github.com/hema082004", icon: "github" },
    { name: "Linkedin", url: "https://linkedin.com", icon: "linkedin" },
    { name: "LeetCode", url: "https://leetcode.com", icon: "leetcode" },
  ],
  categories: [
    { name: "Fullstack", id: "fullstack" },
    { name: "Mobile/Android", id: "uiux" },
    { name: "ML/NLP", id: "animation" },
  ],
  skills: [
    {
      title: 'Programming',
      summary: 'Strong foundation in multiple programming languages.',
      skills: [
        { name: 'C', icon: SiCplusplus },
        { name: 'Java', icon: FaJava },
        { name: 'Python', icon: FaPython },
        { name: 'R', image: "https://www.vectorlogo.zone/logos/r-project/r-project-icon.svg" },
      ],
    },
    {
      title: 'Web Technologies',
      summary: 'Frontend and backend development expertise.',
      skills: [
        { name: 'HTML', image: HtmlIcon },
        { name: 'CSS', image: CssIcon },
        { name: 'JavaScript', image: JsIcon },
        { name: 'Angular', icon: SiAngular },
        { name: 'React', image: ReactImg },
        { name: 'Flask', icon: SiFlask },
        { name: 'Node.js', icon: SiNodedotjs },
      ],
    },
    {
      title: 'Cloud & Tools',
      summary: 'Proficient in AWS cloud services and developer tools.',
      skills: [
        { name: 'AWS', icon: FaAws },
        { name: 'S3', icon: FaAws },
        { name: 'EC2', icon: FaAws },
        { name: 'RDS', icon: FaAws },
        { name: 'Lambda', icon: FaAws },
        { name: 'API Gateway', icon: TbApi },
        { name: 'Git', image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
        { name: 'GitHub', icon: SiGithub },
      ],
    },
  ],
  experience: [
    {
      role: "AWS / Cloud Development Intern",
      company: "Technical Hub",
      duration: "May 2025 – June 2025",
      bullets: [
        "Worked on a cloud-based application using Boto3, API Gateway, and AWS Lambda.",
        "Designed a scalable serverless architecture with automated integration of AWS cloud services."
      ]
    },
    {
      role: "Full-Stack / AWS Intern",
      company: "Technical Hub",
      duration: "May 2024 – July 2024",
      bullets: [
        "Developed a full-stack E-Learning web application using React and Angular for the frontend, Node.js for the backend, and DynamoDB for the database.",
        "Deployed the application on AWS using Lambda, API Gateway, and S3 to support a scalable serverless architecture."
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
      institution: "Aditya College of Engineering & Technology, Surampalem",
      duration: "2022 – 2026",
      grade: "72%"
    },
    {
      degree: "Intermediate (Class XII)",
      institution: "Vidya Vikas Junior College, Mandapeta",
      duration: "2020 – 2022",
      grade: "87%"
    },
    {
      degree: "High School (Class X)",
      institution: "Z. P. Girls High School, Mandapeta",
      duration: "2019 – 2020",
      grade: "95.5%"
    }
  ],
  certifications: [
    { title: "AWS Certified Developer – Associate", issuer: "Amazon Web Services" },
    { title: "Introduction to Machine Learning", issuer: "NPTEL" }
  ],
  projects: [
    {
      id: 1,
      title: "Unstop++ / Opportunity & Noticeboard Platform",
      role: "Co-Founder & Full-Stack Developer",
      duration: "Jan 2026 – Present",
      description: "Co-architected a high-throughput opportunity platform for posting internships, job drives, and academic notices. Integrated an automated WhatsApp distribution channel for traffic acquisition. Designed modular permission management and audit logging systems.",
      technologies: ["react", "nodejs", "express", "api"],
      liveLink: "https://event-veeru-main.vercel.app/",
      githubRepo: "",
      category: "fullstack",
      isFeatured: true,
      thumbnail: UnstopThumb
    },
    {
      id: 2,
      title: "Opportunity Hub (Job Aggregation Platform)",
      role: "Co-System Architect & Product Lead",
      duration: "2025 – Present",
      description: "Collaborated on designing a scalable job aggregation architecture, standardizing heterogeneous listing data from multiple external sources. Built content normalization pipelines, automated deduplication workflows, and structured metadata schemas.",
      technologies: ["react", "tailwind", "api"],
      liveLink: "https://opp-launch-careers.vercel.app/",
      githubRepo: "",
      category: "fullstack",
      isFeatured: true,
      thumbnail: OppHubThumb
    },
    {
      id: 3,
      title: "Daadi – Traditional Indian Board Game Platform",
      role: "Co-Developer & Mobile Engineer",
      duration: "",
      description: "Co-developed a modern Android implementation of Nine Men's Morris using Kotlin, Jetpack Compose, and clean MVVM architecture. Integrated Supabase services for real-time multiplayer matchmaking, authentication, and an AI-assisted administrative dashboard using the Gemini API.",
      technologies: ["android", "kotlin", "supabase"],
      liveLink: "https://daadi-legal.vercel.app/",
      githubRepo: "",
      category: "uiux",
      isFeatured: true,
      thumbnail: DaadiThumb
    },
    {
      id: 4,
      title: "ARISE : Life OS – Personal Productivity & Health Platform",
      role: "Co-Developer & Android Engineer",
      duration: "",
      description: "Co-developed an offline-first Android productivity app using Kotlin, Jetpack Compose, and clean MVVM architecture. Implemented local data persistence with Room Database, custom system alarms via AlarmManager, and client-side AES-GCM encryption for cloud sync.",
      technologies: ["android", "kotlin", "javascript"],
      liveLink: "https://arise-docs.vercel.app/",
      githubRepo: "",
      category: "uiux",
      isFeatured: true,
      thumbnail: AriseThumb
    },
    {
      id: 5,
      title: "Fake News Detection System",
      role: "Machine Learning / NLP Developer",
      duration: "",
      description: "Developed an ML system to classify news articles as real or fake using NLP and TF-IDF-based feature extraction. Trained and evaluated classification models for automated detection of potentially misleading information.",
      technologies: ["python", "javascript", "html"],
      liveLink: "",
      githubRepo: "",
      category: "animation",
      isFeatured: true,
      thumbnail: FakeNewsThumb
    }
  ]
};
