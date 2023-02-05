
import { defineStore } from 'pinia'
import { collection, onSnapshot, addDoc, doc, deleteDoc, updateDoc, query, orderBy } from "firebase/firestore"
import {db} from '@/js/firebase'
import { useStoreAuth } from '@/stores/storeAuth'

var notesCollectionRef
var notesCollectionQuery

export const useStoreNotes = defineStore('storeNotes', {
	state: () => {
		return { 
			notes: [
			],
			notesLoaded: false
		}
	},
	actions: {
		init() {
			const storeAuth = useStoreAuth() 

			notesCollectionRef = collection(db, "users", storeAuth.user.id, "notes")
			notesCollectionQuery = query(notesCollectionRef, orderBy("date", 'desc'));

			this.getNotes()
		},
		async getNotes() {
			this.notesLoaded = false
			// This code dynamically updates data as it is changed on the server
			const unsubscribe = onSnapshot(notesCollectionQuery, (querySnapshot) => {
				let notes = []
				querySnapshot.forEach((doc) => {
					let note = { 
						id: doc.id,
						content: doc.data().content,
						date: doc.data().date
					}
					notes.push(note)
				})

				this.notes = notes
				this.notesLoaded = true
				
			})
		},
		clearNotes() {
			this.notes = []
		},
		async addNote(newNoteContent) {
			let currentDate = new Date().getTime()
			let date = currentDate.toString()

			await addDoc(notesCollectionRef, {
			content: newNoteContent,
			date
			})
		},
		async deleteNote(idToDelete) {
			await deleteDoc(doc(notesCollectionRef, idToDelete))
		},
		async updateNote(id, content) {
			await updateDoc(doc (notesCollectionRef, id), {
				content: content
			})
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