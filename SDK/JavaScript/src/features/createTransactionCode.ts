import { apiCreateTransactionCode } from "../api";
import { TxCodeInfo, TxCode, ErrorObject } from "../api/model";

/**
 * Creates a special money transfer code
 * @param data transaction code info
 * @param sessionId User's session id
 * @returns object of {@link TxCode} on success
 * @returns object of {@link ErrorObject} on error
 */
export async function createTransactionCode(data: TxCodeInfo, sessionId?: string): Promise<TxCode | ErrorObject> {
    const response = await apiCreateTransactionCode(data, sessionId);

    if (response.result && !response.error) {
        return response.result;
    }

    return response.error;
}
