import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import TodoContext from './context/TodoContext'
import { IconContext } from 'react-icons'
import { ThemeSwitcherProvider } from 'react-css-theme-switcher'
import { themes } from './UI/GlobalThemes.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter basename='/own-todo-typescript'>
			<TodoContext>
				<ThemeSwitcherProvider defaultTheme='light' themeMap={themes}>
					<IconContext.Provider value={{ className: 'global-icons' }}>
						<App />
					</IconContext.Provider>
				</ThemeSwitcherProvider>
			</TodoContext>
		</BrowserRouter>
	</React.StrictMode>
)
