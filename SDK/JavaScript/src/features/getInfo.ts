import { apiGetInfo } from "../api";
import { ErrorObject, WalletInfo } from "../api/model";

/**
 * Returns user's wallet info
 * @param sessionId User's session id
 * @returns object of {@link WalletInfo} on success
 * @returns object of {@link ErrorObject} on error
 */
export async function getInfo(sessionId?: string): Promise<WalletInfo | ErrorObject> {
    const response = await apiGetInfo(sessionId);

    if (response.result && !response.error) {
        return response.result;
    }

    return response.error;
}
