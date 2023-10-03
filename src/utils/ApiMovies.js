import Api from './Api.js';

class ApiMovies extends Api{
  get() {
    return this._get('/beatfilm-movies').then(res=> res.json() );
  }

  getThumbUrl(movieData){
    return this._baseUrl + movieData.image.formats.thumbnail.url;
  }
}

export default ApiMovies;
