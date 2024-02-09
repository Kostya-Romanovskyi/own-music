import { FC } from 'react'
import { useTodoContext } from '../../context/TodoContext'
import { ThemeInput } from '../../UI/GlobalTheme.styled'

const TodoSearch: FC = () => {
	const { searchTodo } = useTodoContext()

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
		searchTodo(e.target.value)
	}

	return <ThemeInput onChange={handleSearch} type='text' placeholder='Searching by text' />
}

export default TodoSearch
