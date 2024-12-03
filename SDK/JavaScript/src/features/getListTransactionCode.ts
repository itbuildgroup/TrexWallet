import { apiListTransactionCodes } from "../api";
import { TxCode, GetListTransactionCodesParams, ErrorObject } from "../api/model";

/**
 * Returns user's transaction codes
 * @param params filtering params
 * @param sessionId User's session id
 * @returns Array of {@link TxCode} on success
 * @returns object of {@link ErrorObject} on error
 */
export async function getListTransactionCodes(params: GetListTransactionCodesParams, sessionId?: string): Promise<TxCode[] | ErrorObject> {
    const response = await apiListTransactionCodes(params, sessionId);

    if (response.result && !response.error) {
        return response.result;
    }

    return response.error;
}
