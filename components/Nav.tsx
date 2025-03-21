"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

interface NavLinkProps {
	href: string;
	text: string;
	index: number;
	onClick?: () => void;
}

const NavLink = ({ href, text, index, onClick }: NavLinkProps) => {
	return (
		<div className='fadedown' style={{ transitionDelay: `${index * 100}ms` }}>
			<Link
				href={href}
				className='flex items-center px-3 py-2 text-sm font-medium text-white hover:text-primary transition-colors duration-200'
				onClick={onClick}
			>
				<span className='text-primary mr-1 font-mono'>0{index + 1}.</span>
				<span>{text}</span>
			</Link>
		</div>
	);
};

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		document.body.classList.toggle("overflow-hidden", !isMenuOpen);
	};

	return (
		<header
			className={`fixed w-full px-6 sm:px-12 py-4 z-40 transition-all duration-300
      ${
				isScrolled
					? "bg-[#0b132b]/90 shadow-md backdrop-blur-sm"
					: "bg-transparent"
			}`}
		>
			<nav className='flex items-center justify-between'>
				<div className='flex items-center'>
					<Link href='/' className='fade'>
						<div className='h-10'>
							<Logo />
						</div>
					</Link>
				</div>

				{/* Desktop Navigation */}
				<div className='hidden md:flex items-center space-x-1'>
					<NavLink href='#about' text='About' index={0} />
					<NavLink href='#experience' text='Experience' index={1} />
					<NavLink href='#work' text='Work' index={2} />
					<NavLink href='#contact' text='Contact' index={3} />
					<a
						href='https://confidev.vercel.app'
						target='_blank'
						rel='noopener noreferrer'
					>
						Blog
					</a>
					<div className='fadedown' style={{ transitionDelay: `500ms` }}>
						<a
							href='/static/PrinceOdame_Resume.pdf'
							className='ml-4 px-4 py-2 border border-primary text-primary rounded font-medium text-sm hover:bg-primary/10 transition-colors duration-200'
							target='_blank'
							rel='noopener noreferrer'
						>
							Resume
						</a>
					</div>
				</div>

				{/* Mobile Menu Button */}
				<button
					className='md:hidden flex items-center justify-center w-10 h-10 focus:outline-none'
					onClick={toggleMenu}
					aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
				>
					<div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
						<span
							className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
								isMenuOpen ? "translate-y-1 rotate-45" : ""
							}`}
						></span>
						<span
							className={`block w-6 h-0.5 bg-primary mt-1.5 transition-all duration-300 ${
								isMenuOpen ? "opacity-0" : ""
							}`}
						></span>
						<span
							className={`block w-6 h-0.5 bg-primary mt-1.5 transition-all duration-300 ${
								isMenuOpen ? "-translate-y-1 -rotate-45" : ""
							}`}
						></span>
					</div>
				</button>

				{/* Mobile Menu */}
				<div
					className={`fixed top-0 right-0 bottom-0 w-[75vw] bg-[#112240] z-50 flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out ${
						isMenuOpen ? "translate-x-0" : "translate-x-full"
					}`}
				>
					<div className='flex flex-col items-center space-y-5'>
						<NavLink
							href='#about'
							text='About'
							index={0}
							onClick={toggleMenu}
						/>
						<NavLink
							href='#experience'
							text='Experience'
							index={1}
							onClick={toggleMenu}
						/>
						<NavLink href='#work' text='Work' index={2} onClick={toggleMenu} />
						<NavLink
							href='#contact'
							text='Contact'
							index={3}
							onClick={toggleMenu}
						/>
						<div className='fadedown mt-8' style={{ transitionDelay: `500ms` }}>
							<a
								href='/static/PrinceOdame_Resume.pdf'
								className='px-6 py-3 border border-primary text-primary rounded font-medium text-sm hover:bg-primary/10 transition-colors duration-200'
								target='_blank'
								rel='noopener noreferrer'
								onClick={toggleMenu}
							>
								Resume
							</a>
						</div>
					</div>
				</div>

				{/* Overlay when menu is open */}
				{isMenuOpen && (
					<div
						className='fixed inset-0 bg-black/70 z-40 md:hidden'
						onClick={toggleMenu}
						aria-hidden='true'
					/>
				)}
			</nav>
		</header>
	);
}
