<template>
	<my-carousel
		:perPage="1"
		paginationColor="transparent"
		paginationActiveColor="#fff"
		:autoplay="true"
		:autoplayTimeout="4000"
		:speed="1000"
		:loop="true"
	>
		<slide v-for="slide in slides" :key="slide.title">
			<div :class="'box-carousel bg-slide-' + slide.image">
				<div class="w-full lg:w-1/2 box-image-carousel">
					<g-image
						:src="require(`~/assets/images/carousel/png/${slide.image}.png`)"
						:alt="slide.altImage"
						:style="{ height: slide.ajuste }"
					/>

					<g-image
						class="mobile"
						:src="
							require(`~/assets/images/carousel/png/${slide.image}-mobile.png`)
						"
						:alt="slide.altImage"
					/>
				</div>

				<div class="w-full lg:w-1/2 box-text-carousel">
					<h1 class="title">{{ slide.title }}</h1>
					<p class="text">{{ slide.text }}</p>
				</div>
			</div>
		</slide>
	</my-carousel>
</template>
<script>
	export default {
		name: "Carousel",
		components: {
			"my-carousel": () =>
				import("vue-carousel")
					.then(m => m.Carousel)
					.catch(),
			Slide: () =>
				import("vue-carousel")
					.then(m => m.Slide)
					.catch()
		},
		data() {
			return {
				slides: [
					{
						image: "Gigers",
						img: require("../../assets/images/carousel/png/Gigers.png"),
						altImage: "Gigers",
						title: "Gigers",
						text:
							"A social network for digital nomads with all the resources that one needs."
					},
					{
						image: "SneaqAttaq",
						altImage: "SneaqAttaq",
						title: "SneaqAttaq",
						text:
							"Talent acquisition on the blockchain. Anonymous matches between recruiters, companies, and candidates."
					},
					{
						image: "TrueNorth",
						altImage: "True North",
						title: "True North",
						text: "The mentor that helps you achieve your daily goals."
					},
					{
						image: "Startag",
						altImage: "Startag",
						title: "Startag",
						text:
							"Startag helps users power up their spirit trough songs. Whether you feel lost, alone or depressing, music is always a good companion."
					},
					{
						image: "Umergency",
						altImage: "Umergency",
						title: "Umergency",
						text:
							"Due to incident events growing in the US, Umergency App help kids staying safe at college and call for help if needed."
					},
					{
						image: "nfk",
						altImage: "Not For Keeps",
						title: "Not For Keeps",
						text:
							"A sharing community for new parents. Buy, Share or Lease items that aren't needed anymore."
					},
					{
						image: "Swissify",
						altImage: "Swissify",
						title: "Swissify",
						text:
							"Planning a permanent move to Switzerland ? Swissify guarantees that you have all covered before you even pack."
					}
				]
			};
		}
	};
</script>

<style lang="scss">
	@import "@/assets/sass/abstract/_mixins.scss";
	@import "@/assets/sass/abstract/_variables.scss";

	.VueCarousel-pagination {
		position: absolute !important;
		bottom: 30px;
		left: calc(50% + 70px);
		width: auto !important;

		@media (max-width: 1024px) {
			left: auto;
			width: 100% !important;
		}
	}

	.VueCarousel-dot[data-v-438fd353] {
		@include margin("all", 10);
		border: 1px solid $white !important;
		padding: 0 !important;

		&:focus {
			outline: none !important;
		}
		&.VueCarousel-dot.VueCarousel-dot--active {
			border: none;
			box-shadow: 0 0 0 1px $white;
		}
	}

	.box-carousel {
		display: flex;
		flex-wrap: wrap;
		height: 100%;
		cursor: grab;

		.box-image-carousel {
			display: flex;
			align-items: center;
			height: 600px;
			max-width: 100%;

			@media (max-width: 1024px) {
				height: 43.5vh;
				overflow: hidden;
			}

			img {
				height: 100%;

				&.mobile {
					display: none;
				}

				@media (max-width: 1024px) {
					display: none;

					&.mobile {
						display: block;
						height: auto;
					}
				}
			}
		}

		.box-text-carousel {
			@include padding("sides", 70);
			display: flex;
			flex-direction: column;
			justify-content: center;

			@media (max-width: 1024px) {
				@include padding("sides", 20);
				@include padding("top", 40);
				@include padding("bottom", 80);
			}

			.title {
				@include font(65);
				@include margin("bottom", 20);
				color: $white;
				line-height: 78px;

				@media (max-width: 1024px) {
					@include font(30);
					font-family: "hind-bold";
					line-height: 40px;
				}
			}

			.text {
				@include font(32);
				color: $white;
				font-family: "hind-light";
				line-height: 42px;

				@media (max-width: 1024px) {
					@include font(25);
					line-height: 35px;
					min-height: 210px;
				}
			}
		}
	}

	$nfk: #899ffb;
	$nfk-mobile: #b5c6fb;

	$SneaqAttaq: #ae3f3f;
	$SneaqAttaq-mobile: #981b1b;

	$TrueNorth: #6c6cec;
	$TrueNorth-mobile: #a0a0fe;

	$Startag: #ffc69e;
	$Startag-mobile: #ffe4d1;

	$Umergency: #f35e4c;
	$Umergency-mobile: #ff7767;

	$Gigers: #b3d0d6;
	$Gigers-mobile: #93b4ba;

	$Swissify: #a8c6c2;
	$Swissify-mobile: #d3dddc;

	.bg-slide {
		&-nfk {
			background-color: $nfk;

			@media (max-width: 1024px) {
				background-color: $nfk-mobile;

				.box-text-carousel {
					background-color: $nfk;
				}
			}
		}

		&-SneaqAttaq {
			background-color: $SneaqAttaq;

			@media (max-width: 1024px) {
				background-color: $SneaqAttaq-mobile;

				.box-text-carousel {
					background-color: $SneaqAttaq;
				}
			}
		}

		&-TrueNorth {
			background-color: $TrueNorth;

			@media (max-width: 1024px) {
				background-color: $TrueNorth-mobile;

				.box-text-carousel {
					background-color: $TrueNorth;
				}
			}
		}

		&-Startag {
			background-color: $Startag;

			@media (max-width: 1024px) {
				background-color: $Startag-mobile;

				.box-text-carousel {
					background-color: $Startag;
				}
			}
		}

		&-Umergency {
			background-color: $Umergency;

			@media (max-width: 1024px) {
				background-color: $Umergency;

				.box-text-carousel {
					background-color: $Umergency-mobile;
				}
			}
		}

		&-Gigers {
			background-color: $Gigers;

			@media (max-width: 1024px) {
				background-color: $Gigers-mobile;

				.box-text-carousel {
					background-color: $Gigers;
				}
			}
		}

		&-Swissify {
			background-color: $Swissify;

			@media (max-width: 1024px) {
				background-color: $Swissify-mobile;

				.box-text-carousel {
					background-color: $Swissify;
				}
			}
		}
	}
</style>
