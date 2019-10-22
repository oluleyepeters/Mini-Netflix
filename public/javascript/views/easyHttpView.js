// import { elements } from 'base.js';
const getInput = () => elements.searchValue.value;


const clearInput = () =>{
	elements.searchValue.value = '';
}

const clearResults = () =>{
	elements.movieContainer.innerHTML = '';
}

const displayResult = (posts) =>{
	let allMovies = '';
	posts.forEach((post) => {
		allMovies +=`<div class="col-lg-3 col-md-6 col-sm-6 mb-2 mt-2 justify-content-center">
						<div class="mx-auto" style="height: 300px; width: 250px;">
							<img class="img-fluid mb-1" style="height: 100%; width: 100%;" src=${post.Poster} />
						</div>
						<h4 class="mx-auto text-center">${post.Title}</h4>
    					<a class="mx-auto text-center card-details details" href="#" data-goto=${post.imdbID}>View Details</a>
					</div>`
	})
	elements.movieContainer.innerHTML = allMovies;
}