# Trex wallet SDK (JavaScript)

## Configuration:

process.env variable are used for configuration:

```
AUTH_API_URL=https://test-project.api/
```

## Response interface

Each return type from the SDK functions is wrapped in an ApiResponse<T> object:

```ts
export interface ApiResponse<T> {
  error?: ErrorObject | null;
  result?: T | null;
}

export interface ErrorObject {
  code: number; // Error code can be used to catch specific error codes
  readonly message: string | null; // Error description     
}
```

## Authorization

### Obtaining a new session

The `signInUserKey` function is used to obtain the cookie:

```ts
var authProxyClient = new AuthProxyClient();

await authProxyClient.signInUserKey(<YOUR_USER_KEY>);

// Returns sessionId string if session exists
// null if session not found
const sessionId = authProxyClient.GetSessionId();
```

After that, sessionId can be used to authorize requests.

## Usage

To use a wallet instance you need to log in via authProxyClient

### Create wallet instance

```ts
// authProxyClient is object of AuthProxyClient
var walletClient = new TrexWalletClient(authProxyClient);
```

### Create invoice

```ts
var response = await walletClient.createTransactionCode({
      amount: 10,
      currency: "USDT",
      timeLimit: true,
      typeTx: CodeTypeEnum.InvoiceTx,
      externalID: <YOUR_APP_ID>,
      partnerInfo: <YOUR_USER_ID>,
      tag: <YOUR_INFO>
    });

if (response.error) {
    throw; // Your error handling
}

var codeInfo = response.result;
```

### Get transaction history

```ts
var response = await walletClient.getTransactionHistory();

if (response.error) {
    throw; // Your error handling
}

var transactions = response.result;
```
