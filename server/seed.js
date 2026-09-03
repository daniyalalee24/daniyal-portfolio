require("dotenv").config();
const mongoose = require("mongoose");
const Project = require("./models/Project");

const projects = [
  {
    order: 1,
    title: "LUMÉ — E-Commerce Web Application",
    description:
      "Full-stack e-commerce platform with JWT auth, role-based authorization, and complete order management.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://lume-client-bay.vercel.app/",
    githubUrl: "https://github.com/daniyalalee24/lume-ecommerce",
    highlights: [
      "JWT-based authentication, bcrypt hashing, protected routes, role-based authorization",
      "RESTful APIs for products, cart, checkout, order cancellation and status management",
    ],
  },
  {
    order: 2,
    title: "TaskFlow — Task Management Application",
    description:
      "Full-stack task manager with user-specific data, filtering, and dark mode support.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://task-flow-personal-project.vercel.app/",
    githubUrl: "https://github.com/daniyalalee24/TaskFlow_PersonalProject",
    highlights: [
      "Task creation, editing, deletion, progress tracking, search, dynamic filtering",
      "Responsive UI with Tailwind CSS and dark mode",
    ],
  },
  {
    order: 3,
    title: "Beautify — Home Beauty Services",
    description:
      "Final year project: responsive service booking platform for clients and admins.",
    techStack: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
    liveUrl: "https://beautifyhomeservice.infinityfree.io/?i=1",
    githubUrl: "https://github.com/daniyalalee24/beautify-home-beauty-services",
    highlights: [
      "Normalized relational database for auth, service catalog, and appointment scheduling",
      "Admin dashboard with date-range filtering and SQL aggregate reports",
    ],
  },
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Project.deleteMany({});
  await Project.insertMany(projects);
  console.log("Seeded projects");
  process.exit();
});
