import { FC, useContext } from 'react'
import { TodoContextData } from '../../context/TodoContext'
import { ThemeInput } from '../../UI/GlobalTheme.styled'

const TodoSearch: FC = () => {
	const { search, setSearch } = useContext(TodoContextData)

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setSearch(e.target.value)
	}

	return (
		<div>
			<ThemeInput onChange={handleSearch} type='text' value={search} placeholder='Searching by text' />
		</div>
	)
}

export default TodoSearch
