export type TypeTodoItem = {
	id: string
	text: string
	complexity: 'easy' | 'medium' | 'hard'
	status: boolean
	addingDate: string
}

export type TypeItemsList = TypeTodoItem[]

export type TypeItems = {
	data: TypeItemsList
}

export type TypeCreateTodo = {
	setData: React.Dispatch<React.SetStateAction<TypeItemsList>>
}

export type TypeContextDefaultState = {
	dataTodo: TypeTodoItem[]
	setDataTodo: React.Dispatch<React.SetStateAction<TypeTodoItem[]>>
}

export type TypeContextValue = {
	dataTodo: TypeTodoItem[]
	setDataTodo: React.Dispatch<React.SetStateAction<TypeTodoItem[]>>
	user?: string
	setUser?: React.Dispatch<React.SetStateAction<string>>
}

export type TypeContextProps = {
	children: React.ReactNode
}

export type ShowButtonsProps = {
	isShow: boolean
}

export type TypeHiddenProp = {
	isHidden: boolean
}

export type TypeTodoMainButton = {
	children?: React.ReactNode
	onClick?: () => void
}
