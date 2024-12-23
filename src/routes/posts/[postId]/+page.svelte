<script lang="ts">
	import type { LayoutData } from './$types';
	import Header from '../../../lib/Header.svelte';

	export let data: LayoutData;
	$: post = data.post;
</script>

<Header />

<div class="post">
	<div class="post-date">{new Date(post?.date).toLocaleDateString()}</div>
	<h1 class="title">{post?.title}</h1>
	<div class="content">{@html post?.content.html}</div>
</div>

<style>
	.post {
		color: black;
		border-radius: 25px;
		padding-top: 20px;
		background-color: #f5f4f0;
		border: 2px solid black;
		height: fit-content;
		text-decoration: none;
		margin: 0 5% 3%;
	}

	.title {
		text-align: center;
		margin: 0 max(20px, 5%);
		hyphens: auto;
	}

	.post-date {
		text-align: left;
		margin: 5px max(20px, 5%);
		font-size: medium;
	}

	.content {
		bottom: 10px;
		font-size: medium;
		hyphens: auto;
		margin: min(max(20px, 3%), 40px);
	}
</style>
