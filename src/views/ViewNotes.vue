<template>
	<div class="notes">
		<AddEditNote
			v-model="newNote"
			ref="addEditNoteRef"
			placeholder="Add a new note">
			<template #buttons>
				<button
					@click="addNote"
					:disabled="!newNote"
					class="button is-link has-background-success"
					>
					Add New Note
				</button>
			</template>
		</AddEditNote>

		<Note 
			v-for="note in storeNotes.notes" 
			:key="note.id"
			:note="note">
		</Note>

	</div>
</template>

<script setup>
import {ref, watch} from 'vue'
import Note from '@/components/Notes/Note.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import AddEditNote from '@/components/Notes/AddEditNote.vue'

const newNote = ref("")
const storeNotes = useStoreNotes()
const addEditNoteRef = ref(null)

const addNote = () => {

	storeNotes.addNote(newNote.value)
	newNote.value = ""
	addEditNoteRef.value.focusTextArea()
}

watch(newNote, (newValue) => {
 if (newValue.length === 100)
	alert('Only 100 chars allowed')
	
})
</script>