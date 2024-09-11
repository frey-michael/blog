<script lang="ts">
	import type { LayoutData } from './$types';
	import Header from '../../../lib/Header.svelte';

	export let data: LayoutData;
	$: post = data.post;
</script>

<Header />

<h1>{post?.title}</h1>

<div>
	<div>
		{post?.content}
	</div>
</div>
