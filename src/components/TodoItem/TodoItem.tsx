import { FC, useContext, useState } from 'react'
import { TypeTodoItem } from '../../types/Todo.types'

import {
	Item,
	Text,
	AdditionalWrapp,
	AdditionalComplexity,
	AdditionalStatus,
	AdditionalInfoDate,
	MoreButton,
	ShowButtons,
} from './TodoItem.styled'
import { TodoContextData } from '../../context/TodoContext'

import TodoMainButton from '../TodoMainButton/TodoMainButton'
import { BsThreeDots } from 'react-icons/bs'

const TodoItem: FC<TypeTodoItem> = ({ id, text, complexity, status, addingDate }) => {
	const [showButtons, setShowButtons] = useState<boolean>(false)
	const { dataTodo, setDataTodo } = useContext(TodoContextData)

	const handleSnowButtons = (): void => {
		setShowButtons(!showButtons)
	}

	const handleDelete = (selectedId: string): void => {
		const filteredList = dataTodo.filter((item: TypeTodoItem) => item.id !== selectedId)

		setDataTodo(filteredList)
	}

	return (
		<>
			<Item>
				<Text>{text}</Text>
				<AdditionalWrapp>
					<MoreButton type='button' onClick={handleSnowButtons}>
						<BsThreeDots className='global-icons' />
					</MoreButton>
					<AdditionalComplexity>{complexity}</AdditionalComplexity>
					<AdditionalStatus>{status}</AdditionalStatus>
					<AdditionalInfoDate>{addingDate}</AdditionalInfoDate>
				</AdditionalWrapp>

				<ShowButtons isShow={showButtons}>
					<TodoMainButton btnContent='Edit' />
					<TodoMainButton btnContent='Delete' onClick={() => handleDelete(id)} />
				</ShowButtons>
			</Item>
		</>
	)
}

export default TodoItem
