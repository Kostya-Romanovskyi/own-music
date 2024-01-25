import { FC, useContext, useState } from 'react'
import { TypeTodoItem } from '../../types/Todo.types'

import { IoCloseSharp } from 'react-icons/io5'

import {
	Item,
	Text,
	TopPart,
	BottomPart,
	TextArea,
	AdditionalWrapp,
	AdditionalComplexity,
	AdditionalStatus,
	AdditionalInfoDate,
	MoreButton,
	CloseButton,
	EditButton,
	ShowButtons,
} from './TodoItem.styled'
import { TodoContextData } from '../../context/TodoContext'

import TodoMainButton from '../TodoMainButton/TodoMainButton'
import { BsThreeDots } from 'react-icons/bs'

const TodoItem: FC<TypeTodoItem> = ({ id, text, complexity, status, addingDate }) => {
	const [showButtons, setShowButtons] = useState<boolean>(false)
	const { deleteTodo } = useContext(TodoContextData)

	const handleSnowButtons = (): void => {
		setShowButtons(!showButtons)
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
					<TopPart>
						<TextArea placeholder='Edit text' defaultValue={text}></TextArea>
						{/* <TodoMainButton btnContent='Edit' /> */}
						<CloseButton onClick={handleSnowButtons}>
							<IoCloseSharp className='global-icons' />
						</CloseButton>
						<EditButton>Edit</EditButton>
					</TopPart>

					<TopPart>
						<select style={{ fontSize: '13px' }}>
							<option value='Done'>Done</option>
							<option value='In progress'>In progress</option>
						</select>
						<select style={{ fontSize: '13px' }}>
							<option value='Easy'>Easy</option>
							<option value='Medium'>Medium</option>
							<option value='Hard'>Hard</option>
						</select>
						<TodoMainButton btnContent='Delete' onClick={() => deleteTodo(id)} />
					</TopPart>
				</ShowButtons>
			</Item>
		</>
	)
}

export default TodoItem
