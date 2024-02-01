import { FC, SetStateAction, useContext, useState } from 'react'
import { TypeNewTodoItem } from '../../types/Todo.types'

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

import { addTodo } from '../../API/API-list'
import { TodoContextData } from '../../context/TodoContext'
import { getAllDocuments } from '../../API/API-list'

const CreateTodo: FC = () => {
	const [selectedValue, setSelectedValue] = useState<string>('easy')
	const [showCreate, setShowCreate] = useState<boolean>(false)
	const [newValue, setNewValue] = useState<string>('')

	const { userAuth, setDataTodo } = useContext(TodoContextData)

	const toggleCreate = (): void => {
		setShowCreate(!showCreate)
	}

	const handleChecked = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setSelectedValue(e.target.value)
	}

	const handleChange = (e: { target: { value: SetStateAction<string> } }): void => {
		setNewValue(e.target.value)
	}

	const handleAddTodo = (): void => {
		const currentDate = new Date()

		const day = currentDate.getDate().toString().padStart(2, '0')
		const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
		const year = currentDate.getFullYear()

		const formattedDate = `${day}.${month}.${year}`

		const newTodo: TypeNewTodoItem = {
			text: newValue,
			complexity: selectedValue as 'easy' | 'medium' | 'hard',
			status: false,
			addingDate: formattedDate,
		}

		try {
			addTodo(userAuth.uid, newTodo)

			setNewValue('')
			setShowCreate(!showCreate)

			const fetchDocuments = async () => {
				try {
					if (userAuth) {
						const docs = await getAllDocuments(userAuth)

						setDataTodo(docs)
					}
				} catch (error) {
					console.error('Error fetching documents:', error)
				}
			}

			fetchDocuments()
		} catch (error) {
			console.log(error)
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
