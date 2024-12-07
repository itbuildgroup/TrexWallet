import { apiGetBalance } from "../api";
import { ErrorObject, WalletBalance } from "../model";

/**
 * Returns user's wallet balance
 * @param currency wallet currency (`null` to request all currencies)
 * @param sessionId User's session id
 * @returns object of {@link WalletBalance} on success
 * @returns object of {@link ErrorObject} on error
 */
export async function getBalance(currency?: string, sessionId?: string): Promise<WalletBalance | ErrorObject> {
    const response = await apiGetBalance({currency}, sessionId);

    if (response.result && !response.error) {
        return response.result;
    }

    return response.error;
}
