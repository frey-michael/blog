<script lang="ts">
	import { derived, readable } from 'svelte/store';
	import type { PageData } from './$types';

	export let data: PageData;
	let searchval = '';
	let filtered = readable([searchval, data.posts], ([$term, $items]) =>
		$items.filter((x: string) => x.includes($term))
	);
</script>

<h1>Blog</h1>
<a href="about">About Page</a>

<label for="searchInput">Search</label>
<input bind:value={searchval} type="text" id="searchInput" />
<a href="https://www.github.com/Kesseline"
	><img src="github_logo.png" alt="Github Logo" class="links" /></a
>

<div class="tile-grid">
	{#each filtered as item}
		<div class="tile">
			{item}
			<div class="summary">
				Curabitur velit leo, facilisis sit amet venenatis ut, convallis a nisl. Pellentesque
				habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque
				fringilla vel arcu vitae faucibus. Maecenas ut fermentum dui.
			</div>
		</div>
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
	}

	.summary {
		margin-top: 50px;
		margin-bottom: 15px;
		font-size: medium;
	}

	.links {
		max-height: 50px;
		position: fixed;
		right: 100px;
		top: 20px;
	}
</style>
