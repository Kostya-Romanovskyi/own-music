import { FC, useState, SetStateAction } from 'react'
import {
	StyledLink,
	ArrowIcon,
	CreateTextarea,
	DescriptionText,
	RadioWrapper,
	Label,
	RadioButton,
	AddTaskButton,
} from './CreateTodoPage.styled'
import { useAuthContext } from '../../context/AuthContext'
import { useTodoContext } from '../../context/TodoContext'

import { TypeTodoItem } from '../../types/Todo.types'

import { nanoid } from 'nanoid'

import { formattedDate } from '../../Constant/Date'

import { useNavigate } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import { toast, ToastContainer, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const notifyStyled: ToastOptions = {
	position: 'top-center',
	theme: 'colored',
	closeOnClick: true,
}

const CreateTodoPage: FC = () => {
	const [selectedValue, setSelectedValue] = useState<string>('easy')
	const [newValue, setNewValue] = useState<string>('')

	const { userAuth } = useAuthContext()
	const { addTodo } = useTodoContext()

	const navigate = useNavigate()
	const { t } = useTranslation()

	const handleChecked = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setSelectedValue(e.target.value)
	}

	const handleChange = (e: { target: { value: SetStateAction<string> } }): void => {
		setNewValue(e.target.value)
	}

	const handleAddTodo = async () => {
		if (newValue === '') {
			toast.warning(t('notifyEmptyField'), notifyStyled)
			return
		}

		const id = nanoid()

		const newTodo: TypeTodoItem = {
			id,
			text: newValue,
			complexity: selectedValue as 'easy' | 'medium' | 'hard',
			status: false,
			addingDate: formattedDate,
		}

		if (userAuth) {
			addTodo(userAuth.uid, newTodo)

			navigate('/')
		}
	}

	return (
		<div className='container'>
			<ToastContainer />
			<StyledLink to={'/'}>
				<ArrowIcon />
				{t('backBtn')}
			</StyledLink>

			<CreateTextarea onChange={handleChange} value={newValue}></CreateTextarea>

			<DescriptionText>{t('taskDifficulty')}:</DescriptionText>

			<RadioWrapper>
				<li>
					<Label htmlFor='easy-create' type='easy' checked={selectedValue === 'easy'}>
						{t('easy')}
					</Label>
					<RadioButton onChange={handleChecked} type='radio' name='complexity-create' value='easy' id='easy-create' />
				</li>

				<li>
					<Label htmlFor='medium-create' type='medium' checked={selectedValue === 'medium'}>
						{t('medium')}
					</Label>
					<RadioButton
						onChange={handleChecked}
						type='radio'
						name='complexity-create'
						value='medium'
						checked={selectedValue === 'medium'}
						id='medium-create'
					/>
				</li>

				<li>
					<Label htmlFor='hard-create' type='hard' checked={selectedValue === 'hard'}>
						{t('hard')}
					</Label>
					<RadioButton
						onChange={handleChecked}
						type='radio'
						name='complexity-create'
						value='hard'
						checked={selectedValue === 'hard'}
						id='hard-create'
					/>
				</li>
			</RadioWrapper>

			<AddTaskButton onClick={handleAddTodo}>{t('addTodo')}</AddTaskButton>
		</div>
	)
}
export default CreateTodoPage
