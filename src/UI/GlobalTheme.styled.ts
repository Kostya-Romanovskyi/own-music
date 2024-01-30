import styled from '@emotion/styled'
import { TypeThemeProps } from '../types/Theme.types'

export const ThemeContainer = styled.div<TypeThemeProps>`
	background-color: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.color};

	transition: all 0.3s ease;
`
export const ThemeInput = styled.input<TypeThemeProps>`
	font-size: 17px;
	line-height: 1.5;

	width: 100%;

	padding: 10px 0 10px 5px;

	border: 1px solid ${({ theme }) => theme.border};
	border-radius: 5px;
	transition: all 0.3s ease;

	background-color: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.color};

	&::placeholder {
		color: #9d9a9a;
	}
`
