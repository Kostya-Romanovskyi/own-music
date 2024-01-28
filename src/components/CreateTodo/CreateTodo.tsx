import { FC, SetStateAction, useContext, useState } from 'react'
import { nanoid } from 'nanoid'
import { TypeTodoItem } from '../../types/Todo.types'
import TodoMainButton from '../TodoMainButton/TodoMainButton'

import { GoPlus } from 'react-icons/go'
import { IoCloseSharp } from 'react-icons/io5'
import { TodoContextData } from '../../context/TodoContext'

import {
	CreateTodoWrapper,
	OpenCreateWindow,
	CreateWindow,
	CloseButton,
	CreateTextarea,
	DescriptionText,
	StyledSelect,
	AddTaskButton,
} from './CreateTodo.styled'

const options = [
	{ value: 'easy', label: 'Easy' },
	{ value: 'medium', label: 'Medium' },
	{ value: 'hard', label: 'Hard' },
]

const CreateTodo: FC = () => {
	const [showCreate, setShowCreate] = useState(false)
	const [newValue, setNewValue] = useState('')

	const { addTodo } = useContext(TodoContextData)

	const toggleCreate = () => {
		setShowCreate(!showCreate)
	}

	const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
		setNewValue(e.target.value)
	}

	const handleSubmit = () => {
		const newId = nanoid()

		const currentDate = new Date()

		const day = currentDate.getDate().toString().padStart(2, '0')
		const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
		const year = currentDate.getFullYear()

		const formattedDate = `${day}.${month}.${year}`

		const newTodo: TypeTodoItem = {
			id: newId,
			text: newValue,
			complexity: 'easy',
			status: 'Done',
			addingDate: formattedDate,
		}

		addTodo(newTodo)

		setNewValue('')
		setShowCreate(!showCreate)
	}

	return (
		<CreateTodoWrapper>
			<OpenCreateWindow onClick={toggleCreate} type='button'>
				Add to do
				<GoPlus style={{ marginLeft: 10 }} />
			</OpenCreateWindow>

			<CreateWindow isShow={showCreate}>
				<CloseButton onClick={toggleCreate}>
					<IoCloseSharp className='global-icons' />
				</CloseButton>

				<CreateTextarea onChange={handleChange} value={newValue}></CreateTextarea>

				<DescriptionText>Select task difficulty</DescriptionText>

				<StyledSelect options={options} />

				{/* <AddTaskButton onClick={handleSubmit}>Add Task</AddTaskButton> */}
				<AddTaskButton onClick={handleSubmit}>Add Task</AddTaskButton>
			</CreateWindow>
		</CreateTodoWrapper>
	)
}
export default CreateTodo
