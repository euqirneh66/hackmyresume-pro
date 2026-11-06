export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  summary: string;
  highlights: string[];
}

export interface Education {
  id: string;
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  score?: string;
}

export interface SkillGroup {
  id: string;
  name: string;
  keywords: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  url?: string;
  keywords?: string[];
}

export interface ResumeData {
  basics: {
    name: string;
    label: string;
    email: string;
    phone: string;
    url?: string;
    summary: string;
    location: {
      city: string;
      region?: string;
      countryCode?: string;
    };
    profiles?: Array<{
      network: string;
      username: string;
      url: string;
    }>;
  };
  work: WorkExperience[];
  education: Education[];
  skills: SkillGroup[];
  projects: Project[];
}

export type ResumeTheme = 'modern' | 'minimal' | 'executive' | 'ats';
