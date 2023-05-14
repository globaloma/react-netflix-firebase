

export const key ='965a710f1f30685f1dc1fa92cd38e099';


export const requests = {
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/trending?api_key=${key}&language=en-US&page=1`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestHorror:`https://api.themoviedb.org/3/movie/550?api_key=${key}&language=en-US&page=1&query=horror&page=1`,
}