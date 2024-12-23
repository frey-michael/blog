<script lang="ts">
	export let post;
</script>

<a class="tile" href="posts/{post.id}">
	<div class="title">
		{post.title}
	</div>
	<div class="summary">
		{post.summary}
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
		margin: 0 min(25px, 5%) min(25px, 5%);
		min-width: 200px;
		max-width: 500px;
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
