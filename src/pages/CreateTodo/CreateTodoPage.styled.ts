import styled from '@emotion/styled'
import { TypeThemeProps } from '../../types/Theme.types'

import { GoPlus } from 'react-icons/go'
import { FaArrowLeftLong } from 'react-icons/fa6'

import { transitionTime } from '../../Constant/TransitionTime'

import { Link } from 'react-router-dom'

export const LinkWrapper = styled.div<TypeThemeProps>`
	width: 90px;
	margin-left: auto;
	margin-bottom: 30px;
`

export const ArrowIcon = styled(FaArrowLeftLong)<TypeThemeProps>`
	margin-right: 10px;

	color: ${({ theme }) => theme.color};

	transition: color ${transitionTime.transition};
`

export const StyledLink = styled(Link)<TypeThemeProps>`
	font-family: 'RubikRegular', sans-serif;

	display: flex;
	align-items: center;

	color: ${({ theme }) => theme.color};

	transition: color ${transitionTime.transition};

	text-decoration: none;

	@media screen and (min-width: 1200px) {
		font-size: 20px;

		&:hover,
		&:focus {
			color: grey;
		}
	}
`

export const CreateTextarea = styled.textarea<TypeThemeProps>`
	font-family: 'RubikRegular';

	display: block;

	width: 100%;
	height: 90px;

	margin-top: 20px;
	margin-bottom: 20px;
	padding-top: 5px;
	padding-left: 5px;

	border: 1px solid ${({ theme }) => theme.border};
	border-radius: 5px;

	color: ${({ theme }) => theme.color};

	background-color: ${({ theme }) => theme.backgroundColor};

	transition: background-color ${transitionTime.transition}, color ${transitionTime.transition},
		border ${transitionTime.transition};

	resize: none;

	@media screen and (min-width: 768px) {
		margin-bottom: 50px;
		font-size: 20px;

		height: 120px;
	}

	@media screen and (min-width: 1200px) {
		height: 180px;
	}
`

export const DescriptionText = styled.p<TypeThemeProps>`
	text-align: center;

	color: ${({ theme }) => theme.color};

	transition: color ${transitionTime.transition};

	margin-bottom: 20px;

	@media screen and (min-width: 768px) {
		font-family: 'RubikMedium', sans-serif;

		font-size: 20px;

		margin-bottom: 50px;
	}
`

export const RadioWrapper = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;

	list-style: none;

	margin: 0;
	padding: 0;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: space-around;

		margin-bottom: 50px;
	}

	@media screen and (min-width: 1200px) {
		justify-content: center;
		gap: 100px;
	}
`

export const RadioButton = styled.input`
	display: none;
`

type TypeLabelProps = {
	type: string
	checked: boolean
} & TypeThemeProps

export const Label = styled.label<TypeLabelProps>`
	font-family: 'RubikMedium', sans-serif;

	display: inline-block;

	margin-bottom: 20px;

	padding: 10px 20px;

	border: none;
	border-radius: 10px;

	outline-width: ${({ type, checked }) => {
		switch (type) {
			case 'easy':
				return checked ? '3px' : 'none'
			case 'medium':
				return checked ? '3px' : 'none'
			case 'hard':
				return checked ? '3px' : 'none'
			default:
				return '#ffffff'
		}
	}};

	outline-style: ${({ type, checked }) => {
		switch (type) {
			case 'easy':
				return checked ? 'solid' : 'none'
			case 'medium':
				return checked ? 'solid' : 'none'
			case 'hard':
				return checked ? 'solid' : 'none'
			default:
				return '#ffffff'
		}
	}};

	outline-color: ${({ type, checked, theme }) => {
		switch (type) {
			case 'easy':
				return checked ? `${theme.color}` : 'none'
			case 'medium':
				return checked ? `${theme.color}` : 'none'
			case 'hard':
				return checked ? `${theme.color}` : 'none'
			default:
				return '#ffffff'
		}
	}};

	background-color: ${({ type, checked, theme }) => {
		switch (type) {
			case 'easy':
				return checked ? theme.activeBgColorEasy : theme.bgColorEasy
			case 'medium':
				return checked ? theme.activeBgColorMedium : theme.bgColorMedium
			case 'hard':
				return checked ? theme.activeBgColorHard : theme.bgColorHard
			default:
				return '#ffffff'
		}
	}};

	transition: background-color ${transitionTime.transition}, outline-color ${transitionTime.transition};

	@media screen and (min-width: 1200px) {
		:hover,
		:focus {
			background-color: ${({ type, theme }) => {
				switch (type) {
					case 'easy':
						return theme.hoverEasy
					case 'medium':
						return theme.hoverMedium
					case 'hard':
						return theme.hoverHard
					default:
						return '#ffffff'
				}
			}};
		}

		cursor: pointer;
	}
`

export const IconPlus = styled(GoPlus)`
	margin-left: 10px;
`

export const AddTaskButton = styled.button<TypeThemeProps>`
	font-family: 'RubikMedium', sans-serif;
	font-size: 17px;

	display: block;
	margin: 0 auto;

	width: 100%;

	padding: 10px 20px;
	margin-bottom: 20px;

	border-radius: 10px;

	border: 2px solid ${({ theme }) => theme.border};

	color: ${({ theme }) => theme.color};
	background-color: ${({ theme }) => theme.backgroundColor};

	transition: background-color ${transitionTime.transition}, color ${transitionTime.transition},
		border ${transitionTime.transition};

	@media screen and (min-width: 768px) {
		width: 300px;
	}

	@media screen and (min-width: 1200px) {
		:hover,
		:focus {
			color: ${({ theme }) => theme.backgroundColor};
			background-color: ${({ theme }) => theme.border};
		}

		cursor: pointer;
	}
`
