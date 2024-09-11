<script lang="ts">
	import type { LayoutData } from './$types';
	import Header from '$lib/Header.svelte';
	import PostGrid from '$lib/PostGrid.svelte';

	export let data: LayoutData;
</script>

<Header />
<PostGrid posts={data.posts} />

<style>
	:global(body) {
		background-color: #b39546;
		font-family: 'Lucida Console', 'Courier New', monospace;
	}
</style>
