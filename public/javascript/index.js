let state = {};
state.favoriteMovies = getItemsFromStorage();
// state.searching = false;

// if(state.searching === true){
// 	document.querySelector('.loader-box').style.display = 'block';					
// }else{
// 	document.querySelector('.loader-box').style.display = 'none'					
// }

const displayMovieError = () => {
	let error = document.createElement('p');
	error.textContent = 'An Error Occurred, Check Your Internet Connection and Try again'
	error.classList.add('errorMessage');
	body = document.querySelector('body')
	body.appendChild(error);
	setTimeout(() => {
		body.removeChild(document.querySelector('.errorMessage'));
	},2000)
}

const displayMovieSuccess = () => {
	let error = document.createElement('p');
	error.textContent = 'Successfully Added to Favorites'
	error.classList.add('successMessage');
	body = document.querySelector('body')
	body.appendChild(error);
	setTimeout(() => {
		body.removeChild(document.querySelector('.successMessage'));
	},1000)
}

const existingMovie = () => {
	let error = document.createElement('p');
	error.textContent = 'Already in Favorite Movies'
	error.classList.add('existMessage');
	body = document.querySelector('body')
	body.appendChild(error);
	setTimeout(() => {
		body.removeChild(document.querySelector('.existMessage'));
	},2000)
}

const getAllMovies = (e) =>{
	const query = getInput();
	state.query = query;

	if(query){
		// // Clear all Results
		clearResults();

		document.querySelector('.loader-box').style.display = 'block';							

		// New search state
		state.search = new EasyHttp(query);

		// Get Movies
		state.search.getMovies()
		.then(function(result){
			state.search.allMovies = result.Search;
			console.log(state.search.allMovies)
			return state.search.allMovies
		})
		.then(function(movies){
			setTimeout(() => {
				setTimeout(() => {
					displayResult(movies)
				},2)
				document.querySelector('.loader-box').style.display = 'none';										
			},1500)
		})
		.catch(err => {
			displayError()
		})
	}
}

elements.searchValue.addEventListener('keydown' , e => {
	if(e.keyCode === 13){
		getAllMovies()		
	}
})

elements.button.addEventListener('click', e => {
	e.preventDefault();
	getAllMovies()
})

function closeModal(){
	setTimeout(function(){
		document.getElementById('myModal').classList.add('is-visuallyHidden')
	},500)
    document.getElementById('myModal').classList.add('is-hidden');
	elements.main.classList.remove('blur');
	elements.footer.classList.remove('blur');
	document.querySelector('nav').classList.remove('blur')
 	document.querySelector('.single-modal-bg').style.display = 'none';
		 	document.querySelector('.single-modal-bg').style.zIndex = 15000;						 			 	 	
}

elements.movieContainer.addEventListener('click', e =>{
//	Display Image
	if(e.target.matches('.mx-auto, .text-center, .card-details, .details')){
		let imdbID
		imdbID = (e.target.dataset.goto)
		console.log(imdbID);
		const Movie = new MovieView();
		Movie.imdbID = imdbID;
		Movie.getMovie()
		.then(function(movie){
			let movieBody;
			movieBody = {}
			movieBody.Title  = movie.Title;
			movieBody.Poster = movie.Poster;
			movieBody.imdbID = movie.imdbID;
			movieBody.Year = movie.Year;
			movieBody.Type = movie.Type;
			state.search.currentMovie = movieBody
			return movieBody
		})
		.then(function(movieBody){
			elements.footer.classList.add('blur');
			document.querySelector('.single-modal-bg').style.display = 'block';				
		 	// document.querySelector('.single-modal-bg').style.background = 'red';						 	
		 	document.querySelector('.single-modal-bg').style.zIndex = 2000000;						 			 	
			document.getElementById('myModal').classList.remove('is-hidden')
			setTimeout(function(){
			document.getElementById('myModal').classList.remove('is-visuallyHidden')
			},500)
			content = displayMovie(movieBody);
			document.querySelector('.movie-Content').innerHTML = content;					 	
			return content
		})
		.then(function(content){			
			document.getElementById('closeModal').addEventListener('click', e => {
				closeModal()
			})
			return content
		})
		.then(function(content){
			document.querySelector('.formTwo').addEventListener('click', addTofavorites)
		})
		.catch(err => {
			displayMovieError();
		})
		}
	e.preventDefault();
}) 

const addTofavorites = (e) => {
		let currMovie = new MovieView();
		let imdbID = state.search.currentMovie.imdbID
		currMovie.imdbID = imdbID
		currMovie.getMovie()
		.then(function(movie){
			let movieBody = {};
			movieBody.Title  = movie.Title;
			movieBody.Poster = movie.Poster;
			movieBody.imdbID = movie.imdbID;
			movieBody.Year = movie.Year;
			movieBody.Type = movie.Type;
			return movieBody			
		})
		.then((movieBody)=>{
			let value = state.favoriteMovies.findIndex((movies) => movies.imdbID === imdbID)
			if(value === -1){
				state.favoriteMovies.push(movieBody);
				storeItemInLocalStorage(state.favoriteMovies)	
				state.favoriteMovies=getItemsFromStorage();
				console.log('error')
				displayMovieSuccess()	
			}else if(value >= 0){
				console.log('error')
				existingMovie()
			}
		})
		.catch((err) => {
			return displayMovieError()
		})
		// .then((err) => {
		// 	displayMovieError()
		// })
	e.preventDefault();
}

function trapTabKey(e){
	// check for Tb key press
	if(e.keyCode == 9){
		if(e.shiftKey){
			if(document.activeElement === firstTabStop){
				e.preventDefault();
				lastTabStop.focus();
			}
		}else{
			if(document.activeElement === lastTabStop){
				e.preventDefault();
				firstTabStop.focus();
			}			
		}
	}
	if(e.keyCode == 27){
		closeModal2();
	}
}

function closeModal2(){
	setTimeout(function(){
		document.getElementById('secondModal').classList.add('is-visuallyHidden')
	},500)
    document.getElementById('secondModal').classList.add('is-hidden');
	elements.main.classList.remove('blur');
	elements.footer.classList.remove('blur');
	document.querySelector('nav').classList.remove('blur')
 	(document.querySelector('.modal-bg').style.display = 'none')	
 	document.querySelector('.modal-bg').style.zIndex = 15000;						 			 	 	
}

elements.fav.addEventListener('click', e => {
 	document.querySelector('.modal-bg').style.display = 'block'
 	// document.querySelector('.modal-bg').style.zIndex = 3000000;						 			 	
	lastActiveElement = document.activeElement;
	document.querySelector('nav').classList.add('blur')
	elements.main.classList.add('blur');
	elements.footer.classList.add('blur');
	document.getElementById('secondModal').classList.remove('is-hidden')
		setTimeout(function(){
			document.getElementById('secondModal').classList.remove('is-visuallyHidden')
			setTimeout(function(){
				if(state.favoriteMovies.length === 1){
					const modalBody = oneFavoriteContainer(state.favoriteMovies[0]);
					const activedocument = document.activeElement
					const movieIterator = document.querySelector('.movie-iterator')
					// movieIterator.addEventListener('keydown', trapTabKey)
		 			setTimeout(()=>{
		 				setTimeout(() => {
							let container = document.querySelector('body');
							// console.log(remove.dataset.goto)
							container.addEventListener('click', e => {
								if(e.target.classList.contains('removeicon')){
									console.log(e)
									e.target.parentElement.parentElement.remove();
									state.favoriteMovies = state.favoriteMovies.filter((movies) => {
										return movies.imdbID !== e.target.dataset.goto		
									})
									storeItemInLocalStorage(state.favoriteMovies)
									document.querySelector('.movie-iterator').innerHTML = 
										`<div class="mx-auto mt-2">
											<p style="text-align:center;"> You have no Movie in your list</p>
										</div>`												
								}						
							})
						},200)		 					
						document.querySelector('.movie-iterator').innerHTML = modalBody	
						document.getElementById('closeModal2').addEventListener('click', closeModal2)					
						var elementsString = 'a[href]'
						var element = movieIterator.querySelectorAll(elementsString);	
						element = Array.prototype.slice.call(element);
						// var firstTabStop = elements[0];
						// var lastTabStop = elements[elements.length -1]
						// firstTabStop.focus();
					},500)
				}else if(state.favoriteMovies.length > 1){
					const modalBody = favoritesContainer(state.favoriteMovies);
					const activedocument = document.activeElement
					const movieIterator = document.querySelector('body').addEventListener('keydown', trapTabKey)										
					setTimeout(() => {
						setTimeout(()=>{
							setTimeout(() => {
								let container = document.querySelector('body');
								// console.log(remove.dataset.goto)
								container.addEventListener('click', e => {
									if(e.target.classList.contains('removeicon')){
										console.log(e)
										e.target.parentElement.parentElement.remove();
										state.favoriteMovies = state.favoriteMovies.filter((movies) => {
											return movies.imdbID !== e.target.dataset.goto		
										})
									}
									storeItemInLocalStorage(state.favoriteMovies)
									if(state.favoriteMovies.length === 0){
										document.querySelector('.movie-iterator').innerHTML = 
											`<div class="mx-auto mt-2">
												<p style="text-align:center;"> You have no Movie in your list</p>
											</div>`															
									}
								})
							},200)
							document.querySelector('.movie-iterator').innerHTML = modalBody	
						},1500) 
					},1500)
				}else if(state.favoriteMovies.length < 1){
					const activedocument = document.activeElement					
					const modalBody = emptyFavoriteContainer();
					const movieIterator = document.querySelector('.movie-iterator').addEventListener('keydown', trapTabKey)					
					setTimeout(function(){
						document.querySelector('.movie-iterator').innerHTML = modalBody 
					},1000)
				}
				document.querySelector('body').addEventListener('click', e => {
					if(e.target.classList.contains('Close')){
						closeModal2();
					}
				})
				document.addEventListener('keydown', e => {
					if(e.keyCode === 27){
						console.log(e)
						closeModal2()
					}	
				}) 										
				document.querySelector('.modal-bg').addEventListener('click', e => {
 					closeModal2()
 					// (document.querySelector('.modal-bg').style.display = 'none')	
					// if(e.keyCode||e.which === 27){
						// closeModal2();
					// }
				})
 				// document.querySelector('.modal-bg').removeEventListener('click', e => {
 				// 	console.log('remove')
 				// })									
			},1000)
		},500)
	e.preventDefault();
})	

document.querySelector('body').addEventListener('click', e => {
	if(e.target.classList.contains('single-modal-bg')){
		closeModal()
	}
})		  

document.addEventListener('keydown', e => {
	if(e.target.classList.contains('single-modal-bg')){
		if(e.keyCode === 27){
			closeModal2()
		}	
	}
})		   