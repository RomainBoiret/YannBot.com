<template>
	<div class="header-embed">
		<a href="#" class="header-embed__logo">
			<img src="../../images/yanbot-logo.jpg" />
			<span>YANNBOT</span>
		</a>

		<header-navbar></header-navbar>
	</div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style lang="scss">
.header-embed {
	position: relative;
	width: 100%;
	height: 80px;
	background: #5465ff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 100px;

	@media (max-width: 768px) {
		padding: 0 20px;
	}

	.header-embed__logo {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-right: 20px;
	}

	.header-embed__logo img {
		width: 45px;
		border-radius: 25px;
	}

	.header-embed__logo span {
		color: #fffffc;
		font-size: 28px;
		font-weight: 800;
	}

	.header-embed__header-link {
		color: white;
		font-size: 16px;
		font-weight: 600;
	}
}
</style>
