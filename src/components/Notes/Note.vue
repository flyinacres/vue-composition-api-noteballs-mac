<template>
	
	<div class="card mb-4">
		<div class="card-content">
			{{ note.content }}
		</div>
		<footer class="card-footer">
			<a href="#" class="card-footer-item pr-2">Edit</a>
			<a href="#" class="card-footer-item">Delete</a>
		</footer>
	</div>
	
</template>

<script setup>
import {ref} from 'vue'

const props = defineProps({
	note: {
		type: Object,
		required: true
	}
})

</script>