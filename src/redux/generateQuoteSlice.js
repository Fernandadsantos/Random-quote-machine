import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchQuote = createAsyncThunk(
    'generateQuote/fetchQuote',
    async () => {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return data;
    }
);

const generateQuoteSlice = createSlice({
    name: 'generateQuote',
    initialState: {
        quote: '',
        author: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuote.fulfilled, (state, action) => {
                state.quote = action.payload.content;
                state.author = action.payload.author;
            });
    },
});

export default generateQuoteSlice.reducer;