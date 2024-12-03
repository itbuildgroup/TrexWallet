import { apiCreateWithdraw } from "../api";
import { ErrorObject, ConfirmationQuery, TransferData, TransactionInfo } from "../api/model";

/**
 * Creates new transfer request
 * @param data object of {@link TransferData}
 * @param query object of {@link ConfirmationQuery}, requeried in second request, when we need to confirm transaction
 * @param sessionId User's session id
 * @returns object of {@link TransactionInfo} on success
 * @returns object of {@link ErrorObject} on error
 */
export async function createTransaction(data: TransferData, query?: ConfirmationQuery, sessionId?: string): Promise<TransactionInfo | ErrorObject> {
    const response = await apiCreateWithdraw(data, query, sessionId);

    if (response.result && !response.error) {
        return response.result;
    }

    return response.error;
}
