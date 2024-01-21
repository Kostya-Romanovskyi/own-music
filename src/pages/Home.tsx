import { FC, useContext } from 'react'
import TodoList from '../components/TodoList/TodoList'
import CreateTodo from '../components/CreateTodo/CreateTodo'
import { TodoContextData } from '../context/TodoContext'

const Home: FC = () => {
	const contextValue = useContext(TodoContextData)
	console.log(contextValue)

	return (
		<div className='container'>
			<CreateTodo setData={contextValue.setDataTodo} />
			<TodoList data={contextValue.dataTodo} />
		</div>
	)
}

export default Home
