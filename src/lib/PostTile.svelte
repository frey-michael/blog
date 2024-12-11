<script lang="ts">
	export let post;
</script>

<a class="tile" href="posts/{post.meta.id}">
	<div class="title">
		{post.meta.title}
	</div>
	<div class="summary">
		{post.meta.summary}
	</div>
</a>

<style>
	.tile {
		color: black;
		border-radius: 25px;
		text-align: center;
		padding-top: 20px;
		background-color: #f5f4f0;
		border: 2px solid black;
		height: fit-content;
		text-decoration: none;
	}

	.title {
		font-size: larger;
		font-weight: bold;
		margin: 0 10px;
	}

	.summary {
		bottom: 10px;
		margin: 20px 10px;
		font-size: medium;
	}
</style>
