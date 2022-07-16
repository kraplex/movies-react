import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    allMovies: []
};

const moviesReducer = createSlice({
    name: "StateReducer",
    initialState,
    reducers: {
        getAllMovies: (store, action) => {
            return {
                ...store,
                allMovies: action.payload || []
            }
        },
        setMovie: (store, action) => {
            store.allMovies.push(action.payload)
        }
    }
})
export default moviesReducer.reducer;
export const {
    getAllMovies,
    setMovie,
} = moviesReducer.actions
