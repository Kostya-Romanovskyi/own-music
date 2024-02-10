import { FC } from 'react'
import { useTodoContext } from '../../context/TodoContext'
import { ThemeInput } from '../../UI/GlobalTheme.styled'
import { useTranslation } from 'react-i18next'

const TodoSearch: FC = () => {
	const { searchTodo } = useTodoContext()
	const { t } = useTranslation()

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
		searchTodo(e.target.value)
	}

	return <ThemeInput onChange={handleSearch} type='text' placeholder={t('filterPlaceholder')} />
}

export default TodoSearch
