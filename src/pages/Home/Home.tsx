import { FC, useEffect } from 'react'

import TodoSearch from '../../components/TodoSearch/TodoSearch'
import TodoList from '../../components/TodoList/TodoList'

import BurgerMenu from '../../components/BurgerMenu/BurgerMenu'
import SideBarTodo from '../../components/SideBarTodo/SideBarTodo'

import { StyledLink, FiltersWrapper, GridWrapper, InitialPageWrap, Title, Image } from './Home.styled'
import { ThemeContainer } from '../../UI/GlobalTheme.styled'

import { useAuthContext } from '../../context/AuthContext'
import { useTodoContext } from '../../context/TodoContext'

import HomePageGif from '../../assets/drawing-sketch.gif'

const Home: FC = () => {
	const { userAuth } = useAuthContext()
	const { state, fetchAllTodo } = useTodoContext()

	useEffect(() => {
		if (userAuth) {
			fetchAllTodo(userAuth)
		}
	}, [userAuth])

	return userAuth ? (
		<ThemeContainer>
			<div className='container'>
				<FiltersWrapper>
					<BurgerMenu />

					<TodoSearch />
				</FiltersWrapper>

				<StyledLink to='/create'>Create Todo</StyledLink>

				<GridWrapper>
					<SideBarTodo />

					<TodoList data={state.filteredTodo} />
				</GridWrapper>
			</div>
		</ThemeContainer>
	) : (
		<InitialPageWrap>
			<Title>Log In for start writing your todo</Title>
			<Image src={HomePageGif} width={200} height='auto' alt='Worksheet writes tasks to itself' />
		</InitialPageWrap>
	)
}

export default Home
