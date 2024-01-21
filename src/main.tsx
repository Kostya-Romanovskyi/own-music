import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import TodoContext from './context/TodoContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter basename='/own-todo-typescript'>
			<TodoContext>
				<App />
			</TodoContext>
		</BrowserRouter>
	</React.StrictMode>
)
