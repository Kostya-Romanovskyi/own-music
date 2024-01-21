import { FC, useContext } from 'react'
import { TypeTodoItem } from '../../types/Todo.types'
import { Item } from './TodoItem.styled'
import { TodoContextData } from '../../context/TodoContext'

const TodoItem: FC<TypeTodoItem> = ({ id, text }) => {
	const { dataTodo, setDataTodo } = useContext(TodoContextData)

	const handleDelete = (idEl: string) => {
		const filteredList = dataTodo.filter((item: TypeTodoItem) => item.id !== idEl)

		setDataTodo(filteredList)
	}

	return (
		<>
			<Item>
				<p>{id}</p>
				<p>{text}</p>
				<button onClick={() => handleDelete(id)}>delete</button>
			</Item>
		</>
	)
}
export default TodoItem
