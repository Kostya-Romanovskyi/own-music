// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
// import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyD2Eh3T3bE5DppbPEFVHOM3V26b28Pgj8w',
	authDomain: 'owntodo-46425.firebaseapp.com',
	databaseURL: 'https://owntodo-46425-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'owntodo-46425',
	storageBucket: 'owntodo-46425.appspot.com',
	messagingSenderId: '431234222803',
	appId: '1:431234222803:web:da32c60736b37103382226',
	measurementId: 'G-VEREY6NVT7',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const database = getDatabase(app)
// const analytics = getAnalytics(app)
