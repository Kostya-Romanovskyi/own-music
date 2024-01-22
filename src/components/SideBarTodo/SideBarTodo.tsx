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
	const contextValue = useContext(TodoContextData)

	return (
		<ToggleBar
			isHidden={isHidden}
			style={{
				background: contextValue.darkTheme ? '#333' : '#fff',
				color: contextValue.darkTheme ? '#fff' : '#333',
				height: '100vh',
			}}
		>
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
