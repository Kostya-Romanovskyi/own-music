import { FC, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { FaRegWindowRestore } from 'react-icons/fa'

import { ThemeContainer } from '../../UI/GlobalTheme.styled'
import {
	HeaderWrapper,
	StyledLink,
	LogoText,
	RightSide,
	StyledIconSun,
	StyledIconMoon,
	ThemeButton,
	LangButton,
} from './Header.styled'
import { useAuthContext } from '../../context/AuthContext'

import { useThemeContext } from '../../context/ThemeContext'
import TodoMainButton from '../TodoMainButton/TodoMainButton'

import { useTranslation } from 'react-i18next'

const Header: FC = () => {
	const { userAuth, handleLogIn, handleLogOut } = useAuthContext()
	const { currentTheme, handleToggleTheme } = useThemeContext()

	const [checkLang, setCheckLang] = useState('')
	const { t, i18n } = useTranslation()

	const languages = {
		en: { nativeName: 'English' },
		uk: { nativeName: 'Ukrainian' },
	}

	const handleChangeEn = () => {
		i18n.changeLanguage(Object.keys(languages)[0])

		const localLang = localStorage.getItem('i18nextLng')

		if (localLang) setCheckLang(localLang)
	}
	const handleChangeUk = () => {
		i18n.changeLanguage(Object.keys(languages)[1])

		const localLang = localStorage.getItem('i18nextLng')

		if (localLang) setCheckLang(localLang)
	}

	useEffect(() => {
		const localLang = localStorage.getItem('i18nextLng')

		if (localLang) setCheckLang(localLang)
	}, [checkLang])

	return (
		<>
			<header>
				<ThemeContainer>
					<div className='container'>
						<HeaderWrapper>
							<StyledLink to='/'>
								<LogoText>OwnToDo</LogoText>
								<FaRegWindowRestore />
							</StyledLink>

							<RightSide>
								{checkLang === 'uk' ? (
									<LangButton onClick={handleChangeEn} type='button'>
										{Object.keys(languages)[0]}
									</LangButton>
								) : (
									<LangButton onClick={handleChangeUk} type='button'>
										{Object.keys(languages)[1]}
									</LangButton>
								)}

								<ThemeButton onClick={handleToggleTheme}>
									{currentTheme.backgroundColor === '#ecf0f1' ? <StyledIconMoon /> : <StyledIconSun />}
								</ThemeButton>

								{userAuth ? (
									<TodoMainButton onClick={() => handleLogOut()}>{t('logOut')}</TodoMainButton>
								) : (
									<TodoMainButton onClick={() => handleLogIn()}>{t('logIn')}</TodoMainButton>
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
