import { FC } from 'react'
import { TypeTodoMainButton } from '../../types/Todo.types'

import { StyledButton } from './TodoMainButton.styled'

const TodoMainButton: FC<TypeTodoMainButton> = ({ children, onClick }) => {
	return (
		<StyledButton onClick={onClick} type='button'>
			{children}
		</StyledButton>
	)
}

export default TodoMainButton
