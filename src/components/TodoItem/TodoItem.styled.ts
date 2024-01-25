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
	align-items: flex-end;

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
export const CloseButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;

	border: none;
	background-color: transparent;
`

export const EditButton = styled.button`
	align-self: flex-end;
`

export const DeleteButton = styled.button`
	font-family: 'Poppins', sans-serif;
	cursor: pointer;
`

export const ShowButtons = styled.div<ShowButtonsProps>`
	position: absolute;
	top: 0px;
	right: 0px;

	/* display: ${props => (props.isShow ? 'block' : 'none')}; */

	opacity: ${props => (props.isShow ? 1 : 0)};
	pointer-events: ${props => (props.isShow ? 'All' : 'none')};

	transform: translateY(${props => (props.isShow ? 0 : '-100%')});
	transition: opacity 300ms, transform 300ms;

	padding: 0px 10px;

	width: 100%;
	height: 100%;

	border: 1px solid ${GlobalColors.black};
	border-radius: 5px;

	background-color: ${GlobalColors.white};

	z-index: 10;
`
export const TextArea = styled.textarea`
	width: 80%;
	height: 60px;
`
