import styled from '@emotion/styled'
import { ShowButtonsProps } from '../../types/Todo.types'
import GlobalColors from '../../UI/GlobalColors'

export const Item = styled.li`
	position: relative;

	display: flex;
	justify-content: space-between;

	max-height: 112px;

	padding: 10px 10px;

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

export const AdditionalWrapp = styled.div`
	align-self: flex-start;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	height: 100%;

	padding: 0 10px;
`

export const AdditionalComplexity = styled.p`
	font-size: 10px;
	margin-bottom: 10px;
`
export const AdditionalStatus = styled.p`
	font-size: 10px;
	margin-bottom: 10px;
`
export const AdditionalInfoDate = styled.p`
	font-size: 10px;
`

export const MoreButton = styled.button`
	border: none;

	background-color: transparent;

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

	border: 1px solid ${GlobalColors.black};
	border-radius: 5px;

	background-color: ${GlobalColors.white};

	z-index: 10;
`
