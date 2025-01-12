import { useAuth } from '@/contexts/useAuth';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { MoonIcon, PencilIcon } from '@heroicons/react/16/solid';

const Header = () => {
	// Get the current session
	const session = useAuth();
	const [profile, setProfile] = useState(false);

	return (
		<header className='sticky top-0 left-0 w-full bg-gray-800 shadow-lg z-50'>
			<div className={`mx-auto px-24 py-4 flex justify-between items-center`}>
				<div className='text-white font-bold text-2xl'>Regula</div>
				<nav className='flex gap-12'>
					<a href='#features' className='text-white hover:text-indigo-500 duration-300'>
						Features
					</a>
					<a href='#about' className='text-white hover:text-indigo-500 duration-300'>
						About
					</a>
					<a href='#contact' className='text-white hover:text-indigo-500 duration-300'>
						Contact
					</a>
				</nav>
				{session && (
					<div className='relative'>
						<div className='size-[50px] rounded-full'>
							<Image
								src={session.user.image}
								alt='profile'
								fill
								className='absolute cursor-pointer'
								onClick={() => setProfile(!profile)}
							/>
						</div>

						<AnimatePresence>
							{profile && (
								<motion.div
									className='absolute right-0 bg-gray-800 px-6 py-4 text-white w-72 rounded-lg'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1, y: 10 }}
									exit={{ opacity: 0, y: -10 }}
									key='profile-menu'
									transition={{ duration: 0.5 }}
								>
									<div className='flex items-center gap-4 border-b border-gray-700 pb-1'>
										<Image
											src={session.user.image}
											alt='profile'
											width={45}
											height={45}
											className='rounded-full'
										/>
										<div>
											<h1 className='text-lg font-bold'>
												{session.user.name}
											</h1>
										</div>
									</div>
									<div className='flex flex-col gap-2 mt-4'>
										<Link
											className='flex items-center gap-6'
											href={'/settings'}
										>
											<PencilIcon className='size-8 bg-gray-700/50 p-2 rounded-full text-gray-400 ' />
											<span className='font-semibold tracking-wide hover:text-gray-400 duration-300 text-gray-300'>
												Edit Profile
											</span>
										</Link>
										<Link
											className='flex items-center gap-6'
											href={'/settings/display'}
										>
											<MoonIcon className='size-8 bg-gray-700/50 p-2 rounded-full text-gray-400' />
											<span className='font-semibold tracking-wide hover:text-gray-400 duration-300 text-gray-300'>
												Display Appearance
											</span>
										</Link>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
