import { apiCreateAddress } from "../api";
import { getTokenNetworks } from "./getTokenNetworks";
import { ErrorObject, WalletAddress } from "../api/model";

/**
 * Creates new crypto address for network
 * @param tokenNetwork network id from {@link getTokenNetworks}
 * @param sessionId User's session id
 * @returns object of {@link WalletAddress} on success
 * @returns object of {@link ErrorObject} on error
 */
export async function createAddress(tokenNetwork: number, sessionId?: string): Promise<WalletAddress | ErrorObject> {
    const response = await apiCreateAddress({token_network: tokenNetwork}, sessionId);

    if (response.result && !response.error) {
        return response.result;
    }

    return response.error;
}
