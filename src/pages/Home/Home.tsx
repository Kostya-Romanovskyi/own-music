import { FC, useContext, useState } from 'react'
import SideBarTodo from '../../components/SideBarTodo/SideBarTodo'
import TodoSearch from '../../components/TodoSearch/TodoSearch'
import TodoList from '../../components/TodoList/TodoList'
import CreateTodo from '../../components/CreateTodo/CreateTodo'
import { TodoContextData } from '../../context/TodoContext'

import { HiddenButton, FiltersWrapper, GridWrapper } from './Home.styled'

const Home: FC = () => {
	const [isHidden, setIsHidden] = useState<boolean>(false)
	const contextValue = useContext(TodoContextData)

	const handleToggleBar = () => {
		setIsHidden(!isHidden)
	}

	const toggleTheme = () => {
		contextValue.setDarkTheme((prevTheme: boolean) => !prevTheme)
	}

	return (
		<div
			style={{
				background: contextValue.darkTheme ? '#333' : '#fff',
				color: contextValue.darkTheme ? '#fff' : '#333',
				height: '100vh',
			}}
		>
			<div className='container'>
				<button onClick={toggleTheme}>wdwed</button>
				<FiltersWrapper>
					<HiddenButton onClick={handleToggleBar}>Filters</HiddenButton>
					<TodoSearch />
				</FiltersWrapper>
				<GridWrapper>
					<SideBarTodo isHidden={isHidden} toggleBar={handleToggleBar} />
					<div>
						<TodoList data={contextValue.searchList} />
						<CreateTodo setData={contextValue.setDataTodo} />
					</div>
				</GridWrapper>
			</div>
		</div>
	)
}

export default Home
