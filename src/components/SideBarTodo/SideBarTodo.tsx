import { FC, useContext } from 'react'
import SideBarItem from '../SideBarItem/SideBarItem'
import { ToggleBar, CloseBarButton, SideBarList } from './SideBarTodo.styled'
import { IoCloseSharp } from 'react-icons/io5'
import { TodoContextData } from '../../context/TodoContext'

type TypeBarProp = {
	isHidden: boolean
	toggleBar: () => void
}

const SideBarTodo: FC<TypeBarProp> = ({ isHidden, toggleBar }) => {
	const { dataTodo, setDataTodo, darkTheme } = useContext(TodoContextData)

	return (
		<ToggleBar isHidden={isHidden}>
			<CloseBarButton type='button' onClick={toggleBar}>
				<IoCloseSharp className='global-icons' />
			</CloseBarButton>
			<SideBarList>
				<SideBarItem dataFilter={dataTodo} setFilteredTodos={setDataTodo} isHidden={isHidden} />
			</SideBarList>
		</ToggleBar>
	)
}
export default SideBarTodo
