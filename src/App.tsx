import { useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Second from './pages/Second'

import { ThemeProvider } from '@emotion/react'

import { darkTheme } from './UI/GlobalTheme'

import { Routes, Route } from 'react-router-dom'
import { useThemeContext } from './context/ThemeContext'

function App() {
	const { theme, currentTheme } = useThemeContext()

	useEffect(() => {
		if (currentTheme === darkTheme) {
			document.body.classList.remove('light')
			document.body.classList.add('dark')
		} else {
			document.body.classList.remove('dark')
			document.body.classList.add('light')
		}
	}, [currentTheme])

	return (
		<ThemeProvider theme={theme}>
			<Routes>
				<Route path='/' element={<Header />}>
					<Route index path='/' element={<Home />} />
					<Route path='/second' element={<Second />} />
				</Route>
			</Routes>
		</ThemeProvider>
	)
}

export default App
