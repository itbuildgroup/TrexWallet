import { apiCancelCode } from "../api";
import { ApplyCodeParams } from "../api/model";

/**
 * Cancel transaction code
 * @param params code info params
 * @param sessionId User's session id
 * @returns string result on success
 * @returns `null` on error
 */
export async function cancelCode(params: ApplyCodeParams, sessionId?: string): Promise<string | null> {
    const response = await apiCancelCode(params, sessionId);

    if (response.result && !response.error) {
        return response.result;
    }

    return null;
}
