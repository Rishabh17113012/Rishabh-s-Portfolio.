import React from 'react'
import { BackgroundBeams } from './ui/background-beams';
import { EvervaultCard, Icon } from './ui/evervault-card';

const experiences = [
	{
		company: "Moronss",
		role: "Full Stack Developer Intern @ The Moronss",
	},
	{
		company: "Cognifyz",
		role: "Frontend Developer Intern @ Cognifyz",
	},
];

const Experience = () => {
	return (
		<section id='experience' className="py-20 bg-gray-50 relative overflow-hidden">
			<h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
				Experience
			</h1>
			<p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto">
				Here are some of the roles and internships I've undertaken, showcasing my skills and growth as a developer.
			</p>
			<div className="flex flex-col md:flex-row gap-8 justify-center items-center relative z-20">
				{experiences.map((exp, idx) => (
					<div
						key={exp.company}
						className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm w-full mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg relative h-[26rem] transition-transform hover:-translate-y-2"
					>
						<Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
						<Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
						<Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
						<Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

						<EvervaultCard text={exp.company} />

						<h2 className="dark:text-white text-black mt-6 text-base font-semibold">
							{exp.role}
						</h2>
						<div className="mt-4 text-gray-500 dark:text-gray-400 text-sm">
							{/* Add a short description or tech stack here if desired */}
							{idx === 0
								? "Worked on building scalable web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality products."
								: "Designed and implemented responsive UI components with React and Tailwind CSS. Improved user experience and accessibility across the platform."}
						</div>
					</div>
				))}
			</div>
			<BackgroundBeams className='absolute z-10 inset-0 pointer-events-none' />
		</section>
	)
}

export default Experience;