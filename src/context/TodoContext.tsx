import { FC, createContext, useState } from 'react'
import { data } from '../API/API-list'
import { TypeContextProps, TypeTodoItem } from '../types/Todo.types'

const initialContextValue: Record<string, any> = {}

export const TodoContextData = createContext<Record<string, any>>(initialContextValue)

const TodoContext: FC<TypeContextProps> = ({ children }) => {
	const [dataTodo, setDataTodo] = useState<TypeTodoItem[]>(data)
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)
	const [search, setSearch] = useState<string>('')
	const [filterTodo, setFilterTodo] = useState<TypeTodoItem[]>(dataTodo)

	const addTodo = (todo: TypeTodoItem): void => {
		setDataTodo([...dataTodo, todo])
		setFilterTodo([...filterTodo, todo])
	}

	const deleteTodo = (todoId: string): void => {
		setDataTodo(dataTodo.filter(todo => todo.id !== todoId))
		setFilterTodo(filterTodo.filter(todo => todo.id !== todoId))
	}

	const filtersTodo = (categoryText: string): void => {
		if (categoryText === 'All') {
			setFilterTodo(dataTodo)
			return
		}

		const allFilters = dataTodo.filter(todo => todo.status.toLowerCase() === categoryText.toLowerCase())

		setFilterTodo(allFilters)
	}

	const toDoListWithSearch = filterTodo.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()))

	const contextValue = {
		dataTodo,
		setDataTodo,
		isDarkTheme,
		setIsDarkTheme,
		addTodo,
		deleteTodo,
		filtersTodo,
		filterTodo,
		search,
		setSearch,
		toDoListWithSearch,
	}

	return <TodoContextData.Provider value={contextValue}>{children}</TodoContextData.Provider>
}

export default TodoContext
