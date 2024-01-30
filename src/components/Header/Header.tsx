import { FC, useContext } from 'react'
import { Outlet } from 'react-router-dom'

import { TodoContextData } from '../../context/TodoContext'

import { FaRegWindowRestore } from 'react-icons/fa'

import { ThemeContainer } from '../../UI/GlobalTheme.styled'
import { HeaderWrapper, LeftSide, LogoText, RightSide, StyledIcon, ThemeButton } from './Header.styled'

import LogInButton from '../../firebase/LogIn'
import LogOutButton from '../../firebase/LogOut'

const Header: FC = () => {
	const { setIsDarkTheme, userAuth, isLoading } = useContext(TodoContextData)

	const toggleTheme = (): void => {
		setIsDarkTheme((prev: boolean) => !prev)
	}

	return (
		<>
			<header>
				<ThemeContainer>
					<div className='container'>
						<HeaderWrapper>
							<LeftSide>
								<LogoText>OwnToDo</LogoText>
								<FaRegWindowRestore />
							</LeftSide>
							<RightSide>
								<p>lang</p>
								<ThemeButton onClick={toggleTheme}>
									<StyledIcon />
								</ThemeButton>

								{userAuth ? <LogOutButton /> : isLoading ? <div>Loading</div> : <LogInButton />}
							</RightSide>
						</HeaderWrapper>
					</div>
				</ThemeContainer>
			</header>
			<Outlet />
		</>
	)
}

export default Header
