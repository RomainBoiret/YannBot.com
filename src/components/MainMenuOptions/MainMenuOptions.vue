<template>
	<div class="main-menu-options">
		<menu-option-card></menu-option-card>
		<menu-option-card></menu-option-card>
		<menu-option-card></menu-option-card>
		<menu-option-card></menu-option-card>
		<menu-option-card></menu-option-card>
	</div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style lang="scss">
.main-menu-options {
	width: 550px;
	display: flex;
	flex-direction: column;
	gap: 30px;

	@media (max-width: 768px) {
		width: 100%;
	}
}
</style>
