import { FC, useContext, useState } from 'react'
import { TodoContextData } from '../../context/TodoContext'
import { TypeTodoItem } from '../../types/Todo.types'

const TodoSearch: FC = () => {
	const [inputValue, setInputValue] = useState('')
	const contextValue = useContext(TodoContextData)

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentInputValue = e.target.value
		setInputValue(currentInputValue)

		const filteredList = contextValue.dataTodo.filter((item: TypeTodoItem) =>
			item.text.toLowerCase().includes(currentInputValue.toLowerCase())
		)

		contextValue.setSearchList(filteredList)
	}

	return (
		<div>
			<input onInput={handleSearch} type='text' value={inputValue} />
			<button>bu</button>
		</div>
	)
}

export default TodoSearch
