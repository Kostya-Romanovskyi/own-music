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
import { useTranslation } from 'react-i18next'

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const { t } = useTranslation()

	const openBurgerMenu = (): void => {
		const scrollY = window.scrollY

		document.body.classList.add('no-scroll')

		document.body.style.top = `-${scrollY}px`
	}

	const closeBurgerMenu = (): void => {
		document.body.classList.remove('no-scroll')

		const scrollY = parseInt(document.body.style.top || '0', 10)

		document.body.style.top = ''
		window.scrollTo(0, Math.abs(scrollY))
	}

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
			openBurgerMenu()
		} else {
			document.body.style.overflow = 'auto'
			closeBurgerMenu()
		}
		return () => {
			document.body.style.overflow = 'auto'
			closeBurgerMenu()
		}
	}, [isOpen])

	const toggleMenu = (): void => {
		setIsOpen(!isOpen)
	}

	return (
		<BurgerMenuWrapper>
			<BurgerButton onClick={toggleMenu}>
				{t('filterBtn')}
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
