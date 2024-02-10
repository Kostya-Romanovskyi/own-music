import { FC } from 'react'
import { SideItemStyled, SideButtonStyled } from './SideBarItem.styled'
import { useTodoContext } from '../../context/TodoContext'
import { useTranslation } from 'react-i18next'

type TypeBarItemProps = {
	closeBurger?: (value: boolean) => void
}

const SideBarItem: FC<TypeBarItemProps> = ({ closeBurger }) => {
	const { filterTodo } = useTodoContext()
	const { t } = useTranslation()

	const filterCategories: string[] = [t('all'), t('inProgress'), t('done'), t('easy'), t('medium'), t('hard')]

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
