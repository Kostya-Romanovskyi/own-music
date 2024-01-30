import { useState, useEffect } from 'react'

import {
	BurgerMenuWrapper,
	BurgerButton,
	BurgerMenuContent,
	FilterIcon,
	CloseBarButton,
	CloseIcon,
	BurgerList,
} from './BurgerMenu.styled'

import SideBarItem from '../SideBarItem/SideBarItem'

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (isOpen && !(event.target as HTMLElement).closest('.burger-menu')) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isOpen])

	useEffect(() => {
		const handleScroll = () => {
			const sidebar = document.querySelector('.burger-menu') as HTMLElement
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop
			sidebar.style.top = scrollTop + 'px'
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [isOpen])

	const toggleMenu = (): void => {
		setIsOpen(!isOpen)
	}

	return (
		<BurgerMenuWrapper>
			<BurgerButton onClick={toggleMenu}>
				Filters
				<FilterIcon />
			</BurgerButton>
			<BurgerMenuContent className='burger-menu' isOpen={isOpen}>
				<CloseBarButton type='button' onClick={toggleMenu}>
					<CloseIcon />
				</CloseBarButton>
				<BurgerList>
					<SideBarItem closeBurger={setIsOpen} />
				</BurgerList>
			</BurgerMenuContent>
		</BurgerMenuWrapper>
	)
}

export default BurgerMenu
