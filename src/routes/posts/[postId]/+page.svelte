<script lang="ts">
	import type { LayoutData } from './$types';
	import Header from '../../../lib/Header.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	export let data: LayoutData;
	$: post = data.post;
	$: source = post?.content;
</script>

<Header />

<div class="post">
	<div class="post-date">{post?.date.toLocaleDateString()}</div>
	<h1 class="title">{post?.title}</h1>
	<div class="content">
		<SvelteMarkdown {source} />
	</div>
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
		margin: 50px 30px;
	}

	.title {
		text-align: center;
		margin: 0 50px;
	}

	.post-date {
		text-align: left;
		margin: 5px 50px;
		font-size: medium;
	}

	.content {
		bottom: 10px;
		font-size: medium;
		margin: 50px;
	}
</style>
