
export const key=process.env.REACT_APP_MOVIE_API_KEY


export const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=2`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=4`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=5`,
    requestHorror: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=10`,
}

