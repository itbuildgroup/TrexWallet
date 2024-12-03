import { apiGetTransactionHistory } from "../api";
import { ErrorObject, GetTransactionHistoryParams, HistoryTransaction } from "../api/model";

/**
 * Requests user's transaction history
 * @param params filtering params
 * @param sessionId User's session id
 * @returns array of {@link HistoryTransaction} on success
 * @returns object of {@link ErrorObject} on error
 */
export async function getTransactionHistory(params: GetTransactionHistoryParams, sessionId?: string): Promise<HistoryTransaction[] | ErrorObject> {
    const response = await apiGetTransactionHistory(params, sessionId);

    if (response.result && Array.isArray(response.result)) {
        return response.result;
    }

    return response.error;
}
