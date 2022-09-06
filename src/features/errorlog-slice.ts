import { createSlice } from "@reduxjs/toolkit";
import { ErrorLog } from "../types/errrolog-types";


interface ListLoad {
    payload: ErrorLog[];
}

interface Intial {
    error: ErrorLog[];
}

const initialState: Intial = {
    error: []
}

export const ErrorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        loadAll: (state, action: ListLoad) => {
            state.error = action.payload
        },

        deleteAll: (state) => {
            state.error = [];
        }
    }

});

export const { loadAll, deleteAll } = ErrorSlice.actions;