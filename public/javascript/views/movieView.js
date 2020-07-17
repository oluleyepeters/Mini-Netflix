const displayMovie = (movieBody) =>{
	allMovies =`
		<div class="mx-auto mb-5">	
			<div class="mx-auto" style="height: 300px; width: 250px;">
					<img class="img-fluid mb-1" style="height: 100%; width: 100%;" src=${movieBody.Poster} />
			</div>
				<p style="border: none; margin-bottom:1px; background: transparent; outline:none; text-align:center">Title: ${movieBody.Title}</p>
				<p style="border: none; margin-bottom:1px; background: transparent; outline:none; text-align:center">Type: ${movieBody.Type}</p>				
				<p style="border: none; margin-bottom:1px; background: transparent; outline:none; text-align:center">Release Year:${movieBody.Year}</p>
			<div class="form-group d-flex justify-content-center">
				<button class="formTwo submit btn btn-outline-primary">+ Favorites</button>
			</div>
		</div	
		`
	return allMovies;
}	