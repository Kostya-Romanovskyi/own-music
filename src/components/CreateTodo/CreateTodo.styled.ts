import styled from '@emotion/styled'
import { TypeThemeProps, TypeToggleBurger } from '../../types/Theme.types'
import Select from 'react-select'

import { IoCloseSharp } from 'react-icons/io5'
import { GoPlus } from 'react-icons/go'

export const CreateTodoWrapper = styled.div``

export const OpenCreateWindow = styled.button<TypeThemeProps>`
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	margin: 0 auto;
	margin-bottom: 20px;

	padding: 10px 40px;

	border: 2px solid #000000;
	border-radius: 10px;

	border: 2px solid ${({ theme }) => theme.border};

	color: ${({ theme }) => theme.color};
	background-color: ${({ theme }) => theme.background};
	transition: background-color 300ms;
`

export const CreateWindow = styled.div<TypeToggleBurger>`
	position: absolute;
	top: 0%;
	left: 2%;

	width: 95%;

	padding: 20px;

	transform: translateY(${({ isOpen }) => (isOpen ? 0 : '-110%')});
	transition: transform 300ms;

	border: 2px solid ${({ theme }) => theme.border};
	background-color: ${({ theme }) => theme.background};

	z-index: 15;
`
export const CloseButton = styled.button<TypeThemeProps>`
	position: absolute;
	top: 3%;
	right: 3%;

	display: block;
	margin-left: auto;

	margin-bottom: 20px;

	border: none;

	background-color: ${({ theme }) => theme.background};
`
export const CloseIcon = styled(IoCloseSharp)<TypeThemeProps>`
	color: ${({ theme }) => theme.color};
`

export const CreateTextarea = styled.textarea<TypeThemeProps>`
	width: 100%;
	height: 90px;

	margin-top: 20px;
	margin-bottom: 20px;

	border: 1px solid ${({ theme }) => theme.border};
	border-radius: 5px;

	color: ${({ theme }) => theme.color};

	background-color: ${({ theme }) => theme.background};

	resize: none;
`

export const DescriptionText = styled.p`
	margin-bottom: 10px;
`

export const StyledSelect = styled(Select)`
	margin-bottom: 20px;
`
export const IconPlus = styled(GoPlus)`
	margin-left: 10px;
`

export const AddTaskButton = styled.button<TypeThemeProps>`
	display: block;
	margin: 0 auto;

	padding: 10px 20px;

	border-radius: 10px;

	border: 2px solid ${({ theme }) => theme.border};

	color: ${({ theme }) => theme.color};
	background-color: ${({ theme }) => theme.background};
`
