<template>
	<section class="default-section">
		<div class="default-section__container">
			<slot></slot>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style lang="scss">
.default-section {
	padding: 40px 100px;

	@media (max-width: 768px) {
		padding: 40px 20px;
	}
}
</style>
