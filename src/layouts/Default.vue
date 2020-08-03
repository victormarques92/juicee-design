<style lang="scss" scoped>
	@import "../assets/sass/components/_input-slider.scss";
	@import "../assets/sass/components/_nav-form-buttton.scss";
	@import "../assets/sass/components/_newsletter.scss";

	.footer-icon {
		width: 48px;
		height: 48px;
		&:hover {
			transform: scale(1.2);
		}
	}

	#footer {
		height: 216px;
		background-repeat: no-repeat;
		background-image: url("../assets/images/footer/bgMobile.svg");
		background-size: cover;
		padding-bottom: 41px;
		color: white;
		font-size: 16px;
		.footer-left {
			margin-bottom: 40px;
			@media screen and (min-width: 768px) {
				margin-bottom: 0;
			}
		}
		.footer-link {
			&:not(:last-child) {
				margin-right: 16pt;
				@media screen and (min-width: 768px) {
					margin-right: 38px;
				}
			}
		}
		@media screen and (min-width: 768px) {
			height: 306px;
			padding-left: 40px;
			padding-right: 40px;
		}

		@media screen and (min-width: 1024px) {
			height: 306px;
			padding-left: 0;
			padding-right: 0;
		}
	}

	.logo {
		width: 100px;
		height: 20px;
		@media screen and (min-width: 768px) {
			width: initial;
			height: initial;
		}
	}

	.mobile {
		z-index: 2;
		&__burger {
			div {
				width: 35px;
				height: 4px;
			}
		}
	}

	.hidden-menu {
		top: 42px;
	}
	.alert-success {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 2000;
		visibility: hidden;
		opacity: 0;
		transition: all 0.2s ease;
	}
	.show-alert {
		visibility: visible !important;
		opacity: 1;
	}
	form .button {
		cursor: pointer;
		font-size: 20px;
		line-height: 64px;
		padding: 0;
		width: 217.92px;
		height: 60px;
		background-color: #b3d0d6;
		color: white;
		&:hover,
		&:active {
			color: #b3d0d6;
			background-color: white;
		}

		// @media screen and (min-width: 1024px) {
		// 	height: 72px;
		// 	width: 298px;
		// 	border-radius: 40.5px;
		// 	font-size: 25px;
		// }
	}
	.btn-mt {
		margin-top: 38px;
	}
</style>

<template>
	<div>
		<navigation-desktop></navigation-desktop>
		<div
			class="alert-success bg-green-300 j-font-hind-light text-green-700 text-4xl py-4 text-center"
			:class="{ 'show-alert': alert }"
			v-text="alertFeedback"
		></div>
		<slot></slot>

		<!-- FOOTER -->
		<footer id="footer" class="w-full flex justify-center items-end">
			<div
				class="w-full flex flex-col justify-center items-center md:flex-row mx-auto md:justify-between px-8 lg:px-40 xxl:px-0 xl:w-desktop"
			>
				<div class="flex items-center footer-left">
					<a
						href="https://juicee.io/"
						target="_blank"
						rel="noopener"
						class="hover:text-gray-300 j-transition footer-link"
						aria-label="footer juicee website link"
					>
						<icon-base
							stroke="#fff"
							fill="#fff"
							id="Page-2"
							class="logo"
						></icon-base>
					</a>
					<a
						href="mailto:info@juicee.design"
						class="footer-link pt-6"
						target="_blank"
						rel="noopener"
						aria-label="footer juicee mailing address"
					>
						<span class="block hover:text-gray-300 j-transition footer-link"
							>info@juicee.design</span
						>
					</a>
				</div>
				<div class="flex footer-right">
					<a
						href="https://bit.ly/2LjdMgU"
						target="_blank"
						rel="noopener"
						aria-label="footer linkedin"
					>
						<g-image
							src="../assets/images/footer/linkedin1.png"
							alt="linkedin"
							class="footer-icon rounded-full p-2 j-transition"
						/>
					</a>
					<a
						href="https://www.instagram.com/juicee.io/"
						target="_blank"
						rel="noopener"
						aria-label="footer instagram"
					>
						<g-image
							src="../assets/images/footer/instagram1.png"
							alt="instagram"
							class="footer-icon rounded-full p-2 mx-10 j-transition"
						/>
					</a>

					<a
						href="https://dribbble.com/Juicee"
						target="_blank"
						rel="noopener"
						aria-label="footer dribbble"
					>
						<g-image
							src="../assets/images/footer/dribble.png"
							alt="instagram"
							class="footer-icon rounded-full p-2 j-transition"
						/>
					</a>
				</div>
			</div>
		</footer>
		<!-- ------------------------ MODAL ----------------- -->

		<div class="modal-container" :class="{ 'show-modal': showModal }">
			<div class="modal bg-primaryNight">
				<a
					href="#"
					class="close-menu"
					@click="close"
					aria-label="modal close button"
				>
					<span class="line-close"></span>
					<span class="line-close"></span>
				</a>

				<header class="j-title">
					Join our Newsletter!
				</header>

				<ul class="infos">
					<li v-for="info in infos" :key="info.text">
						<span class="text-info">{{ info.text }}</span>
					</li>
				</ul>

				<form @submit.prevent="suscribe">
					<input
						type="email"
						placeholder="Your e-mail *"
						v-model="form.email"
						ref="newsletterInput"
						@keydown="form.errors.clear('email')"
					/>
					<span
						class="text-red-500 text-xl block alert-danger"
						v-text="form.errors.get('email')"
						v-if="form.errors.has('email')"
					></span>
					<!-- <button type="submit" class="btn-default larger j-no-focus">
						Start Now
					</button> -->
					<a
						@click="suscribe"
						class="button text-center j-font-hind-light rounded-full block mx-auto j-transition border hover:border-primary"
						:class="{ 'btn-mt': form.errors.has('email') }"
					>
						Submit
					</a>
				</form>
				<div class="loader-container" v-if="loading">
					<div class="loader"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import helpers from "~/helpers";
	const { Form, EventBus } = helpers;
	import IconBase from "../components/images/IconBase";
	import inView from "in-view";

	import Navigation from "@/components/Navigation";

	export default {
		components: {
			"icon-base": IconBase,
			"navigation-desktop": Navigation
		},

		name: "DefaultLayout",

		data() {
			return {
				form: new Form({
					email: ""
				}),
				alert: false,
				alertFeedback: "",
				loading: false,
				showMenu: false,
				showModal: false,

				infos: [
					{ text: "Curated cool content" },
					{ text: "Design Resources" },
					{ text: "Special Deals" }
				]
			};
		},

		mounted() {
			EventBus.$on("open-alert", msg => {
				this.alertFeedback = msg;
				this.alert = true;
			});
			window.onbeforeunload = () => {
				window.scrollTo(0, 0);
				setTimeout(() => {
					if ("true" !== localStorage.getItem("dismissedNewsletter")) {
						this.showModal = true;
						document.body.style.overflowY = "hidden";
					}
				}, 35000);
			};
			window.onload = setTimeout(() => {
				if ("true" !== localStorage.getItem("dismissedNewsletter")) {
					this.showModal = true;
					document.body.style.overflowY = "hidden";
				}
			}, 35000);
		},
		methods: {
			suscribe() {
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
				this.form
					.submit("modal", null)
					.then(res => {
						this.alertFeedback = res;
						this.alert = true;
						this.loading = false;
						this.close();
						this.closeAlert();
					})
					.catch(error => {
						this.loading = false;
					});
			},
			gotoElement(elementId) {
				let element = document.querySelector(elementId);
				element.scrollIntoView({
					behavior: "smooth"
				});
			},

			closeAlert() {
				setTimeout(() => {
					this.alert = false;
				}, 2000);
			},

			close() {
				this.showModal = false;
				document.body.style.overflowY = "initial";
				this.form.email = "";
				localStorage.setItem("dismissedNewsletter", "true");
			},
			validateEmail(email) {
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(String(email).toLowerCase());
			}
		},
		watch: {
			alert: function(val) {
				if (val == true) {
					this.closeAlert();
				}
			}
		}
	};
</script>
