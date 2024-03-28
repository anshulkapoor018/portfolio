import { Experience } from "../interfaces/Experience";

export const experienceData: Experience[] = [
    {
      dateStart: "Feb 2023",
      dateEnd: "Feb 2024",
      logo: '/billgo.jpg',
      position: 'Software Engineer III',
      company: 'BillGo',
      experienceDetails: `- Spearheaded the design, implementation, and maintenance of reusable UI components in SDK, enhancing frontend development efficiency and slashing code duplication significantly.\n - Led the delivery of a pivotal client-facing fintech product, catalyzing cross-functional team collaboration. Instrumental in processing hundreds of thousands of payments, the product managed over a billion dollars in transactions yearly, markedly enhancing the company's fintech industry standing.\n- Strategically enhanced the SDK to enable more efficient integration with third-party systems, resulting in a revolutionary 90% reduction in development time for the company's products.\n- Tackled compatibility and platform-specific challenges by adopting a modular architecture and rigorous testing, ensuring robust and scalable solutions.\n- Championed code refactoring, migrations, and upgrades, safeguarding codebase maintainability and scalability.`
    },
    {
      dateStart: "Jul 2021",
      dateEnd: "Jan 2023",
      logo: '/billgo.jpg',
      position: 'Software Engineer II',
      company: 'BillGo',
      experienceDetails: `- Innovated a multiplatform SDK encompassing a headless and a UI Library, setting a new standard in solution design.\n- Successfully delivered native iOS and Android applications, showcasing the SDK's proof of concept and technical viability.\n- Streamlined project workflows by implementing GitHub Actions, automating testing, building, and deployment, thereby liberating developers from manual tasks.\n- Halved application-flow testing time by automating end-to-end testing for the SDK with the Detox framework.\n- Deployed an internal React Native application to enhance backend API feature testing, accurately simulating client environments.\n- Pioneered data syncing and caching features using SyncTable in the UI SDK, unlocking new use cases and applications.\n- Developed a customizable theming system for the SDK application, employing CSS variables and modular native-base, enhancing UI adaptability, branding, and codebase scalability.`
    },
    {
      dateStart: "Jun 2020",
      dateEnd: "Dec 2020",
      logo: '/idt.png',
      position: 'Software Engineer II',
      company: 'IDT Corporation',
      experienceDetails: `- Spearheaded the development of a suite of iOS14 widgets for the company's flagship product, leveraging a fully agile environment to enhance user interface and functionality.
      - Conceptualized and executed a Slack Workspace Application for server outage notifications, employing AWS Lambda for event processing, which significantly enhanced the operations team's visibility and responsiveness to production events.
      - Developed a serverless application integrating AWS Lambda, AWS API Gateway, and Jira Webhooks to monitor critical server outage events, ensuring prompt issue tracking and resolution.
      - Automated regression testing for a Web Service using NUnit Testing Framework; reduced time for Testing to almost 20%.
      - Engineered an autoscaling feature for ECS services using Terraform for the DevOps team, achieving a 10% reduction in service costs through enhanced resource management.`
    },
    {
      dateStart: "Jun 2020",
      dateEnd: "Dec 2020",
      logo: '/visionias.png',
      position: 'Software Engineer II',
      company: 'VisionIAS',
      experienceDetails: `- Created storage framework using AWS Service - S3 which helped app users download paid and free content seamlessly.
      - Accomplished API framework that helped protect data while making API calls using AES and RSA Encryption; eliminated 10% of existing codebase from every module and ~ 20% of code reduction overall.
      - Devised video streaming feature that helped users watch live/old videos; optimized video quality by network speed thereby increasing number of daily active users by 20%.
      - Delivered Live Test Series Feature for users to enroll and give series of tests followed by detailed analysis.
      - Mentored 2 interns and 1 Full-Time Employee; helped with company's culture, company specific tools, and processes.`
    },
    {
      dateStart: "Jun 2020",
      dateEnd: "Dec 2020",
      logo: '/rivigo.png',
      position: 'Application Engineer',
      company: 'Rivigo',
      experienceDetails: `- Re-engineered the process of handling Technical Issues by using Data insights from Issue Tracking Software - JIRA which helped the team focus more on practical issues.\n- Designed a method of root cause analysis by replicating the issues on the testing server which helped in understanding the user behavior more efficiently.\n- Suggested design changes(UX/UI) to reduce high ranking issues in the product originating from user end due to the cluster design of the product.`
    },
  ];