import { FC, useContext, useState } from 'react'
import { TypeTodoItem } from '../../types/Todo.types'

import {
	Item,
	Text,
	AdditionalWrapp,
	AdditionalComplexity,
	AdditionalStatus,
	AdditionalInfoDate,
	Checkbox,
	MoreButton,
} from './TodoItem.styled'

import { BsThreeDots } from 'react-icons/bs'
import ModalWindow from '../Modal/Modal'
import { updateTodo } from '../../API/API-list'
import { TodoContextData } from '../../context/TodoContext'
import { getAllDocuments } from '../../API/API-list'

const TodoItem: FC<TypeTodoItem> = ({ id, text, complexity, status, addingDate }) => {
	const [modalIsOpen, setIsOpen] = useState<boolean>(false)
	const [statusValue, setStatusValue] = useState<boolean>(false)

	const { userAuth, setDataTodo } = useContext(TodoContextData)

	function openModal() {
		setIsOpen(true)
	}

	const handleCheckboxChange = async (uid: string, TodoId: string) => {
		try {
			const newStatusValue: boolean = !statusValue

			await handleUpdateStatus(uid, TodoId)

			setStatusValue(newStatusValue)
		} catch (error) {
			console.error('Error updating status:', error)
		}
	}

	const handleUpdateStatus = async (uid: string, TodoId: string) => {
		try {
			const newStatusValue = {
				id,
				text,
				complexity,
				status: statusValue,
				addingDate,
			}

			await updateTodo(uid, TodoId, newStatusValue)

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
			console.error('Error updating status:', error)
			throw error
		}
	}

	return (
		<>
			<Item>
				<Text>{text}</Text>
				<AdditionalWrapp>
					<MoreButton type='button' onClick={openModal}>
						<BsThreeDots className='global-icons' />
					</MoreButton>

					<AdditionalComplexity complexity={complexity}>{complexity}</AdditionalComplexity>
					<AdditionalStatus status={status}>{status ? 'Done' : 'In Progress'}</AdditionalStatus>
					<AdditionalInfoDate>{addingDate}</AdditionalInfoDate>
					<Checkbox onChange={() => handleCheckboxChange(userAuth.uid, id)} type='checkbox' checked={status} />
				</AdditionalWrapp>

				<ModalWindow modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} text={text} id={id} />
			</Item>
		</>
	)
}

export default TodoItem
