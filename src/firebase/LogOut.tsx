import { getAuth, signOut } from 'firebase/auth'
import { useContext } from 'react'
import { TodoContextData } from '../context/TodoContext'
import { app } from './initializeFirebase'

const auth = getAuth(app)

const LogOutButton = () => {
	const { setUserAuth } = useContext(TodoContextData)

	const handleClick = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.

				setUserAuth(null)

				localStorage.clear()
			})
			.catch(error => {
				// An error happened.
				console.log(error)
			})
	}

	return <button onClick={handleClick}>Log Out</button>
}

export default LogOutButton
