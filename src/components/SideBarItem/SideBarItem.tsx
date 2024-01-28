import { FC, useContext } from 'react'
import { SideItemStyled, SideButtonStyled } from './SideBarItem.styled'
import { TodoContextData } from '../../context/TodoContext'

type TypeBarItemProps = {
	closeBurger?: (value: boolean) => void
}

const SideBarItem: FC<TypeBarItemProps> = ({ closeBurger }) => {
	const { filtersTodo } = useContext(TodoContextData)
	const filterCategories: string[] = ['All', 'In progress', 'Done', 'Add last 2 days']

	const handleFilteredCategories = (e: React.MouseEvent<HTMLButtonElement>): void => {
		const itemContent = (e.currentTarget as HTMLButtonElement).textContent

		filtersTodo(itemContent)

		if (closeBurger !== undefined) closeBurger(false)
	}

	return filterCategories.map((category, index) => {
		return (
			<SideItemStyled key={index}>
				<SideButtonStyled onClick={handleFilteredCategories}>{category}</SideButtonStyled>
			</SideItemStyled>
		)
	})
}

export default SideBarItem
