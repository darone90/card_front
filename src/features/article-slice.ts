import { createSlice } from "@reduxjs/toolkit";
import { ArticleListData } from "../types/article-types";


interface ListLoad {
    payload: ArticleListData[];
}

interface DeleteArticle {
    payload: string
}

interface addNote {
    payload: ArticleListData;
}

interface Intial {
    article: ArticleListData[];
}

const initialState: Intial = {
    article: []
}

export const ArticleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        loadAll: (state, action: ListLoad) => {
            state.article = action.payload
        },

        addOne: (state, action: addNote) => {
            state.article = [...state.article, action.payload];
        },
        deleteOne: (state, action: DeleteArticle) => {
            const newState = state.article.filter(article => article.id !== action.payload);
            state.article = [...newState];
        }
    }

});

export const { loadAll, addOne, deleteOne } = ArticleSlice.actions;