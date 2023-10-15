import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchImages = createAsyncThunk(
    "images/get_image_names",
    async () => {
        const response = await axios.get(
            "http://127.0.0.1:8080/get_image_names"
        );
        return response.data;
    }
);

const imagesLibrarySlice = createSlice({
    name: "images",
    initialState: {
        data: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchImages.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchImages.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchImages.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default imagesLibrarySlice.reducer;
