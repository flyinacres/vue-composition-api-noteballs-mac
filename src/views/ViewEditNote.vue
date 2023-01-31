<template>
	<div class="edit-note">
		<AddEditNote
			v-model="noteContent"
			bgColor="link"
			placeHolder="Edit Note"
			label="Edit Note"
			ref="addEditNoteRef">
			<template #buttons>
				<button
					class="button is-link is-light mr-2"
					@click="$router.back()"
					>
					Cancel
				</button>
				<button
					class="button is-link has-background-link"
					@click="handleSaveClicked"
					:disabled="!noteContent"
					>
					Save Note
				</button>

			</template>
		</AddEditNote>
	</div>
	
</template>


<script setup>
import {ref} from 'vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import {useStoreNotes} from '@/stores/storeNotes'
import {useRoute} from 'vue-router'

const route = useRoute()

const storeNotes = useStoreNotes()
const noteContent = ref('')
noteContent.value = storeNotes.getNoteContent(route.params.id)

const handleSaveClicked = () => {
	storeNotes.updateNote(route.params.id, noteContent.value)
}
</script>
