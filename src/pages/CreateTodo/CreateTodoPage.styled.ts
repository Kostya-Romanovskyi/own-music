import styled from '@emotion/styled'
import { TypeThemeProps } from '../../types/Theme.types'
import GlobalColors from '../../UI/GlobalColors'

import { GoPlus } from 'react-icons/go'

export const CreateTextarea = styled.textarea<TypeThemeProps>`
	display: block;

	width: 100%;
	height: 90px;

	margin-top: 20px;
	margin-bottom: 20px;
	padding: 0;

	border: 1px solid ${({ theme }) => theme.border};
	border-radius: 5px;

	color: ${({ theme }) => theme.color};

	background-color: ${({ theme }) => theme.background};

	resize: none;
`

export const DescriptionText = styled.p`
	text-align: center;

	margin-bottom: 10px;
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

export const IconPlus = styled(GoPlus)`
	margin-left: 10px;
`

export const AddTaskButton = styled.button<TypeThemeProps>`
	display: block;
	margin: 0 auto;

	width: 100%;

	padding: 10px 20px;

	border-radius: 10px;

	border: 2px solid ${({ theme }) => theme.border};

	color: ${({ theme }) => theme.color};
	background-color: ${({ theme }) => theme.background};
`
