import { FC, createContext, useState, useContext, useEffect } from 'react'
import { darkTheme, lightTheme } from '../UI/GlobalTheme'
import { TypeContextProps } from '../types/Todo.types'
import { TypeToggleTheme } from '../types/Theme.types'

interface ThemeContextType {
	theme: TypeToggleTheme
	handleToggleTheme: () => void
	currentTheme: TypeToggleTheme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeContextProvider: FC<TypeContextProps> = ({ children }) => {
	const [currentTheme, setCurrentTheme] = useState<TypeToggleTheme>(lightTheme)

	const handleToggleTheme = () => {
		setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme)

		localStorage.setItem('theme', currentTheme === lightTheme ? darkTheme.background : lightTheme.background)
	}

	useEffect(() => {
		const currentLocalTheme: string | null = localStorage.getItem('theme')

		if (currentLocalTheme === null) {
			localStorage.setItem('theme', currentTheme.background)
		} else if (currentLocalTheme === '#fff') {
			setCurrentTheme(lightTheme)
		} else {
			setCurrentTheme(darkTheme)
		}
	}, [])

	return (
		<ThemeContext.Provider value={{ theme: currentTheme, handleToggleTheme, currentTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export const useThemeContext = () => {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error('useThemeContext must be used within a ThemeContextProvider')
	}
	return context
}
