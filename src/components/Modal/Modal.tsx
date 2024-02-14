import { FC, useEffect, useState } from 'react'
import Modal from 'react-modal'

import { useTodoContext } from '../../context/TodoContext'
import { useAuthContext } from '../../context/AuthContext'
import { useThemeContext } from '../../context/ThemeContext'

import { formattedDate } from '../../Constant/Date'
import { TypeTodoItem } from '../../types/Todo.types'

import {
	TextArea,
	RadioWrapper,
	Label,
	RadioButton,
	CloseButton,
	StyledCloseIcon,
	EditButton,
	DeleteButton,
} from './Modal.styled'

import { darkTheme } from '../../UI/GlobalTheme'
import { toast, ToastOptions } from 'react-toastify'

import { useTranslation } from 'react-i18next'

Modal.setAppElement('#root')

type TypeModalWindow = {
	modalIsOpen: boolean
	setIsOpen: (value: boolean) => void
	text: string
	id: string
}

const notifyStyled: ToastOptions = {
	position: 'top-center',
	theme: 'colored',
	closeOnClick: true,
}

const ModalWindow: FC<TypeModalWindow> = ({ modalIsOpen, setIsOpen, text, id }) => {
	const [textAreaValue, setTextAreaValue] = useState<string>('')
	const [selectedValue, setSelectedValue] = useState<string>('easy')

	const { userAuth } = useAuthContext()
	const { deleteTodo, updateTodo } = useTodoContext()
	const { currentTheme } = useThemeContext()
	const { t } = useTranslation()

	useEffect(() => {
		if (modalIsOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [modalIsOpen])

	useEffect(() => {
		setTextAreaValue(text)
	}, [text])

	function closeModal() {
		setIsOpen(false)
	}

	const handleChecked = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setSelectedValue(e.target.value)
	}

	const handleUpdate = (uid: string, todoId: string) => {
		if (textAreaValue === '') {
			toast.warning(t('notifyEmptyField'), notifyStyled)
			return
		}
		try {
			const updatedTodo: TypeTodoItem = {
				id: todoId,
				text: textAreaValue,
				complexity: selectedValue as 'easy' | 'medium' | 'hard',
				status: false,
				addingDate: formattedDate,
			}

			updateTodo(uid, todoId, updatedTodo)
		} catch (error) {
			alert('error')
		}

		setIsOpen(false)
	}

	const handleDelete = (uid: string, todoId: string) => {
		deleteTodo(uid, todoId)
	}

	return (
		<Modal
			className={currentTheme === darkTheme ? 'modal-dark' : 'modal-light'}
			style={{
				overlay: {
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: currentTheme === darkTheme ? '#ffffff1f' : 'rgba(255, 255, 255, 0.75)',
				},
			}}
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			contentLabel='Example Modal'
		>
			<div className='container'>
				<CloseButton onClick={closeModal}>
					<StyledCloseIcon />
				</CloseButton>

				<TextArea
					placeholder='Edit text'
					onChange={e => setTextAreaValue(e.target.value)}
					defaultValue={textAreaValue}
				></TextArea>

				<RadioWrapper>
					<li>
						<Label htmlFor='easy-update' type='easy' checked={selectedValue === 'easy'}>
							{t('easy')}
						</Label>
						<RadioButton onChange={handleChecked} type='radio' name='complexity-update' value='easy' id='easy-update' />
					</li>

					<li>
						<Label htmlFor='medium-update' type='medium' checked={selectedValue === 'medium'}>
							{t('medium')}
						</Label>
						<RadioButton
							onChange={handleChecked}
							type='radio'
							name='complexity-update'
							value='medium'
							checked={selectedValue === 'medium'}
							id='medium-update'
						/>
					</li>

					<li>
						<Label htmlFor='hard-update' type='hard' checked={selectedValue === 'hard'}>
							{t('hard')}
						</Label>
						<RadioButton
							onChange={handleChecked}
							type='radio'
							name='complexity-update'
							value='hard'
							checked={selectedValue === 'hard'}
							id='hard-update'
						/>
					</li>
				</RadioWrapper>

				<EditButton
					onClick={() => {
						if (userAuth) {
							handleUpdate(userAuth.uid, id)
						}
					}}
				>
					{t('editTodo')}
				</EditButton>

				<DeleteButton
					onClick={() => {
						if (userAuth) {
							handleDelete(userAuth.uid, id)
						}
					}}
				>
					{t('deleteTodo')}
				</DeleteButton>
			</div>
		</Modal>
	)
}
export default ModalWindow
