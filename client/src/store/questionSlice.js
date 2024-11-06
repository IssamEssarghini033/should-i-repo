import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAIResponse = createAsyncThunk('questions/fetchAIResponse', async (question) => {
    const response = await axios.post('http://localhost:5010/api/ai/ask', { question });
    return { question, response: response.data.answer };
});

const questionSlice = createSlice({
    name: 'questions',
    initialState: {
        responses: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAIResponse.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAIResponse.fulfilled, (state, action) => {
                state.loading = false;
                state.responses.unshift(action.payload);
            })
            .addCase(fetchAIResponse.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default questionSlice.reducer;
