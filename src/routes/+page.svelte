<h1>Blog</h1>
<a href="about">About Page</a>

<div class="tile-grid">
	<div class="tile">A</div>
	<div class="tile">B</div>
	<div class="tile">C</div>
	<div class="tile">D</div>
	<div class="tile">E</div>
	<div class="tile">F</div>
</div>

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

