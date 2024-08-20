<template>
	<div class="sticky-illustration">
		<div class="sticky-illustration__container">
			<div class="sticky-illustration__illustration"></div>

			<p class="sticky-illustration__description">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus facilis
				nulla asperiores sed amet natus et labore sit?
			</p>

			<div class="sticky-illustration__btn-box">
				<div class="sticky-illustration__btn">Inviter Yann</div>
				<div class="sticky-illustration__btn">Repo GitHub</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style lang="scss">
.sticky-illustration {
	position: sticky;
	top: 30px;
	width: 400px;

	@media (max-width: 768px) {
		width: 100%;
	}

	.sticky-illustration__container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.sticky-illustration__illustration {
		width: 300px;
		height: 300px;
		border: 5px solid #ececec;
		border-radius: 15px;

		@media (max-width: 768px) {
			width: 100%;
		}
	}

	.sticky-illustration__description {
		font-size: 16px;
		font-weight: 600;

		@media (max-width: 768px) {
			font-size: 12px;
		}
	}

	.sticky-illustration__btn-box {
		width: 100%;
		display: flex;
		gap: 20px;
	}

	.sticky-illustration__btn {
		width: 170px;
		height: 45px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #d80032;
		border-radius: 5px;
		color: #fff;
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
		transition: 0.1s;
	}

	.sticky-illustration__btn:nth-child(2) {
		background: #7b2cbf;
	}

	.sticky-illustration__btn:focus,
	.sticky-illustration__btn:hover {
		background: #ef233c;
	}

	.sticky-illustration__btn:nth-child(2):focus,
	.sticky-illustration__btn:nth-child(2):hover {
		background: #9d4edd;
	}
}
</style>
