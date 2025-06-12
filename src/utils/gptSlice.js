import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
    gptMovieNames: null,
    gptMovieDetails: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.gptSearch = !state.gptSearch;
    },
    setGptMovieNames: (state, action) => {
      const { movieNames, movieDetails } = action.payload;
      state.gptMovieNames = movieNames;
      state.gptMovieDetails = movieDetails;
    },
  },
});

export const { toggleGptSearchView, setGptMovieNames } = gptSlice.actions;
export default gptSlice.reducer;
