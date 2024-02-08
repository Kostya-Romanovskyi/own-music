import { FC } from 'react'
import { useTodoContext } from '../../context/TodoContext'
import { ThemeInput } from '../../UI/GlobalTheme.styled'

const TodoSearch: FC = () => {
	const { searchTodo } = useTodoContext()

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
		searchTodo(e.target.value)
	}

	return (
		<div>
			<ThemeInput onChange={handleSearch} type='text' placeholder='Searching by text' />
		</div>
	)
}

export default TodoSearch
