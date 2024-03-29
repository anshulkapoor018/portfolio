import React from 'react'
import Header from './components/Header'
import ExperienceTimeline from './components/ExperienceTimeline'
import EducationTimeline from './components/EducationTimeline';
import { experienceData } from './data/Experience';
import { educationData } from './data/Education';

const Home = () => {
  return (
    <div className='bg-white'>
      <Header />
      <hr className="divider-gradient bg-gray-100 dark:bg-gray-100" />
      <ExperienceTimeline experienceData={experienceData} />
      <hr className="divider-gradient bg-gray-100 dark:bg-gray-100" />
      <EducationTimeline educationData={educationData} />
    </div>
  );
}

export default Home;