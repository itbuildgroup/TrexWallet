import { apiCancelTransaction } from "../api";
import { ErrorObject } from "../model";

/**
 * Creates new transfer request
 * @param timetick transaction id
 * @param sessionId User's session id
 * @returns string result on success
 * @returns `null` on error
 */
export async function cancelTransaction(timetick: number, sessionId?: string): Promise<string | ErrorObject> {
    const response = await apiCancelTransaction(timetick, sessionId);

    if (response.result && !response.error) {
        return response.result;
    }

    return response.error;
}
