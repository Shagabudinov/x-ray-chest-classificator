import { createSlice } from "@reduxjs/toolkit";

const initialValue = "x-ray";

const switchSlice = createSlice({
    name: "switch",
    initialState: () => ({
        tab: initialValue,
      }),
    reducers: {
        xRay: () => "x-ray", // Возвращаем новое значение состояния
        library: () => "library", // Возвращаем новое значение состояния
    },
});

export const { xRay, library } = switchSlice.actions;
export default switchSlice.reducer;
