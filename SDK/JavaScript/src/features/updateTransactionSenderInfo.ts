import { apiUpdateTxPartnerInfo } from "../api";
import { TransactionSenderInfo } from "../model";

/**
 * Cancel transaction code
 * @param params object of {@link TransactionSenderInfo}
 * @param sessionId User's session id
 * @returns string result on success
 * @returns `null` on error
 */
export async function updateTransactionSenderInfo(params: TransactionSenderInfo, sessionId?: string): Promise<string | null> {
    const response = await apiUpdateTxPartnerInfo(params, sessionId);

    if (response.result && !response.error) {
        return response.result;
    }

    return null;
}
