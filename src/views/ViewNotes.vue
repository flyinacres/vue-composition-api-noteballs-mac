<template>
	<div class="notes">

		<div class="card has-background-success-dark p-4 mb-5">
			<div class="field">
				<div class="control">
					<textarea 
						ref="newNoteRef"
						v-model="newNote" 
						class="textarea" 
						placeholder="Add a new note"></textarea>
				</div>
			</div>

			<div class="field is-grouped is-grouped-right">
				<div class="control">
					<button 
						@click="addNote"
						:disabled="!newNote"
						class="button is-link has-background-success">Add New Note</button>
				</div>
			</div>
		</div>


		<Note 
			v-for="note in notes" 
			:key="note.id"
			:note="note">
		</Note>

	</div>
</template>

<script setup>
import {ref} from 'vue'
import Note from '@/components/Notes/Note.vue'

const newNote = ref("")
// Note that it is not enough to put the ref in the template, it needs to be
// defined here in order to use it.
const newNoteRef = ref(null)

const notes = ref([{
		id: 'id1',
		content: "Amet voluptate laboris dolore cillum excepteur et nulla in. Minim mollit non adipisicing aliquip quis elit eu dolor eu ad deserunt ea ad. Lorem occaecat irure commodo dolor quis tempor sunt enim enim. Enim est commodo do pariatur non laborum incididunt deserunt et duis. Amet occaecat laborum aliquip eu ullamco ipsum dolor esse deserunt sint officia. Et nisi deserunt et do Lorem."	
	}, {
		id: 'id2',
		content: "Et eiusmod velit mollit officia quis ea qui. Aute duis labore labore laborum. Veniam incididunt laboris sint excepteur culpa non adipisicing minim reprehenderit ullamco excepteur proident ex nisi. Commodo enim est cupidatat adipisicing esse occaecat occaecat laboris pariatur occaecat sint. Pariatur id consequat minim cillum proident nostrud adipisicing fugiat veniam."	
	}
])

const addNote = () => {
	let currentDate = new Date().getTime()
	let id = currentDate.toString()

	let note = {
		id: id,
		content: newNote.value
	}
	notes.value.unshift(note)

	newNote.value = ""
	newNoteRef.value.focus()
}
</script>