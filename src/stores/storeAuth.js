
import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import { auth } from '@/js/firebase'
import { useStoreNotes } from '@/stores/storeNotes'



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

					this.router.push('/')

					const storeNotes = useStoreNotes()
					// Should be safe to initialize the notes now
					storeNotes.init()
				} else {
					console.log('user logged out: ', user)
					this.user = {}
					this.router.replace('/auth')
				}
			}
		)},
		registerUser(credentials) {
			createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user
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