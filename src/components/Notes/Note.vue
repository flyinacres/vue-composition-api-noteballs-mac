<template>
	
	<div class="card mb-4">
		<div class="card-content">
			{{ note.content }}
			<div class="has-text-right has-text-grey-light mt-2">
				<small>{{ characterLength }}</small>
			</div>
		</div>
		<footer class="card-footer">
			<a href="#" class="card-footer-item pr-2">Edit</a>
			<a 
				@click.prevent="handleDeleteClicked"
				href="#" 
				class="card-footer-item">
				Delete
			</a>
		</footer>
	</div>
	
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['deleteClicked'])

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

const handleDeleteClicked = () => {
	emit('deleteClicked', props.note.id)
}
</script>