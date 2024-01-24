import { FC, SetStateAction, useState } from 'react'
import { nanoid } from 'nanoid'
import { TypeTodoItem, TypeCreateTodo } from '../../types/Todo.types'

import { CreateTodoWrapper } from './CreateTodo.styled'

const CreateTodo: FC<TypeCreateTodo> = ({ setData }) => {
	const [newValue, setNewValue] = useState('')

	const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
		setNewValue(e.target.value)
	}

	const handleSubmit = () => {
		const newId = nanoid()

		const newTodo: TypeTodoItem = {
			id: newId,
			text: newValue,
			complexity: 'easy',
			status: 'Done',
			addingDate: '12.11.25',
		}

		setData(prevState => [...prevState, newTodo])
	}

	return (
		<CreateTodoWrapper>
			<input type='text' onChange={handleChange} />
			<button type='button' onClick={handleSubmit}>
				Add note
			</button>
		</CreateTodoWrapper>
	)
}
export default CreateTodo
