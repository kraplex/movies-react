import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    allMovies: []
};

const StateReducer = createSlice({
    name: "StateReducer",
    initialState,
    reducers: {
        toggleFetching: (state, action) => {
            state.isFetching = action.payload
        },

    }
})
export default StateReducer.reducer;
export const {
    toggleFetching,
} = StateReducer.actions
