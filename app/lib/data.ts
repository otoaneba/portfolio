import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaAngular, FaJs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import exampleImage from "@/public/example.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const; // make it readonly 

export const experiencesData = [
  {
    title: "Graduated Georgia Institute of Technology",
    location: "Atlanta, GA",
    description:
      "I graduated with a focus on HCI",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Junior Developer", 
    location: "Atlanta, GA",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(FaJs),
    date: "2018 - 2019",
  },
  {
    title: "Full-Stack Developer",
    location: "Atlanta, GA",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaAngular),
    date: "2019 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Atlas AT&T",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Angular", "typescript", "bootstrap", "ExpressJS", "NodeJS", "mongoDB", "OracleDB", "Java", "Spring"],
    imageUrl: "meme-generator.png",
  },
  {
    title: "Urbanization in East Asia",
    description:
      "Created an interactive visualization for urbanization data in East Asia",
    tags: ["javascript", "D3", "html", "css"],
    imageUrl: "urbanization.png",
  },
  {
    title: "Life Expectancy and GDP",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["javascript", "D3", "html", "css"],
    imageUrl: "global-life-expactancy-and-GDP.png",
  },
  {
    title: "Digital Business Card",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "javascript", "HTML", "css"],
    imageUrl: "digital-business-card.png",
  },
  {
    title: "Meme Generator",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "javascript", "HTML", "css", "firebase", "vite"],
    imageUrl: "meme-generator.png",
  },
  {
    title: "Authentication App",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "typescript", "prisma", "nestJS", "postgreSQL"],
    imageUrl: "meme-generator.png",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Next.js",
  "NestJS",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Prisma",
  "MongoDB",
  "REST",
  "Express",
  "PostgreSQL",
  "Python",
  "Flask",
  "Framer Motion",
] as const;