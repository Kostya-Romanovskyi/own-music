import { FC, useState } from 'react'
import { TypeTodoItem } from '../../types/Todo.types'
import { formattedDate } from '../../constance/Date'

import {
	Item,
	Text,
	AdditionalWrapp,
	AdditionalComplexity,
	AdditionalStatus,
	AdditionalInfoDate,
	MoreButton,
} from './TodoItem.styled'

import { BsThreeDots } from 'react-icons/bs'
import ModalWindow from '../Modal/Modal'

import { useTodoContext } from '../../context/TodoContext'
import { useAuthContext } from '../../context/AuthContext'

const TodoItem: FC<TypeTodoItem> = ({ id, text, complexity, status, addingDate }) => {
	const [modalIsOpen, setIsOpen] = useState<boolean>(false)

	const { userAuth } = useAuthContext()
	const { updateTodo } = useTodoContext()

	function openModal() {
		setIsOpen(true)
	}

	const handleCheckboxChange = async (uid: string, TodoId: string, checked: boolean) => {
		try {
			const newStatusValue = {
				id,
				text,
				complexity,
				status: checked,
				addingDate: formattedDate,
			}

			updateTodo(uid, TodoId, newStatusValue)
		} catch (error) {
			console.error('Error updating status:', error)
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
					<AdditionalStatus status={status}>{status ? 'Done' : 'In progress'}</AdditionalStatus>
					<AdditionalInfoDate>{addingDate}</AdditionalInfoDate>

					<input
						onChange={e => {
							if (userAuth) {
								handleCheckboxChange(userAuth.uid, id, e.target.checked)
							}
						}}
						className='checkbox-input'
						type='checkbox'
						id={`check=${id}`}
						checked={status}
					/>
					<label className='checkbox-label' htmlFor={`check=${id}`}></label>
				</AdditionalWrapp>

				<ModalWindow modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} text={text} id={id} />
			</Item>
		</>
	)
}

export default TodoItem
