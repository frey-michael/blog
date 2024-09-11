<script lang="ts">
	export let post;
</script>

<a class="tile" href="posts/{post.id}">
	{post.title}
	<div class="summary">
		{post.summary}
	</div>
</a>

<style>
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
