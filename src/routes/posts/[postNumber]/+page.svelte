<script lang="ts">
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';
	import { type Post } from '$lib/post';

	export let data: LayoutData;
	$: post = data.post;
	let searchval = '';
</script>

<h1>Blog {$page.params.postNumber}</h1>
<a href="about">About Page</a>

<label for="searchInput">Search</label>
<input bind:value={searchval} type="text" id="searchInput" />
<a href="https://www.github.com/Kesseline"
	><img src="github_logo.png" alt="Github Logo" class="links" /></a
>

<div class="tile-grid">
	<div class="tile">
		{post?.content}
		<div class="summary"></div>
	</div>
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
