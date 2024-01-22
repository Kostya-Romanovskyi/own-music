import { FC, createContext, useState } from 'react'
import { data } from '../API/API-list'
import { TypeContextProps } from '../types/Todo.types'

const initialContextValue: Record<string, any> = {}

export const TodoContextData = createContext<Record<string, any>>(initialContextValue)

const TodoContext: FC<TypeContextProps> = ({ children }) => {
	const [dataTodo, setDataTodo] = useState(data)
	const [darkTheme, setDarkTheme] = useState(false)
	const [searchList, setSearchList] = useState(data)

	const contextValue = {
		dataTodo,
		setDataTodo,
		darkTheme,
		setDarkTheme,
		searchList,
		setSearchList,
	}

	return <TodoContextData.Provider value={contextValue}>{children}</TodoContextData.Provider>
}

export default TodoContext
