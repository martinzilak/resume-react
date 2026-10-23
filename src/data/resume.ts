import { Resume } from './types.ts';

export const resume = {
  name: {
    first: 'Martin',
    last: 'Žilák',
  },

  contact: {
    address: ['Hálova 9', 'Bratislava', '851 01', 'Slovakia'],
    phone: '+421 948 484 490',
    email: 'martin@zilak.sk',
    website: 'https://zilak.sk',
  },

  languages: [
    { name: 'english', level: 'fluent' },
    { name: 'slovak', level: 'native' },
  ],

  skills: [
    { name: 'TypeScript', level: 3 },
    { name: 'JavaScript', level: 3 },
    { name: 'React', level: 3 },
    { name: 'React Native', level: 3 },
    { name: 'Expo', level: 3 },
    { name: 'Kotlin', level: 3, lastUsed: '2023' },
    { name: 'Java', level: 3, lastUsed: '2023' },
    { name: 'SQL', level: 2, lastUsed: '2023' },
    { name: 'Python', level: 1, lastUsed: '2023' },
  ],

  education: [
    {
      startYear: '2017',
      endYear: '2020',
      title: "Master's Degree",
      field: 'Computer Science',
      school: 'Masaryk University',
      url: 'https://is.muni.cz/obory/3148?fakulta=1433;lang=en;setlang=en',
    },
    {
      startYear: '2018',
      title: 'Erasmus+',
      field: 'CS & Management',
      school: 'University of Pavia',
      url: 'https://portale.unipv.it/en',
    },
    {
      startYear: '2014',
      endYear: '2017',
      title: "Bachelor's Degree",
      field: 'Computer Science',
      school: 'Masaryk University',
      url: 'https://is.muni.cz/obory/3142?fakulta=1433;lang=en;setlang=en',
    },
  ],

  hobbies: ['cooking', 'cycling', 'reading'],

  experience: [
    {
      startYear: '2025',
      endYear: '2026',
      duration: '12 months',
      title: 'Mobile Team Leader',
      description:
        'Allocating resources, reviewing code, overseeing releases, architecting new internal libraries.',
      note: 'Leading a team of 4',
      links: [{ title: 'Sensoneo', url: 'https://sensoneo.com/' }],
    },
    {
      startYear: '2023',
      endYear: '2025',
      duration: '26 months',
      title: 'Senior Mobile Software Engineer',
      description:
        'Bringing 15 deposit-return apps from concept to the stores in React Native & Expo, owning development, native modules, builds, releases and tester groups.',
      note: '600K+ downloads',
      links: [{ title: 'Sensoneo', url: 'https://sensoneo.com/' }],
    },
    {
      startYear: '2023',
      duration: '4 months',
      title: 'Senior Full-stack Software Engineer',
      description:
        'Designing and developing a car rental software product for Web & Mobile in Kotlin & React.',
      links: [{ title: 'Swapp', url: 'https://joinswapp.com' }],
    },
    {
      startYear: '2021',
      endYear: '2023',
      duration: '22 months',
      title: 'Full-stack Software Engineer',
      description:
        'Designing and developing a full-stack health insurance software product in Kotlin & React.',
      links: [{ title: 'Itera', url: 'https://www.itera.com' }],
    },
    {
      startYear: '2020',
      endYear: '2021',
      duration: '14 months',
      title: 'Front-end Software Engineer',
      description:
        'Designing and developing a cotton mill management system in React, deployed separately for each mill, letting users configure machines (carding, winding…) and their order in production.',
      links: [
        { title: 'ARTIN Solutions', url: 'https://www.artinsolutions.com' },
      ],
    },
    {
      startYear: '2019',
      endYear: '2020',
      duration: '6 months',
      title: 'Project & Team Technical Leader',
      description:
        'Analysing end user requests, designing tasks, developing features, reviewing code, deploying new releases.',
      note: 'Leading a team of 7',
      links: [{ title: 'ARTIN', url: 'https://artin.eu' }],
    },
    {
      startYear: '2018',
      endYear: '2019',
      duration: '14 months',
      title: 'Full-stack Software Engineer',
      description:
        'Designing and developing internal business requirements management software in Java, Kotlin, AngularJS & Vue.js.',
      links: [{ title: 'ARTIN', url: 'https://artin.eu' }],
    },
    {
      startYear: '2017',
      endYear: '2018',
      duration: '8 months',
      title: 'Software Developer',
      description:
        'Building a metadata editor for digital libraries in Java & Angular.',
      links: [
        {
          title: 'Institute of Computer Science MU',
          url: 'https://is.muni.cz/lide/pracoviste?lang=en;zobrazid=14920240',
        },
      ],
    },
    {
      startYear: '2015',
      endYear: '2016',
      duration: '10 months',
      title: 'QA Engineer',
      description:
        'Writing functional and unit tests for the Business Central web application in Java & Selenium.',
      links: [{ title: 'Red Hat', url: 'http://www.redhat.com/en' }],
    },
  ],

  projects: [
    {
      startYear: '2022',
      duration: '3 months',
      title: 'Interactive Career Quiz',
      description:
        'An interactive career quiz application supporting 40+ languages, featuring multimedia content and advanced animations. Built in React using GSAP.',
      note: 'Team of 2',
      links: [
        { title: 'H&M', url: 'https://hm.com' },
        {
          title: 'Project',
          url: 'https://career.hm.com/the-immersive-tool/',
        },
      ],
    },
    {
      startYear: '2021',
      endYear: '2022',
      duration: '3 months',
      title: 'B2B Website',
      description:
        'A multi-page B2B website with custom components and a blog, built to client requirements and designs in React & Next.js.',
      links: [
        { title: 'Dutchie', url: 'https://dutchie.com' },
        { title: 'Project', url: 'https://business.dutchie.com/' },
      ],
    },
    {
      startYear: '2021',
      duration: '3 months',
      title: 'Hivesweeper',
      description:
        'A bee-themed mobile game taking classic Minesweeper to a hexagonal grid. Built in React Native, deployed to the App Store.',
      links: [{ title: 'Website', url: 'https://hivesweeper.zilak.sk' }],
    },
  ],
} satisfies Resume;
