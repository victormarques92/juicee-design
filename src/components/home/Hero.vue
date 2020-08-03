<template>
	<header class="flex flex-wrap hero-header">
		<div class="w-full lg:w-1/2 box-img-hero">
			<g-image
				class="background-image"
				:src="require('../../assets/images/placeholders/herox2.png')"
				alt="hero celphone image"
			/>
			<!-- this is a media card image for facebook, twitter and any search engine to use "only": it must always be invisible -->
			<img
				src="../../assets/meta_media.png"
				alt="media card"
				class="invisible"
			/>
			<!-- My background -->
		</div>

		<div class="w-full lg:w-1/2 lg:order-first hero-texts">
			<div class="animated fadeInLeft">
				<h1 class="title-hero">Your application designed in just two weeks!</h1>

				<p class="subtitle-hero">
					Stop wasting thousands on misunderstood app requirements. Build a
					world class prototype and delight your users.
				</p>

				<a
					aria-label="navigation link for hero"
					href="#"
					class="btn-default larger j-font-hind text-center"
					@click.prevent="gotoElement('showcase')"
					>View Works</a
				>
			</div>
		</div>
	</header>
</template>

<script>
	import helpers from "~/helpers";
	const { EventBus } = helpers;
	export default {
		name: "hero",
		methods: {
			gotoElement(elementId) {
				EventBus.$emit("go", elementId);
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/sass/abstract/_mixins.scss";
	@import "@/assets/sass/abstract/_variables.scss";

	.hero-header {
		@media (min-width: 1024px) {
			padding-bottom: 60px;
		}
	}
	.hero-texts {
		@include padding("left", 60);
		display: flex;
		align-items: center;

		@media (max-width: 700px) {
			@include padding("sides", 20);
			text-align: center;
		}

		@media (min-width: 1440px) {
			@include padding("left", 115);
		}

		.title-hero {
			@include margin("bottom", 20);
			@include margin("top", 100);
			color: $gray-dark;
			font-size: 65px;
			font-weight: 700;
			line-height: 78px;

			@media (max-width: 700px) {
				margin-top: 0 !important;
				@include font(30);
				line-height: 40px;
			}

			// BREAKPOINTS FOR LAPTOPS
			@media (min-width: 1024px) and (max-width: 1440px) {
				font-size: 40px;
				line-height: 48px;
				margin-top: 0;
			}
		}

		.subtitle-hero {
			@include font(32);
			@include margin("bottom", 50);
			color: $gray-light;
			font-family: "hind-light";
			font-weight: 300;
			line-height: 42px;

			@media (max-width: 700px) {
				@include margin("bottom", 40);
				@include font(18);
				line-height: 28px;
			}
			// BREAKPOINTS FOR LAPTOPS
			@media (min-width: 1024px) and (max-width: 1440px) {
				font-size: 25px;
				line-height: 31px;
			}
		}

		@media (max-width: 700px) {
			.btn-default {
				@include margin("bottom", 40);
			}
		}

		@media (max-width: 768px) {
			.btn-default {
				font-size: 20px !important;
				line-height: 64px;
				padding: 0;
				width: 217.92px !important;
				height: 60px !important;
			}
		}
	}

	.box-img-hero {
		position: relative;
		height: 675px;
		display: flex;
		align-items: center;
		justify-content: center;

		// &::before {
		// 	content: "";
		// 	// background-image: url("../../assets/images/placeholders/herox2.png");
		// 	background-position: top right;
		// 	background-size: contain;
		// 	background-repeat: no-repeat;
		// 	position: absolute;
		// 	width: 100%;
		// 	height: 100%;
		// }
		.background-image {
			// content: "";
			// background-image: url("../../assets/images/placeholders/herox2.png");
			top: 0px;
			right: 0px;
			object-fit: fill;
			position: absolute;
			// width: 100%;
			height: 100%;
			z-index: 3;
		}

		@media (max-width: 700px) {
			@include margin("bottom", 20);
			height: 380px;
		}
		@media (min-width: 1024px) and (max-width: 1440px) {
			height: 594px;
		}
	}
</style>
