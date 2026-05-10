import { Skills } from "../interfaces/Skills";

export const skillsData: Skills = {
    skillGroups: [
        {
            category: 'Frontend',
            items: ['Angular', 'React', 'TypeScript', 'React Native', 'Redux', 'Design Systems', 'Figma'],
        },
        {
            category: 'Architecture',
            items: ['Microfrontends', 'GraphQL', 'SDK Architecture', 'Platform Modernization'],
        },
        {
            category: 'Cloud & Tooling',
            items: ['AWS Lambda', 'API Gateway', 'CloudWatch', 'GitHub Actions', 'Jest', 'Playwright', 'Detox'],
        },
        {
            category: 'Backend & Data',
            items: ['Node.js', 'Express.js', 'Flask', 'Django', 'MongoDB', 'MySQL', 'SQLite'],
        },
        {
            category: 'Product Engineering',
            items: ['LaunchDarkly', 'Analytics Instrumentation', 'Developer Experience', 'Performance Optimization'],
        },
    ],
}
