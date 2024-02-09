import { FC } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { TypeItemsList } from '../../types/Todo.types'
import { List } from './TodoList.styled'

export type TypeItems = {
	data: TypeItemsList
}

const TodoList: FC<TypeItems> = ({ data }) => {
	return (
		<>
			{data && (
				<List>
					{data.length !== 0 ? (
						data
							.map(({ id, text, complexity, status, addingDate }) => (
								<TodoItem
									key={id}
									id={id}
									text={text}
									complexity={complexity}
									status={status}
									addingDate={addingDate}
								/>
							))
							.reverse()
					) : (
						<div>loading</div>
					)}
				</List>
			)}
		</>
	)
}
export default TodoList
