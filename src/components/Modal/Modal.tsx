import { FC, useContext, useEffect, useState } from 'react'
import Modal from 'react-modal'

import {
	TextArea,
	RadioWrapper,
	Label,
	RadioButton,
	CloseButton,
	StyledCloseIcon,
	EditButton,
	DeleteButton,
} from './Modal.styled'
import { TodoContextData } from '../../context/TodoContext'
import { getAllDocuments, deleteTodo, updateTodo } from '../../API/API-list'
import { TypeTodoItem, TypeNewTodoItem } from '../../types/Todo.types'

Modal.setAppElement('#root')

type TypeModalWindow = {
	modalIsOpen: boolean
	setIsOpen: (value: boolean) => void
	text: string
	id: string
}

const ModalWindow: FC<TypeModalWindow> = ({ modalIsOpen, setIsOpen, text, id }) => {
	const [textAreaValue, setTextAreaValue] = useState('')
	const [selectedValue, setSelectedValue] = useState('easy')

	const { isDarkTheme, dataTodo, setDataTodo, userAuth } = useContext(TodoContextData)

	useEffect(() => {
		setTextAreaValue(text)
	}, [text])

	function closeModal() {
		setIsOpen(false)
	}

	const handleChecked = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setSelectedValue(e.target.value)
	}

	const handleUpdate = (uid: string, TodoId: string): void => {
		const updatedTodo: TypeNewTodoItem = {
			text: textAreaValue,
			complexity: selectedValue as 'easy' | 'medium' | 'hard',
			status: false,
			addingDate: '21.21.21',
		}

		updateTodo(uid, TodoId, updatedTodo)

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

		setIsOpen(false)
	}

	const handleDelete = (uid: string, TodoId: string): void => {
		deleteTodo(uid, TodoId)

		setDataTodo(dataTodo.filter((todo: TypeTodoItem) => todo.id !== TodoId))
	}

	return (
		<Modal
			className={isDarkTheme ? 'modal-dark' : 'modal-light'}
			style={{
				overlay: {
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: isDarkTheme ? '#ffffff1f' : 'rgba(255, 255, 255, 0.75)',
				},
			}}
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			contentLabel='Example Modal'
		>
			<CloseButton onClick={closeModal}>
				<StyledCloseIcon />
			</CloseButton>

			<TextArea
				placeholder='Edit text'
				onChange={e => setTextAreaValue(e.target.value)}
				defaultValue={textAreaValue}
			></TextArea>

			<RadioWrapper>
				<li>
					<Label htmlFor='easy-update' type='easy' checked={selectedValue === 'easy'}>
						Easy
					</Label>
					<RadioButton onChange={handleChecked} type='radio' name='complexity-update' value='easy' id='easy-update' />
				</li>

				<li>
					<Label htmlFor='medium-update' type='medium' checked={selectedValue === 'medium'}>
						Medium
					</Label>
					<RadioButton
						onChange={handleChecked}
						type='radio'
						name='complexity-update'
						value='medium'
						checked={selectedValue === 'medium'}
						id='medium-update'
					/>
				</li>

				<li>
					<Label htmlFor='hard-update' type='hard' checked={selectedValue === 'hard'}>
						Hard
					</Label>
					<RadioButton
						onChange={handleChecked}
						type='radio'
						name='complexity-update'
						value='hard'
						checked={selectedValue === 'hard'}
						id='hard-update'
					/>
				</li>
			</RadioWrapper>

			<EditButton onClick={() => handleUpdate(userAuth.uid, id)}>Edit</EditButton>

			<DeleteButton onClick={() => handleDelete(userAuth.uid, id)}>delete</DeleteButton>
		</Modal>
	)
}
export default ModalWindow
