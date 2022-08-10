import { useCallback } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'

const ThemeSwitcher = ({ className = '' }) => {
	const { resolvedTheme, setTheme } = useTheme()

	const toggleTheme = useCallback(() => {
		setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
	}, [resolvedTheme, setTheme])

	return (
		<button
			onClick={toggleTheme}
			className={`${className} rounded-full p-1 border-2 border-gray-300 dark:border-gray-800 text-gray-500 dark:text-gray-400`}
		>
			{resolvedTheme == 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
		</button>
	)
}

export default ThemeSwitcher
