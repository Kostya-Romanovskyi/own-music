import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { CgSun } from 'react-icons/cg'
import { FaRegMoon } from 'react-icons/fa'
import { TypeThemeProps } from '../../types/Theme.types'
import { transitionTime } from '../../Constant/TransitionTime'

export const StyledIconSun = styled(CgSun)<TypeThemeProps>`
	color: ${({ theme }) => theme.color};

	transition: color ${transitionTime.transition};

	&:hover,
	&:focus {
		color: ${({ theme }) => theme.activeBgColorMedium};
	}
`

export const StyledIconMoon = styled(FaRegMoon)<TypeThemeProps>`
	color: ${({ theme }) => theme.color};

	transition: color ${transitionTime.transition};

	&:hover,
	&:focus {
		color: ${({ theme }) => theme.hoverEasy};
	}
`

export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding-top: 20px;
	padding-bottom: 20px;

	margin-bottom: 10px;
`

export const StyledLink = styled(Link)<TypeThemeProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;

	text-decoration: none;

	color: ${({ theme }) => theme.color};

	transition: color ${transitionTime.transition};
`

export const LogoText = styled.p`
	font-weight: 500;
	margin-right: 10px;
`

export const RightSide = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`
export const ThemeButton = styled.button`
	border: none;
	background-color: transparent;

	margin-left: 10px;

	@media screen and (min-width: 1200px) {
		margin-left: 15px;

		cursor: pointer;
	}
`
export const LangButton = styled.button<TypeThemeProps>`
	font-family: ${({ theme }) => theme.fontFamily};

	font-size: 15px;

	border: none;
	background-color: transparent;

	color: ${({ theme }) => theme.color};

	padding: 3px 8px;

	border: 1px solid ${({ theme }) => theme.border};
	border-radius: 5px;

	color: ${({ theme }) => theme.color};
	background-color: ${({ theme }) => theme.backgroundColor};

	transition: background-color ${transitionTime.transition}, color ${transitionTime.transition},
		border ${transitionTime.transition};

	cursor: pointer;
	outline: none;

	@media screen and (min-width: 1200px) {
		font-family: 'RubikMedium', sans-serif;

		font-size: 15px;

		cursor: pointer;

		&:hover,
		&:focus {
			color: ${({ theme }) => theme.backgroundColor};
			background-color: ${({ theme }) => theme.border};
		}
	}
`
