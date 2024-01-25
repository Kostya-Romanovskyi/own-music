import { FC, createContext, useState } from 'react'
import { data } from '../API/API-list'
import { TypeContextProps, TypeTodoItem } from '../types/Todo.types'

const initialContextValue: Record<string, any> = {}

export const TodoContextData = createContext<Record<string, any>>(initialContextValue)

const TodoContext: FC<TypeContextProps> = ({ children }) => {
	const [dataTodo, setDataTodo] = useState(data)
	const [darkTheme, setDarkTheme] = useState(false)
	const [search, setSearch] = useState('')

	const addTodo = (todo: TypeTodoItem) => {
		setDataTodo([...dataTodo, todo])
	}

	const deleteTodo = (todoId: string) => {
		setDataTodo(dataTodo.filter(todo => todo.id !== todoId))
	}

	const searchTodo = dataTodo.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()))

	const contextValue = {
		dataTodo,
		setDataTodo,
		darkTheme,
		setDarkTheme,
		addTodo,
		deleteTodo,
		searchTodo,
		search,
		setSearch,
	}

	return <TodoContextData.Provider value={contextValue}>{children}</TodoContextData.Provider>
}

export default TodoContext
