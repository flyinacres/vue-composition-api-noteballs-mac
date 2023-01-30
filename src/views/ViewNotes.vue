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
			v-for="note in storeNotes.notes" 
			:key="note.id"
			:note="note"
			@deleteClicked="deleteNote">
		</Note>

	</div>
</template>

<script setup>
import {ref} from 'vue'
import Note from '@/components/Notes/Note.vue'
import { useStoreNotes } from '@/stores/storeNotes'

const newNote = ref("")
// Note that it is not enough to put the ref in the template, it needs to be
// defined here in order to use it.
const newNoteRef = ref(null)

const storeNotes = useStoreNotes()


const addNote = () => {

	storeNotes.addNote(newNote.value)

	newNote.value = ""
	newNoteRef.value.focus()
}

const deleteNote = (id) => {
	notes.value = notes.value.filter(note => {
		return note.id != id
	})
}
</script>