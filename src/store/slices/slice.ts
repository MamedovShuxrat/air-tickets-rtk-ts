import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialTransferState = {
    transfer0: false,
    transfer1: false,
    transfer2: false,
    transfer3: false,

}

interface CompanyPayload {
    [key: string]: string
}

interface TransferFiltersPayload {
    [key: string]: string | number | boolean
}

const companySlice = createSlice({
    name: 'company',
    initialState: {} as CompanyPayload,
    reducers: {
        setCompany: (state, action: PayloadAction<CompanyPayload>) => {
            return { ...state, ...action.payload }
        },
    },
})

const transferFiltersSlice = createSlice({
    name: 'transferSlice',
    initialState: initialTransferState,
    reducers: {
        setTransferFilters: (state, action: PayloadAction<TransferFiltersPayload>) => {
            return { ...state, ...action.payload }
        },
    },
})

export const { setCompany } = companySlice.actions
export const { setTransferFilters } = transferFiltersSlice.actions

export const companyReducer = companySlice.reducer
export const transferFiltersReducer = transferFiltersSlice.reducer 