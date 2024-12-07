import { apiTransactionCodeInfo } from "../api";
import { ErrorObject, GetTransactionCodeInfoParams, TxCode } from "../model";

/**
 * Requests transaction code info
 * @param params filtering params
 * @param sessionId User's session id
 * @returns object of {@link TxCode} on success
 * @returns object of {@link ErrorObject} on error
 */
export async function getTransactionCodeInfo(params: GetTransactionCodeInfoParams, sessionId?: string): Promise<TxCode | ErrorObject> {
    const response = await apiTransactionCodeInfo(params, sessionId);

    if (response.result && !response.error) {
        return response.result;
    }

    return response.error;
}
