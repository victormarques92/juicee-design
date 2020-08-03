
<style lang="scss" scoped>
	.j-header-button {
		height: 81px;
		width: 345px;
		border-radius: 40.5px;
		background-color: #eb6350;
	}

	.delay-2 {
		animation-delay: 0.2s;
	}

	.phones {
		@media screen and(min-width: 1024px) {
			// top: 125px;j
			// right: 130px;
			width: 505px;
			height: 515px;
		}
		top: 71px;
		right: 63px;
		width: 255px;
		height: 257px;
	}

	.pb-180 {
		padding-bottom: 180px;
	}

	.index-lower {
		z-index: -1;
	}

	.header {
		margin-top: 361px;

		@media screen and(min-width: 1024px) {
			margin-top: 0;
		}
	}
	#pricing {
		overflow-x: hidden;
		overflow-y: hidden;
		margin-top: -133px;
		@media screen and (min-width: 1024px) {
			margin-top: 0;
			// overflow-x: initial;
			overflow-x: initial;
			overflow-y: initial;
		}
		@media (min-width: 1024px) {
			padding-top: 340px !important;
			margin-top: -340px !important;
		}

		@media (max-width: 1023px) {
			padding-top: 68px !important;
			margin-top: -203px !important;
		}
	}
	#showcase {
		margin-top: 120px;
		@media (min-width: 1024px) and (max-width: 1440px) {
			margin-top: 0px;
		}
		padding-top: 71px !important;
		margin-top: -71px !important;
	}
	#process {
		padding-top: 70px !important;
		margin-top: -70px !important;
	}
	#contact {
		padding-top: 70px !important;
		margin-top: -70px !important;
	}
</style>

<template>
	<Layout>
		<!-- HERO SECTION -->
		<hero></hero>

		<!-- CAROUSEL SECTION-->
		<section id="showcase">
			<ClientOnly>
				<carousel></carousel>
			</ClientOnly>
		</section>

		<!-- WORK FLOW SECTION-->
		<section id="process">
			<work-flow></work-flow>
		</section>

		<!-- TOOLS SECTION-->
		<section>
			<tools></tools>
		</section>

		<!-- CALL TO ACTION SECTION-->
		<call-to-action class="mxl:mt-64"></call-to-action>

		<!-- PRICING SECTION-->
		<section id="pricing">
			<pricing></pricing>
			<div class="price-box__footer lg:hidden">
				By the end of the project, all files (Sketch, AI, PSD) and the cloud
				accounts belong to you!
			</div>
		</section>

		<!-- BENEFITS  SECTION-->
		<section class="pt-24">
			<benefits></benefits>
		</section>

		<!-- BRANDS SECTION-->
		<section class="mxl:mt-16 bg-gray-150">
			<brands></brands>
		</section>

		<!-- CONTACT  SECTION-->
		<section class="mb-12" id="contact">
			<contact></contact>
		</section>
	</Layout>
</template>

<script>
	export default {
		// metaInfo: {
		// 	title: "Juicee Design"
		// },
		name: "Home"
	};
</script>
