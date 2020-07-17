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
		allMovies +=`<div class="col-lg-3 col-md-6 col-sm-6 mb-2 mt-3 justify-content-center">
						<div class="mx-auto" style="height: 300px; width: 250px;">
							<img class="img-fluid mb-1" style="height: 100%; width: 100%;" src=${post.Poster} />
						</div>
						<h5 class="mx-auto text-center wrap movieTitle">${post.Title}</h5>
    					<div class="d-flex" justify-content-between>
							<button class="mx-auto text-center card-details details" id="btn2" href="#" data-goto=${post.imdbID}>View Details</button>
    					</div>	
					</div>`
	})
	elements.movieContainer.innerHTML = allMovies;
}

const displayError = (err) => {
	let error = `<div class="col-lg-3 col-md-6 col-sm-6 mb-2 mt-3 justify-content-center">
		<p style='color:white;'>Something went wrong try again</p>		
	</div>`
	elements.movieContainer.innerHTML = error
}