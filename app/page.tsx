import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Home() {
	return (
		<main className='relative'>
			<Nav />
			<Hero />
			<About />
			<Experience />
			<Projects />
			<Contact />
			{/* <Footer /> */}
			<div className='fixed left-8 bottom-0 hidden md:flex flex-col items-center gap-6'>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://github.com/conficiusa'
					className='text-gray-400 hover:text-primary transition-colors'
				>
					<Github className='w-5 h-5' />
				</a>
				<a
					href='https://www.linkedin.com/in/conficius-adda-b023581aa/'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='LinkedIn'
					className='text-gray-400 hover:text-primary transition-colors'
				>
					<Linkedin className='w-5 h-5' />
				</a>
				<a
					href='https://x.com/CodesConfi'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Twitter'
					className='text-gray-400 hover:text-primary transition-colors'
				>
					<Twitter className='w-5 h-5' />
				</a>
				<div className='w-[1px] h-24 bg-gray-400'></div>
			</div>
			<div className='fixed right-8 bottom-0 hidden md:block'>
				<div className='flex flex-col items-center gap-6'>
					<a
						href='mailto:addawebadua@gmail.com'
						className='text-gray-400 hover:text-primary transition-colors font-mono text-xs tracking-widest'
						style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
					>
						addawebadua@gmail.com
					</a>
					<div className='w-[1px] h-24 bg-gray-400'></div>
				</div>
			</div>
		</main>
	);
}
