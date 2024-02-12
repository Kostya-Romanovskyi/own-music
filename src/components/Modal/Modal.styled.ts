import styled from '@emotion/styled'
import { TypeThemeProps } from '../../types/Theme.types'
import GlobalColors from '../../UI/GlobalColors'
import { IoCloseSharp } from 'react-icons/io5'
import { transitionTime } from '../../Constant/TransitionTime'

export const TextArea = styled.textarea<TypeThemeProps>`
	font-family: 'RubikRegular', sans-serif;

	width: 100%;
	height: 150px;

	margin: 0;
	padding: 0;

	margin-top: 30px;
	margin-bottom: 30px;

	padding-top: 5px;
	padding-left: 5px;

	border: 1px solid ${({ theme }) => theme.border};

	color: ${({ theme }) => theme.color};
	background-color: ${({ theme }) => theme.backgroundColor};

	transition: background-color 300ms;

	resize: none;

	:focus {
		outline: 1px solid grey;
	}
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

export const EditButton = styled.button<TypeThemeProps>`
	font-family: ${({ theme }) => theme.fontFamily};
	font-size: 17px;

	width: 100%;

	padding: 10px 0px;
	margin-bottom: 20px;

	border: 1px solid ${({ theme }) => theme.border};
	border-radius: 5px;

	color: ${({ theme }) => theme.color};
	background-color: ${({ theme }) => theme.backgroundColor};

	transition: background-color 300ms;
`

export const CloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;

	border: none;
	background-color: transparent;
`

export const DeleteButton = styled.button<TypeThemeProps>`
	font-family: 'RubikMedium', sans-serif;
	font-size: 17px;

	width: 100%;

	padding: 15px 0;

	color: ${GlobalColors.deleteColor};

	border: 2px solid ${GlobalColors.deleteColor};

	background-color: ${({ theme }) => theme.backgroundColor};

	cursor: pointer;
`

export const StyledCloseIcon = styled(IoCloseSharp)<TypeThemeProps>`
	color: ${({ theme }) => theme.color};
`
