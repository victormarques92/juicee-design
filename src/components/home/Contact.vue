<style lang="scss">
	@import "../../assets/sass/components/loader.scss";
</style>
<style lang="scss" scoped>
	.contact-container {
		@media (min-width: 1024px) and (max-width: 1440px) {
			padding-top: 55px;
		}
	}
	.title-container {
		width: 335px;
		@media screen and (min-width: 768px) {
			width: 451px;
		}
		@media screen and (min-width: 1024px) {
			width: 100%;
		}
	}

	.title {
		line-height: 80px;
		@media (min-width: 1024px) and (max-width: 1440px) {
			font-size: 30px;
		}
	}

	.description {
		line-height: 26px;
		@media screen and (min-width: 768px) {
			line-height: 42px;
		}
		@media (min-width: 1024px) and (max-width: 1440px) {
			font-size: 25px;
			line-height: 38px;
		}
	}

	input {
		height: 47px;
		width: 335px;
		@media screen and (min-width: 768px) {
			height: 47px;
			width: 451px;
		}
	}

	textarea {
		height: 151px;
		width: 335px;
		@media screen and (min-width: 768px) {
			height: 140px;
			width: 451px;
		}
	}

	::placeholder {
		color: #7d9ea5;
		opacity: 1; /* Firefox */
	}
	:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: #7d9ea5;
	}
	::-ms-input-placeholder {
		/* Microsoft Edge */
		color: #7d9ea5;
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

		@media screen and (min-width: 1024px) {
			height: 72px;
			width: 303px;
			border-radius: 40.5px;
			font-size: 25px;
		}
	}
</style>

<template>
	<div
		class="mx-auto xl:w-desktop text-secondary j-font-hind-light flex flex-col items-center lg:items-start lg:flex-row lg:justify-between px-8 lg:px-40 xxl:px-0 lg:pt-40 contact-container"
	>
		<div class="mb-8 lg:mb-40 lg:mb-0 title-container">
			<h2
				class="title text-5xl lg:text-8xl lg:text-9xl j-font-hind-bold mb-3"
				v-text="title"
			></h2>
			<p
				class="description lg:text-left text-35xl lg:text-4xl lg:text-52xl lg:pr-24"
				v-html="body"
			></p>
		</div>
		<div class="j-font-hind-bold text-secondary">
			<form
				ref="contactForm"
				@submit.prevent="submitContact"
				class="j-font-hind-light"
				@keydown="form.errors.clear($event.target.name)"
			>
				<div class="mb-12">
					<input
						type="text"
						placeholder="Your Name *"
						name="name"
						class="pl-8
					py-6 text-35xl border border-secondary j-no-focus text-black"
						v-model="form.name"
						@keydown="feedback.name = ''"
					/>
					<span
						class="text-red-500 text-xl block mt-4"
						v-text="form.errors.get('name')"
						v-if="form.errors.has('name')"
					></span>
					<span
						class="text-red-500 text-xl block mt-4"
						v-text="feedback.name"
						v-if="feedback.name.length > 0"
					></span>
				</div>
				<div class="mb-12">
					<input
						type="email"
						placeholder="Your E-mail *"
						name="email"
						class="pl-8 py-6 text-35xl border border-secondary j-no-focus text-black"
						v-model="form.email"
						@keydown="feedback.email = ''"
					/>
					<div class="flex justify-between">
						<span
							class="text-red-500 text-xl block mt-4"
							v-text="form.errors.get('email')"
							v-if="form.errors.has('email')"
						></span>
						<span
							class="text-red-500 text-xl block mt-4"
							v-text="feedback.email"
							v-if="feedback.email.length > 0"
						></span>
					</div>
				</div>
				<div>
					<textarea
						placeholder="Tell us something *"
						name="message"
						class="pl-8 py-6 text-35xl border border-secondary j-no-focus text-black"
						rows="10"
						v-model="form.message"
						@keydown="feedback.email = ''"
					></textarea>
					<span
						class="text-red-500 text-xl block mt-4"
						v-text="form.errors.get('message')"
						v-if="form.errors.has('message')"
					></span>
					<span
						class="text-red-500 text-xl block mt-4"
						v-text="feedback.message"
						v-if="feedback.message.length > 0"
					></span>
				</div>

				<a
					@click="submitContact"
					class="button text-center j-font-hind-light rounded-full mt-12 block mx-auto lg:ml-auto lg:mr-0 j-transition border hover:border-primary"
					aria-label="submit contact form link"
				>
					Submit
				</a>
			</form>
		</div>
		<div class="loader-container" v-if="loading">
			<div class="loader"></div>
		</div>
	</div>
</template>

<script>
	import helpers from "~/helpers";
	const { pricingPhotos, EventBus, Form } = helpers;

	export default {
		name: "Contact",

		data() {
			return {
				title: "Talk to us",
				body: `If you have questions, doubts, or just wanna say hi don't hesitate in filling in the form. We promise we will be fast.`,
				form: new Form({
					name: "",
					email: "",
					message: "",
					plan: ""
				}),
				loading: false,
				disable: false,
				feedback: {
					name: "",
					email: "",
					message: ""
				}
			};
		},

		created() {
			EventBus.$on("plan", plan => {
				this.form.plan = plan;
			});
		},

		methods: {
			submitContact() {
				if (
					this.form.email.length === 0 &&
					this.form.name.length === 0 &&
					this.form.message.length === 0
				) {
					this.form.errors.record({
						email: ["Email is required."],
						name: ["Name is required."],
						message: ["Message is required."]
					});
					this.validate = true;
					setTimeout(() => {
						this.form.errors.clear();
						this.validate = false;
					}, 2000);
					return;
				}
				if (this.form.email.length === 0) {
					this.feedback.email = "Email is required.";
				}

				if (this.form.name.length === 0) {
					this.feedback.name = "Name is required.";
				}

				if (this.form.message.length === 0) {
					this.feedback.message = "Message is required.";
				}

				if (!this.validateEmail(this.form.email)) {
					this.form.errors.record({
						email: ["email needs to be a valid email address."]
					});
					this.validate = true;
					setTimeout(() => {
						this.form.errors.clear();
						this.validate = false;
					}, 2000);
					return;
				}
				this.loading = true;
				document.body.style.overflowY = "hidden";
				this.form
					.submit("contact", this.form.plan)
					.then(response => {
						this.loading = false;
						document.body.style.overflowY = "auto";
						EventBus.$emit("open-alert", response);
					})
					.catch(error => {
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
