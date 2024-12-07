import { apiTokensNetworks } from "../api";
import { ErrorObject, NetworkInfo, TokenNetworkParams } from "../model";

/**
 * Returns user's wallet info
 * @param params object of {@link TokenNetworkParams}
 * @param sessionId User's session id
 * @returns object of {@link NetworkInfo} on success
 * @returns object of {@link ErrorObject} on error
 */
export async function getTokenNetworks(params: TokenNetworkParams, sessionId?: string): Promise<NetworkInfo | ErrorObject> {
    const response = await apiTokensNetworks(params, sessionId);

    if (response.result && !response.error) {
        return response.result;
    }

    return response.error;
}
