import { Layout, Server, Settings, TestTubeDiagonal } from "lucide-react";

export const skillCategories = [
  {
    name: "Frontend",
    icon: Layout,
    skills: [
      {
        name: "React",
        level: 90,
        certified: true,
        projects: ["E-commerce Platform", "Dashboard"],
      },
      {
        name: "Next.js",
        level: 88,
        certified: true,
        projects: ["Blog Platform", "Marketing Site"],
      },
      {
        name: "TypeScript",
        level: 85,
        certified: true,
        projects: ["API Integration"],
      },
      {
        name: "CSS/Tailwind",
        level: 95,
        projects: ["Portfolio", "Landing Pages"],
      },
      {
        name: "Bootstrap",
        level: 92,
        certified: true,
        projects: ["Admin Dashboard", "Responsive Website"],
      },
      {
        name: "Redux Toolkit",
        level: 87,
        projects: ["State Management System", "Real-time Dashboard"],
      },
      {
        name: "RTK Query",
        level: 85,
        projects: ["Data Fetching Layer", "API Cache Management"],
      },
      {
        name: "Formik + Yup",
        level: 88,
        projects: ["Complex Forms", "Validation Systems"],
      },
      {
        name: "React Query",
        level: 86,
        projects: ["Data Synchronization", "Cache Management"],
      },
      {
        name: "Framer Motion",
        level: 82,
        projects: ["Animated UI", "Interactive Components"],
      },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    skills: [
      {
        name: "Node.js",
        level: 88,
        certified: true,
        projects: ["REST API", "Services"],
      },
      {
        name: "Express.js",
        level: 86,
        certified: true,
        projects: ["API Gateway", "Middleware System"],
      },
      {
        name: "NestJS",
        level: 84,
        projects: ["Microservices", "API Platform"],
      },
      {
        name: "PHP",
        level: 88,
        certified: true,
        projects: ["REST API", "Services"],
      },
      {
        name: "Laravel",
        level: 86,
        certified: true,
        projects: ["API Gateway", "Middleware System"],
      },
      {
        name: "SQL",
        level: 85,
        certified: true,
        projects: ["Database Design"],
      },
      {
        name: "MongoDB",
        level: 83,
        projects: ["NoSQL Database", "Data Modeling"],
      },
      {
        name: "GraphQL",
        level: 81,
        projects: ["API Design", "Query Optimization"],
      },
      {
        name: "RabbitMQ",
        level: 79,
        projects: ["Caching Layer", "Session Management"],
      },
    ],
  },
  {
    name: "DevOps",
    icon: Settings,
    skills: [
      {
        name: "Docker",
        level: 80,
        certified: true,
        projects: ["Container Orchestration"],
      },
      { name: "CI/CD", level: 85, projects: ["Pipeline Automation"] },
      {
        name: "AWS",
        level: 78,
        certified: true,
        projects: ["Cloud Infrastructure"],
      },
    ],
  },
  {
    name: "Testing",
    icon: TestTubeDiagonal,
    skills: [
      {
        name: "Jest",
        level: 80,
        certified: true,
        projects: ["Unit testing"],
      },
    ],
  },
];
