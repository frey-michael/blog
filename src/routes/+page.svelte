<script lang="ts">
	import type { LayoutData } from './$types';
	import Header from '$lib/Header.svelte';
	import PostGrid from '$lib/PostGrid.svelte';

	interface Props {
		data: LayoutData;
	}

	let { data }: Props = $props();
</script>

<Header />
<PostGrid posts={data.posts} />
