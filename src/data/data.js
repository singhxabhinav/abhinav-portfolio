import ct1 from "../assets/img/image.png";

import itw1 from "../assets/itw1.png";
import arch12 from "../assets/arch12.png";
import jl12 from "../assets/jl12.png";
import conf1 from "../assets/zeotap.png";
//import mylib1 from "../assets/mylib1.png";

export const socialLinks = [
  {
    id: "github",
    url: "https://github.com/singhxabhinav",
    iconName: "FaGithub",
    label: "GitHub",
    bgColor: "bg-gray-900",
    textColor: "text-white",
    borderColor: "border-gray-700",
    hoverBgColor: "hover:bg-gray-700",
    hoverBorderColor: "hover:border-white",
  },
  {
    id: "twitter",
    url: "https://x.com/stfu_abhi",
    iconName: "FaTwitter",
    label: "Twitter",
    bgColor: "bg-blue-400",
    textColor: "text-white",
    borderColor: "border-blue-300",
    hoverBgColor: "hover:bg-blue-300",
    hoverBorderColor: "hover:border-white",
  },
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/abhinavxsingh28/",
    iconName: "FaLinkedin",
    label: "LinkedIn",
    bgColor: "bg-blue-700",
    textColor: "text-white",
    borderColor: "border-blue-500",
    hoverBgColor: "hover:bg-blue-500",
    hoverBorderColor: "hover:border-white",
  },
  {
    id: "leetcode",
    url: "https://leetcode.com/u/soberxabhi/",
    iconName: "FaCode",
    label: "LeetCode",
    bgColor: "bg-yellow-400",
    textColor: "text-black",
    borderColor: "border-yellow-300",
    hoverBgColor: "hover:bg-yellow-300",
    hoverBorderColor: "hover:border-white",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Uber Trip Analysis",
    description:
      "Power BI dashboard analyzing Uber trips in New Jersey (June 2024). Includes booking trends, revenue, peak hours, and spatial insights using DAX, slicers, maps, and drill-through. Features 4 dashboards with KPIs, time, detail, and geospatial analysis.",
    tags: [
      "Data Analysis",
      "Data Visualization",
      "DAX",
      "Reporting & Analysis",
    ],
    imageUrl: [ct1],
    github: "https://github.com/singhxabhinav/Uber-Trip-Analysis",
    liveLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7330567842402095105/?originTrackingId=iw9mgg6ITyqQr8qjFTX9rQ%3D%3D",
  },
  {
    id: 2,
    title: "Human Activity Recognition Using Smartphone",
    description:
      "Made a ML Model that would classify the Human Activity (WALKING, WALKINGUPSTAIRS, WALKINGDOWNSTAIRS, SITTING, STANDING, LAYING) using various classification techniques.",
    tags: ["Python", "Machine Learning", "Data Analysis"],
    imageUrl: [itw1],
    //
    github:
      "https://github.com/singhxabhinav/Human-Activity-Recognition-Using-Smartphone",
  },
  // {
  //   id: 3,
  //   title: "Login Signup System",
  //   description:
  //     "A secure authentication system with email/password and OAuth integration.",
  //   tags: ["React", "Firebase", "Tailwind CSS"],
  //   imageUrl: [],
  //   liveLink: "https://login-signup-system-zeta.vercel.app/",
  //   github: "https://github.com/harsshhit/Login-Signup-system",
  // },
  {
    id: 4,
    title: "Walmart Sales Data Analysis Using SQL",
    description:
      "This project analyzes Walmart's sales data using advanced SQL techniques like window functions and CTEs & subqueries. Key insights were extracted by performing aggregations, ranking, and filtering to uncover trends in sales performance. The project demonstrates strong SQL query writing and data analysis skills.",
    tags: ["MySQL", "Data Analysis"],
    imageUrl: [arch12], // Add images if available
    // liveLink: "https://archspaceinterio.com/",
    github: "https://github.com/singhxabhinav/Walmart-sales-analysis-SQL",
  },
  {
    id: 5,
    title: "Car Sales  Analysis Dashboard",
    description:
      "Interactive Power BI dashboard analyzing car sales data across top brands. Features key metrics, market share, top models by revenue, sales trends, and brand value comparison. Built with Power BI Desktop, DAX, and data visualization techniques.",
    tags: ["Power Bi", "DAX", "Reporting & Analysis"],
    imageUrl: [jl12],
    //liveLink: "https://joblisting-seven.vercel.app/",
    github: "https://github.com/singhxabhinav/Car-sales-dashboard-analysis",
  },
  {
    id: 6,
    title: "Zeotap Assessment",
    description:
      "Assessment for data science intern which show my skills in EDA ,Report Building and Time Management",
    tags: ["Python", "MS Word", "Machine Learning", "Report Building"],
    imageUrl: [conf1],
    //liveLink: "https://conference-mern-frontend.vercel.app/",
    github: "https://github.com/singhxabhinav/Zeotap-Assessment",
  },
];

export const skillsData = {
  programmingLanguages: ["C", "C++", "Python"],
  DataAnalysis: [
    "Python",
    "SQl",
    "Power Bi",
    "MS Excel",
    "Predictive Analysis",
  ],
  backendAndDatabase: ["MongoDB", "MySQL", "SQlite 3", "Database Modeling"],
  developmentTools: [
    "Git & GitHub",
    "CI/CD pipelines",
    "Docker",
    "Agile/Scrum methodologies",
  ],
};

export const resumeCVData = {
  resumeLink:
    "https://www.canva.com/design/DAGpfVbNRUM/oIzg1llKjsy98LyaCreIWg/edit?utm_content=DAGpfVbNRUM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
};
