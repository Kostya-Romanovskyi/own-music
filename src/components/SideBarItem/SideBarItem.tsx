import { FC } from 'react'
import { SideItemStyled, SideButtonStyled } from './SideBarItem.styled'
import { TypeItemsList } from '../../types/Todo.types'

type TypeBarItemProps = {
	dataFilter: TypeItemsList
	setFilteredTodos: React.Dispatch<React.SetStateAction<TypeItemsList>>
	isHidden: boolean
}

const SideBarItem: FC<TypeBarItemProps> = ({ dataFilter, setFilteredTodos, isHidden }) => {
	const filterСategories: string[] = ['All', 'In progress', 'Done', 'Add last 2 days']

	const handleFilteredCategories = (e: React.MouseEvent<HTMLButtonElement>) => {
		const itemContent = (e.currentTarget as HTMLButtonElement).textContent

		if (itemContent === 'All') {
			setFilteredTodos(dataFilter)

			return
		}

		const filteredTodos: TypeItemsList = dataFilter.filter(todo => todo.status === itemContent)

		setFilteredTodos(filteredTodos)
	}

	return filterСategories.map((category, index) => {
		return (
			<SideItemStyled key={index}>
				<SideButtonStyled onClick={handleFilteredCategories} type='button'>
					{category}
				</SideButtonStyled>
			</SideItemStyled>
		)
	})
}

export default SideBarItem
