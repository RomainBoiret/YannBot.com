<template>
	<div class="footer-embed">
		<p class="footer-embed__footer-text">Lorem ipsum dolor sit amet.</p>
		<a href="#top" class="footer-embed__footer-btn">UP</a>
	</div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style lang="scss">
.footer-embed {
	position: relative;
	width: 100%;
	height: 60px;
	background: #5465ff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 100px;

	@media (max-width: 768px) {
		padding: 0 20px;
	}

	.footer-embed__footer-text {
		color: #fff;
		font-size: 12px;
		font-weight: 600;
	}

	.footer-embed__footer-btn {
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 3px solid #788bff;
		background: #8995ff;
		border-radius: 5px;
		color: #fff;
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
	}
}
</style>
