import { useAuth } from '@/contexts/useAuth';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Login = () => {
	// Get the current session
	const session = useAuth();

	// Fetch router from next/navigation;
	const router = useRouter();

	return (
		<>
			<motion.button
				onClick={async () => {
					// Check if the user is not logged in
					if (!session) {
						await signIn('discord');
						router.push('/dashboard');
					} else {
						router.push('/dashboard');
					}
				}}
						className='px-8 py-4 bg-indigo-600 rounded-full text-lg font-semibold text-white hover:bg-indigo-700 transition duration-300'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5, duration: 1 }}
					>
						Get Started
					</motion.button>
		</>
	);
};

export default Login;
