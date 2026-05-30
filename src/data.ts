import { ResumeData } from "./types";

export const resumeData: ResumeData = {
  name: "ANUJ",
  email: "anujrajliwal55@gmail.com",
  linkedin: "https://www.linkedin.com/in/anuj-1a201230b/",
  github: "https://github.com/AnujRajliwal",
  objective: "To work in an environment where I can learn new skills, explore new technologies and grow through real work experience.",
  skills: [
    "Python Programming",
    "SQL",
    "JAVA",
    "Linux",
    "AI & ML",
    "Salesforce Apex"
  ],
  education: [
    {
      level: "Graduation (B.Tech)",
      school: "Arya College of Engineering and I.T.",
      affiliation: "Rajasthan Technical University",
      score: "CGPA of 7.5",
      details: "Pursuing Bachelor of Technology in Artificial Intelligence and Data Science."
    },
    {
      level: "Senior Secondary (12th Grade)",
      school: "Sarvodaya Sr. Sec. School, Jhajjar, Haryana",
      affiliation: "Central Board Of Secondary Education (CBSE)",
      score: "74%",
      details: "Completed Senior Secondary Education."
    },
    {
      level: "Secondary Education (10th Grade)",
      school: "Sadhi Lal Sr. Sec. School, Charkhi Dadri, Haryana",
      affiliation: "Board of Secondary Education Haryana (BSEH)",
      score: "98%",
      details: "Completed Secondary Education with a stellar academic distinction."
    }
  ],
  projects: [
    {
      title: "DuckDB Sakila Analytics",
      description: "Developed a robust data analysis project using DuckDB, SQL, and Python on the Sakila movie rental dataset.",
      tech: ["DuckDB", "SQL", "Python"],
      details: [
        "Analyzed the classic Sakila database using local file analytical storage.",
        "Performed complex multi-table joins, analytical aggregations, and CSV-based data exports.",
        "Generated deep customer and revenue insights with basic custom visualizations in Python."
      ]
    },
    {
      title: "Weather Data Analysis & Visualization System",
      description: "Built an end-to-end Python-based system to collect, store, and process daily and hourly weather data.",
      tech: ["Python", "SQLite", "Matplotlib"],
      details: [
        "Injected and stored structured historical climate records securely into a SQLite database.",
        "Designed local SQL queries to preprocess, parse, and filter hourly/daily climate trends.",
        "Implemented high-quality Matplotlib-based visualizations to facilitate trend detection and actionable environmental insights."
      ]
    }
  ],
  internships: [
    {
      role: "Salesforce Programming Architect Intern",
      company: "Salesforce Programing Academy / Architect Program",
      duration: "2 Months",
      details: [
        "Acquired thorough proficiency in Apex programming, including triggers, classes, and standard object queries.",
        "Designed and implemented visual automation workflows to optimize customer relationships.",
        "Developed customized lightning components and modules to handle mock enterprise requirements."
      ]
    },
    {
      role: "AI & ML Intern",
      company: "AICTE & Edunet Foundation",
      duration: "6 Weeks",
      details: [
        "Acquired key competencies in Machine Learning paradigms and neural network fundamentals.",
        "Conducted professional exploratory data preprocessing, handle missing inputs, and engineered clean feature pipelines.",
        "Engineered, trained, and tested functional ML algorithms to forecast and classify custom datasets."
      ]
    }
  ],
  extracurriculars: [
    {
      category: "Hackathons",
      events: ["Code-E-Manipal", "Hack Arya Verse"]
    },
    {
      category: "Expositions",
      events: ["Project Expo (JECRC Foundation)"]
    }
  ],
  personal: {
    dob: "29th June, 2005",
    nationality: "Indian",
    languages: ["Hindi", "English"]
  }
};
