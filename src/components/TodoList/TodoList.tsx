import { FC } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { TypeItems } from '../../types/Todo.types'
import { List } from './TodoList.styled'

const TodoList: FC<TypeItems> = ({ data }) => {
	return (
		<>
			<List>
				{data.map(({ id, text }) => (
					<TodoItem key={id} id={id} text={text} />
				))}
			</List>
		</>
	)
}
export default TodoList
