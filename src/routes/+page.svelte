<script lang="ts">
	import type { LayoutData } from './$types';
	import Header from '$lib/Header.svelte';
	import PostGrid from '$lib/PostGrid.svelte';

	export let data: LayoutData;
</script>

<Header />
<PostGrid posts={data.posts} />
