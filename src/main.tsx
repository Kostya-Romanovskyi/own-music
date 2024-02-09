import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext.tsx'
import { TodoProvider } from './context/TodoContext.tsx'
import { ThemeContextProvider } from './context/ThemeContext.tsx'
import { IconContext } from 'react-icons'
import GlobalStyles from './UI/GlobalStyles.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter basename='/own-todo-typescript'>
			<ThemeContextProvider>
				<AuthProvider>
					<TodoProvider>
						<IconContext.Provider value={{ className: 'global-icons' }}>
							<GlobalStyles />
							<App />
						</IconContext.Provider>
					</TodoProvider>
				</AuthProvider>
			</ThemeContextProvider>
		</BrowserRouter>
	</React.StrictMode>
)
