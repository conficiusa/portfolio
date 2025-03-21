"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function About() {
	const [isVisible, setIsVisible] = useState(false);
	const aboutRef = useRef<HTMLElement>(null);

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

		if (aboutRef.current) {
			observer.observe(aboutRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	const skills = [
		"React",
		"Typescript",
		"NodeJS",
		"WebRTC",
		"Next js",
		"Java",
		"XState",
		"Spring Boot",
		"GCP",
		"AWS",
		"Docker",
		"Next js",
		"MongoDB",
		"postgres",
		"React Native",
		"Electron",
	];

	return (
		<section
			id='about'
			ref={aboutRef}
			className={`py-24 px-6 md:px-24 lg:px-32 transition-opacity duration-1000 ease-in-out ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
		>
			<div className='max-w-5xl mx-auto'>
				<h2 className='flex items-center text-2xl md:text-3xl font-bold text-slate-200 mb-12'>
					<span className='text-primary font-mono mr-2 text-xl md:text-2xl'>
						01.
					</span>
					<span>About Me</span>
					<span className='ml-4 h-px bg-slate-600 flex-grow hidden md:block'></span>
				</h2>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
					<div className='md:col-span-2'>
						<div className='text-slate-400 space-y-4'>
							<p>
								I&apos;m an developer who loves working on challenging problems,
								cracking them into simpler solutions. I build scalable backend
								applications, using state of the art technologies with security
								in mind.
							</p>
							<p>
								I am a big advocate of statecharts and, I love the reactive
								programming paradigms of rxjs.
							</p>
							<p>
								I am a student of{" "}
								<a
									href='https://www.uds.edu.gh/'
									target='_blank'
									rel='noopener noreferrer'
									className='text-primary hover:underline'
								>
									university for development studies
								</a>{" "}
								studying Doctor of Medical Laboratory Science years, I am a self
								taught developer and for the past 3+ years, I&apos;ve been among
								several teams engineering the next big stuff.
							</p>
							<p>A glimpse of the things I&apos;m experienced with:</p>
						</div>

						<ul className='grid grid-cols-2 sm:grid-cols-3 gap-2 mt-6'>
							{skills.map((skill, i) => (
								<li key={i} className='flex items-start mb-2'>
									<span className='text-primary mr-2'>▹</span>
									<span className='text-slate-400'>{skill}</span>
								</li>
							))}
						</ul>
					</div>

					<div className='mx-auto md:mx-0'>
						<div className='relative w-60 h-60 md:w-56 md:h-56 lg:w-64 lg:h-64 group'>
							<div className='absolute inset-0 rounded bg-primary/20 translate-x-5 translate-y-5 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300'></div>
							<div className='absolute inset-0 rounded border-2 border-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300'></div>
							<div className='absolute inset-0 rounded overflow-hidden'>
								<Image
									src='/me.jpg'
									alt='Adda COnficius'
									fill
									className='object-cover rounded grayscale hover:grayscale-0 transition-all duration-300'
								/>
								<div className='absolute inset-0 bg-primary/20 hover:bg-transparent transition-colors duration-300'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
