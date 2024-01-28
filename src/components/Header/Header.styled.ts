import styled from '@emotion/styled'
import { CgSun } from 'react-icons/cg'

export const StyledIcon = styled(CgSun)`
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
