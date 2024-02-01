import { FC, createContext, useState, useEffect } from 'react'
import { TypeContextProps, TypeTodoItem } from '../types/Todo.types'
import { addTodo } from '../API/API-list'

const initialContextValue: Record<string, any> = {}

export const TodoContextData = createContext<Record<string, any>>(initialContextValue)

const TodoContext: FC<TypeContextProps> = ({ children }) => {
	const [userAuth, setUserAuth] = useState(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [dataTodo, setDataTodo] = useState<TypeTodoItem[]>([])
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)
	const [search, setSearch] = useState<string>('')
	const [filterTodo, setFilterTodo] = useState<TypeTodoItem[]>(dataTodo)

	useEffect(() => {
		setFilterTodo(dataTodo)
	}, [dataTodo])

	const deleteTodo = (todoId: string): void => {
		setDataTodo(dataTodo.filter(todo => todo.id !== todoId))
		setFilterTodo(filterTodo.filter(todo => todo.id !== todoId))
	}

	const filtersTodo = (categoryText: string): void => {
		if (categoryText === 'All') {
			setFilterTodo(dataTodo)
			return
		}

		const allFilters = dataTodo.filter(todo => {
			if (todo.status) {
				return 'Done'.toLowerCase() === categoryText.toLowerCase()
			}

			if (!todo.status) {
				return 'In Progress'.toLowerCase() === categoryText.toLowerCase()
			}
		})

		setFilterTodo(allFilters)
	}

	const toDoListWithSearch = filterTodo.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()))

	const contextValue = {
		userAuth,
		setUserAuth,
		isLoading,
		setIsLoading,
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
