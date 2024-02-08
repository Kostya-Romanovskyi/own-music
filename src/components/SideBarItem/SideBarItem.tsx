import { FC } from 'react'
import { SideItemStyled, SideButtonStyled } from './SideBarItem.styled'
import { useTodoContext } from '../../context/TodoContext'

type TypeBarItemProps = {
	closeBurger?: (value: boolean) => void
}

const SideBarItem: FC<TypeBarItemProps> = ({ closeBurger }) => {
	const { filterTodo } = useTodoContext()
	const filterCategories: string[] = ['All', 'In progress', 'Done', 'Add last 2 days', 'Easy', 'Medium', 'Hard']

	const handleFilteredCategories = (e: React.MouseEvent<HTMLButtonElement>): void => {
		const itemContent = (e.currentTarget as HTMLButtonElement).textContent

		if (itemContent) {
			filterTodo(itemContent)
		}

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
