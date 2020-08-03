<style lang="scss" scoped>
	.divider {
		width: 1px;
		background-color: #fbf6ef;
		position: absolute;
	}

	.extra-height {
		height: 200%;
	}
</style>

<template>
	<div
		class="divider"
		:class="{
			'top-0': top,
			'left-0': left,
			'right-0': right,
			'bottom-0': bottom,
			'extra-height': higher,
			'h-full': full
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
			higher: { type: Boolean },
			full: { default: true, type: Boolean }
		}
	};
</script>
