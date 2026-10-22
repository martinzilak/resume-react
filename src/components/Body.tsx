import { FC } from 'react';
import styled from 'styled-components';
import { BodySection } from './BodySection.tsx';
import { BodyItem } from './BodyItem.tsx';

const BodyComponent = styled.div`
  flex: 9;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
`;

export const Body: FC = () => (
  <BodyComponent>
    <BodySection headline="experience" headlineEmphasisColor="blue">
      <BodyItem
        startYear="2025"
        endYear="2026"
        duration="12 months"
        title="Mobile Team Leader"
        description="Allocating resources, reviewing code, overseeing releases, architecting new internal libraries."
        descriptionAddendum="Leading a team of 4"
        links={{ title: 'Sensoneo', url: 'https://sensoneo.com/' }}
      />

      <BodyItem
        startYear="2023"
        endYear="2025"
        duration="26 months"
        title="Senior Mobile Software Engineer"
        description="Bringing 15 deposit-return apps from concept to the stores in React Native & Expo, owning development, native modules, builds, releases and tester groups."
        descriptionAddendum="600K+ downloads"
        links={{ title: 'Sensoneo', url: 'https://sensoneo.com/' }}
      />

      <BodyItem
        startYear="2023"
        duration="4 months"
        title="Senior Full-stack Software Engineer"
        description="Designing and developing a car rental software product for Web & Mobile in Kotlin & React."
        links={{ title: 'Swapp', url: 'https://joinswapp.com' }}
      />

      <BodyItem
        startYear="2021"
        endYear="2023"
        duration="22 months"
        title="Full-stack Software Engineer"
        description="Designing and developing a full-stack health insurance software product in Kotlin & React."
        links={{ title: 'Itera', url: 'https://www.itera.com' }}
      />

      <BodyItem
        startYear="2020"
        endYear="2021"
        duration="14 months"
        title="Front-end Software Engineer"
        description="Designing and developing a cotton mill management system in React, deployed separately for each mill, letting users configure machines (carding, winding…) and their order in production."
        links={{
          title: 'ARTIN Solutions',
          url: 'https://www.artinsolutions.com',
        }}
      />

      <BodyItem
        startYear="2019"
        endYear="2020"
        duration="6 months"
        title="Project & Team Technical Leader"
        description="Analysing end user requests, designing tasks, developing features, reviewing code, deploying new releases."
        descriptionAddendum="Leading a team of 7"
        links={{
          title: 'ARTIN',
          url: 'https://artin.eu',
        }}
      />

      <BodyItem
        startYear="2018"
        endYear="2019"
        duration="14 months"
        title="Full-stack Software Engineer"
        description="Designing and developing internal business requirements management software in Java, Kotlin, AngularJS & Vue.js."
        links={{
          title: 'ARTIN',
          url: 'https://artin.eu',
        }}
      />

      <BodyItem
        startYear="2017"
        endYear="2018"
        duration="8 months"
        title="Software Developer"
        description="Building a metadata editor for digital libraries in Java & Angular."
        links={{
          title: 'Institute of Computer Science MU',
          url: 'https://is.muni.cz/lide/pracoviste?lang=en;zobrazid=14920240',
        }}
      />

      <BodyItem
        startYear="2015"
        endYear="2016"
        duration="10 months"
        title="QA Engineer"
        description="Writing functional and unit tests for the Business Central web application in Java & Selenium."
        links={{
          title: 'Red Hat',
          url: 'http://www.redhat.com/en',
        }}
      />
    </BodySection>

    <BodySection headline="education" headlineEmphasisColor="pink">
      <BodyItem
        startYear="2017"
        endYear="2020"
        title="Master's Degree"
        description="Computer Science"
        links={{
          title: 'Faculty of Informatics, Masaryk University in Brno',
          url: 'https://is.muni.cz/obory/3148?fakulta=1433;lang=en;setlang=en',
        }}
      />

      {/*<BodyItem*/}
      {/*  startYear="2018"*/}
      {/*  title="Erasmus+ Exchange"*/}
      {/*  description="Computer Science and Management"*/}
      {/*  links={{*/}
      {/*    title: 'University of Pavia',*/}
      {/*    url: 'http://www.unipv.eu/site/en/home.html',*/}
      {/*  }}*/}
      {/*/>*/}

      <BodyItem
        startYear="2014"
        endYear="2017"
        title="Bachelor's Degree"
        description="Computer Science"
        links={{
          title: 'Faculty of Informatics, Masaryk University in Brno',
          url: 'https://is.muni.cz/obory/3142?fakulta=1433;lang=en;setlang=en',
        }}
      />
    </BodySection>

    <BodySection headline="projects" headlineEmphasisColor="green">
      <BodyItem
        startYear="2022"
        duration="3 months"
        title="Interactive Career Quiz"
        description="An interactive career quiz application supporting 40+ languages, featuring multimedia content and advanced animations. Built in React using GSAP."
        descriptionAddendum="Team of 2"
        links={[
          {
            title: 'H&M',
            url: 'https://hm.com',
          },
          {
            title: 'Project',
            url: 'https://career.hm.com/the-immersive-tool/',
          },
        ]}
      />

      <BodyItem
        startYear="2021"
        endYear="2022"
        duration="3 months"
        title="B2B Website"
        description="A multi-page B2B website with custom components and a blog, built to client requirements and designs in React & Next.js."
        links={[
          {
            title: 'Dutchie',
            url: 'https://dutchie.com',
          },
          {
            title: 'Project',
            url: 'https://business.dutchie.com/',
          },
        ]}
      />

      <BodyItem
        startYear="2021"
        duration="3 months"
        title="Hivesweeper"
        description="A bee-themed mobile game taking classic Minesweeper to a hexagonal grid. Built in React Native, deployed to the App Store."
        links={{
          title: 'Website',
          url: 'https://hivesweeper.zilak.sk',
        }}
      />
    </BodySection>
  </BodyComponent>
);
