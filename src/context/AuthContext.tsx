import { FC, createContext, useContext, useEffect, useState } from 'react'
import { signInWithPopup, getAuth, GoogleAuthProvider, UserCredential, User } from 'firebase/auth'
import { TypeContextProps } from '../types/Todo.types'
import { app } from '../firebase/initializeFirebase'

// Получение объекта аутентификации Firebase
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

// Тип контекста авторизации
type AuthContextType = {
	userAuth: User | null
	isLoading: boolean
	handleClick: () => void
}

// Начальное состояние контекста
const initialStateContext: AuthContextType = {
	userAuth: null,
	isLoading: false,
	handleClick: () => {},
}

// Создание контекста авторизации
export const AuthContext = createContext<AuthContextType>(initialStateContext)

// Провайдер контекста авторизации
export const AuthProvider: FC<TypeContextProps> = ({ children }) => {
	const [userAuth, setUserAuth] = useState<User | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	// Функция для обработки нажатия на кнопку входа
	const handleClick = () => {
		setIsLoading(true)

		signInWithPopup(auth, provider)
			.then((result: UserCredential) => {
				setIsLoading(false)
				if (result.user) {
					setUserAuth(result.user)
					localStorage.setItem(
						'auth',
						JSON.stringify({ name: result.user.displayName, uid: result.user.uid, email: result.user.email })
					)
				}
			})
			.catch(error => {
				console.error('Error signing in:', error)
				setIsLoading(false)
			})
	}

	// Предположим, что у вас уже есть функция useState и другие необходимые импорты

	useEffect(() => {
		const storedAuthData = localStorage.getItem('auth')
		if (storedAuthData) {
			setIsLoading(true)

			const { name, email, uid } = JSON.parse(storedAuthData)

			const user: User = {
				displayName: name,
				email: email,
				emailVerified: false, // Пример заполнения других свойств
				isAnonymous: false,
				metadata: {}, // Пример заполнения других свойств
				providerData: [], // Пример заполнения других свойств
				refreshToken: '',
				tenantId: '',
				delete: () => Promise.resolve(),
				getIdToken: () => Promise.resolve(''),
				getIdTokenResult: () => Promise.resolve({} as any),
				reload: () => Promise.resolve(),

				toJSON: () => ({}),

				uid: uid,
			}

			setUserAuth(user)

			setIsLoading(false)
		}
	}, [])

	// Значение контекста
	const authContextValue: AuthContextType = {
		userAuth,
		isLoading,
		handleClick,
	}

	return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>
}

// Хук для использования контекста авторизации
export const useAuthContext = () => useContext(AuthContext)
