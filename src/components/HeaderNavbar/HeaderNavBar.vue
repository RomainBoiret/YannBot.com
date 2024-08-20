<template>
	<div class="header-navbar">
		<div class="bx bx-menu" id="menu-icon" @click="toggleMenu"></div>

		<nav class="header-navbar__navigation" :class="{ active: isMenuActive }">
			<a href="#" class="header-navbar__header-link">Docs</a>
			<a href="#" class="header-navbar__header-link">FAQ</a>
			<a href="#" class="header-navbar__header-link">Se connecter</a>

			<span class="header-navbar__active-nav"></span>
		</nav>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuActive = ref(false);
const toggleMenu = () => {
	isMenuActive.value = !isMenuActive.value;
};
</script>

<style lang="scss">
.header-navbar {
	.header-navbar__navigation a {
		position: relative;
		text-decoration: none;
		color: #fffffc;
		font-size: 18px;
		font-weight: 600;
		margin-left: 35px;
		border-bottom: solid 3px transparent;
		transition: 0.1s;
	}

	.header-navbar__navigation a:hover {
		border-bottom: solid 3px #fffffc;
	}

	#menu-icon {
		font-size: 36px;
		color: #fffffc;
		cursor: pointer;
		display: none;
	}

	@media (max-width: 768px) {
		#menu-icon {
			display: block;
		}

		.header-navbar__navigation {
			position: absolute;
			top: 100%;
			left: -100%;
			width: 100%;
			padding: 20px 10px;
			box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
			z-index: 1;
			transition: 0.25s ease;
			transition-delay: 0.25s;
		}

		.header-navbar__navigation.active {
			left: 0;
			transition-delay: 0s;
		}

		.header-navbar__navigation .header-navbar__active-nav {
			position: absolute;
			top: 0;
			left: -100%;
			width: 100%;
			height: 100%;
			background: #fffffc;
			border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
			z-index: -1;
			transition: 0.25s ease;
			transition-delay: 0s;
		}

		.header-navbar__navigation.active .header-navbar__active-nav {
			left: 0;
			transition-delay: 0.25s;
		}

		.header-navbar__navigation a {
			display: block;
			font-size: 20px;
			color: #04080f;
			margin-left: 20px;
			transform: translateX(-20rem);
			transition: 0.25s ease;
			transition-delay: 0s;
			padding: 8px 0;
		}

		.header-navbar__navigation.active a {
			transform: translateX(0);
			transition-delay: 0.25s;
		}
	}
}
</style>
