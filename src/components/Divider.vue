<style lang="scss" scoped>
	.divider {
		width: 100%;
		background-color: #fbf6ef;
		position: absolute;
		height: 1px;
	}

	.extra-width {
		width: 200%;
	}

	.half {
		width: 50%;
	}

	.wide {
		width: 80%;
	}

	.center {
		left: 50%;
		transform: translateX(-50%);
	}
</style>

<template>
	<div
		class="divider center"
		:class="{
			half: half,
			'top-0': top,
			'w-full': full,
			'left-0': left,
			'right-0': right,
			'bottom-0': bottom,
			'extra-width': wider,
			wide: wide
		}"
	></div>
</template>

<script>
	export default {
		name: "VerticalDivider",
		props: {
			top: { type: Boolean },
			right: { type: Boolean },
			bottom: { type: Boolean },
			left: { type: Boolean },
			wider: { type: Boolean },
			full: { default: true, type: Boolean },
			half: { type: Boolean },
			wide: { type: Boolean }
		}
	};
</script>
