<template>
	<div class="stats">
		<table class="table is-fullwidt">
			<thead>
				<tr>
					<th>Stat</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						Number of Notes
					</td>
					<td>
						{{ storeNotes.totalNotesCount }}
					</td>
				</tr>
				<tr>
					<td>
						Number of Characters (all notes)
					</td>
					<td>
						{{ storeNotes.totalCharactersCount }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<input
		v-model="loveNoteballs"
		class="input"
		type="text"
		v-autofocus
		placeholder="Do you love noteballs"/>
</template>

<script setup>
import {useStoreNotes} from '@/stores/storeNotes'
import {vAutofocus} from '@/directives/vAutofocus'
import {useWatchCharacters} from '@/use/useWatchCharacters'
import {ref} from 'vue'

const storeNotes = useStoreNotes()
const loveNoteballs = ref(null)
useWatchCharacters(loveNoteballs)
</script>