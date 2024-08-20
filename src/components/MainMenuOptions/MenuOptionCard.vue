<template>
	<div class="menu-option-card">
		<div class="menu-option-card__illustration-part"></div>
		<div class="menu-option-card__information-part">
			<h3 class="menu-option-card__title">Titre carte</h3>
			<p class="menu-option-card__description">
				Lorem ipsum dolor sit, r adipisiing elit. Praesentium, incidunt ae aijbr
				a;rna rg.
			</p>
			<button class="menu-option-card__btn">Voir plus</button>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style lang="scss">
.menu-option-card {
	width: 550px;
	height: 250px;
	display: flex;
	justify-content: space-between;
	border: 5px solid #ececec;
	border-radius: 15px;
	padding: 10px;

	@media (max-width: 768px) {
		width: 100%;
		height: auto;
		flex-direction: column;
	}

	.menu-option-card__illustration-part {
		width: 220px;
		height: 100%;
		background: #ececec;
		border-radius: 10px;

		@media (max-width: 768px) {
			width: 100%;
			margin-bottom: 15px;
		}
	}

	.menu-option-card__information-part {
		width: 280px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 20px;
	}

	.menu-option-card__title {
		font-size: 24px;
		font-weight: 800;
	}

	.menu-option-card__description {
		font-size: 16px;
		font-weight: 400;
	}

	.menu-option-card__btn {
		width: 120px;
		height: 40px;
		background: #5465ff;
		border-radius: 5px;
		color: #fff;
		font-size: 16px;
		font-weight: 500;
		cursor: pointer;
		transition: 0.1s;
	}

	.menu-option-card__btn:focus,
	.menu-option-card__btn:hover {
		background: #788bff;
	}
}
</style>
