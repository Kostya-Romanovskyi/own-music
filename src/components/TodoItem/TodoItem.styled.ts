import styled from '@emotion/styled'
import { ShowButtonsProps } from '../../types/Todo.types'
import GlobalColors from '../../UI/GlobalColors'
import Select from 'react-select'
import { IoCloseSharp } from 'react-icons/io5'

export const Item = styled.li`
	position: relative;

	/* display: flex;
	justify-content: space-between; */

	/* max-height: 112px; */

	padding: 10px 10px;

	border: 1px solid;
	border-radius: 7px;

	&:not(:last-child) {
		margin-bottom: 20px;
	}

	border: 2px solid #48319d;
	/* border-bottom-color: rgba(72, 49, 157, 0.2); */
	/* background-color: #332b53; */

	@media screen and (min-width: 768px) {
	}
`

export const Text = styled.p`
	overflow-y: scroll;

	height: 55px;

	margin-bottom: 20px;
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

export const TopPart = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 5px 0;
`

export const BottomPart = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const AdditionalComplexity = styled.p`
	font-size: 10px;
	font-weight: 600;
	padding: 5px 10px;

	border: none;
	border-radius: 5px;

	color: #000000 !important;
	background-color: ${({ complexity }) => {
		switch (complexity) {
			case 'easy':
				return '#00FFBF'
			case 'medium':
				return '#7645ec'
			case 'hard':
				return '#f06161'
			default:
				return '#ffffff'
		}
	}};
`
export const AdditionalStatus = styled.p`
	font-size: 10px;
	font-weight: 600;
	padding: 5px 10px;

	border: none;
	border-radius: 5px;

	color: #000000 !important;
	background-color: ${({ status }) => {
		switch (status) {
			case 'Done':
				return '#00ff00'
			case 'In progress':
				return '#ADD8E6'
			default:
				return '#ffffff'
		}
	}};
`
export const AdditionalInfoDate = styled.p`
	font-size: 10px;

	font-weight: 600;
	padding: 5px 10px;

	border: none;
	border-radius: 5px;

	color: #000000 !important;
	background-color: #c0c0c0;
`

export const MoreButton = styled.button`
	border: none;

	color: ${({ theme }) => theme.color};
	background-color: transparent;

	cursor: pointer;
`
export const CloseButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;

	border: none;
	background-color: transparent;
`

export const EditButton = styled.button`
	align-self: flex-end;

	padding: 5px 10px;

	border: 1px solid #48319d;
	border-radius: 5px;

	color: ${({ theme }) => theme.color};
	background-color: ${({ theme }) => theme.background};

	transition: background-color 300ms;
`

export const DeleteButton = styled.button`
	font-family: 'Poppins', sans-serif;
	cursor: pointer;
`

export const ShowButtons = styled.div<ShowButtonsProps>`
	position: absolute;
	top: 0px;
	right: 0px;

	opacity: ${props => (props.isShow ? 1 : 0)};
	pointer-events: ${props => (props.isShow ? 'All' : 'none')};

	transform: translateY(${props => (props.isShow ? 0 : '-100%')});

	padding: 0px 10px;

	width: 100%;
	height: 100%;

	border: 1px solid ${GlobalColors.black};
	border-radius: 5px;

	background-color: ${({ theme }) => theme.background};

	transition: opacity 300ms, transform 300ms, background-color 300ms;

	z-index: 10;
`
export const TextArea = styled.textarea`
	width: 80%;
	height: 60px;

	border: 1px solid #48319d;

	color: ${({ theme }) => theme.color};
	background-color: ${({ theme }) => theme.background};

	transition: background-color 300ms;

	resize: none;
`

export const StyledSelect = styled(Select)`
	font-size: 10px;
`

export const StyledCloseIcon = styled(IoCloseSharp)`
	color: ${({ theme }) => theme.color};
`

export const Checkbox = styled.input``

export const Label = styled.label``
