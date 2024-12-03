import { apiInternalTransfer } from "../api";
import { ErrorObject, InternalTransferData, ConfirmationQuery, TransactionInfo } from "../api/model";

/**
 * Creates new transfer request to internal address
 * @param data object of {@link InternalTransferData}
 * @param query object of {@link ConfirmationQuery}, requeried in second request, when we need to confirm transaction
 * @param sessionId User's session id
 * @returns object of {@link TransactionInfo} on success
 * @returns object of {@link ErrorObject} on error
 */
export async function internalTransfer(data: InternalTransferData, query?: ConfirmationQuery, sessionId?: string): Promise<TransactionInfo | ErrorObject> {
    const response = await apiInternalTransfer(data, query, sessionId);

    if (response.result && !response.error) {
        return response.result;
    }

    return response.error;
}
