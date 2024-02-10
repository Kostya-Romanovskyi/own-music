import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		fallbackLng: 'en',

		resources: {
			en: {
				translation: {
					logIn: 'Log In',
					logOut: 'Log Out',
					mainTitle: 'Log In for start writing your todo',
					filterBtn: 'Filters',
					filterPlaceholder: 'Searching by text',
					all: 'All',
					inProgress: 'In Progress',
					done: 'Done',
					easy: 'Easy',
					medium: 'Medium',
					hard: 'Hard',
					createTodo: 'Create Todo',
					addTodo: 'Add Todo',
					editTodo: 'Edit Todo',
					deleteTodo: 'Delete Todo',
					backBtn: 'Back',
					taskDifficulty: 'Select task difficulty',
				},
			},
			uk: {
				translation: {
					logIn: 'Увійти',
					logOut: 'Вийти',
					mainTitle: 'Увійдіть в додаток, щоб записувати свої задачі',
					filterBtn: 'Фільтри',
					filterPlaceholder: 'Пошук по тексту',
					all: 'Усі',
					inProgress: 'Виконуються',
					done: 'Виконано',
					easy: 'Легко',
					medium: 'Середньо',
					hard: 'Важко',
					createTodo: 'Створити задачу',
					addTodo: 'Додати задачу',
					editTodo: 'Рудагувати задачу',
					deleteTodo: 'Видалити задачу',
					backBtn: 'Назад',
					taskDifficulty: 'Вибери складність завдання',
				},
			},
		},
	})
