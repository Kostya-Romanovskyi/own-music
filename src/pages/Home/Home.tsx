import { FC, useContext, useState } from 'react'
import SideBarTodo from '../../components/SideBarTodo/SideBarTodo'
import TodoList from '../../components/TodoList/TodoList'
import CreateTodo from '../../components/CreateTodo/CreateTodo'
import { TodoContextData } from '../../context/TodoContext'
import GlobalTheme from '../../UI/GlobalTheme'

import { HiddenButton, GridWrapper } from './Home.styled'

const Home: FC = () => {
	const [isHidden, setIsHidden] = useState<boolean>(false)
	const contextValue = useContext(TodoContextData)

	const handleToggleBar = () => {
		setIsHidden(!isHidden)
	}

	return (
		<div className='container'>
			<HiddenButton onClick={handleToggleBar}>Filters</HiddenButton>
			<GlobalTheme />
			<GridWrapper>
				<SideBarTodo isHidden={isHidden} toggleBar={handleToggleBar} />
				<div>
					<TodoList data={contextValue.dataTodo} />
					<CreateTodo setData={contextValue.setDataTodo} />
				</div>
			</GridWrapper>
		</div>
	)
}

export default Home
