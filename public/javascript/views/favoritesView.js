const emptyFavoriteContainer = () => {
	let innerhtml;
		innerhtml = `<div>You have no Movie in your list</div>` 
	return innerhtml
}

const oneFavoriteContainer = (favorites) => {
	let innerhtml = '';
		innerhtml = `
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-md-6 col-sm-6 mb-2 justify-content-center">
						<div class="mx-auto" style="height: 300px; width: 250px;">
							<img class="img-fluid mb-1" style="height: 100%; width: 100%;" src=${favorites.Poster} />
						</div>
						<h4 class="mx-auto text-center">Title: ${favorites.Title}</h4>
						<h4 class="mx-auto text-center">Release Year: ${favorites.Year}</h4>
						<h4 class="mx-auto text-center">Type:${favorites.Type}</h4>
						<a class="mx-auto text-center card-details details" href="#" data-goto=${favorites.imdbID}>View Details</a>
					</div>
				</div>
			</div>
`
	return innerhtml
}


const favoritesContainer = (favorites) => {
	let innerhtml
		favorites.forEach(function(favorite){
			innerhtml += `
				<div class="container">
					<div class="row">
						<div class="col-lg-3 col-md-6 col-sm-6 mb-2 justify-content-center">
							<div class="mx-auto" style="height: 300px; width: 250px;">
								<img class="img-fluid mb-1" style="height: 100%; width: 100%;" src=${favorite.Poster} />
							</div>
							<h5 class="mx-auto text-center">Title: ${favorite.Title}</h5>					
							<h5 class="mx-auto text-center">Release Year: ${favorite.Year}</h5>
							<h5 class="mx-auto text-center">Type:${favorite.Type}</h5>
						</div>
					</div>
				</div>`
		})
	return innerhtml
}