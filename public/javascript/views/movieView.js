const displayMovie = (movieBody) =>{
	allMovies =`
    <div class="container d-flex
mx-auto mt-3">
		<form class="mx-auto">
			<div class="form-group mx-auto">	
				<input style="border: none; background: transparent;" class="form-control mx-auto" readonly type="text" id="name" name="name" value="Title: ${movieBody.Title}">
			</div>	
			<div class="form-group mx-auto">	
				<input style="border: none; background: transparent;" class="form-control mx-auto" readonly type="text" id="title" name="title" value="Type: ${movieBody.Type}">
			</div>
			<div class="mx-auto" style="height: 300px; width: 250px;">
				<img class="img-fluid mb-1" style="height: 100%; width: 100%;" src=${movieBody.Poster} />
			</div>
			<div class="form-group mx-auto">	
				<input style="border: none; background: transparent;" class="mx-auto form-control" readonly type="text" id="id" name="id" value="Release Year:${movieBody.Year}">
			</div>	
			<div class="form-group d-flex justify-content-end">
				<button class="formTwo submit btn btn-outline-primary">+ Favorites</button>
			</div>
		</form>
		`
	return allMovies;
}