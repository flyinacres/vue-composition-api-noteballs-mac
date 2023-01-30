
import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
	state: () => {
		return { 
			notes: [{
				id: 'id1',
				content: "Amet voluptate laboris dolore cillum excepteur et nulla in. Minim mollit non adipisicing aliquip quis elit eu dolor eu ad deserunt ea ad. Lorem occaecat irure commodo dolor quis tempor sunt enim enim. Enim est commodo do pariatur non laborum incididunt deserunt et duis. Amet occaecat laborum aliquip eu ullamco ipsum dolor esse deserunt sint officia. Et nisi deserunt et do Lorem."	
			}, {
				id: 'id2',
				content: "Bobbie eiusmod velit mollit officia quis ea qui. Aute duis labore labore laborum. Veniam incididunt laboris sint excepteur culpa non adipisicing minim reprehenderit ullamco excepteur proident ex nisi. Commodo enim est cupidatat adipisicing esse occaecat occaecat laboris pariatur occaecat sint. Pariatur id consequat minim cillum proident nostrud adipisicing fugiat veniam."	
			}
		]}
	},
	actions: {
		addNote(newNoteContent) {
			let currentDate = new Date().getTime()
			let id = currentDate.toString()
		
			let note = {
				id,
				content: newNoteContent
			}
			this.notes.unshift(note)
		}
	}
})