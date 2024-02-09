import { useState, SetStateAction } from 'react'
import {
	CreateTextarea,
	DescriptionText,
	RadioWrapper,
	Label,
	RadioButton,
	AddTaskButton,
} from './CreateTodoPage.styled'
import { useAuthContext } from '../../context/AuthContext'
import { useTodoContext } from '../../context/TodoContext'
import { Link } from 'react-router-dom'

import { TypeTodoItem } from '../../types/Todo.types'

import { nanoid } from 'nanoid'

import { formattedDate } from '../../constance/Date'

import { useNavigate } from 'react-router-dom'

const CreateTodoPage = () => {
	const [selectedValue, setSelectedValue] = useState<string>('easy')
	const [newValue, setNewValue] = useState<string>('')

	const { userAuth } = useAuthContext()
	const { addTodo } = useTodoContext()

	const navigate = useNavigate()

	const handleChecked = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setSelectedValue(e.target.value)
	}

	const handleChange = (e: { target: { value: SetStateAction<string> } }): void => {
		setNewValue(e.target.value)
	}

	const handleAddTodo = async () => {
		const id = nanoid()

		const newTodo: TypeTodoItem = {
			id,
			text: newValue,
			complexity: selectedValue as 'easy' | 'medium' | 'hard',
			status: false,
			addingDate: formattedDate,
		}

		if (userAuth) {
			addTodo(userAuth.uid, newTodo)

			navigate('/')
		}
	}

	return (
		<div className='container'>
			<Link to={'/'}>Back</Link>

			<CreateTextarea onChange={handleChange} value={newValue}></CreateTextarea>

			<DescriptionText>Select task difficulty:</DescriptionText>

			<RadioWrapper>
				<li>
					<Label htmlFor='easy-create' type='easy' checked={selectedValue === 'easy'}>
						Easy
					</Label>
					<RadioButton onChange={handleChecked} type='radio' name='complexity-create' value='easy' id='easy-create' />
				</li>

				<li>
					<Label htmlFor='medium-create' type='medium' checked={selectedValue === 'medium'}>
						Medium
					</Label>
					<RadioButton
						onChange={handleChecked}
						type='radio'
						name='complexity-create'
						value='medium'
						checked={selectedValue === 'medium'}
						id='medium-create'
					/>
				</li>

				<li>
					<Label htmlFor='hard-create' type='hard' checked={selectedValue === 'hard'}>
						Hard
					</Label>
					<RadioButton
						onChange={handleChecked}
						type='radio'
						name='complexity-create'
						value='hard'
						checked={selectedValue === 'hard'}
						id='hard-create'
					/>
				</li>
			</RadioWrapper>

			<AddTaskButton onClick={handleAddTodo}>Add Task</AddTaskButton>
		</div>
	)
}
export default CreateTodoPage
