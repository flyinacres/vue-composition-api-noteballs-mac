
import { defineStore } from 'pinia'
import { collection, onSnapshot } from "firebase/firestore"
import {db} from '@/js/firebase'

export const useStoreNotes = defineStore('storeNotes', {
	state: () => {
		return { 
			notes: [
			// 	{
			// 	id: 'id1',
			// 	content: "Amet voluptate laboris dolore cillum excepteur et nulla in. Minim mollit non adipisicing aliquip quis elit eu dolor eu ad deserunt ea ad. Lorem occaecat irure commodo dolor quis tempor sunt enim enim. Enim est commodo do pariatur non laborum incididunt deserunt et duis. Amet occaecat laborum aliquip eu ullamco ipsum dolor esse deserunt sint officia. Et nisi deserunt et do Lorem."	
			// }, {
			// 	id: 'id2',
			// 	content: "Bobbie eiusmod velit mollit officia quis ea qui. Aute duis labore labore laborum. Veniam incididunt laboris sint excepteur culpa non adipisicing minim reprehenderit ullamco excepteur proident ex nisi. Commodo enim est cupidatat adipisicing esse occaecat occaecat laboris pariatur occaecat sint. Pariatur id consequat minim cillum proident nostrud adipisicing fugiat veniam."	
			// }
		]}
	},
	actions: {
		async getNotes() {
			// This code only loads data at the start
			// const querySnapshot = await getDocs(collection(db, "notes"))
			// querySnapshot.forEach((doc) => {
  			// 	let note = { 
			// 		id: doc.id,
			// 		content: doc.data().content
			// 	}
  			// 	this.notes.push(note)
			// 	})

			// This code dynamically updates data as it is changed on the server
			const unsubscribe = onSnapshot(collection(db, "notes"), (querySnapshot) => {
				let notes = []
				querySnapshot.forEach((doc) => {
					let note = { 
						id: doc.id,
						content: doc.data().content
					}
					notes.push(note)
				})
				this.notes = notes
			})
		},
		addNote(newNoteContent) {
			let currentDate = new Date().getTime()
			let id = currentDate.toString()
		
			let note = {
				id,
				content: newNoteContent
			}
			this.notes.unshift(note)
		},
		deleteNote(idToDelete) {
			this.notes = this.notes.filter(note => {return note.id != idToDelete} )
		},
		updateNote(id, content) {
			let index = this.notes.findIndex(note => {
				return note.id === id
			})
			this.notes[index].content = content
		}
	}, 
	getters: {
		getNoteContent: (state) => {
			return (id) => {
				return state.notes.filter(note => {
					return note.id === id
				})[0].content
			}
		},
		totalNotesCount: (state) => {
			return state.notes.length
		},
		totalCharactersCount: (state) => {
			let count = 0

			state.notes.forEach( note => {
				count += note.content.length
			})
			return count
		}
	}
})