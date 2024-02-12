import styled from '@emotion/styled'
import { IoFilterOutline } from 'react-icons/io5'
import { TypeThemeProps } from '../../types/Theme.types'
import { Link } from 'react-router-dom'
import { transitionTime } from '../../Constant/TransitionTime'

export const StyledIcon = styled(IoFilterOutline)<TypeThemeProps>`
	color: ${({ theme }) => theme.color};
`

export const HiddenButton = styled.button`
	display: none;

	@media screen and (max-width: 768px) {
		font-family: 'Poppins', sans-serif;
		font-size: 15px;

		display: flex;

		border: none;

		background-color: transparent;
		z-index: 10;
	}
`

export const MarginText = styled.span<TypeThemeProps>`
	color: ${({ theme }) => theme.color};
	margin-right: 3px;
`

export const FiltersWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-bottom: 20px;
`

export const GridWrapper = styled.div`
	display: grid;

	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 2fr;
	}
`

export const InitialPageWrap = styled.div`
	text-align: center;

	margin-top: 50px;
`

export const Title = styled.h1<TypeThemeProps>`
	color: ${({ theme }) => theme.color};
`

export const Image = styled.img``

export const StyledLink = styled(Link)<TypeThemeProps>`
	display: block;

	font-family: 'RubikRegular', sans-serif;

	text-align: center;
	text-decoration: none;

	margin: 0 auto;

	width: 150px;

	padding: 10px 20px;
	margin-top: 30px;
	margin-bottom: 30px;

	border-radius: 10px;

	border: 2px solid ${({ theme }) => theme.border};

	color: ${({ theme }) => theme.color};
	background-color: ${({ theme }) => theme.background};
	transition: background-color ${transitionTime.transition};
`
