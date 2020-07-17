const storeItemInLocalStorage = function(movies){
  let favoritesMovies;
  // Check if any items in sessionStorage
  if(localStorage.getItem('favoritesMovies') === null){
    favoritesMovies = [];
    // Push new item
    favoritesMovies.push(...movies);
    // Set sessionStorage
    localStorage.setItem('favoritesMovies', JSON.stringify(favoritesMovies));
  } else {
    favoritesMovies = [];
    // Get what is already in ls
    localStorage.removeItem('favoritesMovies');
    // Push new item
    favoritesMovies.push(...movies);
    // Reset ls
    localStorage.setItem('favoritesMovies', JSON.stringify(favoritesMovies));
    }
 }

const getItemsFromStorage = () => {
  let favoritesMovies;
    if(localStorage.getItem('favoritesMovies') === null){
      favoritesMovies = [];
    } else {
      favoritesMovies = JSON.parse(localStorage.getItem('favoritesMovies'));
    }
  return favoritesMovies;
}

const updateItemStorage = updatedItem => {
    let favoritesMovies = JSON.parse(localStorage.getItem('favoritesMovies'));
    favoritesMovies.forEach(function(movie, index){
        if(updatedItem.imdbID === movie.imdbID){
            items.splice(movie, 1, updatedItem);
        }
    });
      localStorage.setItem('favoritesMovies', JSON.stringify(favoritesMovies));
}

const deleteItemFromStorage = imdbID => {
    let movieList = JSON.parse(Storage.getItem('movieList'));
    movieList.forEach(function(movie, index){
        if(imdbID === movie.imdbID){
          movieList.splice(index, 1);
        }
      });
      sessionStorage.setItem('movieList', JSON.stringify(movieList));
    }

const clearItemsFromStorage = () => {
      sessionStorage.removeItem('movieList');
    }
