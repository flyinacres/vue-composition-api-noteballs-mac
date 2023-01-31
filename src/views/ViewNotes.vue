<template>
	<div class="notes">
		<AddEditNote
			v-model="newNote">
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
import {ref} from 'vue'
import Note from '@/components/Notes/Note.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import AddEditNote from '@/components/Notes/AddEditNote.vue'

const newNote = ref("")
// Note that it is not enough to put the ref in the template, it needs to be
// defined here in order to use it.
const newNoteRef = ref(null)

const storeNotes = useStoreNotes()


const addNote = () => {

	storeNotes.addNote(newNote.value)

	newNote.value = ""
}

</script>