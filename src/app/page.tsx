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
    <div className='portfolio-page'>
      <Header />
      <hr className="divider-gradient" />
      <ExperienceTimeline experienceData={experienceData} />
      <hr className="divider-gradient" />
      <EducationTimeline educationData={educationData} />
      <hr className="divider-gradient" />
      <SkillsTimeline skillGroups={skillsData.skillGroups}/>
      <hr className="divider-gradient" />
      <ProjectsTimeline projectsData={projectsData} />
    </div>
  );
}

export default Home;
