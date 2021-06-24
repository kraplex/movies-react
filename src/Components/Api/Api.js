export const saveData = (data) => {
    let movies = [];
    if (localStorage.getItem("movies")) {
        movies = JSON.parse(localStorage.getItem("movies"))
        localStorage.clear()
    }
    movies.push(data)
    localStorage.setItem("movies", JSON.stringify(movies))
}

export const getData = (id) => {

    return JSON.parse(localStorage.getItem("movies")) ? JSON.parse(localStorage.getItem("movies")) : []
}