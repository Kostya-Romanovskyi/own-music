import { FC } from 'react'
import { TypeTodoMainButton } from '../../types/Todo.types'

import { StyledButton } from './TodoMainButton.styled'

const TodoMainButton: FC<TypeTodoMainButton> = ({ btnContent, onClick }) => {
	return (
		<StyledButton onClick={onClick} type='button'>
			{btnContent}
		</StyledButton>
	)
}

export default TodoMainButton
