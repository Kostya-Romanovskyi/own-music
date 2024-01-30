import styled from '@emotion/styled'
import { IoFilterOutline, IoCloseSharp } from 'react-icons/io5'
import { TypeThemeProps, TypeToggleBurger } from '../../types/Theme.types'

export const BurgerMenuWrapper = styled.div``

export const BurgerButton = styled.button<TypeThemeProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;

	color: ${({ theme }) => theme.color};
	background: none;
	border: none;
	cursor: pointer;
`

export const BurgerMenuContent = styled.div<TypeToggleBurger>`
	position: absolute;
	top: 0;
	left: 0;
	width: 250px;
	background-color: ${({ theme }) => theme.background};
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease;
	transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};

	overflow-y: auto;
	height: 100dvh;

	z-index: 30;
`
export const FilterIcon = styled(IoFilterOutline)<TypeThemeProps>`
	color: ${({ theme }) => theme.color};

	margin-left: 4px;
`
export const CloseIcon = styled(IoCloseSharp)<TypeThemeProps>`
	color: ${({ theme }) => theme.color};
`
export const CloseBarButton = styled.button<TypeThemeProps>`
	position: absolute;
	top: 1%;
	right: 6%;

	border: none;
	background-color: ${({ theme }) => theme.background};
`
export const BurgerList = styled.ul`
	list-style: none;

	padding: 0;
	margin: 0 auto;
	margin-top: 50px;

	max-width: 90%;

	border-radius: 10px;
`
