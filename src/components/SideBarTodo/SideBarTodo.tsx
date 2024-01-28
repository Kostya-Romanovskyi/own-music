import { FC } from 'react'
import SideBarItem from '../SideBarItem/SideBarItem'
import { SideBarList } from './SideBarTodo.styled'

const SideBarTodo: FC = () => {
	return (
		<SideBarList>
			<SideBarItem />
		</SideBarList>
	)
}
export default SideBarTodo
