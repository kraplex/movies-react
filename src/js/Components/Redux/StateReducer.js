import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    allMovies: []
};

const StateReducer = createSlice({
    name: "StateReducer",
    initialState,
    reducers: {
        setMovie: (state, action) => {
            state.allMovies.push(action.payload)
            console.log(state.allMovies)
        }
    }
})
export default StateReducer.reducer;
export const {
    setMovie,
} = StateReducer.actions
