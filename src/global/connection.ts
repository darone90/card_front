import { ConnectionType } from "../types/user-types"
import { ConnectionsConfig } from "../config"

export const sendData = async (data: any, path: string, method: ConnectionType): Promise<boolean> => {
    try {
        const request = await fetch(`${ConnectionsConfig.backendPath}/${path}`, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const response = await request.json() as boolean;
        return response;

    } catch (err) {
        console.log(err);
        //przekierownie na stronę błędów
        return false;
    }
}