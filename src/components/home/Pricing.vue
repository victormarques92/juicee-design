<style lang="scss" scoped>
	.small {
		height: 43px;
		width: 186px;
		font-size: 20px;
		line-height: 42px;
		@media (min-width: 1024px) and (max-width: 1440px) {
			margin-top: 30px;
			font-size: 17px;
			width: 156px;
		}
	}
	.box {
		box-shadow: -1px 19px 93px -18px rgba(0, 0, 0, 0.4);
		border-radius: 13px;
		margin-top: -260px;
		width: auto;
		background: white;
		position: relative;
		@media screen and (min-width: 1024px) {
			width: 1200px;
		}
		@media screen and (min-width: 1280px) {
			width: 1200px;
		}
		@media screen and (min-width: 1441px) {
			width: 1440px;
		}
		@media (min-width: 1024px) and (max-width: 1279px) {
			padding-top: 3rem;
			padding-bottom: 3rem;
			width: 824px;
		}
		@media (min-width: 1280px) and (max-width: 1439px) {
			padding-top: 2rem;
			padding-bottom: 1rem;
			width: 1059px !important;
		}
		@media (min-width: 1024px) and (max-width: 1440px) {
			padding-top: 37px;
			padding-bottom: 30px;
		}
		@media (min-width: 1440px) and (max-width: 1679px) {
			width: 1230px !important;
		}
	}

	.price-title {
		@media (min-width: 1024px) and (max-width: 1440px) {
			font-size: 25px !important;
		}
	}

	.image {
		height: 186px;
	}

	.illustration-img {
		@media (min-width: 1024px) and (max-width: 1440px) {
			width: 216px;
		}
	}

	//? BREAKPOINTS FOR LAPTOPS
	.notepad,
	.bear,
	.hat {
		@media (min-width: 1024px) and (max-width: 1440px) {
			top: 40% !important;
		}
	}

	.notepad {
		@media (min-width: 1024px) and (max-width: 1440px) {
			width: 146px;
		}
	}

	.bear {
		@media (min-width: 1024px) and (max-width: 1440px) {
			width: 83px;
		}
	}
	.hat {
		@media (min-width: 1024px) and (max-width: 1440px) {
			width: 146px;
		}
	}

	.img-container {
		@media (min-width: 1024px) and (max-width: 1440px) {
			margin-bottom: 0 !important;
		}
	}

	.list-item {
		@media (min-width: 1024px) and (max-width: 1440px) {
			padding-top: 8px;
			padding-bottom: 8px;
			font-size: 14px;
		}
	}

	.btn-container {
		@media (min-width: 1024px) and (max-width: 1440px) {
			margin-bottom: 1.5rem !important;
		}
	}

	.price {
		@media (min-width: 1024px) and (max-width: 1440px) {
			padding-top: 10px;
			line-height: 27px;
			margin-bottom: 0rem !important;
			font-size: 32px;
		}
	}
	.center-image {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		@media (min-width: 1024px) {
			width: 146px;
			height: 186px;
		}

		@media (min-width: 1440px) {
			width: 259px;
			height: 186px;
		}
	}

	.footer-text {
		color: #676768;
		font-size: 2rem;
		line-height: 32px;
	}

	.j-bottom-border {
		border-bottom: 1px solid #fbf6ef;
	}

	.j-mt-title {
		margin-top: 60px;
	}

	.center-absolute-text {
		top: -22px;
		left: -50%;
		right: -50%;
	}

	.j-justify-evenly {
		justify-content: space-evenly;
	}

	.carousel {
		outline: none;
		overflow-x: scroll;
		-webkit-overflow-scrolling: touch;

		&::-webkit-scrollbar {
			width: 0px; /* Remove scrollbar space */
			background: transparent; /* Optional: just make scrollbar invisible */
		}
		/* Optional: show position indicator in red */
		&::-webkit-scrollbar-thumb {
			background: transparent;
		}
	}
	.uppertext {
		@media (min-width: 1024px) and (max-width: 1440px) {
			font-size: 14px;
		}
	}
	.price-box {
		height: 528px;
	}
</style>


<template>
	<div class="flex lg:justify-center">
		<div
			class="mx-10 xl:mx-auto box hidden lg:flex flex-col j-justify-evenly mxl:py-32"
		>
			<div class="flex justify-around mxl:mb-20 img-containter">
				<div
					class="relative flex-1 image"
					v-for="(image, index) in pricingPhotos"
					:key="image[index]"
				>
					<vertical-divider
						:top="true"
						:left="true"
						:higher="true"
						v-if="index === 1"
					></vertical-divider>
					<g-image
						class="absolute center-image"
						:src="image"
						:class="{
							notepad: index === 0,
							bear: index === 1,
							hat: index === 2
						}"
						:alt="alts[index]"
					/>
					<vertical-divider
						:top="true"
						:right="true"
						:higher="true"
						v-if="index === 1"
					></vertical-divider>
				</div>
			</div>

			<div
				class="flex uppercase j-font-hind-light text-52xl text-center mxl:mb-20"
			>
				<h3
					class="relative flex-1 price-title"
					v-for="price in $static.prices.edges"
					:key="price.node.title"
				>
					<vertical-divider
						:top="true"
						:left="true"
						:higher="true"
						v-if="price.node.bestDeal"
					></vertical-divider>
					<span
						class="block capitalize text-primary j-font-hind-bold text-35xl absolute center-absolute-text uppertext"
						v-if="price.node.bestDeal"
					>
						best deal
					</span>
					{{ price.node.title }}
					<vertical-divider
						:top="true"
						:right="true"
						:higher="true"
						v-if="price.node.bestDeal"
					></vertical-divider>
				</h3>
			</div>

			<div class="flex text-center j-font-hind-light">
				<ul
					class="mxl:text-35xl flex-1 relative"
					v-for="(price, index) in $static.prices.edges"
					:key="price.node.title"
				>
					<vertical-divider
						:top="true"
						:left="true"
						class="divider-height"
						v-if="index === 1"
					></vertical-divider>
					<li
						class="relative py-2 mxl:py-6 list-item"
						v-for="(feature, index) in price.node.features"
						:key="feature"
					>
						{{ feature }}
						<divider
							:bottom="true"
							:wide="true"
							v-if="index !== price.node.features.length - 1"
						></divider>
					</li>
					<vertical-divider
						:top="true"
						:right="true"
						v-if="index === 1"
					></vertical-divider>
				</ul>
			</div>

			<div class="flex text-center mxl:mb-20 btn-container">
				<div
					class="flex-1 relative"
					v-for="(price, index) in $static.prices.edges"
					:key="price.node.price"
				>
					<vertical-divider
						:top="true"
						:left="true"
						v-if="index === 1"
					></vertical-divider>
					<div class="relative text-7xl">
						<vertical-divider
							:top="true"
							:left="true"
							v-if="index === 1"
						></vertical-divider>

					</div>
					<button
						@click="gotoElement('contact', price.node.title)"
						class="small inline-block capitalize j-font-hind-bold rounded-full hover:bg-primary j-transition j-no-focus border border-secondary text-secondary hover:text-white hover:bg-primary cursor-pointer"
					>
						Know More
					</button>
					<vertical-divider
						:top="true"
						:right="true"
						v-if="index === 1"
					></vertical-divider>
				</div>
			</div>
			<p class="footer-text text-center j-font-hind-light">
				By the end of the project, all files (Sketch, AI, PSD) and the cloud
				accounts belong to you!
			</p>
		</div>

		<!-- mobile pricebox -->

		<div class="lg:hidden lg:pb-20 flex carousel">
			<div
				class="flex lg:hidden items-center pb-40 lg:pb-20 relative h-auto column p-10"
				v-for="(priceMobile, index) in $static.prices.edges"
				:key="priceMobile.node.title"
			>
				<div class="price-box pb-6 bg-white">
					<div class="price-box__images relative w-full">
						<g-image
							:src="pricingPhotos[index]"
							class="absolute left-0"
							:alt="alts[index]"
						/>
					</div>
					<header class="price-box__title relative">
						<span
							v-if="priceMobile.node.bestDeal"
							class="block capitalize text-primary j-font-hind-bold absolute center-absolute-text price-box__uppertitle"
						>
							best deal
						</span>
						<h3>{{ priceMobile.node.title }}</h3>
					</header>
					<ul class="price-box__list">
						<li
							class="price-box__list-item"
							v-for="feature in priceMobile.node.features"
							:key="feature"
						>
							{{ feature }}
						</li>
					</ul>
					<a
						:aria-label="`juicee navigate to ${priceMobile.node.title}`"
						href="#"
						@click.prevent="gotoElement('contact', priceMobile.node.title)"
						class="price-box__link hover:bg-primary hover:text-white j-transition"
						>Know More</a
					>
				</div>
			</div>
		</div>
	</div>
</template>

<static-query>
query {
  prices: allPricing(order: ASC) {
    edges {
      node { 
        id
        title
				bestDeal
				features 
				price
      }
    }
  }
}
</static-query>

<script>
	import helpers from "~/helpers";
	const { pricingPhotos, EventBus } = helpers;

	export default {
		name: "Pricing",

		data() {
			return {
				pricingPhotos: pricingPhotos,
				alts: ["notepad image", "teddybear image", "magic wand image"]
			};
		},
		methods: {
			gotoElement(elementId, plan) {
				EventBus.$emit("plan", plan);
				let element = document.querySelector("#" + elementId.toLowerCase());
				element.scrollIntoView({
					behavior: "smooth",
					block: "start",
					inline: "nearest"
				});
			}
		}
	};
</script>
