import { ref, set, push, get, update, remove } from 'firebase/database'
import { database } from '../firebase/initializeFirebase'
import { TypeTodoItem } from '../types/Todo.types'
import { TypeUser } from '../types/UserAuth.types'

export const getAllTodo = async (user: TypeUser) => {
	try {
		const dbRef = ref(database, `TodoList/${user.uid}`)
		const snapshot = await get(dbRef)

		if (snapshot.exists()) {
			const tasksObject = snapshot.val()

			const tasksArray = Object.keys(tasksObject).map(taskId => {
				const taskWithId = tasksObject[taskId]
				taskWithId.id = taskId
				return taskWithId
			})

			return tasksArray
		} else {
			return []
		}
	} catch (error) {
		console.error(error)
		throw error
	}
}

export const writeUserData = async (userId: string, newTodo: TypeTodoItem) => {
	try {
		const todoListRef = ref(database, `TodoList/${userId}`)
		const newTodoRef = push(todoListRef)
		await set(newTodoRef, newTodo)

		console.log('Задача успешно добавлена')
	} catch (error) {
		console.error('Ошибка при записи данных:', error)
		throw error
	}
}

export const updateDataTodo = async (userId: string, todoId: string, updatedTodo: TypeTodoItem) => {
	update(ref(database, `TodoList/${userId}/${todoId}`), updatedTodo)
}

export const removeTodo = async (userId: string, todoId: string) => {
	try {
		const todoRef = ref(database, `TodoList/${userId}/${todoId}`)
		remove(todoRef)
		console.log(`Задача с ID ${todoId} удалена для пользователя ${userId}`)
	} catch (error: any) {
		console.error(`Ошибка при удалении задачи для пользователя ${userId}: ${error.message}`)
	}
}
