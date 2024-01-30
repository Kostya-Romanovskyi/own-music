// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyD2Eh3T3bE5DppbPEFVHOM3V26b28Pgj8w',
	authDomain: 'kostya-romanovskyi.github.io',
	projectId: 'owntodo-46425',
	storageBucket: 'owntodo-46425.appspot.com',
	messagingSenderId: '431234222803',
	appId: '1:431234222803:web:da32c60736b37103382226',
	measurementId: 'G-VEREY6NVT7',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
