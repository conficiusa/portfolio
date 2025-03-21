"use client";

import Link from "next/link";

export default function Footer() {
	return (
		<footer className='py-6 text-center'>
			<div className='flex justify-center mb-5'>
				<ul className='flex items-center space-x-6'>
					<li>
						<a
							href='https://www.linkedin.com/in/prince-odame/'
							className='text-slate-400 hover:text-primary transition-colors duration-200'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='LinkedIn'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='22'
								height='22'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
								<rect x='2' y='9' width='4' height='12'></rect>
								<circle cx='4' cy='4' r='2'></circle>
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
