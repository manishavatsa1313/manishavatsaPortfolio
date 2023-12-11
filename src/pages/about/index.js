import React from 'react';
import Grid from '@mui/material/Grid';
import image from './media/manisha.jpg';
import { StyledTypography, StyledButton } from '../../app/theme';

import './style.scss';

export const About = () => {
  const handleButtonClick = () => {
    // Replace 'YOUR_S3_LINK' with the actual S3 link
    const s3Link = 'https://resume-manisha-vatsa.s3.us-east-2.amazonaws.com/Resume_Manisha_Vatsa.pdf';
    // Open the S3 link in a new tab
    window.open(s3Link, '_blank');
  };

  return (
    <Grid container spacing={3} sx={{ padding: { s: '5px', lg: '90px' } }}>
      {/* Title Grid */}
      <Grid item s={12} md={8} style={{ margin: { s: 'none', lg: '50px' } }}>
        <StyledTypography variant="h1" gutterBottom>
          About Me
        </StyledTypography>
        <StyledTypography variant="h2" gutterBottom>
          I am Manisha. A full stack software enginner with a passion for problem solving.
        </StyledTypography>
        <p>
          I'm passionate about both the outdoors and technology, embodying determination and resilience in equal
          measure. Whether conquering challenging trail runs, or tackling complex problems as an engineer, I put in
          eberything to excel in each domain. In both personal and professional realms, I embrace continuous learning,
          actively seeking opportunities to expand my knowledge and skills. As a full-stack engineer, I leverage
          technology to solve intricate problems, showcasing leadership qualities in guiding and inspiring teams.
        </p>
        <StyledTypography variant="h3" gutterBottom>
          EXPERIENCE
        </StyledTypography>
        <StyledTypography variant="h4" gutterBottom>
          Alumni Ventures
        </StyledTypography>
        <p>
          As a Senior Software Engineer at Alumni Ventures in Manchester, NH, since January 2023, I am actively involved
          in architecting and implementing a dynamic investment commitment portal for over 50 funds. Leveraging a
          headless content management system, I enable users to effortlessly invest based on eligibility, while
          providing the internal team with robust data control and a streamlined user flow. Additionally, I develop
          investor-facing applications to automate access to portfolios, statements, news, and tax forms. My
          contributions extend to engineering database services, including CRUD operations and automated migrations
          through CI/CD pipelines. Notably, I achieved a 62% reduction in build time by implementing a static cache,
          minimizing wait times for developers and product managers during development and deployments. I actively
          participate in SCRUM ceremonies, enhancing release practices, optimizing development pipelines, and refining
          production management processes.
        </p>
        <StyledTypography variant="h4" gutterBottom>
          JP Morgan Chase & Co.
        </StyledTypography>
        <p>
          As an Associate Software Engineer at JP Morgan Chase & Co. in Bengaluru, India, from August 2017 to July 2021,
          I played a key role in automating trading processes by constructing Low touch and High touch Quoting systems
          for incoming products across various channels. Additionally, I implemented REST APIs to streamline
          interactions with the central data repository, resulting in a 20% increase in speed by reducing the load on
          the local database. Further contributions include an 80% reduction in run time for the product pricing
          integration test suite through performance optimization. I simplified resource management by successfully
          migrating a microservice from a virtual server to a private cloud using Docker and Kubernetes. Furthermore, I
          engineered and developed a system for sending indicative quote pricing reports to clients via email,
          effectively reducing manual effort and traffic on the pricing server.
        </p>
        <StyledTypography variant="h4" gutterBottom>
          Vizury Interactive Solutions
        </StyledTypography>
        <p>
          During my Software Engineering internship at Vizury Interactive Solutions in Bengaluru, India, from February
          2017 to June 2017, I made significant contributions by enhancing an automated test suite. This improvement
          aimed at minimizing manual testing efforts for an application focused on re-targeting customers and engaging
          commerce backend components using Cookies and third-party data. The technologies employed in this project
          included Java, TestNG, Kafka, and Redis.
        </p>
        <StyledTypography variant="h4" gutterBottom>
          Tata Consultancy Service
        </StyledTypography>
        <p>
          During my Software Engineering internship at Tata Consultancy Service in Bengaluru, India, from June 2016 to
          July 2016, I successfully developed an application focused on data extraction, sentiment analysis, and
          visualization of consumer reactions to the iPhone 7 on Facebook. This project involved utilizing a diverse set
          of technologies, including R for data analysis, PHP for application development, Facebook Graph API for data
          extraction, MongoDB for database management, and Tableau for effective visualization. My role encompassed the
          end-to-end creation of the application, showcasing my proficiency in integrating multiple technologies for a
          comprehensive solution.
        </p>
        <StyledButton onClick={handleButtonClick}>Resume</StyledButton>

        <StyledTypography variant="h3" gutterBottom>
          Skills
        </StyledTypography>

        <StyledTypography variant="h4" gutterBottom>
          Technical Skills
        </StyledTypography>
        <ul>
          <li>
            <strong>Programming Languages:</strong> Java, Python, C, C++, Javascript, TypeScript, NodeJS, ReactJS,
            NextJS
          </li>
          <li>
            <strong>Databases:</strong> MySQL, Cassandra, DynamoDB, MongoDB, PostgreSQL, Sybase, GraphQL
          </li>
          <li>
            <strong>Source Control, DevOps, and Build Tools:</strong> Git, Bitbucket, Jira, Jenkins, CircleCI, Github
            Actions, Docker, Kubernetes, Azure Cloud Platform, AWS infrastructure, Gradle, Maven
          </li>
          <li>
            <strong>Technologies:</strong> Micro-services, System Design, Distributed Systems, Full Stack Development,
            Cloud Computing
          </li>
        </ul>

        <StyledTypography variant="h4" gutterBottom>
          Soft Skills
        </StyledTypography>
        <p>
          Strong soft skills complement my technical expertise, including effective communication, problem-solving, and
          leadership. I excel in collaborative team environments, adapt quickly to new challenges, and continuously
          strive for improvement. My commitment to learning and innovation contributes to a dynamic and positive work
          culture.
        </p>

        <StyledTypography variant="h3" gutterBottom>
          Education
        </StyledTypography>
        <StyledTypography variant="h4" gutterBottom>
          Carnegie Mellon University
        </StyledTypography>
        <StyledTypography variant="h5" gutterBottom>
          Master of Software Engineering
        </StyledTypography>
        <StyledTypography variant="h6" gutterBottom>
          Aug 2021 - Dec 2022
        </StyledTypography>
        <ul>
          <li>GPA: 3.90/4.00</li>
          <li>
            Courses: Advanced Algorithms, Software Architecture, Scalable Systems, Computer Systems, Machine Learning
          </li>
        </ul>
        <StyledTypography variant="h4" gutterBottom>
          BMS College of Engineering, Bengaluru, India
        </StyledTypography>
        <StyledTypography variant="h5" gutterBottom>
          Computer Science and Engineering
        </StyledTypography>
        <StyledTypography variant="h6" gutterBottom>
          Aug 2013 - Jul 2017
        </StyledTypography>
        <ul>
          <li>GPA: 9.40/10.00</li>
          <li>Courses: Data Structures, Analysis of Algorithms, Operating Systems, Database Systems</li>
        </ul>
      </Grid>
      <Grid item s={12} md={4} style={{ margin: { s: 'none', md: '50px' } }}>
        <img src={image} alt="professionalpics" style={{ width: '100%', height: 'auto' }} />
      </Grid>
    </Grid>
  );
};
