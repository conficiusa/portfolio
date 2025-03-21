"use client";

import { useState, useRef, useEffect } from "react";

interface JobProps {
	company: string;
	title: string;
	url: string;
	dateRange: string;
	description: string[];
}

const jobs: JobProps[] = [
	{
		company: "LabConnekt",
		title: "Cofounder & Software Developer",
		url: "https://www.labconnekt.com/",
		dateRange: "October 2022 - Present",
		description: [
			"Lead developer for frontend systems. Major contributor in Ui design and development of the LabConnekt platform.",
			"Major contributor in the system architecture and design of the LabConnekt platform.",
			"Designed and implemented a robust and fast UI and an excellent user experience",
		],
	},
	{
		company: "Medcare Hub",
		title: "Founder & Software Developer",
		url: "https://medcare-hub.vercel.app",
		dateRange: "September 2023 - present",
		description: [
			"Founder and sole developer in the the Telemedicine startup-Medcare-hub",
			"Built highly scalable backend architecture with a 99% uptime following SOLID principles.",
			"implemented doctor to patient online video consultation using the using LiveKit",
			"Implement data encryption both at rest and in transit to comply with with HIPAA regulation",
			"Medcare Hub is seeking funding. send an email for more enquires",
		],
	},
];

export default function Experience() {
	const [activeTabId, setActiveTabId] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const experienceRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{
				threshold: 0.2,
			}
		);

		if (experienceRef.current) {
			observer.observe(experienceRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<section
			id='experience'
			ref={experienceRef}
			className={`py-24 px-6 md:px-24 lg:px-32 transition-opacity duration-1000 ease-in-out ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
		>
			<div className='max-w-3xl mx-auto'>
				<h2 className='flex items-center text-2xl md:text-3xl font-bold text-slate-200 mb-12'>
					<span className='text-primary font-mono mr-2 text-xl md:text-2xl'>
						02.
					</span>
					<span>Where I&apos;ve Worked</span>
					<span className='ml-4 h-px bg-slate-600 flex-grow hidden md:block'></span>
				</h2>

				<div className='flex flex-col md:flex-row gap-10'>
					<div className='w-full md:w-max mb-8 md:mb-0'>
						<div className='relative flex flex-row md:flex-col overflow-x-auto border-b md:border-b-0 md:border-l border-slate-700 overflow-y-hidden'>
							{jobs.map((job, i) => (
								<button
									key={i}
									className={`px-5 py-3 text-sm whitespace-nowrap md:text-left border-b-2 md:border-b-0 md:border-l-2 transition-all duration-200 ${
										activeTabId === i
											? "text-primary border-primary bg-[#112240]/50"
											: "text-slate-400 border-transparent hover:text-primary hover:bg-[#112240]/30"
									}`}
									onClick={() => setActiveTabId(i)}
								>
									{job.company}
								</button>
							))}
							{/* Mobile horizontal indicator */}
							<span
								className='absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-200 md:hidden'
								style={{
									width: `${100 / jobs.length}%`,
									transform: `translateX(${activeTabId * 100}%)`,
								}}
							/>
							{/* Desktop vertical indicator */}
							<span
								className='absolute left-0 h-[calc(var(--tab-height)*1px)] w-0.5 bg-primary transition-all duration-200 hidden md:block'
								style={
									{
										"--tab-height": 48, // Approximate height of a tab
										top: `calc(${activeTabId} * var(--tab-height) * 1px)`,
									} as React.CSSProperties
								}
							/>
						</div>
					</div>

					<div className='md:grow'>
						{jobs.map((job, i) => (
							<div
								key={i}
								className={`${activeTabId === i ? "block" : "hidden"}`}
							>
								<h3 className='text-xl text-slate-200 font-medium'>
									{job.title}
									<span className='text-primary'> @ </span>
									<a
										href={job.url}
										target='_blank'
										rel='noopener noreferrer'
										className='text-primary hover:underline'
									>
										{job.company}
									</a>
								</h3>

								<p className='text-sm text-slate-400 font-mono mt-1 mb-4'>
									{job.dateRange}
								</p>

								<ul className='space-y-2.5'>
									{job.description.map((desc, i) => (
										<li key={i} className='text-slate-400 flex'>
											<span className='text-primary mt-1 mr-2 flex-shrink-0'>
												▹
											</span>
											<span>{desc}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
