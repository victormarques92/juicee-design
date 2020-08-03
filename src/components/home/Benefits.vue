<style lang="scss" scoped>
	@import "../../assets/sass/mixins.scss";
	.img {
		width: 87px;
		height: 63px;
		@media (min-width: 1024px) and (max-width: 1440px) {
			width: 35px;
			margin-bottom: 10px;
		}
	}
	.pencil,
	.boxes {
		@media (min-width: 1024px) and (max-width: 1440px) {
			width: 24px;
		}
	}

	.case,
	.chat,
	.boxes,
	.dev,
	.print,
	.pencil {
		@media (min-width: 1440px) {
			width: 87px;
			height: 63px;
		}
	}

	.benefits-title {
		@media (min-width: 1024px) and (max-width: 1440px) {
			margin-top: 0px;
			font-size: 40px;
		}
	}

	.title {
		@media (min-width: 1024px) and (max-width: 1440px) {
			font-size: 25px;
		}
	}

	.benefit-description {
		@media (min-width: 1024px) and (max-width: 1440px) {
			font-size: 17px;
		}
		@media (min-width: 1280px) and (max-width: 1440px) {
			width: 311px;
		}
	}
	.benefit-box {
		@include respond(tab-port) {
			padding-left: 100px;
			padding-right: 100px;
		}
		@media screen and(min-width:1440px) {
			padding-left: 0px;
			padding-right: 0px;
		}
		@include respond(benefit-box) {
			max-width: 1280px;
		}
		@media screen and (min-width: 1441px) {
			max-width: 1440px;
		}

		@media (min-width: 1024px) and (max-width: 1440px) {
			margin-bottom: 0px !important;
		}
	}
</style>

<template>
	<div>
		<h2
			class="text-45xl md:text-75xl text-secondary text-title font-hind-light text-center mb-12 mxl:mb-48 mt-24 benefits-title"
		>
			Don't undervalue design
		</h2>

		<div
			class="mx-auto flex justify-center flex-wrap text-center mb-0 lg:mb-40 benefit-box"
		>
			<div
				class="text-secondary j-font-hind-light mb-16 w-full md:w-1/2 lg:w-1/3 md:p-6"
				v-for="(benefit, index) in $static.benefits.edges"
				:class="{ 'mxl:mb-56': index !== 5 || index !== 4 || index !== 3 }"
				:key="benefit.node.title"
			>
				<div class="items-center text-center ">
					<g-image
						:src="photos[index]"
						class="mx-auto img"
						:class="{
							case: index === 0,
							dev: index === 1,
							print: index === 3,
							chat: index === 4,
							pencil: index === 2,
							boxes: index === 5
						}"
						:alt="alts[index]"
					/>
					<h3
						class="text-35xl mxl:text-52xl capitalize my-4 mxl:mt-24 mxl:mb-12 title"
						v-text="benefit.node.title"
					></h3>
					<p
						class="benefit-description text-25xl mxl:text-35xl text-center lg:text-left mx-auto"
						v-text="benefit.node.body"
					></p>
				</div>
			</div>
		</div>
	</div>
</template>

<static-query>
query {
  benefits: allBenefits(order: ASC) {
    edges {
      node { 
        id
        title
				body
      }
    }
  }
}
</static-query>

<script>
	import helpers from "~/helpers";
	const { benefitPhotos } = helpers;

	export default {
		name: "Benefits",

		data() {
			return {
				photos: benefitPhotos,
				alts: [
					"suitcase photo",
					"developer photo",
					"design photo",
					"print photo",
					"chat photo",
					"assets photo"
				]
			};
		}
	};
</script>
