import styled from '@emotion/styled'
import { TypeThemeProps } from '../../types/Theme.types'

export const ThemeInput = styled.input<TypeThemeProps>`
	font-family: ${({ theme }) => theme.fontFamily};

	font-size: 17px;
	line-height: 1.5;

	width: 90%;

	padding: 10px 0 10px 5px;

	border: 1px solid ${({ theme }) => theme.border};
	border-radius: 5px;
	transition: all 0.3s ease;

	background-color: ${({ theme }) => theme.backgroundColor};
	color: ${({ theme }) => theme.color};

	&::placeholder {
		color: #9d9a9a;
	}

	@media screen and (min-width: 786px) {
		width: 100%;
	}
	@media screen and (min-width: 1200px) {
		margin-bottom: 20px;
		padding: 10px 0 10px 15px;
	}
`
