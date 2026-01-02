<script lang="ts">
	import PostTile from './PostTile.svelte';

	let { posts } = $props();
</script>

<div class="post-grid">
	{#each posts as item}
		<PostTile post={item} />
	{/each}
</div>

<style>
	.post-grid {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
	}
</style>
