import { useThemeSwitcher } from 'react-css-theme-switcher'
import { useState, FC } from 'react'

const GlobalTheme: FC = () => {
	const { switcher, themes, currentTheme, status } = useThemeSwitcher()
	const [isDarkMode, setIsDarkMode] = useState(false)

	if (status === 'loading') {
		return <div>'Loading styles...'</div>
	}

	const toggleDarkMode = () => {
		setIsDarkMode(previous => {
			switcher({ theme: previous ? themes.light : themes.dark })
			return !previous
		})
	}

	return (
		<div>
			<h2>Current theme: {currentTheme}</h2>
			<button onClick={toggleDarkMode} />
		</div>
	)
}
export default GlobalTheme
