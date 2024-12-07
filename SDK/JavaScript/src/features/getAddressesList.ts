import { apiListAddresses } from "../api";
import { getTokenNetworks } from "./getTokenNetworks";
import { ErrorObject, WalletAddress } from "../model";

/**
 * Returns addresses list for crypto network
 * @param tokenNetwork network id from {@link getTokenNetworks}
 * @param sessionId User's session id
 * @returns array of {@link WalletAddress} on success
 * @returns object of {@link ErrorObject} on error
 */
export async function getAddressesList(tokenNetwork: number, sessionId?: string): Promise<WalletAddress[] | ErrorObject> {
    const response = await apiListAddresses({token_network: tokenNetwork}, sessionId);

    if (response.result && !response.error) {
        return response.result;
    }

    return response.error;
}
