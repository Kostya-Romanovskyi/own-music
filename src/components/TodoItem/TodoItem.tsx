import { FC, useContext, useState } from 'react'
import { TypeTodoItem } from '../../types/Todo.types'

import {
	Item,
	Text,
	Wrapper,
	TextArea,
	AdditionalWrapp,
	AdditionalComplexity,
	AdditionalStatus,
	AdditionalInfoDate,
	MoreButton,
	CloseButton,
	StyledCloseIcon,
	EditButton,
	StyledSelect,
	ShowButtons,
} from './TodoItem.styled'
import { TodoContextData } from '../../context/TodoContext'

import TodoMainButton from '../TodoMainButton/TodoMainButton'
import { BsThreeDots } from 'react-icons/bs'

const optionsComplexity = [
	{ value: 'easy', label: 'Easy' },
	{ value: 'medium', label: 'Medium' },
	{ value: 'hard', label: 'Hard' },
]
const optionsStatus = [
	{ value: 'done', label: 'Done' },
	{ value: 'InProgress', label: 'In Progress' },
]

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

					<AdditionalComplexity complexity={complexity}>{complexity}</AdditionalComplexity>
					<AdditionalStatus status={status}>{status}</AdditionalStatus>
					<AdditionalInfoDate>{addingDate}</AdditionalInfoDate>
				</AdditionalWrapp>

				<ShowButtons isOpen={showButtons}>
					<Wrapper>
						<TextArea placeholder='Edit text' defaultValue={text}></TextArea>
						<CloseButton onClick={handleSnowButtons}>
							<StyledCloseIcon />
						</CloseButton>
						<EditButton>Edit</EditButton>
					</Wrapper>

					<Wrapper>
						<StyledSelect defaultValue={optionsComplexity[0]} options={optionsComplexity} />
						<StyledSelect defaultValue={optionsStatus[0]} options={optionsStatus} />
						<TodoMainButton onClick={() => deleteTodo(id)}>delete</TodoMainButton>
					</Wrapper>
				</ShowButtons>
			</Item>
		</>
	)
}

export default TodoItem
