import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/initializeFirebase'

import { TypeItemsList, TypeTodoItem, TypeNewTodoItem } from '../types/Todo.types'

type TypeUser = {
	[key: string]: string
}

export const getAllDocuments = async (user: TypeUser) => {
	const documents: TypeItemsList = []
	const querySnapshot = await getDocs(collection(db, `TodoList.${user.uid}`))
	querySnapshot.forEach(doc => {
		documents.push({ id: doc.id, ...doc.data() } as TypeTodoItem)
	})

	return documents
}

export const addTodo = async (id: string, newTodo: TypeNewTodoItem) => {
	await addDoc(collection(db, `TodoList.${id}`), newTodo)
}

export const deleteTodo = async (uid: string, id: string) => {
	try {
		await deleteDoc(doc(db, `TodoList.${uid}`, id))
	} catch (error) {
		console.log(error)
	}
}

export const updateTodo = async (uid: string, id: string, updatedTodo: TypeNewTodoItem) => {
	try {
		await updateDoc(doc(db, `TodoList.${uid}`, id), updatedTodo)
	} catch (error) {
		console.log(error)
	}
}
