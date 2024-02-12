import { FC, createContext, useContext, useReducer } from 'react'
import { getAllTodo, writeUserData, updateDataTodo, removeTodo } from '../API/API-list'
import { TypeTodoItem, TypeContextProps } from '../types/Todo.types'
import { TypeUser } from '../types/UserAuth.types'

type TypeInitTodoContext = {
	dataTodo: TypeTodoItem[]
	filteredTodo: TypeTodoItem[]
	isLoading: boolean
}

type TypeAction = {
	type: string
	payload?: any
}

// Начальное состояние
const initialState: TypeInitTodoContext = {
	dataTodo: [],
	filteredTodo: [],
	isLoading: false,
}

// Создаем контекст
export const TodoContext = createContext<{
	state: TypeInitTodoContext
	addTodo: (userId: string, newTodo: TypeTodoItem) => Promise<void>
	updateTodo: (userId: string, todoId: string, updatedTodo: TypeTodoItem) => void
	fetchAllTodo: (user: TypeUser) => Promise<void>
	deleteTodo: (userId: string, todoId: string) => void
	searchTodo: (query: string) => void
	filterTodo: (status: string) => void
}>({
	state: initialState,
	addTodo: async () => {},
	updateTodo: () => {},
	fetchAllTodo: async () => {},
	deleteTodo: () => {},
	searchTodo: () => {},
	filterTodo: () => {},
})

// Типы действий
const ADD_TODO = 'ADD_TODO'
const UPDATE_TODO = 'UPDATE_TODO'
const SET_ALL_TODO = 'SET_ALL_TODO'
const DELETE_TODO = 'DELETE_TODO'
const SEARCH_TODO = 'SEARCH_TODO'
const FILTER_TODO = 'FILTER_TODO'
const SET_IS_LOADING = 'SET_IS_LOADING'

// Редуктор для управления состоянием
const reducer = (state: TypeInitTodoContext, action: TypeAction) => {
	const { type, payload } = action

	switch (type) {
		case SET_ALL_TODO:
			return {
				...state,
				dataTodo: payload,
				filteredTodo: payload,
			}

		case ADD_TODO:
			return {
				...state,
				dataTodo: [payload, ...state.dataTodo],
				filteredTodo: [payload, ...state.filteredTodo],
			}

		case UPDATE_TODO:
			const updatedTodo = payload
			const updatedDataTodo = state.dataTodo.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo))

			const updatedFilteredTodo = state.filteredTodo.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo))

			return {
				...state,
				dataTodo: updatedDataTodo,
				filteredTodo: updatedFilteredTodo,
			}

		case DELETE_TODO:
			return {
				...state,
				dataTodo: state.dataTodo.filter(todo => todo.id !== payload.todoId),
				filteredTodo: state.filteredTodo.filter(todo => todo.id !== payload.todoId),
			}

		case SEARCH_TODO:
			const searchTodo = state.dataTodo.filter(todo => todo.text.toLowerCase().includes(payload))
			return {
				...state,
				filteredTodo: searchTodo,
			}

		case FILTER_TODO:
			let filteredTodo: TypeTodoItem[] = []
			console.log(payload)

			if (payload === 'All' || payload === 'Усі') {
				filteredTodo = state.dataTodo
			} else if (payload === 'In Progress' || payload === 'Виконується') {
				filteredTodo = state.dataTodo.filter(todo => !todo.status)
			} else if (payload === 'Done' || payload === 'Виконано') {
				filteredTodo = state.dataTodo.filter(todo => todo.status)
			} else if (payload === 'Easy' || payload === 'Легко') {
				filteredTodo = state.dataTodo.filter(todo => todo.complexity === 'easy')
			} else if (payload === 'Medium' || payload === 'Середньо') {
				filteredTodo = state.dataTodo.filter(todo => todo.complexity === 'medium')
			} else if (payload === 'Hard' || payload === 'Важко') {
				filteredTodo = state.dataTodo.filter(todo => todo.complexity === 'hard')
			}
			return {
				...state,
				filteredTodo: filteredTodo,
			}
		case SET_IS_LOADING:
			return {
				...state,
				isLoading: payload,
			}

		default:
			return state
	}
}

// Создаем провайдер контекста
export const TodoProvider: FC<TypeContextProps> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	// fetch All Todo
	const fetchAllTodo = async (user: TypeUser): Promise<void> => {
		try {
			dispatch({ type: SET_IS_LOADING, payload: true }) // Установите isLoading в true при начале загрузки
			const allTodo: TypeTodoItem[] = await getAllTodo(user)
			dispatch({ type: SET_ALL_TODO, payload: allTodo })
		} catch (error) {
			console.error(error)
		} finally {
			dispatch({ type: SET_IS_LOADING, payload: false }) // Установите isLoading в false после завершения загрузки (даже если произошла ошибка)
		}
	}

	// addTodo
	const addTodo = async (userId: string, newTodo: TypeTodoItem): Promise<void> => {
		try {
			await writeUserData(userId, newTodo)
			dispatch({ type: ADD_TODO, payload: newTodo })
		} catch (error) {
			console.error(error)
			// Обработка ошибки
		}
	}

	// update Todo
	const updateTodo = (userId: string, todoId: string, updatedTodo: TypeTodoItem) => {
		updateDataTodo(userId, todoId, updatedTodo)
		dispatch({ type: UPDATE_TODO, payload: updatedTodo })
	}

	// delete Todo
	const deleteTodo = (userId: string, todoId: string) => {
		removeTodo(userId, todoId)
		dispatch({ type: DELETE_TODO, payload: { userId, todoId } })
	}

	const searchTodo = (query: string) => {
		dispatch({ type: SEARCH_TODO, payload: query.toLowerCase() })
	}

	const filterTodo = (status: string) => {
		dispatch({ type: FILTER_TODO, payload: status })
	}

	return (
		<TodoContext.Provider value={{ state, addTodo, updateTodo, fetchAllTodo, deleteTodo, searchTodo, filterTodo }}>
			{children}
		</TodoContext.Provider>
	)
}

// // Хук для использования контекста
export const useTodoContext = () => useContext(TodoContext)
