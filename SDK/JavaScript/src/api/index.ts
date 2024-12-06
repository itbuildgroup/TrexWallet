import { objectToQueryParams } from "@/helpers/objectToQueryParams";
import {
  ApplyCodeParams,
  CreateAddressParams,
  GetBalanceParams,
  GetListTransactionCodesParams,
  GetTransactionCodeInfoParams,
  InternalTransferData,
  ConfirmationQuery,
  ListAddressesParams,
  NetworkInfo,
  TokenNetworkParams,
  TransactionInfo,
  TransactionSenderInfo,
  TxCode,
  WalletAddress,
  WalletBalance,
  WalletInfo,
  TransferData
} from "./model";

const ApiRequest = <T>(data?: any, temp?: any) => null;

export const apiGetInfo = (sid?: string) =>
  ApiRequest<WalletInfo>("trex/v1/wallet/get_info", {
    credentials: "include",
    headers: {
      Accept: "application/json",
      Cookie: `sid=${sid}`
    }
  });

export const apiListTransactionCodes = (params: GetListTransactionCodesParams, sid?: string) =>
  ApiRequest<TxCode[]>(`trex/v1/list_tx_codes?${objectToQueryParams(params)}`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cookie: `sid=${sid}`
    }
  });

export const apiTransactionCodeInfo = (params: GetTransactionCodeInfoParams, sid?: string) =>
  ApiRequest<TxCode>(`trex/v1/code_tx_info?${objectToQueryParams(params)}`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cookie: `sid=${sid}`
    }
  });

export const apiCancelCode = (params: ApplyCodeParams, sid?: string) =>
  ApiRequest<string | null>(`trex/v1/cancel_code?${objectToQueryParams(params)}`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cookie: `sid=${sid}`
    }
  });

export const apiGetBalance = (params?: GetBalanceParams, sid?: string) =>
  ApiRequest<WalletBalance | null>(`trex/v1/wallet/get_balance?${objectToQueryParams(params)}`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cookie: `sid=${sid}`
    }
  });

export const apiTokensNetworks = (params?: TokenNetworkParams, sid?: string) =>
  ApiRequest<NetworkInfo | null>(`trex/v1/tokens_networks?${objectToQueryParams(params)}`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cookie: `sid=${sid}`
    }
  });

export const apiCreateAddress = (params?: CreateAddressParams, sid?: string) =>
  ApiRequest<WalletAddress | null>(`trex/v1/wallet/create_address?${objectToQueryParams(params)}`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cookie: `sid=${sid}`
    }
  });

export const apiListAddresses = (params?: ListAddressesParams, sid?: string) =>
  ApiRequest<WalletAddress[] | null>(`trex/v1/wallet/list_addresses?${objectToQueryParams(params)}`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cookie: `sid=${sid}`
    }
  });

export const apiInternalTransfer = (data: InternalTransferData, query?: ConfirmationQuery, sid?: string) =>
  ApiRequest<TransactionInfo | null>(`trex/v1/wallet/internal_transfer?${objectToQueryParams(query)}`, {
    method: "POST",
    body: JSON.stringify(data),
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cookie: `sid=${sid}`
    }
  });

export const apiCreateWithdraw = (data: TransferData, query?: ConfirmationQuery, sid?: string) =>
  ApiRequest<TransactionInfo | null>(`trex/v1/wallet/create_withdraw?${objectToQueryParams(query)}`, {
    method: "POST",
    body: JSON.stringify(data),
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cookie: `sid=${sid}`
    }
  });

export const apiUpdateTxPartnerInfo = (query?: TransactionSenderInfo, sid?: string) =>
  ApiRequest<string | null>(`trex/v1/wallet/update_tx_partner_info?${objectToQueryParams(query)}`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cookie: `sid=${sid}`
    }
  });

export const apiCancelTransaction = (timetick: number, sid?: string) =>
  ApiRequest<string | null>(`trex/v1/wallet/cancel_withdraw?timetick=${timetick}`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cookie: `sid=${sid}`
    }
  });
