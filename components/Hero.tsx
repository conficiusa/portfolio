"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Add a small delay to ensure proper animation
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	return (
		<section className='min-h-screen flex flex-col justify-center pt-16 px-6 md:px-24 lg:px-32'>
			<div
				className={`transition-opacity duration-500 ${
					isVisible ? "opacity-100" : "opacity-0"
				}`}
			>
				<p
					className='text-primary font-mono  transform text-sm md:text-base'
					style={{ transitionDelay: "100ms" }}
				>
					Hi, I am
				</p>

				<h1
					className='text-4xl md:text-7xl font-bold text-slate-200 leading-tight'
					style={{ transitionDelay: "200ms" }}
				>
					Conficius Adda
				</h1>

				<h2
					className='text-3xl md:text-6xl font-bold text-slate-400 mb-6 leading-tight'
					style={{ transitionDelay: "300ms" }}
				>
					I build stuff that works at scale
				</h2>

				<p
					className='max-w-xl text-slate-400 mb-12 text-lg'
					style={{ transitionDelay: "400ms" }}
				>
					A software developer based in Tamale, Ghana with specialty in design
					and development of scalable backend systems.
					<br />
					<br />
					Currently shipping awesome features at{" "}
					<a
						href='https://www.labconnekt.com/'
						target='_blank'
						rel='noopener noreferrer'
						className='text-primary hover:underline'
					>
						LabConnekt
					</a>{" "}
					as a Software developer, ask me about it!
				</p>

				<div style={{ transitionDelay: "500ms" }}>
					<Link
						href='mailto:addawebadua@gmail.com'
						className='inline-block px-7 py-4 border border-primary text-primary rounded font-medium hover:bg-primary/10 transition-colors duration-200'
					>
						Get In Touch
					</Link>
				</div>
			</div>
		</section>
	);
}
