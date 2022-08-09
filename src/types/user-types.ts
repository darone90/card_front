export interface LoginData {
    login: string;
    password: string;
};

export interface incomingData {
    actionStatus: boolean;
    message: string;
};

export enum ConnectionType {
    A = 'POST',
    D = 'DELETE',
    P = 'PUT',
    U = 'PATCH',
};

