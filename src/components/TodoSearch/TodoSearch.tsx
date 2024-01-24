import { FC, useContext, useState } from 'react'
import { TodoContextData } from '../../context/TodoContext'
import { TypeTodoItem } from '../../types/Todo.types'

const TodoSearch: FC = () => {
	const [inputValue, setInputValue] = useState('')
	const { dataTodo, setFilteredTodos } = useContext(TodoContextData)

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const currentInputValue = e.target.value

		setInputValue(currentInputValue)

		const filteredList = dataTodo.filter((item: TypeTodoItem) =>
			item.text.toLowerCase().includes(currentInputValue.toLowerCase())
		)

		setFilteredTodos(filteredList)
	}

	return (
		<div>
			<input onChange={handleSearch} type='text' value={inputValue} />
		</div>
	)
}

export default TodoSearch
