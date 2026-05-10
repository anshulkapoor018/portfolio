import { Experience } from "../interfaces/Experience";

export const experienceData: Experience[] = [
    {
      dateStart: "Jun 2024",
      dateEnd: "Present",
      logo: '/bill-logo.png',
      position: 'Software Engineer II',
      company: 'BILL',
      companyUrl: 'https://www.linkedin.com/company/bill-com/',
      featured: true,
      tags: ['AR Platform', 'Angular + React', 'GraphQL'],
      experienceDetails: `- Modernized invoicing and payment workflows into scalable microfrontend experiences across BILL's Accounts Receivable platform.
- Delivered key customer-facing AR workflows including Bulk Mark as Paid, Recurring Invoices, Payment Links, and invoice customization.
- Improved frontend performance, test coverage, feature-flag hygiene, and developer velocity across critical workflows.`
    },
    {
      dateStart: "Feb 2023",
      dateEnd: "Mar 2024",
      logo: '/Billgo.jpg',
      position: 'Software Engineer III',
      company: 'BillGo',
      companyUrl: 'https://www.linkedin.com/company/billgopayments/',
      featured: true,
      tags: ['SDK Platform', 'Fintech', 'Developer Experience'],
      experienceDetails: `- Led reusable SDK and UI platform components for high-volume fintech payment workflows.
- Reduced downstream integration effort by approximately 90% across multiple implementation paths.
- Modernized shared frontend infrastructure through refactoring, platform upgrades, and scalable testing strategies.`
    },
    {
      dateStart: "Jul 2021",
      dateEnd: "Jan 2023",
      logo: '/Billgo.jpg',
      position: 'Software Engineer II',
      company: 'BillGo',
      companyUrl: 'https://www.linkedin.com/company/billgopayments/',
      featured: true,
      tags: ['React Native', 'Automation', 'Mobile SDK'],
      experienceDetails: `- Architected cross-platform headless and UI SDK libraries for scalable mobile fintech integrations.
- Built native iOS, Android, and internal React Native tooling to validate platform capabilities and API workflows.
- Reduced end-to-end testing time by 50% with Detox automation and GitHub Actions pipelines.`
    },
    {
      dateStart: "Jun 2020",
      dateEnd: "Dec 2020",
      logo: '/idt.png',
      position: 'Software Engineer Intern',
      company: 'IDT Corporation',
      companyUrl: 'https://www.linkedin.com/company/idt/',
      tags: ['AWS Lambda', 'iOS Widgets', 'Terraform'],
      experienceDetails: `- Developed a suite of iOS 14 widgets for the company's flagship application, enhancing user experience and extending platform functionality across Apple ecosystems.
- Built internal Slack-based operational tooling using AWS Lambda to improve visibility and response times for production outage events.
- Developed serverless monitoring workflows integrating AWS Lambda, API Gateway, and Jira Webhooks to automate issue tracking and incident management processes.
- Automated regression testing for critical web services using the NUnit testing framework, reducing manual testing effort and improving release efficiency.
- Implemented autoscaling infrastructure for ECS services using Terraform, improving resource utilization and reducing operational costs by approximately 10%.`
    },
    {
      dateStart: "Dec 2017",
      dateEnd: "Aug 2019",
      logo: '/visionias.png',
      position: 'Software Engineer',
      company: 'VisionIAS',
      companyUrl: 'https://www.linkedin.com/company/visionias/',
      tags: ['AWS S3', 'Secure APIs', 'Video Streaming'],
      experienceDetails: `- Built scalable AWS S3-based content delivery infrastructure enabling seamless access to paid and free educational media within the platform.
- Developed secure API frameworks using AES and RSA encryption, reducing duplicated implementation patterns and improving maintainability across backend modules.
- Designed adaptive video streaming capabilities with network-aware quality optimization, increasing daily active user engagement by approximately 20%.
- Delivered large-scale live test and assessment features supporting real-time participation, performance analysis, and student engagement workflows.
- Mentored interns and junior engineers on engineering practices, internal tooling, and development workflows.`
    },
    {
      dateStart: "Jun 2017",
      dateEnd: "Aug 2017",
      logo: '/rivigo.png',
      position: 'Application Engineer',
      company: 'Rivigo',
      companyUrl: 'https://www.linkedin.com/company/rivigo/',
      tags: ['JIRA Analytics', 'Debugging', 'UX Recommendations'],
      experienceDetails: `- Improved issue investigation workflows by leveraging JIRA analytics and production debugging insights to identify recurring technical patterns.
- Reproduced and analyzed production issues within testing environments, improving visibility into user-impacting behaviors and increasing diagnostic efficiency.
- Evaluated UX/UI problem areas contributing to high-frequency support issues and provided data-driven recommendations to improve product usability.`
    },
  ];
