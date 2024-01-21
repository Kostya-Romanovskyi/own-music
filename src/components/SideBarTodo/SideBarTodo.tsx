import { FC } from 'react'
import SideBarItem from '../SideBarItem/SideBarItem'
import { ToggleBar, CloseBarButton, SideBarList } from './SideBarTodo.styled'
import { IoCloseSharp } from 'react-icons/io5'

type TypeBarProp = {
	isHidden: boolean
	toggleBar: () => void
}

const SideBarTodo: FC<TypeBarProp> = ({ isHidden, toggleBar }) => {
	return (
		<ToggleBar isHidden={isHidden}>
			<CloseBarButton type='button' onClick={toggleBar}>
				<IoCloseSharp className='global-icons' />
			</CloseBarButton>
			<SideBarList>
				<SideBarItem />
			</SideBarList>
		</ToggleBar>
	)
}
export default SideBarTodo
