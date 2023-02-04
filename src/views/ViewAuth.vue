<template>
	<div class="auth">
		<div class="tabs is-centered">
			<ul>
				<li 
					@click.prevent="register = false"
					:class="{ 'is-active' : !register }">
					<a>Login</a>
				</li>
				<li 
					@click.prevent="register = true"
					:class="{ 'is-active' : register }">
					<a>Register</a>
				</li>
			</ul>
		</div>
		<div class="card auth-form">
			<div class="card-content">
				<div class="title has-text-centered">
					{{formTitle}}
				</div>

				<form @submit.prevent="onSubmit">
					<div class="field">
						<label class="label">Email</label>
						<div class="control">
							<input 
								v-model="credentials.email"
								class="input" 
								type="email" 
								placeholder="e.g. alexsmith@gmail.com">
						</div>
					</div>


					<div class="field">
						<label class="label">Password</label>
						<div class="control">
							<input 
								v-model="credentials.password"
								class="input" 
								type="password" 
								placeholder="Enter a password">
						</div>
					</div>

					<div class="field is-grouped is-grouped-right">
						<p class="control">
							<button class="button is-primary">
							{{ formTitle }}
							</button>
						</p>
					</div>
				</form>

			</div>
		</div>
	</div>

</template>

<script setup>
import {ref, computed, reactive} from 'vue'
import { useStoreAuth } from '@/stores/storeAuth'

const storeAuth = useStoreAuth()

const register = ref(false)

const formTitle = computed(() => {
	return register.value ? 'Register' : 'Login'
})

const onSubmit = () => {
	if (!credentials.email || !credentials.password) {
		alert('enter an email and password')
	} else {
		if (register.value) {
			storeAuth.registerUser(credentials)
		} else {
			storeAuth.loginUser(credentials)
		}
	}
}

const credentials = reactive({
	email: '',
	password: ''
})
</script>

<style>
.auth-form {
	max-width: 400px;
	margin: 0 auto;
}

</style>