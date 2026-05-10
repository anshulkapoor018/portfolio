import React from 'react'
import Header from './components/Header'
import ExperienceTimeline from './components/ExperienceTimeline'
import EducationTimeline from './components/EducationTimeline';
import SkillsTimeline from './components/SkillsTimeline';
import ProjectsTimeline from './components/ProjectsTimeline';
import { experienceData } from './data/Experience';
import { educationData } from './data/Education';
import { skillsData } from './data/Skills';
import { projectsData } from './data/Projects';


const Home = () => {
  return (
    <div className='bg-white'>
      <Header />
      <hr className="divider-gradient bg-gray-100 dark:bg-gray-100" />
      <ExperienceTimeline experienceData={experienceData} />
      <hr className="divider-gradient bg-gray-100 dark:bg-gray-100" />
      <EducationTimeline educationData={educationData} />
      <hr className="divider-gradient bg-gray-100 dark:bg-gray-100" />
      <SkillsTimeline skillDetails={skillsData.skillDetails}/>
      <hr className="divider-gradient bg-gray-100 dark:bg-gray-100" />
      <ProjectsTimeline projectsData={projectsData} />
    </div>
  );
}

export default Home;
