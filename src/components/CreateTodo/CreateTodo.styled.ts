import styled from '@emotion/styled'

export const CreateTodoWrapper = styled.div``

export const OpenCreateWindow = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	margin: 0 auto;

	padding: 10px 40px;

	border: 1px solid;
	border-radius: 10px;

	background-color: 'transparent';
`

export const CreateWindow = styled.div`
	position: absolute;
	top: 0%;
	left: 5%;

	width: 90%;

	padding: 20px;

	transform: translateY(${({ isShow }) => (isShow ? 0 : '-100%')});
	transition: transform 300ms;

	border: 1px solid red;
	background-color: #fff;

	z-index: 10;
`
export const CloseButton = styled.button`
	position: absolute;
	top: 3%;
	right: 3%;

	display: block;
	margin-left: auto;

	margin-bottom: 20px;

	border: none;

	background-color: #fff;
`

export const CreateTextarea = styled.textarea`
	width: 100%;
	height: 90px;

	margin-top: 20px;
	margin-bottom: 20px;
`

export const DescriptionText = styled.p`
	margin-bottom: 10px;
`

export const Select = styled.select`
	margin-bottom: 20px;
`

export const AddTaskButton = styled.button`
	display: block;
	margin: 0 auto;
`
