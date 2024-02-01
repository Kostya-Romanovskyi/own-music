import { FC, useContext, useEffect } from 'react'
import SideBarTodo from '../../components/SideBarTodo/SideBarTodo'
import TodoSearch from '../../components/TodoSearch/TodoSearch'
import TodoList from '../../components/TodoList/TodoList'
import CreateTodo from '../../components/CreateTodo/CreateTodo'
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu'
import { getAllDocuments } from '../../API/API-list'

import { TodoContextData } from '../../context/TodoContext'

import { FiltersWrapper, GridWrapper } from './Home.styled'
import { ThemeContainer } from '../../UI/GlobalTheme.styled'

const Home: FC = () => {
	const contextValue = useContext(TodoContextData)

	useEffect(() => {
		const fetchDocuments = async () => {
			try {
				if (contextValue.userAuth) {
					const docs = await getAllDocuments(contextValue.userAuth)

					contextValue.setDataTodo(docs)
				}
			} catch (error) {
				console.error('Error fetching documents:', error)
			}
		}

		fetchDocuments()
	}, [contextValue.userAuth, contextValue.setDataTodo])

	console.log(contextValue.dataTodo)

	return contextValue.userAuth ? (
		<ThemeContainer>
			<div className='container'>
				<CreateTodo />

				<FiltersWrapper>
					<BurgerMenu />

					<TodoSearch />
				</FiltersWrapper>

				<GridWrapper>
					<SideBarTodo />

					<TodoList data={contextValue.toDoListWithSearch} />
				</GridWrapper>
			</div>
		</ThemeContainer>
	) : (
		<div>login</div>
	)
}

export default Home
