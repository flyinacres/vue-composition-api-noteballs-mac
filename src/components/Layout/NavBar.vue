<template>
	<nav class="navbar is-success" role="navigation" aria-label="main navigation">
		<div class="container is-max-desktop px-2">
			<div class="navbar-brand">
				<div class="navbar-item is-size-4 is-family-monospace" >
					Noteballs
				</div>

				<a role="button" 
					@click.prevent="showMobileNav = !showMobileNav"
					class="navbar-burger" 
					ref="navbarBurgerRef"
					:class="{ 'is-active' : showMobileNav }"
					aria-label="menu" 
					aria-expanded="false" 
					data-target="navbarBasicExample">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				</a>
			</div>
		</div>


		<div id="navbarBasicExample" 
			class="navbar-menu"
			ref="navbarMenuRef"
			:class="{ 'is-active' : showMobileNav }">

			<div class="navbar-start">
				<button 
					v-if="storeAuth.user.id"
					@click="logout"
					class="button is-small is-info ml-3 is-pulled-left"> 
					Log out {{ storeAuth.user.email }}
				</button>
			</div>

			<div class="navbar-end">
				<RouterLink 
					@click="showMobileNav=false"
					to="/" class="navbar-item: is-pulled-right ml-3" active-class="is-active">
					Notes
				</RouterLink>
				<RouterLink 
					@click="showMobileNav=false"
					to="/stats" class="navbar-item: is-pulled-right ml-3" active-class="is-active">
					Stats
				</RouterLink>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useStoreAuth } from '@/stores/storeAuth'

const storeAuth = useStoreAuth()

const showMobileNav = ref(false)
const navbarMenuRef = ref(null)
const navbarBurgerRef = ref(null)

onClickOutside(navbarMenuRef, (event) => {
	showMobileNav.value = false
}, {
	ignore: [navbarBurgerRef]
})

const logout = () => {
	showMobileNav.value = false
	storeAuth.logoutUser()
}

</script>

<style>
@media (max-width: 1023px) {
	.navbar-menu {
		position: absolute;
		left: 0;
		width: 100%;
	}
}
</style>