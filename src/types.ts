export interface Project {
  title: string;
  description: string;
  details: string[];
  tech: string[];
}

export interface Internship {
  role: string;
  company: string;
  duration: string;
  details: string[];
}

export interface Education {
  level: string;
  school: string;
  affiliation: string;
  score: string;
  details?: string;
}

export interface ExtraCurricular {
  category: string;
  events: string[];
}

export interface PersonalDetails {
  dob: string;
  nationality: string;
  languages: string[];
}

export interface ResumeData {
  name: string;
  email: string;
  linkedin: string;
  github: string;
  objective: string;
  skills: string[];
  projects: Project[];
  internships: Internship[];
  education: Education[];
  extracurriculars: ExtraCurricular[];
  personal: PersonalDetails;
}
