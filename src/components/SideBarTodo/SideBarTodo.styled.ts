import styled from '@emotion/styled'
import { TypeHiddenProp } from '../../types/Todo.types'
import GlobalColors from '../../UI/GlobalColors'

export const ToggleBar = styled.div<TypeHiddenProp>`
	position: absolute;
	top: 0;
	left: 0;

	height: 100vh;
	width: 50%;

	background-color: ${GlobalColors.white};

	display: flex;

	align-items: flex-start;
	justify-content: center;

	transform: translateX(${({ isHidden }) => (isHidden ? '0%' : '-100%')});
	opacity: ${({ isHidden }) => (isHidden ? 1 : 0)};

	transition: transform 300ms, opacity 300ms;

	z-index: 10;

	@media screen and (min-width: 768px) {
		position: static;
		transform: translate(0%, 0%);
		opacity: 1;
	}
`

type TypeCloseBar = {
	type: string
}

export const CloseBarButton = styled.div<TypeCloseBar>`
	position: absolute;
	top: 1%;
	right: 6%;
`

export const SideBarList = styled.ul`
	list-style: none;

	padding: 0;
	margin: 0 10px;
	margin-top: 50px;

	max-width: 156px;

	border: 1px solid ${GlobalColors.black};
	border-radius: 10px;
`
