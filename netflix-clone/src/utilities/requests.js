const api_key = process.env.REACT_APP_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99`,
  fetchMysteryMovies: `/discover/movie?api_key=${api_key}&with_genres=9648`,
  fetchSciFiMovies: `/discover/movie?api_key=${api_key}&with_genres=878`,
  fetchWesternMovies: `/discover/movie?api_key=${api_key}&with_genres=37`,
  fetchAnimationMovies: `/discover/movie?api_key=${api_key}&with_genres=16`,
};

export default requests;