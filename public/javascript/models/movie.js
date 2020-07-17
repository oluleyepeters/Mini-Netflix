class MovieView{
	constructor(query){
		this.currentMovie;
		this.imdbID;
		this.apiKey = 'c9ea2383';		
	}	

	
	getMovie(){
	 	return new Promise((resolve,reject)=>{
			 fetch(`https://www.omdbapi.com/?apikey=${this.apiKey}&i=${this.imdbID}`)
	 		.then(res => res.json())
	 		.then(data => resolve(data))
	 		.catch(err => {
	 			reject(err)
	 		})
	 	})
	 }
}	