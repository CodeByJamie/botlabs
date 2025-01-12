import type { Metadata } from 'next';
import './globals.css';
import SessionWrapper from '@/wrappers/authWrapper';

export const metadata: Metadata = {
	title: 'Regula',
	description: '',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='bg-neutral-800'>
			<SessionWrapper>
				<body>{children}</body>
			</SessionWrapper>
		</html>
	);
}
