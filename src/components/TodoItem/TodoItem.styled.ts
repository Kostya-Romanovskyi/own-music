import styled from '@emotion/styled'
import GlobalColors from '../../UI/GlobalColors'
import { IoCloseSharp } from 'react-icons/io5'
import { TypeThemeProps, TypeConditionProp, TypeToggleBurger } from '../../types/Theme.types'
import { transitionTime } from '../../Constant/TransitionTime'

export const Item = styled.li<TypeThemeProps>`
	position: relative;

	padding: 10px 10px;

	border: 1px solid;
	border-radius: 7px;

	&:not(:last-child) {
		margin-bottom: 20px;
	}

	border: 2px solid ${({ theme }) => theme.border};

	@media screen and (min-width: 768px) {
	}
`

// export const TextWrapper = styled.div`
// 	width: 200px;
// `

export const Text = styled.div<TypeThemeProps>`
	overflow-y: scroll;
	overflow-x: hidden;

	white-space: wrap;
	-webkit-white-space: wrap;

	width: 80%;
	height: 60px;

	margin-bottom: 20px;
	padding-right: 5px;

	background-color: ${({ theme }) => theme.backgroundColor};
	transition: background-color ${transitionTime.transition}, color ${transitionTime.transition};

	resize: none;

	border: none;
`

export const AdditionalWrapp = styled.div`
	align-self: flex-start;

	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	align-items: center;

	height: 100%;

	padding: 4px 10px;
`

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 5px 0;
`

export const AdditionalComplexity = styled.p<TypeConditionProp>`
	font-family: 'RubikLight', sans-serif;

	font-size: 10px;
	font-weight: 600;
	letter-spacing: 0.7px;

	padding: 3px 7px;

	border: none;
	border-radius: 5px;

	color: #000000 !important;
	background-color: ${({ complexity }) => {
		switch (complexity) {
			case 'easy':
				return GlobalColors.easy
			case 'medium':
				return GlobalColors.medium
			case 'hard':
				return GlobalColors.hard
			default:
				return '#ffffff'
		}
	}};

	@media screen and (min-width: 340px) {
		padding: 5px 10px;
	}
`
type TypeStatusProps = {
	status: string | boolean
}

export const AdditionalStatus = styled.p<TypeStatusProps>`
	font-family: 'RubikLight', sans-serif;

	font-size: 10px;
	font-weight: 600;
	letter-spacing: 0.7px;

	padding: 3px 7px;

	border: none;
	border-radius: 5px;

	color: ${GlobalColors.black} !important;

	background-color: ${({ status }) => {
		switch (status) {
			case true:
				return GlobalColors.done
			case false:
				return GlobalColors.inProgress
			default:
				return '#ffffff'
		}
	}};

	@media screen and (min-width: 340px) {
		padding: 5px 10px;
	}
`
export const AdditionalInfoDate = styled.p`
	position: absolute;
	top: 10px;
	right: 5px;

	font-family: 'RubikLight', sans-serif;

	font-size: 10px;
	letter-spacing: 0.7px;

	font-weight: 600;
	padding: 3px 7px;

	border: none;
	border-radius: 5px;

	color: #000000 !important;
	background-color: #c0c0c0;

	@media screen and(min-width: 350px) {
		padding: 5px 10px;
	}
`

export const MoreButton = styled.button<TypeThemeProps>`
	border: none;

	color: ${({ theme }) => theme.color};
	background-color: transparent;

	transition: color ${transitionTime.transition};

	cursor: pointer;
`
export const CloseButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;

	border: none;
	background-color: transparent;
`

export const EditButton = styled.button<TypeThemeProps>`
	align-self: flex-end;

	padding: 5px 10px;

	border: 1px solid ${({ theme }) => theme.border};
	border-radius: 5px;

	color: ${({ theme }) => theme.color};
	background-color: ${({ theme }) => theme.backgroundColor};

	transition: background-color ${transitionTime.transition};
`

export const DeleteButton = styled.button`
	font-family: 'Poppins', sans-serif;
	cursor: pointer;
`

export const ShowButtons = styled.div<TypeToggleBurger>`
	position: absolute;
	top: 0px;
	right: 0px;

	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	pointer-events: ${({ isOpen }) => (isOpen ? 'All' : 'none')};

	transform: translateY(${({ isOpen }) => (isOpen ? 0 : '-100%')});

	padding: 0px 10px;

	width: 100%;
	height: 100%;

	border: 1px solid ${GlobalColors.black};
	border-radius: 5px;

	background-color: ${({ theme }) => theme.backgroundColor};

	transition: opacity ${transitionTime.transition}, transform ${transitionTime.transition},
		background-color ${transitionTime.transition};

	z-index: 10;
`
export const TextArea = styled.textarea<TypeThemeProps>`
	width: 80%;
	height: 60px;

	border: 1px solid ${({ theme }) => theme.border};

	color: ${({ theme }) => theme.color};
	background-color: ${({ theme }) => theme.backgroundColor};

	transition: background-color ${transitionTime.transition};

	resize: none;
`

export const StyledCloseIcon = styled(IoCloseSharp)<TypeThemeProps>`
	color: ${({ theme }) => theme.color};
`
