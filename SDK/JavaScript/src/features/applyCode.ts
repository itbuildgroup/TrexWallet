import { apiApplyCode } from "../api";
import { ApplyCodeParams, ApplyCodeResult, ErrorObject } from "../api/model";

/**
 * Applies transaction code
 * @param params code info params
 * @returns object of {@link ApplyCodeResult} on success
 * @returns object of {@link ErrorObject} on error
 */
export async function applyCode(params: ApplyCodeParams): Promise<ApplyCodeResult | ErrorObject> {
    const response = await apiApplyCode(params);

    if (response.result && !response.error) {
        return response.result;
    }

    return response.error;
}
