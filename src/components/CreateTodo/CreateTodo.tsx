import { FC, SetStateAction, useState } from 'react'

import { TypeTodoItem } from '../../types/Todo.types'
import { nanoid } from 'nanoid'
import { formattedDate } from '../../Constant/Date'

import {
	CreateTodoWrapper,
	OpenCreateWindow,
	CreateWindow,
	CloseIcon,
	CloseButton,
	CreateTextarea,
	DescriptionText,
	AddTaskButton,
	IconPlus,
	RadioWrapper,
	RadioButton,
	Label,
} from './CreateTodo.styled'

import { useTodoContext } from '../../context/TodoContext'
import { useAuthContext } from '../../context/AuthContext'

const CreateTodo: FC = () => {
	const [selectedValue, setSelectedValue] = useState<string>('easy')
	const [showCreate, setShowCreate] = useState<boolean>(false)
	const [newValue, setNewValue] = useState<string>('')

	const { userAuth } = useAuthContext()
	const { addTodo } = useTodoContext()

	const toggleCreate = (): void => {
		setShowCreate(!showCreate)
	}

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
		}
	}

	return (
		<CreateTodoWrapper>
			<OpenCreateWindow onClick={toggleCreate} type='button'>
				Add to do
				<IconPlus />
			</OpenCreateWindow>

			<CreateWindow isOpen={showCreate}>
				<CloseButton onClick={toggleCreate}>
					<CloseIcon />
				</CloseButton>

				<CreateTextarea onChange={handleChange} value={newValue}></CreateTextarea>

				<DescriptionText>Select task difficulty</DescriptionText>

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
			</CreateWindow>
		</CreateTodoWrapper>
	)
}
export default CreateTodo
