import styled from '@emotion/styled'

export const SideItemStyled = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;

	&:not(:last-child) {
		border-bottom: 1px solid;
	}
`

export const SideButtonStyled = styled.button`
	font-family: 'Poppins', sans-serif;

	padding: 30px 10px;

	height: 100%;
	width: 100%;

	border: none;
	border-radius: 10px;

	cursor: pointer;
`
