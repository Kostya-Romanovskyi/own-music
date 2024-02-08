import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { FaRegWindowRestore } from 'react-icons/fa'

import { ThemeContainer } from '../../UI/GlobalTheme.styled'
import { HeaderWrapper, LeftSide, LogoText, RightSide, StyledIcon, ThemeButton } from './Header.styled'
import { useAuthContext } from '../../context/AuthContext'

import LogOutButton from '../../firebase/LogOut'

import { useThemeContext } from '../../context/ThemeContext'

const Header: FC = () => {
	const { handleClick } = useAuthContext()
	const { handleToggleTheme } = useThemeContext()

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
									<StyledIcon />
								</ThemeButton>
								<button onClick={() => handleClick()}>Login</button>
								{/* {userAuth ? <LogOutButton /> : isLoading ? <div>Loading</div> : <LogInButton />} */}
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
