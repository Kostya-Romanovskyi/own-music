import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { app } from './initializeFirebase'
import { useContext, useEffect } from 'react'
import { TodoContextData } from '../context/TodoContext'

const provider = new GoogleAuthProvider()

const auth = getAuth(app)

const LogInButton = () => {
	const { setUserAuth, setIsLoading } = useContext(TodoContextData)

	const handleClick = () => {
		setIsLoading(true)

		signInWithPopup(auth, provider).then(data => {
			setIsLoading(false)

			setUserAuth(data.user)

			localStorage.setItem(
				'auth',
				JSON.stringify({ name: data.user.displayName, uid: data.user.uid, email: data.user.email })
			)
		})
	}
	useEffect(() => {
		const storedAuthData = localStorage.getItem('auth')

		if (storedAuthData) {
			setIsLoading(true)
			const { name, email, uid } = JSON.parse(storedAuthData)

			setUserAuth({ name: name, email: email, uid: uid })

			setIsLoading(false)
		}
	}, [])

	return <button onClick={handleClick}>Login</button>
}

export default LogInButton
