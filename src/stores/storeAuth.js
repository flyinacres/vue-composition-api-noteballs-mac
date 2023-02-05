
import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import { auth } from '@/js/firebase'

export const useStoreAuth = defineStore('storeAuth', {
	state: () => {
		return { 
			user: {}
		}
	},
	actions: {
		init() {
			onAuthStateChanged(auth, (user) => {
				if (user) {
					console.log('user logged in: ', user)
					this.user.id = user.uid
					this.user.email = user.email
				} else {
					console.log('user logged out: ', user)
					this.user = {}
				}
			}
		)},
		registerUser(credentials) {
			console.log('about to create the user')
			createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user
			//console.log('register user: ', user)
		})
		.catch((error) => {
			const errorCode = error.code
			const errorMessage = error.message
			console.log('error.message: ', error.message)
		})
		},
		loginUser(credentials) {
			signInWithEmailAndPassword(auth, credentials.email, credentials.password)
				.then((userCredential) => {
					// Signed in 
					const user = userCredential.user
					//console.log('login user: ', user)
				})
				.catch((error) => {
					const errorCode = error.code
					const errorMessage = error.message
					console.log('error.message: ', error.message)
				});
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