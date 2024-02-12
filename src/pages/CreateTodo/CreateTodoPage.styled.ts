import styled from '@emotion/styled'
import { TypeThemeProps } from '../../types/Theme.types'
// import GlobalColors from '../../UI/GlobalColors'

import { GoPlus } from 'react-icons/go'
import { FaArrowLeftLong } from 'react-icons/fa6'

import { transitionTime } from '../../Constant/TransitionTime'

import { Link } from 'react-router-dom'

export const ArrowIcon = styled(FaArrowLeftLong)<TypeThemeProps>`
	margin-right: 10px;

	color: ${({ theme }) => theme.color};

	transition: color ${transitionTime.transition};
`

export const StyledLink = styled(Link)<TypeThemeProps>`
	font-family: 'RubikRegular', sans-serif;

	display: flex;
	justify-content: flex-end;
	align-items: center;

	color: ${({ theme }) => theme.color};

	transition: color ${transitionTime.transition};

	text-decoration: none;
`

export const CreateTextarea = styled.textarea<TypeThemeProps>`
	font-family: 'RubikRegular';

	display: block;

	width: 100%;
	height: 90px;

	margin-top: 20px;
	margin-bottom: 20px;
	padding: 0;

	border: 1px solid ${({ theme }) => theme.border};
	border-radius: 5px;

	color: ${({ theme }) => theme.color};

	background-color: ${({ theme }) => theme.backgroundColor};

	transition: background-color ${transitionTime.transition}, color ${transitionTime.transition},
		border ${transitionTime.transition};

	resize: none;
`

export const DescriptionText = styled.p<TypeThemeProps>`
	text-align: center;

	color: ${({ theme }) => theme.color};

	transition: color ${transitionTime.transition};

	margin-bottom: 20px;
`

export const RadioWrapper = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;

	list-style: none;

	margin: 0;
	padding: 0;
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
`
