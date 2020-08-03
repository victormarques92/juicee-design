<template>
	<div>
		<nav id="navbar" :class="{ active: showNavbar }">
			<div class="desktop flex items-center">
				<a
					@click="gotoElement(brand.href)"
					class="brand"
					aria-label="brand icon link"
				>
					<icon-base-dark> </icon-base-dark>
				</a>

				<div class="loader-container" v-if="loading">
					<div class="loader"></div>
				</div>
				<ul class="flex flex-1 list-menu">
					<li v-for="menu in listMenu" :key="menu.name">
						<a
							@click="gotoElement(menu.goToElement)"
							:aria-label="`${menu.name} link`"
							>{{ menu.name }}</a
						>
					</li>
				</ul>
				<div class="start-now">
					<form @submit.prevent="submit" class="relative">
						<input
							type="email"
							placeholder="Your E-mail"
							ref="inputStartNow"
							v-model="form.email"
							@keydown="form.errors.clear('email')"
						/>
						<button class="btn-default j-no-focus" type="submit">
							{{ buttonNav.name }}
						</button>
						<span
							class="text-red-500 text-xl block mt-4 alert-danger-desk"
							v-text="form.errors.get('email')"
							v-if="form.errors.has('email')"
						></span>
					</form>
				</div>
			</div>

			<div class="mobile">
				<div class="head">
					<a
						@click="gotoElement(brand.href)"
						class="brand"
						aria-label="brand link"
					>
						<icon-base-dark class="hidden smmd:block"></icon-base-dark>
						<icon-base
							:stroke="stroke"
							:fill="stroke"
							class="logo smmd:hidden"
						></icon-base>
					</a>

					<a
						href="#"
						class="btn-menu"
						@click="open()"
						aria-label="hamburger icon"
					>
						<span class="burger"></span>
						<span class="burger"></span>
						<span class="burger"></span>
					</a>
				</div>

				<div class="content" :class="{ showMobile: showNavMobile }">
					<div class="flex justify-end">
						<a
							href="#"
							class="close-menu"
							@click="close()"
							aria-label="close icon"
						>
							<span class="line-close"></span>
							<span class="line-close"></span>
						</a>
					</div>

					<div class="body">
						<ul class="flex flex-col text-center list-menu">
							<li v-for="menu in listMenu" :key="menu.name">
								<a
									@click="gotoElement(menu.goToElement)"
									:aria-label="`go to ${menu.name}`"
									>{{ menu.name }}</a
								>
							</li>
						</ul>

						<form @submit.prevent="submit" class="footer">
							<input
								class="text-white"
								type="email"
								placeholder="Your E-mail"
								v-model="form.email"
								@keydown="form.errors.clear('email')"
							/>
							<span
								class="text-red-500 text-xl block mt-4 alert-danger"
								v-text="form.errors.get('email')"
								v-if="form.errors.has('email')"
							></span>
							<button
								type="submit"
								class="btn-default j-no-focus"
								:to="buttonNav.href"
							>
								{{ buttonNav.name }}
							</button>

							<div class="loader-container" v-if="loading">
								<div class="loader"></div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>


<script>
	import helpers from "~/helpers";
	const { Form, EventBus } = helpers;
	import IconBaseDark from "@/components/images/IconBaseDark";
	import IconBase from "@/components/images/IconBase";
	import { setTimeout } from "timers";
	export default {
		name: "navigation",
		components: {
			"icon-base-dark": IconBaseDark,
			"icon-base": IconBase
		},
		data() {
			return {
				form: new Form({
					email: ""
				}),
				changeColor: false,
				stroke: "#fff",
				fill: "#fff",
				loading: false,
				showNavbar: false,
				showNavMobile: false,
				priceSelection: false,
				plan: false,
				brand: {
					href: "#app",
					img: "logo.svg",
					alt: "Logo Juicee"
				},
				listMenu: [
					{ name: "Showcase", goToElement: "#showcase" },
					{ name: "Process", goToElement: "#process" },
					{ name: "Pricing", goToElement: "#pricing" },
					{ name: "Contact", goToElement: "#contact" }
				],
				buttonNav: {
					name: "Start Now",
					href: ""
				}
			};
		},
		mounted() {
			EventBus.$on("go", el => {
				this.gotoElement("#" + el);
			});
			EventBus.$on("plan", plan => {
				this.plan = true;
				this.priceSelection = true;
			});
			window.addEventListener("scroll", this.onScroll);
		},
		methods: {
			validateEmail(email) {
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(String(email).toLowerCase());
			},
			submit() {
				if (this.form.email.length === 0) {
					this.form.errors.record({
						email: ["email is required"]
					});
					setTimeout(() => {
						this.form.errors.clear();
					}, 2000);
					return;
				}
				if (!this.validateEmail(this.form.email)) {
					this.form.errors.record({
						email: ["email needs to be a valid email address."]
					});
					setTimeout(() => {
						this.form.errors.clear();
					}, 2000);
					return;
				}
				this.loading = true;
				document.body.style.overflowY = "hidden";
				this.form
					.submit("navbar")
					.then(res => {
						this.loading = false;
						document.body.style.overflowY = "auto";
						EventBus.$emit("open-alert", res);
						this.showNavMobile = false;
					})
					.catch(err => {
						this.loading = false;
						document.body.style.overflowY = "auto";
					});
			},

			open() {
				this.showNavMobile = true;
				document.body.style.overflowY = "hidden";
			},

			close() {
				this.form.errors.clear();
				this.showNavMobile = false;
				this.form.email = "";
				document.body.style.overflowY = "auto";
			},

			onScroll() {
				const currentScrollPosition =
					window.pageYOffset || document.documentElement.scrollTop;

				if (currentScrollPosition === 0) {
					this.changeColor = false;
					this.priceSelection = false;
					this.showNavbar = false;
					document.body.style.overflowY = "auto";
				}
				if (currentScrollPosition >= 10) {
					this.changeColor = true;
				}
				if (currentScrollPosition >= 10 && this.priceSelection === false) {
					this.$refs.inputStartNow.focus();
					this.showNavbar = true;
				}
			},

			gotoElement(elementId) {
				if (this.$route.name !== "home") {
					this.$router.go(-1);
				}
				if (this.plan) {
					this.priceSelection = true;
				}
				this.$refs.inputStartNow.focus();
				this.showNavbar = true;
				this.showNavMobile = false;
				document.body.style.overflowY = "auto";

				let element = document.querySelector(elementId);
				element.scrollIntoView({
					behavior: "smooth",
					block: "start",
					inline: "nearest"
				});

				window.scrolledY = 100;
			}
		},
		computed: {
			windowWidth() {
				return window.innerWidth;
			}
		},
		watch: {
			changeColor: function() {
				if (this.changeColor === true) {
					this.fill = "#333439";
					this.stroke = "#333439";
				} else {
					this.fill = "#fff";
					this.stroke = "#fff";
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/sass/components/loader.scss";
	@import "@/assets/sass/abstract/_mixins.scss";
	@import "@/assets/sass/abstract/_variables.scss";
	.btn-default {
		width: 216px;
		height: 40px;
		color: white;
		font-size: 20px;
		border-radius: 100px;
		transition: all 0.2s;
		background: #b3d0d6;
		&:hover {
			background: #7d9ea5;
		}
	}
	.alert-danger {
		margin-top: -20px;
	}
	.alert-danger-desk {
		position: absolute;
		bottom: -15px;
	}

	#navbar {
		@include padding("both", 15);
		@include padding("sides", 60);
		background-color: $transparent;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 100;
		transition: 0.25s ease-in-out;

		@media (max-width: 700px) {
			@include padding("sides", 20);
		}

		@media (min-width: 1440px) {
			@include padding("sides", 115);
		}

		.mobile {
			display: none;
		}

		@media (max-width: 1200px) {
			.desktop {
				display: none;
			}

			.mobile {
				display: block;

				.head {
					display: flex;
					justify-content: space-between;
					align-items: center;

					.btn-menu {
						position: flex;
						flex-direction: column;

						.burger {
							display: block;
							height: 3px;
							width: 33px;
							background-color: $white;
							border-radius: 5px;

							&:first-of-type {
								width: 22px;
								transition: 0.25s ease-in-out;
							}

							&:nth-child(2) {
								@include margin("both", 6);
							}
						}

						&:hover {
							.burger {
								&:first-of-type {
									width: 33px;
								}
							}
						}
					}
				}

				.content {
					position: fixed;
					top: -600px;
					opacity: 0;
					left: 0;
					background: $white;
					width: 100%;
					transition: 0.75s ease-in-out;

					&::-webkit-scrollbar-track {
						background-color: $white;
					}
					&::-webkit-scrollbar {
						width: 2px;
					}
					&::-webkit-scrollbar-thumb {
						background: darken($white, 5%);
					}

					.close-menu {
						@include margin("sides", 40);
						@include margin("both", 20);
						position: relative;
						height: 22px;
						background: $transparent;
						width: 22px;

						.line-close {
							position: absolute;
							width: 100%;
							height: 2px;
							background-color: $gray-dark;
							transform: rotate(45deg);
							top: 10px;
							border-radius: 5px;

							&:first-of-type {
								transform: rotate(-45deg);
							}
						}
					}

					.body {
						.list-menu {
							a {
								@include padding("both", 15);
							}
						}

						.footer {
							@include padding("top", 55);
							@include padding("bottom", 40);
							width: 100%;
							background-repeat: no-repeat;
							background-image: url("../assets/images/footer/bgMobile.svg");
							background-size: cover;
							background-position: center;
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: center;
							height: 250px;

							input {
								@include padding("sides", 20);
								@include padding("both", 8);
								@include margin("bottom", 25);
								@include font(20);
								border: 1px solid $white;
								background-color: $transparent;
								outline: 0;

								&::placeholder {
									color: $secundary;
								}
							}
						}
					}
				}

				.showMobile {
					top: 0;
					opacity: 1;

					&::after {
						content: "";
						background-color: rgba($black, 0.7);
						height: 100vh;
						width: 100%;
						position: fixed;
					}
				}
			}
		}

		.brand {
			@include margin("right", 50);
			cursor: pointer;
			display: block;
			max-width: 120px;

			svg {
				width: 100%;
			}
		}

		.list-menu {
			a {
				@include padding("sides", 15);
				@include padding("top", 5);
				@include font(20);
				display: block;
				color: $gray-dark;
				cursor: pointer;
			}
		}

		.start-now {
			opacity: 0;
			transition: 0.25s ease-in-out;

			input {
				@include font(20);
				width: 0;
				padding: 0;
				margin: 0;
				outline: 0;
				border-bottom: 1px solid $gray-dark;
				background-color: $transparent;
				color: $black;
				transition: 0.25s ease-in-out;
				opacity: 0;

				&::placeholder {
					color: $secundary;
				}
			}
		}

		&.active {
			background-color: $white;
			box-shadow: 0 0 15px 0 rgba($black, 0.5);

			.brand {
				@media (min-width: 992px) and (max-width: 1023px) {
					@include margin("right", 15);
				}
			}

			.start-now {
				opacity: 1;

				input {
					@include padding("sides", 15);
					@include padding("right", 5);
					@include margin("right", 50);
					width: auto;
					opacity: 1;
					transition-delay: 0.25s;

					@media (min-width: 992px) and (max-width: 1023px) {
						@include margin("right", 19);
					}
				}

				.btn-default {
					@media (min-width: 992px) and (max-width: 1023px) {
						@include padding("sides", 25);
					}
				}
			}

			.mobile {
				.btn-menu {
					.burger {
						background-color: $gray-dark;
					}
				}
			}
		}
	}
</style>
