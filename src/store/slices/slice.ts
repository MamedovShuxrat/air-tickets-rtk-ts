import { createSlice } from "@reduxjs/toolkit"

export interface TicketTime {
    startTime: string
    endTime: string
}

export interface Ticket {
    id: number
    from: string
    to: string
    compony: string
    price: number
    currency: 'RUB'
    time: TicketTime
    duration: number
    date: string
    connectionAmount: number | null
}


interface ExampleState {
    value: number;
}

const initialState: ExampleState = {
    value: 0,
};

const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { increment, decrement } = exampleSlice.actions;

export default exampleSlice.reducer;