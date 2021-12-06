import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apis from "../apis";
import axiosClient from "../apis/api";

const initialState = JSON.parse(sessionStorage.getItem("auth")) || {
    user: {},
    token: "",
    isAuthenticated: false,
};

export const loginAsync = createAsyncThunk("login", async (payload) => {
    const res = await apis.auth.login(payload.email, payload.password);
    axiosClient.defaults.headers.common.Authorization = `Bearer ${res.token}`;
    sessionStorage.setItem("auth", JSON.stringify({ ...res, isAuthenticated: true }));

    return res;
});

export const todoSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        logout(state) {
            sessionStorage.removeItem("auth");
            return {
                user: {},
                token: "",
                isAuthenticated: false,
            };
        },
    },
    extraReducers: {
        [loginAsync.fulfilled]: (state, action) => {
            return { ...action.payload, isAuthenticated: true };
        },
        // [getTodosAsync.fulfilled]: (state, action) => {
        //     return action.payload.todos;
        // },
        // [addTodoAsync.fulfilled]: (state, action) => {
        //     state.push(action.payload.todo);
        // },
        // [toggleCompleteAsync.fulfilled]: (state, action) => {
        //     const index = state.findIndex((todo) => todo.id === action.payload.todo.id);
        //     state[index].completed = action.payload.todo.completed;
        // },
        // [deleteTodoAsync.fulfilled]: (state, action) => {
        //     return state.filter((todo) => todo.id !== action.payload.id);
        // },
    },
});

export default todoSlice.reducer;
