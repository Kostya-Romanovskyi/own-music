import styled from '@emotion/styled'
import { TypeThemeProps } from '../types/Theme.types'

export const ThemeContainer = styled.div<TypeThemeProps>`
	background-color: ${({ theme }) => theme.backgroundColor};
	color: ${({ theme }) => theme.color};

	transition: all 0.3s ease;
`
