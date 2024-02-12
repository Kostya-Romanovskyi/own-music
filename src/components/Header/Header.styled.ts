import styled from '@emotion/styled'
import { CgSun } from 'react-icons/cg'
import { FaRegMoon } from 'react-icons/fa'
import { TypeThemeProps } from '../../types/Theme.types'
import { transitionTime } from '../../Constant/TransitionTime'

export const StyledIconSun = styled(CgSun)<TypeThemeProps>`
	margin-left: 10px;
	color: ${({ theme }) => theme.color};
`

export const StyledIconMoon = styled(FaRegMoon)<TypeThemeProps>`
	margin-left: 10px;
	color: ${({ theme }) => theme.color};
`

export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding-top: 20px;
	padding-bottom: 20px;

	margin-bottom: 10px;
`
export const LeftSide = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
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

	cursor: pointer;
`
export const LangButton = styled.button<TypeThemeProps>`
	font-family: ${({ theme }) => theme.fontFamily};

	font-size: 15px;

	border: none;
	background-color: transparent;

	color: ${({ theme }) => theme.color};

	padding: 3px 8px;

	border: 1px solid #48319d;
	border-radius: 5px;

	color: ${({ theme }) => theme.color};
	background-color: ${({ theme }) => theme.backgroundColor};

	transition: background-color ${transitionTime.transition}, color ${transitionTime.transition};

	cursor: pointer;
`
