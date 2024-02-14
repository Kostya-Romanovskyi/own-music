import styled from '@emotion/styled'
import { TypeThemeProps } from '../../types/Theme.types'

import { transitionTime } from '../../Constant/TransitionTime'

export const SideItemStyled = styled.li<TypeThemeProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	&:not(:last-child) {
		border-bottom: 1px solid ${({ theme }) => theme.border};
	}
`

export const SideButtonStyled = styled.button<TypeThemeProps>`
	font-family: ${({ theme }) => theme.fontFamily};
	font-size: 17px;

	padding: 30px 10px;

	height: 100%;
	width: 100%;

	border: none;

	color: ${({ theme }) => theme.color};
	background-color: ${({ theme }) => theme.backgroundColor};
	transition: color ${transitionTime.transition}, background-color ${transitionTime.transition},
		box-shadow ${transitionTime.transition};

	cursor: pointer;

	@media screen and (min-width: 1200px) {
		&:hover,
		&:focus {
			box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
		}
	}
`
