import styled from '@emotion/styled'
import { ShowButtonsProps } from '../../types/Todo.types'

export const Item = styled.li`
	position: relative;

	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 0 10px;

	border: 1px solid;
	border-radius: 7px;

	&:not(:last-child) {
		margin-bottom: 20px;
	}

	@media screen and (min-width: 768px) {
	}
`

export const Text = styled.p`
	overflow-y: scroll;
`

export const MoreButton = styled.button`
	border: none;

	cursor: pointer;
`

export const DeleteButton = styled.button`
	font-family: 'Poppins', sans-serif;
	cursor: pointer;
`

export const ShowButtons = styled.div<ShowButtonsProps>`
	position: absolute;
	top: 70%;
	right: 0px;

	display: ${props => (props.isShow ? 'flex' : 'none')};
	align-items: center;
	justify-content: space-between;

	padding: 0px 10px;

	width: 100px;
	height: 50px;

	border: 1px solid #000000;
	border-radius: 5px;

	background-color: #ffffff;

	z-index: 10;
`
