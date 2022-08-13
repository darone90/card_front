import { ArticleListData } from "./article-types";
import { ErrorLog } from "./errrolog-types";

export interface LoginData {
    login: string;
    password: string;
};

export interface incomingData {
    actionStatus: boolean;
    message: string | ArticleListData[] | ArticleListData | ErrorLog[];
};

export enum ConnectionType {
    A = 'POST',
    D = 'DELETE',
    P = 'PUT',
    U = 'PATCH',
};

