import { Inter } from 'next/font/google'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { RootProvider } from '@/components/RootProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'dApp Starter',
	description: 'Template for dApps',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<title>Dapp Starter</title>
			</head>
			<body className={inter.className}>
				<RootProvider>
					<ThemeProvider attribute="class">{children}</ThemeProvider>
				</RootProvider>
			</body>
		</html>
	)
}
