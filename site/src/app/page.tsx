'use client';
import { motion } from 'framer-motion';
import Header from './components/navigation/header';
import Login from './components/buttons/login';

export default function Home() {
	return (
		<div className='relative bg-gray-800 text-white min-h-screen'>
			<Header />

			{/* Hero Section */}
			<section className='flex items-center justify-center h-[60dvh] bg-gray-900 text-center'>
				<motion.div
					className='max-w-4xl px-6'
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, ease: 'easeOut' }}
				>
					<motion.h1
						className='text-6xl font-extrabold mb-6'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3, duration: 1 }}
					>
						Unlock Your Server's Potential with Regula
					</motion.h1>
					<motion.p
						className='text-xl text-gray-300 mb-8'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5, duration: 1 }}
					>
						The smartest, most powerful Discord bot for managing servers, automating tasks, and
						enhancing your experience.
					</motion.p>
					<Login />
				</motion.div>
			</section>

			{/* Features Section */}
			<section id='features' className='py-24 bg-gray-900'>
				<motion.div
					className='max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1 }}
				>
					<motion.div
						className='bg-gray-800 rounded-lg shadow-lg p-8'
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.8 }}
					>
						<h3 className='text-2xl font-bold text-indigo-500 mb-4'>Automated Tasks</h3>
						<p className='text-gray-300'>
							Automate repetitive tasks with Regula’s advanced task scheduling and bots.
						</p>
					</motion.div>

					<motion.div
						className='bg-gray-800 rounded-lg shadow-lg p-8'
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 0.8 }}
					>
						<h3 className='text-2xl font-bold text-indigo-500 mb-4'>Server Moderation</h3>
						<p className='text-gray-300'>
							Manage server activities, enforce rules, and keep your community safe.
						</p>
					</motion.div>

					<motion.div
						className='bg-gray-800 rounded-lg shadow-lg p-8'
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7, duration: 0.8 }}
					>
						<h3 className='text-2xl font-bold text-indigo-500 mb-4'>Custom Commands</h3>
						<p className='text-gray-300'>
							Personalize your bot’s features with custom commands tailored to your needs.
						</p>
					</motion.div>
				</motion.div>
			</section>

			{/* Footer */}
			<footer className='bg-gray-800 text-gray-300 py-4 text-center'>
				<p>© 2025 Regula. All Rights Reserved.</p>
			</footer>
		</div>
	);
}
