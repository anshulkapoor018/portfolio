import Image from 'next/image';
import { EducationTimelineProps } from '../interfaces/Education';

const EducationTimeline: React.FC<EducationTimelineProps> = ({ educationData }) => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
                <div className="col-span-12 sm:col-span-3">
                    <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 ">
                        <h3 className="text-3xl font-semibold">Education</h3>
                    </div>
                </div>
                <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                    <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                        {educationData.map((experience, index) => (
                            <div key={index} className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gray-300">
                                <div className='flex'>
                                    <div className="flex-none w-12 h-12 relative mr-4">
                                        <Image src={experience.logo} alt="Company Logo" layout="fill" objectFit="cover" className="rounded-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold tracking-wide">{experience.company}</h3>
                                        <h4 className="text-s font-semibold tracking-wide">{experience.position}</h4>
                                        <time className="text-xs tracking-wide uppercase dark:text-gray-600">{experience.dateStart} - {experience.dateEnd}</time>
                                    </div>
                                </div>
                                <ul className="mt-3 list-disc list-inside">
                                {experience.experienceDetails.split('\n').map((detail, index) => {
                                    const trimmedDetail = detail.trim().startsWith('-') ? detail.trim().substring(1).trim() : detail.trim();
                                    return <li key={index}>{trimmedDetail}</li>;
                                })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default EducationTimeline;