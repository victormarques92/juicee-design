<template>
	<div class="section-tools">
		<h2 class="title text-center">
			Collaborative tools to ensure clear
			<br class="hidden md:block" />communication and 100% satisfaction
		</h2>

		<div class="tools animated">
			<div class="flex">
				<div class="box-tool">
					<g-image
						:src="require(`~/assets/images/tools/slack.png`)"
						alt="Slack"
					/>
				</div>

				<div class="box-tool">
					<g-image
						:src="require(`~/assets/images/tools/sketch.png`)"
						alt="Sketch"
					/>
				</div>

				<div class="box-tool">
					<g-image
						:src="require(`~/assets/images/tools/invision.png`)"
						alt="invision"
					/>
				</div>

				<div class="box-tool">
					<g-image
						:src="require(`~/assets/images/tools/figma.png`)"
						alt="Figma"
					/>
				</div>
			</div>

			<div class="flex">
				<div class="box-tool">
					<g-image
						:src="require(`~/assets/images/tools/zepling.png`)"
						alt="Zeplin"
					/>
				</div>

				<div class="box-tool">
					<g-image
						:src="require(`~/assets/images/tools/gdrive.png`)"
						alt="Google Drive"
					/>
				</div>

				<div class="box-tool">
					<g-image
						:src="require(`~/assets/images/tools/miro.png`)"
						alt="Miro"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Tools"
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/sass/abstract/_mixins.scss";
	@import "@/assets/sass/abstract/_variables.scss";

	.section-tools {
		@media (min-width: 1024px) {
			padding-bottom: 60px;
			padding-top: 60px;
		}
	}
	.title {
		@include font(50);
		@include padding("top", 120);
		@include margin("bottom", 120);
		color: $gray;
		line-height: 60px;
		text-align: center;
		font-weight: 300;

		@media (max-width: 992px) {
			@include font(25);
			@include padding("top", 0);
			@include margin("bottom", 45);
			line-height: 35px;
		}
		@media (min-width: 1024px) and (max-width: 1440px) {
			font-size: 40px;
			line-height: 43px;
			margin-bottom: 55px;
			padding-top: 55px;
		}
	}

	.tools {
		overflow-x: hidden;
		@include padding("sides", 70);
		@include margin("bottom", 120);

		@media (max-width: 992px) {
			@include padding("sides", 0);
		}

		@media (min-width: 1024px) and (max-width: 1440px) {
			@include margin("bottom", 55);
		}
		.flex {
			&:first-of-type {
				@include margin("bottom", 120);

				@media (max-width: 992px) {
					@include margin("bottom", 25);
				}
			}

			.box-tool {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-basis: 0;
				flex-grow: 1;
				max-width: 100%;

				@media (max-width: 992px) {
					@include padding("sides", 20);
				}
			}
		}
	}
</style>
