import { FC, useContext, useEffect, useState } from 'react'
import { TodoContextData } from '../../context/TodoContext'
// import { TypeTodoItem } from '../../types/Todo.types'

const TodoSearch: FC = () => {
	const [inputValue, setInputValue] = useState('')
	const { searchTodo, search, setSearch } = useContext(TodoContextData)

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setSearch(e.target.value)

	}
	// searchTodo(inputValue)
	return (
		<div>
			<input onChange={handleSearch} type='text' value={search} placeholder='Searching by text' />
		</div>
	)
}

export default TodoSearch
