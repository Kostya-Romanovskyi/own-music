import { FC, useEffect } from 'react'

import TodoSearch from '../../components/TodoSearch/TodoSearch'
import TodoList from '../../components/TodoList/TodoList'
import CreateTodo from '../../components/CreateTodo/CreateTodo'
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu'
import SideBarTodo from '../../components/SideBarTodo/SideBarTodo'

import { FiltersWrapper, GridWrapper } from './Home.styled'
import { ThemeContainer } from '../../UI/GlobalTheme.styled'

import { useAuthContext } from '../../context/AuthContext'
import { useTodoContext } from '../../context/TodoContext'

const Home: FC = () => {
	const { userAuth } = useAuthContext()
	const { state, fetchAllTodo } = useTodoContext()
	console.log(userAuth)

	useEffect(() => {
		if (userAuth) {
			fetchAllTodo(userAuth)
		}
	}, [userAuth])

	return (
		<ThemeContainer>
			<div className='container'>
				<CreateTodo />

				<FiltersWrapper>
					<BurgerMenu />

					<TodoSearch />
				</FiltersWrapper>

				<GridWrapper>
					<SideBarTodo />

					<TodoList data={state.filteredTodo} />
				</GridWrapper>

				<TodoList />
			</div>
		</ThemeContainer>
	)
}

export default Home
