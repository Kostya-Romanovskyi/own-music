import { FC } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { TypeItemsList } from '../../types/Todo.types'
import { List, IsTodo, LoaderContainer } from './TodoList.styled'
import { useTodoContext } from '../../context/TodoContext'
import BarLoader from 'react-spinners/BarLoader'
import { useTranslation } from 'react-i18next'
import GlobalColors from '../../UI/GlobalColors'

export type TypeItems = {
	data: TypeItemsList
}

const TodoList: FC<TypeItems> = ({ data }) => {
	const { state } = useTodoContext()
	const { t } = useTranslation()

	return (
		<>
			{state.isLoading && state.isLoading ? (
				<LoaderContainer>
					<BarLoader color={GlobalColors.spinnerColor} />
				</LoaderContainer>
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
							<IsTodo>{t('isTodo')}</IsTodo>
						)}
					</List>
				)
			)}
		</>
	)
}
export default TodoList
