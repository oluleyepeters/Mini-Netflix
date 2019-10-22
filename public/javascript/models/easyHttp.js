class EasyHttp{
	constructor(query){
		this.query =  query;
		this.allMovies;
		this.currentMovie;
		this.apiKey = 'c9ea2383';		
	}	

	getMovies(){
	 	return new Promise((resolve,reject)=>{
			 fetch(`http://www.omdbapi.com/?apikey=${this.apiKey}&s=${this.query}`)
	 		.then(res => res.json())
	 		.then(data => resolve(data))
	 		.catch(err => reject(err))
	 	})
	 }
}	