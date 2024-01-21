import { FC, SetStateAction, useState } from 'react'
import { nanoid } from 'nanoid'
import { TypeTodoItem, TypeCreateTodo } from '../../types/Todo.types'

const CreateTodo: FC<TypeCreateTodo> = ({ setData }) => {
	const [newValue, setNewValue] = useState('')

	const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
		setNewValue(e.target.value)
	}

	const handleSubmit = () => {
		const newId = nanoid()

		const newTodo: TypeTodoItem = { id: newId, text: newValue, done: false }

		setData(prevState => [...prevState, newTodo])
	}

	return (
		<>
			<input type='text' onChange={handleChange} />
			<button type='button' onClick={handleSubmit}>
				Add note
			</button>
		</>
	)
}
export default CreateTodo
