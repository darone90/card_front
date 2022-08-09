import { ConnectionType, incomingData } from "../types/user-types"
import { ConnectionsConfig } from "../config"

export const sendData = async (data: any, path: string, method: ConnectionType): Promise<incomingData | Error> => {
    try {
        const request = await fetch(`${ConnectionsConfig.backendPath}/${path}`, {
            method: method,
            credentials: "include",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const response = await request.json() as incomingData;
        return response;

    } catch (err) {
        console.log(err);
        return err as Error;
    }
}

export const getter = async (path: string): Promise<incomingData | Error> => {
    try {
        const request = await fetch(`${ConnectionsConfig.backendPath}/${path}`, {
            method: "GET",
            credentials: "include"
        });

        const response = await request.json() as incomingData;
        return response;
    } catch (err) {
        console.log(err);
        return err as Error;
    }
};