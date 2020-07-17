const emptyFavoriteContainer = () => {
	let innerhtml;
		innerhtml = `<div>You have no Movie in your list</div>` 
	return innerhtml
}

const oneFavoriteContainer = (favorites) => {
	let innerhtml = '';
		innerhtml = `
		<div class="mx-auto mb-5">	
			<div class="mx-auto" style="height: 300px; width: 250px;">
				<img class="img-fluid mb-1" style="height: 100%; width: 100%;" src=${favorites.Poster} />
			</div>
			<p style="border: none; margin-bottom:1px; background: transparent; outline:none; text-align:center">Title: ${favorites.Title}</p>
			<p style="border: none; margin-bottom:1px; background: transparent; outline:none; text-align:center">Type: ${favorites.Type}</p>				
			<p style="border: none; margin-bottom:1px; background: transparent; outline:none; text-align:center">Release Year:${favorites.Year}</p>
			<p style="border: none; margin-bottom:1px; background: transparent; outline:none; text-align:center"><i class='fa fa-trash removeicon' style="color:red;" data-goto=${favorites.imdbID}></i></p>			
		</div>
`
	return innerhtml
}


const favoritesContainer = (favorites) => {
	let innerhtml = ''
		favorites.forEach(function(favorite){
			innerhtml += `
		<div class="mx-auto mb-4">	
			<div class="mx-auto" style="height: 300px; width: 250px;">
				<img class="img-fluid mb-1" style="height: 100%; width: 100%;" src=${favorite.Poster} />
			</div>
			<p style="border: none; margin-bottom:1px; background: transparent; outline:none; text-align:center">Title: ${favorite.Title}</p>
			<p style="border: none; margin-bottom:1px; background: transparent; outline:none; text-align:center">Type: ${favorite.Type}</p>				
			<p style="border: none; margin-bottom:1px; background: transparent; outline:none; text-align:center">Release Year:${favorite.Year}</p>
			<p style="border: none; margin-bottom:1px; background: transparent; outline:none; text-align:center"><i class='fa fa-trash removeicon' style="color:red;" data-goto=${favorite.imdbID}></i></p>			
		</div>
		`
		})
	return innerhtml
}