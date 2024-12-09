import { AuthProxyClient } from "@itbuild/auth.proxy";
import {
  ApiResponse,
  ApiResponseExt,
  ApplyCodeParams,
  ApplyCodeResult,
  ErrorObject,
  GetTransactionHistoryParams,
  GetTransactionInfoParams,
  HistoryTransaction,
  TxCode,
  TxCodeInfo
} from "./model";
import { objectToQueryParams } from "./helpers/objectToQueryParams";

export class TrexWalletClient {
  private authProxyClient: AuthProxyClient;

  constructor(authProxyClient: AuthProxyClient) {
    this.authProxyClient = authProxyClient;
  }

  /**
   * Applies transaction code
   * @param params code info params
   * @returns object of {@link ApplyCodeResult} on success
   * @returns object of {@link ErrorObject} on error
   */
  public async ApplyCode(params: ApplyCodeParams): Promise<ApiResponse<ApplyCodeResult>> {
    return await this.ApiRequest<ApplyCodeResult>(`trex/v1/apply_code?${objectToQueryParams(params)}`,
      { method: "POST" }
    );
  }

  /**
   * Creates a special money transfer code
   * @param data transaction code info
   * @returns object of {@link TxCode} on success
   * @returns object of {@link ErrorObject} on error
   */
  public async CreateTransactionCode(data: TxCodeInfo): Promise<ApiResponse<TxCode>> {
    return await this.ApiRequest<TxCode>('trex/v1/create_tx_code', {
      method: "POST",
      body: JSON.stringify(data)
    });
  }

  /**
   * Requests user's transaction history
   * @param params filtering params
   * @returns array of {@link HistoryTransaction} objects
   */
  public async GetTransactionHistory(params: GetTransactionHistoryParams): Promise<ApiResponse<HistoryTransaction[]>> {
    return await this.ApiRequest<HistoryTransaction[]>(
      `trex/v1/wallet/get_history_transactions?${objectToQueryParams(params)}`, { method: "GET" }
    );
  }

  /**
   * Requests transaction info by id
   * @param params filtering params
   * @returns array of {@link HistoryTransaction} objects
   */
  public async GetTransactionInfo(params: GetTransactionInfoParams): Promise<ApiResponse<HistoryTransaction>> {
    return await this.ApiRequest<HistoryTransaction>(
      `trex/v1/wallet/get_tx_info?${objectToQueryParams(params)}`, { method: "GET" }
    );
  }

  private async ApiRequest<T>(url: string, init?: RequestInit): Promise<ApiResponseExt<T>> {
    const headers: Record<string, string> = {};
    const defaultHeaders: Record<string, string> = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    try {
      const response = await fetch(this.authProxyClient.BaseUrl + url, {
        credentials: "include",
        ...init,
        headers: {
          ...defaultHeaders,
          ...init.headers,
          ...(this.authProxyClient.GetSessionId() ? { Cookie: `sid=${this.authProxyClient.GetSessionId()}` } : {})
        }
      });

      if (response.ok) {
        response.headers.forEach((value, key) => {
          headers[key] = value;
        });

        return {
          ...(await response.json()) as ApiResponseExt<T>,
          headers
        }
      } else {
        return {
          error: { message: `Status: ${response.status}. ${response?.statusText}` },
          headers
        }
      }
    } catch (e) {
      return {
        error: { message: e?.message },
        headers: null
      };
    }
  };
}
