import { FC } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { TypeItemsList } from '../../types/Todo.types'
import { List } from './TodoList.styled'
import { useTodoContext } from '../../context/TodoContext'
import DotLoader from 'react-spinners/DotLoader'

export type TypeItems = {
	data: TypeItemsList
}

const TodoList: FC<TypeItems> = ({ data }) => {
	const { state } = useTodoContext()

	return (
		<>
			{state.isLoading && state.isLoading ? (
				<DotLoader color='#C0C0C0' />
			) : (
				data && (
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
							<div>You haven`t todo now)</div>
						)}
					</List>
				)
			)}
		</>
	)
}
export default TodoList
