import { createSlice, PayloadAction } from "@reduxjs/toolkit"

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
const initialTransferState = {
    transferFilters: {
        transfer0: false,
        transfer1: false,
        transfer2: false,
        transfer3: false,
    },
};

interface CompanyPayload {
    [key: string]: string;
}

interface TransferFiltersPayload {
    [key: string]: string | number | boolean;
}

const companySlice = createSlice({
    name: 'company',
    initialState: {} as CompanyPayload,
    reducers: {
        setCompany: (state, action: PayloadAction<CompanyPayload>) => {
            return { ...state, ...action.payload };
        },
    },
});

const transferFiltersSlice = createSlice({
    name: 'transferSlice',
    initialState: initialTransferState,
    reducers: {
        setTransferFilters: (state, action: PayloadAction<TransferFiltersPayload>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setCompany } = companySlice.actions;
export const { setTransferFilters } = transferFiltersSlice.actions;

export const CompanyReducer = companySlice.reducer;
export const TransferFiltersReducer = transferFiltersSlice.reducer;