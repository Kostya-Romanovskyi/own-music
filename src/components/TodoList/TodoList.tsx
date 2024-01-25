import { FC } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { TypeItems } from '../../types/Todo.types'
import { List } from './TodoList.styled'

const TodoList: FC<TypeItems> = ({ data }) => {
	return (
		<>
			<List>
				{data
					.map(({ id, text, complexity, status, addingDate }) => (
						<TodoItem key={id} id={id} text={text} complexity={complexity} status={status} addingDate={addingDate} />
					))
					.reverse()}
			</List>
		</>
	)
}
export default TodoList
