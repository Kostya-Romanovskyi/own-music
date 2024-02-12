import styled from '@emotion/styled'
import { TypeThemeProps } from '../../types/Theme.types'
import { transitionTime } from '../../Constant/TransitionTime'

export const StyledButton = styled.button<TypeThemeProps>`
	font-family: ${({ theme }) => theme.fontFamily};

	width: 75px;

	text-align: center;

	padding: 5px 10px;
	margin-left: 10px;

	border: 1px solid #48319d;
	border-radius: 5px;

	color: ${({ theme }) => theme.color};
	background-color: ${({ theme }) => theme.backgroundColor};

	transition: background-color ${transitionTime.transition}, color ${transitionTime.transition};
`
