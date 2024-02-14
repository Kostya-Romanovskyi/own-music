export type TypeToggleTheme = {
	[key: string]: string
}

export type TypeTheme = {
	fontFamily: string
	border?: string
	color: string
	backgroundColor: string
	transition?: string
	bgColorEasy: string
	bgColorMedium: string
	bgColorHard: string
	textColorEasy: string
	textColorMedium: string
	textColorHard: string
	activeBgColorEasy: string
	activeBgColorMedium: string
	activeBgColorHard: string
	hoverEasy: string
	hoverMedium: string
	hoverHard: string
}

export type TypeThemeProps = {
	theme?: TypeTheme
}

export type TypeToggleBurger = {
	theme?: TypeTheme
	isOpen: boolean
}
export type TypeConditionProp = {
	[key: string]: string
}

export type TypeSideButton = {
	key?: number
	theme?: TypeToggleTheme
	children: React.ReactNode
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export type ert = {
	[key: string]: string
}
