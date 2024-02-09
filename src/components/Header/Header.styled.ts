import styled from '@emotion/styled'
import { CgSun } from 'react-icons/cg'
import { FaRegMoon } from 'react-icons/fa'
import { TypeThemeProps } from '../../types/Theme.types'

export const StyledIconSun = styled(CgSun)<TypeThemeProps>`
	color: ${({ theme }) => theme.color};
`
export const StyledIconMoon = styled(FaRegMoon)<TypeThemeProps>`
	color: ${({ theme }) => theme.color};
`

export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding-top: 20px;
	padding-bottom: 20px;
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
