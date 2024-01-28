import styled from '@emotion/styled'
import { TypeSideButton } from '../../types/Theme.types'

export const SideItemStyled = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;

	&:not(:last-child) {
		border-bottom: 1px solid;
	}
`

export const SideButtonStyled = styled.button<TypeSideButton>`
	font-family: 'Poppins', sans-serif;

	padding: 30px 10px;

	height: 100%;
	width: 100%;

	border: none;

	color: ${({ theme }) => theme.color};
	background-color: ${({ theme }) => theme.background};

	cursor: pointer;
`
