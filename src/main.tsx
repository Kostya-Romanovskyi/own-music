import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import TodoContext from './context/TodoContext'

import { AuthProvider } from './context/AuthContext.tsx'
import { TodoProvider } from './context/TodoContext.tsx'
import { ThemeContextProvider } from './context/ThemeContext.tsx'
import { IconContext } from 'react-icons'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter basename='/own-todo-typescript'>
			<ThemeContextProvider>
				<AuthProvider>
					<TodoProvider>
						<IconContext.Provider value={{ className: 'global-icons' }}>
							<App />
						</IconContext.Provider>
					</TodoProvider>
				</AuthProvider>
			</ThemeContextProvider>
		</BrowserRouter>
	</React.StrictMode>
)
