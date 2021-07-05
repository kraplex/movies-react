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
    let movies = JSON.parse(localStorage.getItem("movies")).filter(m => m.movieId !== data.movieId)
    movies.push(data)
    localStorage.clear()
    localStorage.setItem("movies", JSON.stringify(movies))
}

export const getData = (id) => {
    return id ?
        JSON.parse(localStorage.getItem("movies")).filter(m => m.movieId === id)
        : JSON.parse(localStorage.getItem("movies"))
}

export const deleteData = (id) => {
    let movies = JSON.parse(localStorage.getItem("movies")).filter(m => m.movieId !== id)
    localStorage.clear()
    localStorage.setItem("movies", JSON.stringify(movies))
}

export const searchData = (value) => {
    let result = []
    const moviesToSearch = [];
    let movies = JSON.parse(localStorage.getItem("movies"));
    movies.forEach((item) => {
        moviesToSearch.push({
            movieId: item.movieId,
            movieTitleRus: item.movieTitleRus.toUpperCase()
        });
        // moviesTitleOrig.push(item.movieTitleOrig.toUpperCase())
    });

    for (let item of moviesToSearch) {
        if (item.movieTitleRus.indexOf(value) > -1) {
            result.push(getData(item.movieId))
        }
    }
    return result;
}


