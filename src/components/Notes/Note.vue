<template>
	
	<div class="card mb-4">
		<div class="card-content">
			{{ note.content }}
			<div class="columns is-mobile has-text-grey-light mt-2">
				<small class="column">{{dateFormatted}}</small>
				<small class="column has-text-right">{{ characterLength }}</small>
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
			v-if="modals.deleteNote"
			:noteId="note.id"/>
	</div>
	
</template>

<script setup>
import { computed, reactive } from 'vue'
import ModalDeleteNote from '@/components/Notes/ModalDeleteNote.vue'
import { useDateFormat } from '@vueuse/core'


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

const dateFormatted = computed(() => {
	let date = new Date(parseInt(props.note.date))
	return useDateFormat(date, 'MM-DD-YYYY@HH:mm').value
})

const modals = reactive({
	deleteNote: false
})
</script>