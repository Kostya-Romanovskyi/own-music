import styled from '@emotion/styled'
import { TypeThemeProps } from '../../types/Theme.types'
import GlobalColors from '../../UI/GlobalColors'
import { IoCloseSharp } from 'react-icons/io5'

export const TextArea = styled.textarea<TypeThemeProps>`
	width: 100%;
	height: 150px;

	margin-top: 30px;
	margin-bottom: 30px;

	border: 1px solid #48319d;

	color: ${({ theme }) => theme.color};
	background-color: ${({ theme }) => theme.background};

	transition: background-color 300ms;

	resize: none;
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
}

export const Label = styled.label<TypeLabelProps>`
	display: inline-block;

	margin-bottom: 20px;

	padding: 10px 20px;

	border-radius: 10px;

	outline-width: ${({ type, checked }) => {
		switch (type) {
			case 'easy':
				return checked ? '1px' : 'none'
			case 'medium':
				return checked ? '1px' : 'none'
			case 'hard':
				return checked ? '1px' : 'none'
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

	background-color: ${({ type, checked }) => {
		switch (type) {
			case 'easy':
				return checked ? GlobalColors.easyActive : GlobalColors.easy
			case 'medium':
				return checked ? GlobalColors.mediumActive : GlobalColors.medium
			case 'hard':
				return checked ? GlobalColors.hardActive : GlobalColors.hard
			default:
				return '#ffffff'
		}
	}};
`

export const EditButton = styled.button<TypeThemeProps>`
	font-family: ${({ theme }) => theme.fontFamily};

	width: 100%;

	padding: 10px 0px;
	margin-bottom: 20px;

	border: 1px solid #48319d;
	border-radius: 5px;

	color: ${({ theme }) => theme.color};
	background-color: ${({ theme }) => theme.background};

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
	font-family: ${({ theme }) => theme.fontFamily};
	font-size: 14px;

	width: 100%;

	padding: 15px 0;

	color: ${GlobalColors.deleteColor};

	border: 2px solid ${GlobalColors.deleteColor};

	background-color: ${({ theme }) => theme.background};

	cursor: pointer;
`

export const StyledCloseIcon = styled(IoCloseSharp)<TypeThemeProps>`
	color: ${({ theme }) => theme.color};
`
