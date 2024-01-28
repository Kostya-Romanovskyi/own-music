import { FC, useContext } from 'react'
import { Outlet } from 'react-router-dom'

import { TodoContextData } from '../../context/TodoContext'

import { FaRegWindowRestore } from 'react-icons/fa'

import { ThemeContainer } from '../../UI/GlobalTheme.styled'
import { HeaderWrapper, LeftSide, LogoText, RightSide, StyledIcon, ThemeButton } from './Header.styled'

const Header: FC = () => {
	const { setIsDarkTheme } = useContext(TodoContextData)

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

								<p>login</p>
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
