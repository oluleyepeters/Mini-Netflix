const favoritesIterator = (favorites) => {
	let nextIndex = 1;
	return{
		next: function(){
			return nextIndex < favorites.length ?
			{value : favorites[nextIndex++], done:false} :
			{done : true}
		}
	}
}