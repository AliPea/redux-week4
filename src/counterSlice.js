import { createSlice } from '@reduxjs/toolkit';

const initialState =  {
    count: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            return {
                count: state.count + 1
            }
        },
        decrement: (state) => {
            return {
                count: state.count - 1
            }
        }
    }
});

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer

// selector function
export const selectCount = (state) => state.counter.count;
// create the counterReducer


