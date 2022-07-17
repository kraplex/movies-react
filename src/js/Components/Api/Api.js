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
    const movies = JSON.parse(localStorage.getItem("movies")).map(movie => {
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
    const movies = JSON.parse(localStorage.getItem("movies"))
        .filter(m => m.id !== id)
    localStorage.clear()
    localStorage.setItem("movies", JSON.stringify(movies))
    return movies
}

export const searchData = value => {
    let movies = JSON.parse(localStorage.getItem("movies"));
    let result = []
    movies.forEach(movie => {
        if (movie.titleRus.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
            result.push(movie)
        }
    });
    return result;

}
