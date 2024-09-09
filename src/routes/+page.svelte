<script lang="ts">
	import type { LayoutData } from './$types';
	import Header from '$lib/Header.svelte';

	export let data: LayoutData;
</script>

<Header />

<div class="tile-grid">
	{#each data.posts as item, i}
		<a class="tile" href="posts/{i}">
			{item.title}
			<div class="summary">
				{item.summary}
			</div>
		</a>
	{/each}
</div>

<style>
	:global(body) {
		background-color: #b39546;
		font-family: 'Lucida Console', 'Courier New', monospace;
	}

	.tile-grid {
		display: grid;
		grid-gap: 25px;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	}

	.tile {
		color: black;
		font-size: larger;
		border-radius: 25px;
		text-align: center;
		padding-top: 20px;
		margin-top: 50px;
		background-color: #8a5829;
		border: 2px solid black;
		min-height: 200px;
		text-decoration: none;
	}

	.summary {
		margin-top: 50px;
		margin-bottom: 15px;
		font-size: medium;
	}
</style>
