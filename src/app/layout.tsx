import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
	title: 'User Management App',
	description: 'A Next.js app for managing users',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Theme>{children}</Theme>
			</body>
		</html>
	);
}
