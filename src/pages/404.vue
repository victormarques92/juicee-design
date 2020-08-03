<style lang="scss" scoped>
	.not-found {
		height: 100vh;
		.container {
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
<template>
	<Layout>
		<div class="not-found">
			<div class="container">
				<h1 class="text-primary text-9xl">404 PAGE NOT FOUND!</h1>
			</div>
		</div>
	</Layout>
</template>

<script>
	export default {
		name: "404"
	};
</script>