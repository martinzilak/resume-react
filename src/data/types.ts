// Content only: plain text, no markup or non-breaking spaces. Layout and typography live in the components.

export type Link = {
  title: string;
  url: string;
};

export type Entry = {
  startYear: string;
  endYear?: string;
  // Written out rather than computed, as for projects it is the effort, not the time between the years.
  duration?: string;
  title: string;
  description?: string;
  note?: string;
  links: Link[];
};

export type Contact = {
  address: string[];
  phone: string;
  email: string;
  website: string;
};

export type Language = {
  name: string;
  level: string;
};

export type Skill = {
  name: string;
  level: 1 | 2 | 3;
  lastUsed?: string;
};

export type Degree = {
  startYear: string;
  endYear?: string;
  title: string;
  field: string;
  school: string;
  url: string;
};

export type Resume = {
  name: {
    first: string;
    last: string;
  };
  contact: Contact;
  languages: Language[];
  skills: Skill[];
  education: Degree[];
  hobbies: string[];
  experience: Entry[];
  projects: Entry[];
};
