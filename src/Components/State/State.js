let state = {
    movies: []
};

export const saveData = (movie) => {
    state.movies.push(movie)
    localStorage.setItem("stateLS", JSON.stringify(state))
};

export const getData = () => {
    if (!JSON.parse(localStorage.getItem("stateLS"))) {
        localStorage.setItem("stateLS", JSON.stringify(state))
    }
    state = JSON.parse(localStorage.getItem("stateLS"))
};

getData()


export const deleteData = (id) => {
    let updatedMoviesList = state.movies.filter(m => m.movieId !== id)
    state.movies = updatedMoviesList
    localStorage.setItem("stateLS", JSON.stringify(state))
}


export const editData = (data) => {
    let movies = JSON.parse(localStorage.getItem("movies")).map(movie => {
        if (movie.movieId === data.movieId) {
            movie = {...data}
        }
        return movie
    })

    localStorage.setItem("movies", JSON.stringify(movies))
}


export const searchData = (value) => {
    let movies = JSON.parse(localStorage.getItem("movies"));
    let result = []
    movies.forEach(movie => {
        if (movie.movieTitleRus.toUpperCase().indexOf(value) !== -1) {
            result.push(movie)
        }
    });
    return result;

}

window.state = state
export default state;