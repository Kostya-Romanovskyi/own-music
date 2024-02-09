import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { FaRegWindowRestore } from 'react-icons/fa'

import { ThemeContainer } from '../../UI/GlobalTheme.styled'
import {
	HeaderWrapper,
	LeftSide,
	LogoText,
	RightSide,
	StyledIconSun,
	StyledIconMoon,
	ThemeButton,
} from './Header.styled'
import { useAuthContext } from '../../context/AuthContext'

import { useThemeContext } from '../../context/ThemeContext'
import TodoMainButton from '../TodoMainButton/TodoMainButton'

const Header: FC = () => {
	const { userAuth, handleLogIn, handleLogOut } = useAuthContext()
	const { currentTheme, handleToggleTheme } = useThemeContext()

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
								<ThemeButton onClick={handleToggleTheme}>
									{currentTheme.background === '#fff' ? <StyledIconMoon /> : <StyledIconSun />}
								</ThemeButton>

								{userAuth ? (
									<TodoMainButton onClick={() => handleLogOut()}>Log Out</TodoMainButton>
								) : (
									<TodoMainButton onClick={() => handleLogIn()}>Log In</TodoMainButton>
								)}
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
