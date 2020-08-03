<style lang="scss" scoped>
	@mixin respond($breakpoint) {
		@if $breakpoint==tab-port {
			@media screen and (min-width: 768px) {
				//900px
				@content;
			}
		}
		@if $breakpoint==tab-land {
			@media screen and (min-width: 1024px) {
				//1200px
				@content;
			}
		}
		@if $breakpoint==desktop {
			@media screen and (min-width: 1440px) {
				//1200px
				@content;
			}
		}
	}

	.brands {
		padding-bottom: 50px;
		.brands-title {
			font-size: 25px;
			@include respond(tab-land) {
				font-size: 50px;
			}
		}
		@media (min-width: 1024px) and (max-width: 1440px) {
			padding-top: 55px !important;
			padding-bottom: 55px !important;
		}
		@media (min-width: 1024px) {
			padding-bottom: 140px;
		}
	}
	.container-2 {
		margin-bottom: 30px;
		@media (min-width: 1024px) {
			margin-bottom: 0px;
		}
	}

	.container-1 {
		margin-bottom: 30px;
		@media (min-width: 1024px) {
			margin-bottom: 127px;
		}
	}
	.column {
		width: 33.333%;
		@media (min-widht: 1024px) {
			width: 16.66666%;
		}

		.box {
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			@media (min-width: 769px) and (max-width: 1024px) {
				padding-left: 20px;
				padding-right: 20px;
			}
			@media (max-width: 768px) {
				padding-left: 10px;
				padding-right: 10px;
			}
		}
		.Swissify {
			max-width: 57px;
			@media (min-width: 768px) {
				max-width: 97px;
			}
		}
		.Continente {
			max-width: 97px;
			@media (min-width: 768px) {
				max-width: 175px;
			}
		}
		.Tlc {
			max-width: 24px;
			@media (min-width: 768px) {
				max-width: 44px;
			}
		}
		.Anhtym {
			max-width: 59px;
			@media (min-width: 768px) {
				max-width: 108px;
			}
		}

		.Sneaq {
			max-width: 68px;
			@media (min-width: 768px) {
				max-width: 121px;
			}
		}
		.Hats {
			max-width: 36px;
			@media (min-width: 768px) {
				max-width: 60px;
			}
		}
		.Vodafone {
			max-width: 38px;
			@media (min-width: 768px) {
				max-width: 70px;
			}
		}
		.Umergency {
			max-width: 88px;
			@media (min-width: 768px) {
				max-width: 154px;
			}
		}
		.Amochef {
			max-width: 68px;
			@media (min-width: 768px) {
				max-width: 127px;
			}
		}
	}
</style>

<template>
	<div
		class="xl:w-desktop mx-auto px-8 lg:px-40 xxl:px-0 pt-20 lg:py-56 brands"
	>
		<div class="lg:hidden flex justify-center container-1">
			<div
				v-for="(image, index) in rows.slice(0, 3)"
				:key="index"
				class="column"
			>
				<div class="box">
					<g-image :src="image.img" alt="brand images" :class="image.class" />
				</div>
			</div>
		</div>
		<div class="lg:hidden flex justify-center container-2">
			<div
				v-for="(image, index) in rows.slice(3, 7)"
				:key="index"
				class="column"
			>
				<div class="box">
					<g-image :src="image.img" alt="brand images" :class="image.class" />
				</div>
			</div>
		</div>
		<div class="lg:hidden flex justify-center container-3">
			<div v-for="(image, index) in rows.slice(7)" :key="index" class="column">
				<div class="box">
					<g-image :src="image.img" alt="brand images" :class="image.class" />
				</div>
			</div>
		</div>
		<!-- DESKTOP -->
		<div class="lg:flex justify-center container-1 hidden ">
			<div
				v-for="(image, index) in rows.slice(0, 6)"
				:key="index"
				class="column"
			>
				<div class="box">
					<g-image
						:src="image.img"
						:alt="alts[0][index]"
						:class="image.class"
					/>
				</div>
			</div>
		</div>
		<div class="lg:flex justify-center container-2 hidden">
			<div v-for="(image, index) in rows.slice(6)" :key="index" class="column">
				<div class="box">
					<g-image
						:src="image.img"
						:alt="alts[1][index]"
						:class="image.class"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import helpers from "~/helpers";
	const { brandsAssets } = helpers;

	export default {
		data() {
			return {
				rows: brandsAssets,
				alts: [
					["Gigers", "Codeventure", "Swissify", "Continente", "Tlc", "Anhtym"],
					["SneaqAttaq", "Hats17", "Vodafone", "Umermency", "Amochef"]
				]
			};
		}
	};
</script>
