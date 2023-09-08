import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    val: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,

    reducers: {
        inc: (state) => {
            state.val += 1
        },

        dec: (state) => {
            state.val -= 1
        },

        incrementByAmount: (state, action) => {
            state.val += action.payload
          },

    }
})

// Action creators are generated for each case reducer function
export const { inc,dec,  incrementByAmount } = counterSlice.actions

export default counterSlice.reducer