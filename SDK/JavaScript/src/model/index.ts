export interface ErrorObject {
  code?: number;
  readonly message?: string | null;
}

export interface ApiResponse<T> {
  error?: ErrorObject | null;
  result?: T | null;
}

export interface ApiResponseExt<T> extends ApiResponse<T> {
  id?: number;
  headers?: Record<string, string> | null;
}

export enum WalletInfoFlags {
  None = 0,
  WithdrawBlock = 1,
  TopUpBlock = 2,
  ExchangeBlock = 4,
  InnerTransferBlock = 8,
  InvestBlock = 16,
  WalletBlock = 32,
  AllTokensNetworks = 64,
  GkeBonusBlock = 256,
  JuridicalBlock = 272,
  BlockAll = 319,
  BankClientClosed = 512,
  IsJuridical = 33554432,
  IsJuridicalGekkardPro = 67108864,
  Deleted = 1073741824
}

export interface WalletInfo {
  base_currency?: string | null;
  client_code?: string | null;
  date_create?: string;
  date_update?: string;
  flags?: WalletInfoFlags;
  wallet_code?: string | null;
}

export enum TransactionTypeEnum {
  None = 0,
  InnerTransfer = 1,
  ExchnageToBroker = 2,
  Income = 3,
  Outcome = 4,
  FromBank = 5,
  ToBank = 6,
  CreateInvest = 7,
  CloseInvest = 8,
  EarlyCloseInvest = 9,
  PaymentInvest = 10,
  InternalTx = 11,
  InternalTxConfirm = 12,
  InvoiceTx = 13,
  InvoiceTxConfirm = 14,
  OrderReturnBalance = 15,
  OrderCreate = 16,
  AgentPayment = 17,
  RewardPayment = 18,
  ExchnageFromBroker = 20,
  CrossProjectSelfTransfer = 21,
}

export type GetTransactionHistoryParams = {
  start?: string;
  end?: string;
  next_key?: string;
  currencies?: string[];
  tx_types?: TransactionTypeEnum[];
  limit?: number;
  awaitsInfoOnly?: boolean;
  include_address_data?: boolean;
};

export enum OriginalStatusEnum {
  None = 0,
  Successful = 1,
  Rejected = 2,
  FailedReverted = 3,
  FailedOutOfEnergy = 4,
  Failed = 5,
  FailedOutOfGas = 6,
  COMPLETED = 100,
  HOLD = 101,
  PROCESSING = 102,
  BANK_CANCELLED = 103,
  INSUFFICIENT_FUNDS = 104,
  REFUND = 105,
  UNKNOWN = 106,
}

export enum AdrTxStateEnum {
  None = 0,
  Draft = 1,
  AmlConfirm = 2,
  SendedToModule = 4,
  SendedToNetwork = 8,
  NetworkIn = 16,
  NetworkConfirmed = 32,
  HasInnerTransaction = 64,
  Cancelation = 2048,
  Finished = 8192,
}

export interface AddressTxData {
  address_from?: string | null;
  address_to?: string | null;
  block_num?: number | null;
  original_state?: OriginalStatusEnum;
  state?: AdrTxStateEnum;
  token_network?: string | null;
  tx_hash?: string | null;
}

export enum TransactStateEnum {
  None = 0,
  WithdrawCreated = 1,
  NetworkConfirmed = 2,
  NetworkUnConfirmed = 4,
  FromNetwork = 6,
  AMLSent = 8,
  Blocked = 16,
  Canceled = 32,
  Failed = 64,
  Finished = 128,
}

export enum TransactTypeEnum {
  None = 0,
  InnerTransfer = 1,
  ExchangeToBroker = 2,
  Income = 3,
  Outcome = 4,
  FromBank = 5,
  ToBank = 6,
  CreateInvest = 7,
  CloseInvest = 8,
  EarlyCloseInvest = 9,
  PaymentInvest = 10,
  InternalTx = 11,
  InternalTxConfirm = 12,
  InvoiceTx = 13,
  InvoiceTxConfirm = 14,
  OrderReturnBalance = 15,
  OrderCreate = 16,
  AgentPayment = 17,
  RewardPayment = 18,
  ExchangeFromBroker = 20,
  CrossProjectSelfTransfer = 21,
}

export interface HistoryTransaction {
  address_tx_data?: AddressTxData;
  amount?: string | null;
  balance?: number;
  currency?: string | null;
  datetime?: string;
  fee?: string | null;
  id_transaction?: string | null;
  is_income?: boolean;
  next_key?: string | null;
  partner_info?: string | null;
  result_amount?: number;
  status?: TransactStateEnum;
  status_text?: string | null;
  tag?: string | null;
  tx_type?: TransactTypeEnum;
  tx_type_text?: string | null;
}

export enum CodeTypeEnum {
  None = 0,
  RoomKey = 1,
  AgentLink = 2,
  AgentPayLink = 3,
  ClientInvestPayLink = 4,
  ClientRegPayLink = 5,
  InternalTx = 11,
  InternalTxConfirm = 12,
  InvoiceTx = 13,
  InvoiceTxConfirm = 14,
  DiscountPoints = 15,
  DiscountPercent = 16,
  RaffleCode = 17,
}

export interface TxCodeInfo {
  amount?: number;
  currency?: string | null;
  typeTx?: CodeTypeEnum;
  timeLimit?: boolean;
  externalID?: number;
  partnerInfo?: string;
  tag?: string;
}

export interface TxCode {
  amount?: number;
  code?: string | null;
  currency?: string | null;
  dateCodeUTC?: string | null;
  dateTxUTC?: string;
  isOwner?: boolean;
  readonly state?: string | null;
  stateCode?: number;
  typeTx?: CodeTypeEnum;
}

export type GetTransactionCodeInfoParams = {
  code?: string;
};

export type ApplyCodeParams = {
  code?: string;
  confirmationCode?: string;
};

export type ConfirmationQuery = {
  confirmationTimetick?: number;
  confirmationCode?: string;
};

export type TransactionSenderInfo = {
  timetick: number;
  partner_info: string;
};

export type GetBalanceParams = {
  currency?: string;
};

export type CreateAddressParams = {
  token_network: number;
};

export type ListAddressesParams = {
  token_network: number;
};

export type TokenNetworkParams = {
  currency?: string;
  top_up?: boolean;
  amount?: number;
};

export type CancelCodeParams = {
  code?: string;
};

export type GetListTransactionCodesParams = {
  timeLimit?: boolean;
  currency?: string;
};

export enum ConfirmationStatus {
  NeedSmsConfirm = 0,
  NeedCodeConfirm = 1,
  NeedSign = 2,
  NoConfirmationNeeded = 3,
  Confirmed = 4
}

export interface ApplyCodeResult {
  confirmationStatusCode?: ConfirmationStatus;
  confirmCode?: string | null;
  result?: string | null;
}

export interface WalletBalance {
  bank_account_status?: string | null;
  currency?: string | null;
  free_balance?: number | null;
  lock_in_balance?: number | null;
  lock_orders?: number | null;
  lock_out_balance?: number | null;
  user_balance?: number | null;
  user_balance_EUR_equ?: number | null;
}

export interface WalletAddress {
  address?: string | null;
  id?: number;
  type_address?: string | null;
}

export interface NetworkInfo {
  amount?: number | null;
  contract_name?: string | null;
  fee?: number;
  id?: number;
  is_default?: boolean;
  is_operable?: boolean;
  max_amount?: number | null;
  min_amount?: number | null;
  network_name?: string | null;
  network_num?: number;
  percent_fee?: number | null;
  token_code?: string | null;
  token_name?: string | null;
}

export interface InternalTransferData {
  amount: number;
  currency: string;
  recipient: string;
  tag?: string | null;
}

export interface TransactionInfo {
  txId: number;
  fee: number;
  confirmationStatusCode?: ConfirmationStatus;
  status_code?: number | null;
  message?: string | null;
  confirmCode?: string | null;
}

export interface TransferData {
  address: string;
  amount: number;
  client_nonce?: number;
  currency: string;
  fee: number;
  memo?: string | null;
  partner_info: string;
  tag?: string | null;
  token_network?: number;
}
