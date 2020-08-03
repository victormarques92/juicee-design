<template>
	<div class="workflow">
		<h2 class="title-section">The three step process</h2>

		<div
			class="flex"
			v-for="works in workflow"
			:key="works.title"
			:class="'box-' + works.nameToAnimation"
		>
			<div class="w-full xl:w-1/2 animated" :class="works.nameToAnimation">
				<h3 class="title-box">{{ works.title }}</h3>
				<p class="text-box font-hind-light lg:w-3/4">{{ works.text }}</p>

				<a
					v-if="works.button"
					:href="works.href"
					class="btn-default larger"
					@click.prevent="gotoElement('contact')"
					aria-label="go to contact juicee section"
					>{{ works.button }}</a
				>
			</div>

			<div class="w-full lg:w1/2 img-container">
				<g-image
					blur="40"
					:src="require(`~/assets/images/workflow/${works.image}`)"
					:alt="works.altImage"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import helpers from "~/helpers";
	const { EventBus } = helpers;
	export default {
		name: "WorkFlow",

		data() {
			return {
				workflow: [
					{
						title: "Rapid Prototyping & Wireframing",
						text:
							"We, virtually, seat together to understand what are your app goals. We use the best collaborative tools to validate that we are on the same page when it comes to the User Experience.",
						image: "step1.png",
						altImage: "Work flow 1",
						nameToAnimation: "rw"
					},
					{
						title: "High-Fidelity Design",
						text:
							"After we've validated the UX, it's time to starting coloring and styling the prototype. A daily update delivered at an Invision Link guarantees that you keep track of the design developments and we are aligned when it comes to style.",
						image: "step2.png",
						altImage: "Work flow 2",
						nameToAnimation: "hfd"
					},
					{
						title: "Iterate & Delivery",
						text:
							"The last days are spent on doing the final iterations that result from your great feedback. We deliver the design in a shareable link that you manage plus all the assets.",
						image: "step3mini.png",
						altImage: "Work flow 3",
						button: "Know More Details",
						href: "#",
						nameToAnimation: "del"
					}
				]
			};
		},

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
	.workflow {
		overflow-x: hidden !important;
		@include margin("top", 120);

		@media (max-width: 992px) {
			@include margin("top", 50);
			text-align: center;
		}
		@media (min-width: 1024px) and (max-width: 1440px) {
			@include margin("top", 55);
		}

		.flex {
			flex-wrap: wrap;

			.w-full {
				flex-basis: 0;
				flex-grow: 1;
				max-width: 100%;

				&:first-of-type {
					@include padding("left", 115);

					// ? BREAKPOINT FOR LAPTOPS
					@media (min-width: 1024px) and (max-width: 1439px) {
						@include padding("left", 60);
					}
				}

				&:last-of-type {
					display: flex;
					justify-content: flex-end;
				}

				@media (max-width: 992px) {
					flex: 0 0 100%;
					max-width: 100%;
				}

				img {
					// max-width: 90%;
					@media (max-width: 767px) {
						width: 353px;
						height: 475px;
					}
				}
				@media (min-width: 768px) {
					img {
						height: 832px;
					}
				}

				// the images have two different sizes from 1024 to 1280 and from 1280 to 1440
				// the images behave different from the rest of the elements because
				// ? BREAKPOINT FOR LAPTOPS
				@media (min-width: 1024px) and (max-width: 1280px) {
					img {
						height: 540px;
					}
				}

				@media (min-width: 1280px) and (max-width: 1440px) {
					img {
						height: 700px;
					}
				}
			}

			&:nth-of-type(1),
			&:nth-of-type(3) {
				@media (max-width: 992px) {
					.w-full {
						&:first-of-type {
							@include padding("all", 0);
							order: 1;

							.text-box {
								@include padding("sides", 20);
							}
						}

						.title-box {
							@include padding("top", 20);
						}
					}
				}
			}

			&:nth-of-type(2) {
				@include margin("top", -200);

				// ? BREAKPOINTS FOR LAPTOPS
				@media (min-width: 1024px) and (max-width: 1279px) {
					margin-top: -122 !important;
				}

				@media (min-width: 1280px) and (max-width: 1440px) {
					@include margin("top", -234);
				}

				.w-full {
					&:first-of-type {
						@include padding("top", 200);
						@include padding("left", 50);
						@include padding("right", 115);
						order: 1;

						@media (max-width: 992px) {
							@include padding("top", 0);
							@include padding("sides", 20);
						}
					}

					// ? BREAKPOINTS FOR LAPTOPS
					@media (min-width: 1024px) and (max-width: 1440px) {
						padding-top: 40px !important;
					}

					&:last-of-type {
						justify-content: flex-start;
					}
				}

				@media (max-width: 992px) {
					@include margin("top", 0);
				}

				@media (min-width: 992px) and (max-width: 1023px) {
					@include margin("top", 0);
				}
			}

			&:nth-of-type(3) {
				// ? BREAKPOINTS FOR LAPTOPS
				@media (min-width: 1024px) and (max-width: 1440px) {
					margin-top: -154px !important;
				}

				.w-full {
					&:first-of-type {
						@include padding("top", 150);

						@media (max-width: 992px) {
							@include padding("top", 30);
						}
					}
				}

				.btn-default {
					@include margin("top", 70);
					display: inline-block;

					@media (max-width: 992px) {
						@include margin("bottom", 50);
					}
				}
			}
		}

		.title-section {
			@include font(50);
			@include margin("bottom", 120);
			color: $gray;
			line-height: 60px;
			text-align: center;

			@media (max-width: 992px) {
				@include font(25);
				@include margin("bottom", 30);
				line-height: 35px;
			}

			//? BREAKPOINT FOR LAPTOPS
			@media (min-width: 1024px) and (max-width: 1440px) {
				font-size: 40px;
				@include margin("bottom", 50);
			}
		}

		.title-box {
			@include font(65);
			@include padding("top", 80);
			@include margin("bottom", 40);
			color: $gray-dark;
			font-weight: 700;
			line-height: 78px;

			@media (max-width: 992px) {
				@include font(30);
				@include margin("bottom", 15);
				line-height: 40px;
			}

			//? BREAKPOINT FOR LAPTOPS
			@media (min-width: 1024px) and (max-width: 1280px) {
				@include padding("top", 80);
			}
			@media (min-width: 1280px) and (max-width: 1440px) {
				@include padding("top", 182);
			}

			@media (min-width: 1024px) and (max-width: 1440px) {
				@include font(30);
				line-height: 50px;
				@include margin("bottom", 10);
			}
		}

		.text-box {
			@include font(32);
			@include padding("right", 50);
			@media (max-width: 768px) {
				padding-right: 0;
			}
			color: $gray-light;
			line-height: 42px;

			@media (max-width: 992px) {
				@include font(18);
				@include margin("bottom", 35);
				line-height: 28px;
			}

			//? BREAKPOINT FOR LAPTOPS
			@media (min-width: 1024px) and (max-width: 1440px) {
				@include font(25);
				line-height: 30px;
				@include margin("bottom", 0);
			}
		}
	}
	.btn-default.larger {
		@media (max-width: 768px) {
			font-size: 20px !important;
			line-height: 64px;
			padding: 0;
			width: 217.92px !important;
			height: 60px !important;
		}
	}
</style>
