<template>
	
	<div class="card mb-4">
		<div class="card-content">
			{{ note.content }}
			<div class="has-text-right has-text-grey-light mt-2">
				<small>{{ characterLength }}</small>
			</div>
		</div>
		<footer class="card-footer">
			<RouterLink 
				:to="`/editNote/${note.id}`"
				href="#" 
				class="card-footer-item pr-2">
				Edit
			</RouterLink>
			<a 
				@click.prevent="modals.deleteNote=true"
				href="#" 
				class="card-footer-item">
				Delete
			</a>
		</footer>
		<ModalDeleteNote 
			v-model="modals.deleteNote"
			v-if="modals.deleteNote"/>
	</div>
	
</template>

<script setup>
import { computed, reactive } from 'vue'

import { useStoreNotes } from '@/stores/storeNotes'
import ModalDeleteNote from '@/components/Notes/ModalDeleteNote.vue'

const storeNotes = useStoreNotes()

const props = defineProps({
	note: {
		type: Object,
		required: true
	}
})

const characterLength = computed(() => {
		let len = props.note.content.length
		if (len === 1)
			return len + " character"
		return len + " characters"
	}
)

const modals = reactive({
	deleteNote: false
})
</script>