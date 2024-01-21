import { SideItemStyled, SideButtonStyled } from './SideBarItem.styled'

const SideBarItem = () => {
	const filterСategories: string[] = ['All', 'In progress', 'Done', 'Add last 2 days']

	return filterСategories.map((category, index) => {
		return (
			<SideItemStyled key={index}>
				<SideButtonStyled type='button'>{category}</SideButtonStyled>
			</SideItemStyled>
		)
	})
}
export default SideBarItem
