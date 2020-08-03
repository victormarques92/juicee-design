<style lang="scss" scoped>
	@import "../../assets/sass/mixins.scss";
	@import "../../assets/sass/components/loader.scss";
	.alert-danger {
		margin-top: -56px;
	}
	.newsletter {
		background-image: url("../../assets/images/illustration_mini.svg");
		background-repeat: no-repeat;
		background-position: right top;
		background-size: 335px;
		overflow-x: hidden;
		@include respond(tab-port) {
			background-position: right top;
			background-size: 500px;
		}
		@include respond(tab-land) {
			background-position: right top;
			background-size: 797px;
			// background-size: initial;
		}
		@media (min-width: 1024px) and (max-width: 1280px) {
			background-size: 614px;
		}
	}
	.button {
		width: 217.92px;
		height: 60px;
		transition: 0.2s ease;
		font-size: 20px;
		&:focus {
			outline: none;
		}
		@include respond(tab-land) {
			height: 69px;
			width: 303px;
			border-radius: 40.5px;
			font-size: 25px;
			line-height: 40px;
		}
		@include illustration(midway) {
			width: 266px;
		}
		@media (min-width: 1024px) and (max-width: 1280px) {
			width: 213px;
			height: 54px;
			font-size: 20px;
		}
	}

	.j-title {
		line-height: 40px;
		font-size: 30px;
		padding-top: 171px;
		@include respond(tab-port) {
			padding-top: 0px;
			padding-top: 90px;
		}
		@include respond(tab-land) {
			font-size: 40px;
			line-height: 50px;
		}
		@include respond(desktop) {
			font-size: 65px;
			line-height: 75px;
		}
		.come-from-left {
			@include illustration(midway) {
				width: 409px;
			}
		}
		@media (min-width: 1024px) and (max-width: 1440px) {
			font-size: 40px;
			line-height: 45px;
		}
	}

	.no-show {
		opacity: 1;
		transform: scale(1);
	}

	.j-custom-padding-bottom {
		padding-bottom: 90px;
		@include respond(tab-land) {
			padding-bottom: 285px;
		}
		@media (min-width: 1024px) and (max-width: 1280px) {
			padding-bottom: 227px;
		}
	}

	.j-input {
		height: 47px;
		width: 313px;
		border: 1px solid white;
		line-height: 2.5;
		&::-webkit-input-placeholder {
			/* Edge */
			color: white;
		}

		&:-ms-input-placeholder {
			/* Internet Explorer 10-11 */
			color: white;
		}

		&::placeholder {
			color: white;
		}
		&:focus {
			outline: none;
		}
		@include respond(tab-land) {
			width: 451px;
		}
		@include illustration(midway) {
			width: 292px;
		}

		@include respond(desktop) {
			width: 450px;
		}
		@media (min-width: 1024px) and (max-width: 1280px) {
			width: 248px;
			margin-bottom: 3rem !important;
		}
	}
</style>

<template>
	<section
		class="pt-32 call-to-action bg-primaryNight j-custom-padding-bottom relative px-12 lg:px-40 xxl:px-0 newsletter"
	>
		<div
			class="j-grid mx-auto j-title text-center md:text-left text-5xl md:text-6xl lg:text-8xl j-font-hind-bold mt-48 md:mt-0 mb-32 text-white"
		>
			<div>
				<div>
					Book a FREE 30 minutes
				</div>
				<div>
					brainstorming session
				</div>
			</div>
			<form @submit.prevent="suscribe" class="mt-10 lg:mt-20">
				<input
					type="email"
					placeholder="Your e-mail *"
					class="block mx-auto md:mr-auto mb-10 md:ml-0 lg:mb-20 bg-transparent j-font-hind-light text-35xl pl-8 j-input"
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
					class="button text-white bg-primary hover:bg-white hover:text-primaryNight rounded-full block mx-auto inline j-font-hind"
				>
					Start Now
				</button>
			</form>
		</div>

		<div class="loader-container" v-if="loading">
			<div class="loader"></div>
		</div>
	</section>
</template>

<script>
	import helpers from "~/helpers";
	const { Form, EventBus } = helpers;
	export default {
		name: "CallToAction",

		data() {
			return {
				form: new Form({
					email: ""
				}),
				loading: false
			};
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
				document.body.style.overflowY = "hidden";
				this.form
					.submit("newsletter", null)
					.then(res => {
						this.loading = false;
						document.body.style.overflowY = "auto";
						EventBus.$emit("open-alert", res);
					})
					.catch(err => {
						this.loading = false;
						document.body.style.overflowY = "auto";
					});
			},
			validateEmail(email) {
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(String(email).toLowerCase());
			}
		}
	};
</script>
