export const saveData = (data) => {
    let movies = [];
    if (localStorage.getItem("movies")) {
        movies = JSON.parse(localStorage.getItem("movies"))
        localStorage.clear()
    }
    movies.push(data)
    localStorage.setItem("movies", JSON.stringify(movies))
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

export const getData = id => {
    return id ?
        JSON.parse(localStorage.getItem("movies")).filter(m => m.movieId === id)[0]
        : JSON.parse(localStorage.getItem("movies"))
}

export const deleteData = id => {
    let movies = JSON.parse(localStorage.getItem("movies"))
        .filter(m => m.id !== id)
    localStorage.clear()
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
