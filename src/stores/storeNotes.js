
import { defineStore } from 'pinia'
import { collection, onSnapshot, setDoc, doc, deleteDoc, updateDoc, query, orderBy } from "firebase/firestore"
import {db} from '@/js/firebase'

const notesCollectionRef = collection(db, "notes")
const notesCollectionQuery = query(notesCollectionRef, orderBy("id", 'desc'));

export const useStoreNotes = defineStore('storeNotes', {
	state: () => {
		return { 
			notes: [
		]}
	},
	actions: {
		async getNotes() {

			// This code dynamically updates data as it is changed on the server
			const unsubscribe = onSnapshot(notesCollectionQuery, (querySnapshot) => {
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
		async addNote(newNoteContent) {
			let currentDate = new Date().getTime()
			let id = currentDate.toString()

			await setDoc(doc(notesCollectionRef, id), {
			content: newNoteContent,
			id
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