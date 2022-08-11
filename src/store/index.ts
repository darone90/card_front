import { configureStore } from '@reduxjs/toolkit';
import { ArticleSlice } from '../features/article-slice';
import { ErrorSlice } from '../features/errorlog-slice';

export const store = configureStore({
    reducer: {
        article: ArticleSlice.reducer,
        errorlog: ErrorSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>