// import EasyHttp from './models/easyHttp';
// import Favorite from './models/favorite';
// import Movie from './models/movie';
// import Storage from './models/storage';
// import { elements } from './js/base';
// import * as easyHttpView from './views/easyHttpView';
// import * as easyHttpview from './views/easyHttpView';
// import * as movieView from './views/movieView';
// Getting initial/onload movies 
// Search Controller
const state = {};
state.favoriteMovies = [];


// Getting started
// let box = document.querySelector('.box-mg')
// let button = document.querySelector('#btn1')
// let search = document.querySelector('#search-mg')
// let searchValue = document.querySelector('#Name')
// let form = document.querySelector('form')

const getAllMovies = (e) =>{
	const query = getInput();
	if(query){
		// New search state
		state.search = new EasyHttp(query);
		console.log(state.search)
		
		// Clear Input
		clearInput();

		// Clear all Results
		clearResults();

		// Get Movies
		state.search.getMovies()
		.then(function(result){
			state.search.allMovies = result.Search;
			return state.search.allMovies
		})
		.then(function(movies){
			displayResult(movies)
			// Store in sessionStorage
			storeItemInLocalStorage(movies)	
		})
		.catch(err => alert('Something Went Wrong with the search'))
	}
}


elements.formOne.addEventListener('submit', e => {
	e.preventDefault();
	getAllMovies()
})


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
			console.log(state.search.currentMovie)
			return movieBody
		})
		.then(function(movieBody){
			console.log(movieBody);
			elements.main.classList.add('blur');
			elements.footer.classList.add('blur');
			document.getElementById('myModal').classList.remove('is-hidden')
			setTimeout(function(){
			document.getElementById('myModal').classList.remove('is-visuallyHidden')
			},500)
			content = displayMovie(movieBody);
			document.querySelector('.movie-Content').innerHTML = content;			
			return content
			})
		.then(function(content){			
			document.getElementById('closeModal').addEventListener('click', function(e) {
				console.log(e.target)
			elements.main.classList.remove('blur');
			elements.footer.classList.remove('blur');
			setTimeout(function(){
				document.getElementById('myModal').classList.add('is-visuallyHidden')
				},500)
    			document.getElementById('myModal').classList.add('is-hidden');
				elements.main.classList.remove('blur');
				elements.footer.classList.remove('blur');
				})
			return content
			})
		.then(function(content){
			document.querySelector('.formTwo').addEventListener('click', addTofavorites)
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
				console.log(state.favoriteMovies);			
			}
		})
		.catch((err) => console.log(err))
	e.preventDefault();
}


elements.fav.addEventListener('click', e => {
		console.log(e.target);
		document.querySelector('nav').classList.add('blur')
		elements.main.classList.add('blur');
		elements.footer.classList.add('blur');
		document.getElementById('secondModal').classList.remove('is-hidden')
		setTimeout(function(){
			document.getElementById('secondModal').classList.remove('is-visuallyHidden')
			setTimeout(function(){
				if(state.favoriteMovies.length === 1){
					const modalBody = oneFavoriteContainer(state.favoriteMovies[0]);
		 			setTimeout(()=>{
						document.querySelector('.movie-iterator').innerHTML = modalBody						
					},500)
				}else if(state.favoriteMovies.length > 1){
					const modalBody = favoritesContainer(state.favoriteMovies);
					setTimeout(() => {
						setTimeout(()=>{
							document.querySelector('.movie-iterator').innerHTML = modalBody	
						},1500)
					},1500)
				}else if(state.favoriteMovies.length < 1){
					const modalBody = emptyFavoriteContainer();
					setTimeout(function(){
						document.querySelector('.movie-iterator').innerHTML = modalBody 
					},1000)
				}
				document.getElementById('closeModal2').addEventListener('click', function(e) {
				setTimeout(function(){
					document.getElementById('secondModal').classList.add('is-visuallyHidden')
					},500)
    				document.getElementById('secondModal').classList.add('is-hidden');
					elements.main.classList.remove('blur');
					elements.footer.classList.remove('blur');
					document.querySelector('nav').classList.remove('blur')
				})
			},1000)
		},500)
	e.preventDefault();
})							   