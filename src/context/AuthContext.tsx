import { FC, createContext, useContext, useEffect, useState } from 'react'
import { signInWithPopup, getAuth, GoogleAuthProvider, UserCredential, User, signOut } from 'firebase/auth'
import { TypeContextProps } from '../types/Todo.types'

import { app } from '../firebase/initializeFirebase'

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

type AuthContextType = {
	userAuth: any | null
	isLoading: boolean
	handleLogIn: () => void
	handleLogOut: () => void
}

const initialStateContext: AuthContextType = {
	userAuth: null,
	isLoading: false,
	handleLogIn: () => {},
	handleLogOut: () => {},
}

export const AuthContext = createContext<AuthContextType>(initialStateContext)

export const AuthProvider: FC<TypeContextProps> = ({ children }) => {
	const [userAuth, setUserAuth] = useState<any | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const handleLogIn = () => {
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

	const handleLogOut = () => {
		signOut(auth)
			.then(() => {
				setUserAuth(null)

				localStorage.clear()
			})
			.catch(error => {
				console.log(error)
			})
	}

	useEffect(() => {
		const storedAuthData = localStorage.getItem('auth')
		if (storedAuthData) {
			setIsLoading(true)

			const { name, email, uid } = JSON.parse(storedAuthData)

			const user: any = {
				displayName: name,
				email: email,
				uid: uid,
			}

			setUserAuth(user)

			setIsLoading(false)
		}
	}, [])

	const authContextValue: AuthContextType = {
		userAuth,
		isLoading,
		handleLogIn,
		handleLogOut,
	}

	return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)
