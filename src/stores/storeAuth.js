
import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from '@/js/firebase'

export const useStoreAuth = defineStore('storeAuth', {
	state: () => {
		return { 
		}
	},
	actions: {
		registerUser(credentials) {
			console.log('about to create the user')
			createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user
			console.log('user: ', user)
		})
		.catch((error) => {
			const errorCode = error.code
			const errorMessage = error.message
			console.log('error.message: ', error.message)
		})
		},
		loginUser(credentials) {
			console.log('login ', credentials)
		},
		logoutUser() {
			signOut(auth).then(() => {
				console.log('User logged out')
				}).catch((error) => {
					console.log('error.message: ', error.message)
				})
				
		}
	}

})