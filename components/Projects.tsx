"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface ProjectProps {
	title: string;
	description: string;
	tech: string[];
	links?: {
		github?: string;
		external?: string;
	};
	image?: string;
	featured?: boolean;
}

const featuredProjects: ProjectProps[] = [
	{
		title: "MedCare Hub",
		description:
			"Currently in Development, MedCare Hub is highly functional and scalable telemedicine platform that connects patients with doctors. it allows patients across the country to get expert care without the hindrance of distance. ",
		tech: [
			"Next js",
			"MongoDB",
			"AWS",
			"Typescript",
			"WebRTC",
			"Tailwind CSS",
			"vercel",
		],
		links: {
			external: "https://medcare-hub.vercel.app/",
		},
		image: "/medcare.png",
		featured: true,
	},
	{
		title: "LabConnekt",
		description:
			"LabConnekt is a clinical laboratory sample referral system that connects hospitals and laboratories. It allows hospitals to send samples to laboratories for testing and receive results in real-time. The system is designed to improve the efficiency of laboratory operations and reduce turnaround times for test results.",
		tech: ["Python", "Django", "React", "PostgreSQL", "AWS", "Docker", "Redis"],
		links: {
			external: "https://labconnekt.com/",
		},
		image: "/lab.png",
		featured: true,
	},
	{
		title: "GitHub Repository Manager",
		description:
			"GitHub Repository Manager is a tool that allow users to manage their GitHub repositories from the command line. it allows users to perform bulk operations on their repositories which would be time consuming to do manually. The tool is designed to improve the efficiency of GitHub operations and reduce the time spent on repetitive tasks.",
		tech: [
			"JS",
			"ReactNative",
			"Python",
			"Flask",
			"MySQL",
			"Google Cloud Platform",
		],
		links: {
			external:
				"https://confidevdocs.vercel.app/docs/github-repository-manager/introduction",
		},
		image: "/docs.png",
		featured: true,
	},
];

const otherProjects: ProjectProps[] = [
	{
		title: "Personal Website",
		description:
			"My first portfolio website, which was inspired by the design of my mentor, Prince Odame. It was built using Next.js and hosted on Vercel. I learned about animations and transitions while building this website.",
		tech: ["Next.js", "Tailwind CSS", "Typescript", "Vercel", "Framer Motion"],
		links: {
			github: "https://github.com/Odame/personal-website",
			external: "http://princeodame.com",
		},
	},
	{
		title: "MedCare Hub",
		description:
			"Currently in Development, MedCare Hub is highly functional and scalable telemedicine platform that connects patients with doctors. it allows patients across the country to get expert care without the hindrance of distance. ",
		tech: [
			"Next js",
			"MongoDB",
			"AWS",
			"Typescript",
			"WebRTC",
			"Tailwind CSS",
			"vercel",
		],
		links: {
			external: "https://medcare-hub.vercel.app/",
		},
	},
	{
		title: "Confi.dev",
		description:
			"Confi.dev is my blog website where I share my thoughts on software development, technology, and other topics. It is built using Next.js and hosted on Vercel. I learned about SEO and content management while building this website.",
		tech: [
			"Next.js",
			"Tailwind CSS",
			"Typescript",
			"MongoDB",
			"Vercel",
			"Sanity CMS",
			"Auth js",
		],
		links: {
			github: "https://github.com/Odame/gae-env",
			external: "https://pypi.org/project/gae-env/",
		},
	},
	{
		title: "LabConnekt",
		description:
			"LabConnekt is a clinical laboratory sample referral system that connects hospitals and laboratories. It allows hospitals to send samples to laboratories for testing and receive results in real-time. The system is designed to improve the efficiency of laboratory operations and reduce turnaround times for test results.",
		tech: ["Python", "Django", "React", "PostgreSQL", "AWS", "Docker", "Redis"],
		links: {
			github: "https://github.com/jaxtisapia/loggabat",
			external: "https://www.npmjs.com/package/loggabat",
		},
	},
	{
		title: "GitHub Repository Manager",
		description:
			"GitHub Repository Manager is a tool that allow users to manage their GitHub repositories from the command line. it allows users to perform bulk operations on their repositories which would be time consuming to do manually. The tool is designed to improve the efficiency of GitHub operations and reduce the time spent on repetitive tasks.",
		tech: ["pypi", "Python"],
		links: {
			external:
				"https://play.google.com/store/apps/details?id=com.thegatsbymagazine",
			github: "https://github.com/conficiusa/github-repo-manager",
		},
	},
	{
		title: "Documentation",
		description:
			"This contains the documentation for all my projects. It is built using Next.js and hosted on Vercel. I learned about documentation and content management while building this website",
		tech: ["Next.js", "Tailwind CSS", "Typescript", "Vercel", "Framer Motion"],
		links: {
			github: "https://github.com/conficiusa/confidevdocs",
			external: "https://confidevdocs.vercel.app/",
		},
	},
];

export default function Projects() {
	const [isVisible, setIsVisible] = useState(false);
	const [showMore, setShowMore] = useState(false);
	const projectsRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{
				threshold: 0.1,
			}
		);

		if (projectsRef.current) {
			observer.observe(projectsRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<section
			id='work'
			ref={projectsRef}
			className={`py-24 px-6 md:px-24 lg:px-32 transition-opacity duration-1000 ease-in-out ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
		>
			<div className='max-w-5xl mx-auto'>
				<h2 className='flex items-center text-2xl md:text-3xl font-bold text-slate-200 mb-12'>
					<span className='text-primary font-mono mr-2 text-xl md:text-2xl'>
						03.
					</span>
					<span>Some Things I&apos;ve Built</span>
					<span className='ml-4 h-px bg-slate-600 flex-grow hidden md:block'></span>
				</h2>

				{/* Featured Projects */}
				<div className='space-y-24 mb-16'>
					{featuredProjects.map((project, i) => (
						<div
							key={i}
							className={`relative grid grid-cols-1 items-center gap-10 ${
								i % 2 === 0
									? "md:grid-cols-12"
									: "md:grid-cols-12 md:grid-flow-dense"
							}`}
						>
							<div
								className={`md:col-span-7 md:absolute z-30 ${
									i % 2 === 0 ? "md:col-start-6 text-right" : "md:col-start-1"
								}`}
							>
								<h3 className='text-2xl font-bold text-slate-200 mb-2'>
									Featured Project
								</h3>
								<h4 className='text-xl font-bold text-primary mb-5'>
									{project.title}
								</h4>
								<div className='p-6 rounded shadow-lg bg-[#112240] text-slate-400 mb-4'>
									<p>{project.description}</p>
								</div>
								<ul className='flex flex-wrap mb-6 text-sm text-slate-400 font-mono justify-end'>
									{project.tech.map((tech, j) => (
										<li key={j} className='mr-5 mb-2'>
											{tech}
										</li>
									))}
								</ul>
								<div className='flex space-x-4'>
									{project.links?.github && (
										<a
											href={project.links.github}
											className='text-slate-300 hover:text-primary transition-colors'
											target='_blank'
											rel='noopener noreferrer'
											aria-label='GitHub'
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
											>
												<path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
											</svg>
										</a>
									)}
									{project.links?.external && (
										<a
											href={project.links.external}
											className='text-slate-300 hover:text-primary transition-colors'
											target='_blank'
											rel='noopener noreferrer'
											aria-label='External Link'
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
											>
												<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
												<polyline points='15 3 21 3 21 9'></polyline>
												<line x1='10' y1='14' x2='21' y2='3'></line>
											</svg>
										</a>
									)}
								</div>
							</div>

							<div
								className={`md:col-span-7 relative ${
									i % 2 === 0 ? "md:col-start-1" : "md:col-start-6"
								}`}
							>
								<div className='h-64 md:h-80 relative'>
									{project.image && (
										<div className='absolute inset-0 bg-primary/20 z-0 rounded'></div>
									)}
									<a
										href={
											project.links?.external || project.links?.github || "#"
										}
										target='_blank'
										rel='noopener noreferrer'
										className='block w-full h-full relative z-10 rounded overflow-hidden'
									>
										{project.image ? (
											<Image
												src={project.image}
												alt={project.title}
												fill
												className='object-cover rounded transition-transform duration-300 hover:scale-105'
											/>
										) : (
											<div className='w-full h-full bg-[#112240] rounded'></div>
										)}
										<div className='absolute inset-0 bg-[#0b132b]/50 hover:bg-transparent transition-colors duration-300'></div>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Other Projects */}
				<h3 className='text-center text-2xl font-bold text-slate-200 mb-12'>
					Other Projects
				</h3>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
					{otherProjects
						.slice(0, showMore ? otherProjects.length : 6)
						.map((project, i) => (
							<div
								key={i}
								className='bg-[#112240] rounded p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300'
							>
								<div className='flex justify-between items-center mb-8'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='40'
										height='40'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='1'
										strokeLinecap='round'
										strokeLinejoin='round'
										className='text-primary'
									>
										<path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
									</svg>
									<div className='flex space-x-4'>
										{project.links?.github && (
											<a
												href={project.links.github}
												className='text-slate-400 hover:text-primary transition-colors'
												target='_blank'
												rel='noopener noreferrer'
												aria-label='GitHub'
											>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='20'
													height='20'
													viewBox='0 0 24 24'
													fill='none'
													stroke='currentColor'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												>
													<path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
												</svg>
											</a>
										)}
										{project.links?.external && (
											<a
												href={project.links.external}
												className='text-slate-400 hover:text-primary transition-colors'
												target='_blank'
												rel='noopener noreferrer'
												aria-label='External Link'
											>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='20'
													height='20'
													viewBox='0 0 24 24'
													fill='none'
													stroke='currentColor'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												>
													<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
													<polyline points='15 3 21 3 21 9'></polyline>
													<line x1='10' y1='14' x2='21' y2='3'></line>
												</svg>
											</a>
										)}
									</div>
								</div>

								<h4 className='text-xl font-bold text-slate-200 mb-2'>
									{project.title}
								</h4>

								<p className='text-slate-400 mb-6 flex-grow'>
									{project.description}
								</p>

								<ul className='flex flex-wrap text-xs text-slate-400 font-mono mt-auto'>
									{project.tech.map((tech, j) => (
										<li key={j} className='mr-3 mb-1'>
											{tech}
										</li>
									))}
								</ul>
							</div>
						))}
				</div>

				{otherProjects.length > 6 && (
					<div className='flex justify-center mt-12'>
						<button
							className='px-4 py-3 border border-primary text-primary rounded font-medium text-sm hover:bg-primary/10 transition-colors duration-200'
							onClick={() => setShowMore(!showMore)}
						>
							{showMore ? "Show Less" : "Show More"}
						</button>
					</div>
				)}
			</div>
		</section>
	);
}
