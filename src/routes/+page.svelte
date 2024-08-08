<script>
	import { filtered, term } from '../store.js';

	let val = '';

	$: term.set(val);
</script>

<h1>Blog</h1>
<a href="about">About Page</a>

<label for="searchInput">Search</label>
<input bind:value={val} type="text" id="searchInput" />

<div class="tile-grid">
	{#each $filtered as item}
		<div class="tile">{item}</div>
	{/each}
</div>

<a href="https://www.github.com/Kesseline"
	><img src="src/assets/github_logo.png" alt="Github Logo" /></a
>

<style>
	.tile-grid {
		display: grid;
		grid-gap: 15px;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	}

	.tile {
		border: 1px solid black;
		min-height: 50px;
	}
</style>
