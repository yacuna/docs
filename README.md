# YACUNA API v1.0.0

Trading API Specification

- [Deal](#deal)
	- [Deal count](#deal-count)
	- [Deal get](#deal-get)
	- [Deal list](#deal-list)
	
- [Market](#market)
	- [MarketDepth get](#marketdepth-get)
	- [Market count](#market-count)
	- [Market list](#market-list)
	- [OrderBook get](#orderbook-get)
	
- [Order](#order)
	- [Order get](#order-get)
	- [Order cancel](#order-cancel)
	- [Order confirm](#order-confirm)
	- [Order count](#order-count)
	- [Order create](#order-create)
	- [Order get by ext ref Id](#order-get-by-ext-ref-id)
	- [Order list](#order-list)
	
- [Public_Charts](#public_charts)
	- [Orderbook](#orderbook)
	- [Trades](#trades)
	
- [Wallet](#wallet)
	- [Wallet get](#wallet-get)
	


# Deal

## Deal count

<p>Retrieves the number of deals with the given properties</p>

	GET /api/1/deal/count

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| walletAccountId			| String			|  <p>By wallet account Id</p>							|
| marketId			| String			| **optional** <p>By market Id</p>							|
| orderId			| String			| **optional** <p>By order Id</p>							|
| tradeDealType			| String			| **optional** <p>By order type</p>							|
| tradeDealStatus			| String			| **optional** <p>By order status</p>							|
| fromDate			| String			| **optional** <p>Begin date range in UTC, in &#39;yyyy-MM-ddTHH:mm:ssZ&#39; format, e.g. &#39;2014-06-19T14:31:23Z&#39;</p>							|
| untilDate			| String			| **optional** <p>End date range in UTC, in &#39;yyyy-MM-ddTHH:mm:ssZ&#39; format, e.g. &#39;2014-06-19T14:31:23Z&#39;</p>							|

### Success Response

Success-Response Example:

```
HTTP/1.1 200 OK
{
	"count": 2,
	"requestId": "JTsUBAAAAUZrtnaOLSugK96cEBI",
	"status": "Success"
}

```
### Error Response

Error-Response Example:

```
HTTP/1.1 400 Bad Request
{
	"requestId": "JTsUBAAAAUZML_4ZLSugK96cELw",
	"status": "Error",
	"errorDetails":
	[
		{
			"simpleName": "WalletException",
			"description": "[AuthenticationError] Api-Token required",
			"errorName": "AuthenticationError",
			"errorNumber": 4000000,
			"errorMessageShort": null,
			"errorMessageLong": null,
			"fieldName": null,
			"limitsViolated": null
		}
	]
}

```
## Deal get

<p>Retrieves an existing Deal with the given ID, provided the currently authenticated user has access to it.</p>

	GET /api/1/deal/get/{dealId}

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| dealId			| String			|  <p>Deal Id</p>							|

### Success Response

Success-Response Example:

```
HTTP/1.1 200 OK
{
	"requestId": "JTsUBAAAAUavl12RLSugK96cEZM",
	"status": "Success",
	"tradeDeal":
	{
		"id": "AAEABGOj1rR4C7xxreNhYNjXItSH_Yp93aYNuhH2GuaNiE4UjkoRolFm",
		"creationDateTime": "2014-05-30T13:11:56Z",
		"walletAccountIdSold": "AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73",
		"customType": null,
		"walletId": "AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2",
		"walletAccountId": "AAEAAAP2wHer5G2K21wABSU-sITEYlyw95pStLQLoT9TxrCHcJ9pPNo_",
		"walletAccountItemId": "AAEAAAfCjEaHZli8L8akzpjTofA3udRJj_HdnCDYdBrV9H2S8tauyh6k",
		"marketId": "AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW",
		"orderId": "AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI",
		"otherTradeDealId": "AAEABGOj1rR4DJ2m2xrBDZqcIP94U6L_9rlC0amG9W2sdCvVy_N-ydr4",
		"tradeDealType": "Buy",
		"tradeDealSubtype": "MarketTaker",
		"tradeDealStatus": "Completed",
		"amount":
		{
			"currency": "XBT",
			"amount": 0.19622549
		},
		"amountSold":
		{
			"currency": "EUR",
			"amount": 20.53303527
		},
		"price":
		{
			"currency": "EUR",
			"amount": 104.64
		},
		"feeAmount":
		{
			"currency": "XBT",
			"amount": 0.00019623
		},
		"marketDealOwner":
		{
			"type": "MarketV1Deal",
			"id": "AAEAH3wOLq02MeYmW7OqZBQ4Vi-g1a16ZjWyJzJo4I2h2BIiy9E8oxNj"
		}
	}
}

```
### Error Response

Error-Response Example:

```
HTTP/1.1 400 Bad Request
{
	"requestId": "JTsUBAAAAUZML_4ZLSugK96cELw",
	"status": "Error",
	"errorDetails":
	[
		{
			"simpleName": "WalletException",
			"description": "[AuthenticationError] Api-Token required",
			"errorName": "AuthenticationError",
			"errorNumber": 4000000,
			"errorMessageShort": null,
			"errorMessageLong": null,
			"fieldName": null,
			"limitsViolated": null
		}
	]
}

```
## Deal list

<p>Retrieves the deals with the given properties</p>

	GET /api/1/deal/list

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| walletAccountId			| String			|  <p>By wallet account Id</p>							|
| marketId			| String			| **optional** <p>By market Id</p>							|
| orderId			| String			| **optional** <p>By order Id</p>							|
| tradeDealType			| String			| **optional** <p>By order type</p>							|
| tradeDealStatus			| String			| **optional** <p>By order status</p>							|
| fromDate			| String			| **optional** <p>Begin date range in UTC, in &#39;yyyy-MM-ddTHH:mm:ssZ&#39; format, e.g. &#39;2014-06-19T14:31:23Z&#39;</p>							|
| untilDate			| String			| **optional** <p>End date range in UTC, in &#39;yyyy-MM-ddTHH:mm:ssZ&#39; format, e.g. &#39;2014-06-19T14:31:23Z&#39;</p>							|
| startWith			| Number			| **optional** <p>the number of items to skip in the result-set (paging)</p>							|
| count			| Number			| **optional** <p>the number of items to return in the result-set (paging)</p>							|

### Success Response

Success-Response Example:

```
HTTP/1.1 200 OK
{
	"requestId": "sAlIlQAAAUazv4xQLSugK96cEKY",
	"status": "Success",
	"pagingInfo":
	{
		"requestedStartWith": 0,
		"requestedCount": 20,
		"actualCount": 1,
		"totalCount": 1,
		"totalPageCount": 1,
		"showPrevious": false,
		"currentPageNumber": 0,
		"showNext": false
	},
	"tradeDeals":
	[
		{
			"id": "AAEABGOj1rbiAVrGagoqt9fHYiEQ8FnkD53Ml2MPKtGYStcoRJi5APgI",
			"creationDateTime": "2014-05-23T11:23:23Z",
			"amount":
			{
				"currency": "XBT",
				"amount": 0.07123822
			},
			"walletId": "AAEAAAMk7LOB56yLbnxh--VUTzxMBTdEwQQrWoUqozaNWhh71fzVUCzQ",
			"walletAccountId": "AAEAAAP2wHesNlgJwictLGppA9NSFvYZ4BzMhMXkwxmCFsz0WjEfTuoV",
			"marketId": "AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW",
			"orderId": "AAEAAks1SVctbFaVKy2Y8OQXaq4fYBA0WXJxp87d1_SQAKG7dfw4xWG6",
			"tradeDealType": "Buy",
			"tradeDealSubtype": "MarketTaker",
			"tradeDealStatus": "Completed",
			"amountSold":
			{
				"currency": "EUR",
				"amount": 7.27662798
			},
			"price":
			{
				"currency": "EUR",
				"amount": 102.145
			},
			"feeAmount":
			{
				"currency": "XBT",
				"amount": 0.00007124
			}
		}
	]
}

```
### Error Response

Error-Response Example:

```
HTTP/1.1 400 Bad Request
{
	"requestId": "JTsUBAAAAUZML_4ZLSugK96cELw",
	"status": "Error",
	"errorDetails":
	[
		{
			"simpleName": "WalletException",
			"description": "[AuthenticationError] Api-Token required",
			"errorName": "AuthenticationError",
			"errorNumber": 4000000,
			"errorMessageShort": null,
			"errorMessageLong": null,
			"fieldName": null,
			"limitsViolated": null
		}
	]
}

```
# Market

## MarketDepth get

<p>Returns the MarketDepth for the market wit the given currencies.Supports ETag HTTP cache headers (If-None-Match).Each row in the bids and asks contains the following values:</p><ul><li>price in currency1</li><li>accumulated amount in currency1</li><li>accumulated amount in currency2</li></ul>

	GET /api/1/marketdepth/get/{currency1}/{currency2}

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| currency1			| String			|  <p>one of the market currencies, e.g. EUR</p>							|
| currency2			| String			|  <p>the other market currency, e.g. XBT</p>							|

### Success Response

Success-Response Example:

```
HTTP/1.1 200 OK
{
	"requestId": "sAlIlQAAAUaznM4BLSugK96cELw",
	"status": "Success"
	"marketDepth":
	{
		"market":
		{
			"id": "AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW",
			"currencyCode1": "EUR",
			"currencyCode2": "XBT",
			"description": "Public EUR/BTC market",
			"marketStatistics":
			{
				"timestamp": "2014-06-17T07:06:24Z",
				"buyItemCount": 2,
				"sellItemCount": 101,
				"buyItemAmount":
				{
					"currency": "EUR",
					"amount": 24.92
				},
				"sellItemAmount":
				{
					"currency": "XBT",
					"amount": 32.93380179
				},
				"buyPrice":
				{
					"currency": "EUR",
					"amount": 99.95
				},
				"sellPrice":
				{
					"currency": "EUR",
					"amount": 100
				},
				"lastPrice":
				{
					"currency": "EUR",
					"amount": 103.995
				}
			},
			"priceGranularity":
			{
				"currency": "EUR",
				"amount": 1e-8
			}
		},
		"asks":
		[
			[100, 150, 1.5],
			[100.0389496, 159.62345449, 1.59561306],
		],
		"bids":
		[
			[99.95, 9.995, 0.1],
			[99.68, 24.92, 0.25]
		]
	}
}

```
### Error Response

Error-Response Example:

```
HTTP/1.1 400 Bad Request
{
	"requestId": "JTsUBAAAAUZML_4ZLSugK96cELw",
	"status": "Error",
	"errorDetails":
	[
		{
			"simpleName": "WalletException",
			"description": "[AuthenticationError] Api-Token required",
			"errorName": "AuthenticationError",
			"errorNumber": 4000000,
			"errorMessageShort": null,
			"errorMessageLong": null,
			"fieldName": null,
			"limitsViolated": null
		}
	]
}

```
## Market count

<p>Counts available markets with optional currency filters</p>

	GET /api/1/market/count

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| currency1			| String			| **optional** <p>one of the market currencies, e.g. EUR</p>							|
| currency2			| String			| **optional** <p>the other market currency, e.g. XBT</p>							|

### Success Response

Success-Response Example:

```
HTTP/1.1 200 OK
{
  "count": 5,
  "requestId": "sAlIlQAAAUazi16dLSugK96cEKA",
  "status": "Success"
}

```
### Error Response

Error-Response Example:

```
HTTP/1.1 400 Bad Request
{
	"requestId": "JTsUBAAAAUZML_4ZLSugK96cELw",
	"status": "Error",
	"errorDetails":
	[
		{
			"simpleName": "WalletException",
			"description": "[AuthenticationError] Api-Token required",
			"errorName": "AuthenticationError",
			"errorNumber": 4000000,
			"errorMessageShort": null,
			"errorMessageLong": null,
			"fieldName": null,
			"limitsViolated": null
		}
	]
}

```
## Market list

<p>Lists available markets with optional currency filters</p>

	GET /api/1/market/list

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| currency1			| String			| **optional** <p>one of the market currencies, e.g. EUR</p>							|
| currency2			| String			| **optional** <p>the other market currency, e.g. XBT</p>							|
| startWith			| Number			| **optional** <p>the number of items to skip in the result-set (paging)</p>							|
| count			| Number			| **optional** <p>the number of items to return in the result-set, between 1 and 1000 (paging)</p>							|

### Success Response

Success-Response Example:

```
HTTP/1.1 200 OK
{
	"requestId": "sAlIlQAAAUazkO6XLSugK96cEL8",
	"status": "Success",
	"pagingInfo":
	{
		"requestedStartWith": 0,
		"requestedCount": 20,
		"actualCount": 1,
		"totalCount": 1,
		"showPrevious": false,
		"showNext": false,
		"currentPageNumber": 0,
		"totalPageCount": 1
	},
	"markets":
	[
		{
			"id": "AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW",
			"currencyCode1": "EUR",
			"currencyCode2": "XBT",
			"description": "Public EUR/BTC market",
			"marketStatistics":
			{
				"timestamp": "2014-06-17T07:06:24Z",
				"buyItemCount": 2,
				"sellItemCount": 101,
				"buyItemAmount":
				{
					"currency": "EUR",
					"amount": 24.92
				},
				"sellItemAmount":
				{
					"currency": "XBT",
					"amount": 32.93380179
				},
				"buyPrice":
				{
					"currency": "EUR",
					"amount": 99.95
				},
				"sellPrice":
				{
					"currency": "EUR",
					"amount": 100
				},
				"lastPrice":
				{
					"currency": "EUR",
					"amount": 103.995
				}
			},
			"priceGranularity":
			{
				"currency": "EUR",
				"amount": 1e-8
			}
		}
	]
}

```
### Error Response

Error-Response Example:

```
HTTP/1.1 400 Bad Request
{
	"requestId": "JTsUBAAAAUZML_4ZLSugK96cELw",
	"status": "Error",
	"errorDetails":
	[
		{
			"simpleName": "WalletException",
			"description": "[AuthenticationError] Api-Token required",
			"errorName": "AuthenticationError",
			"errorNumber": 4000000,
			"errorMessageShort": null,
			"errorMessageLong": null,
			"fieldName": null,
			"limitsViolated": null
		}
	]
}

```
## OrderBook get

<p>Returns the OrderBook for the market wit the given currencies.Supports ETag HTTP cache headers (If-None-Match).Each row in the bids and asks contains the following values:</p><ul><li>price in currency1</li><li>amount in currency1</li><li>amount in currency2</li></ul>

	GET /api/1/orderbook/get/{currency1}/{currency2}

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| currency1			| String			|  <p>one of the market currencies, e.g. EUR</p>							|
| currency2			| String			|  <p>the other market currency, e.g. XBT</p>							|

### Success Response

Success-Response Example:

```
HTTP/1.1 200 OK
{
	"requestId": "sAlIlQAAAUazlxXALSugK96cEL0",
	"status": "Success",
	"orderBook":
	{
		"market":
		{
			"id": "AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW",
			"currencyCode1": "EUR",
			"currencyCode2": "XBT",
			"description": "Public EUR/BTC market",
			"marketStatistics":
			{
				"timestamp": "2014-06-17T07:06:24Z",
				"buyItemCount": 2,
				"sellItemCount": 101,
				"buyItemAmount":
				{
					"currency": "EUR",
					"amount": 24.92
				},
				"sellItemAmount":
				{
					"currency": "XBT",
					"amount": 32.93380179
				},
				"buyPrice":
				{
					"currency": "EUR",
					"amount": 99.95
				},
				"sellPrice":
				{
					"currency": "EUR",
					"amount": 100
				},
				"lastPrice":
				{
					"currency": "EUR",
					"amount": 103.995
				}
			},
			"priceGranularity":
			{
				"currency": "EUR",
				"amount": 1e-8
			}
		},
		"asks":
		[
			[100, 150, 1.5],
			[100.65, 9.62345449, 0.09561306]
		],
		"bids":
		[
			[99.95, 9.995, 0.1],
			[99.5, 14.925, 0.15]
		]
	}
}

```
### Error Response

Error-Response Example:

```
HTTP/1.1 400 Bad Request
{
	"requestId": "JTsUBAAAAUZML_4ZLSugK96cELw",
	"status": "Error",
	"errorDetails":
	[
		{
			"simpleName": "WalletException",
			"description": "[AuthenticationError] Api-Token required",
			"errorName": "AuthenticationError",
			"errorNumber": 4000000,
			"errorMessageShort": null,
			"errorMessageLong": null,
			"fieldName": null,
			"limitsViolated": null
		}
	]
}

```
# Order

## Order get

<p>Retrieves an existing Order with the given ID, provided the currently authenticated user has access to it.</p>

	GET /api/1/order/get/{orderId}

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| orderId			| String			|  <p>unique ID of the order</p>							|

### Success Response

Success-Response Example:

```
HTTP/1.1 200 OK
{
	"requestId": "JTsUBAAAAUZMO8gILSugK96cEI4",
	"status": "Success",
	"tradeOrder":
	{
		"id": "AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI",
		"externalReferenceId": null
		"creationDateTime": "2014-05-30T08:25:24Z",
		"walletId": "AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2",
		"walletAccountId": "AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73",
		"marketId": "AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW",
		"tradeOrderType": "BuyMarket",
		"tradeOrderStatus": "Created",
		"tradeOrderMarketStatus": null,
		"priceLimit": null,
		"fillRatio": 0,
		"amount":
		{
			"currency": "EUR",
			"amount": 400
		},
		"buyAmount":
		{
			"currency": "XBT",
			"amount": 1
		},
		"totalAmountSold":
		{
			"currency": "EUR",
			"amount": 0
		},
		"totalAmountBought":
		{
			"currency": "XBT",
			"amount": 0
		}
	}
}

```
### Error Response

Error-Response Example:

```
HTTP/1.1 400 Bad Request
{
	"requestId": "JTsUBAAAAUZML_4ZLSugK96cELw",
	"status": "Error",
	"errorDetails":
	[
		{
			"simpleName": "WalletException",
			"description": "[AuthenticationError] Api-Token required",
			"errorName": "AuthenticationError",
			"errorNumber": 4000000,
			"errorMessageShort": null,
			"errorMessageLong": null,
			"fieldName": null,
			"limitsViolated": null
		}
	]
}

```
## Order cancel

<p>Cancels an existing Order with the given ID, provided the currently authenticated user has access to it.</p>

	POST /api/1/order/cancel/{orderId}

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| orderId			| String			|  <p>unique ID of the order</p>							|

### Success Response

Success-Response Example:

```
HTTP/1.1 200 OK
{
	"requestId": "JTsUBAAAAUZMO8gILSugK96cEI4",
	"status": "Success",
	"tradeOrder":
	{
		"id": "AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI",
		"externalReferenceId": null
		"creationDateTime": "2014-05-30T08:25:24Z",
		"walletId": "AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2",
		"walletAccountId": "AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73",
		"marketId": "AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW",
		"tradeOrderType": "BuyMarket",
		"tradeOrderStatus": "Created",
		"tradeOrderMarketStatus": null,
		"priceLimit": null,
		"fillRatio": 0,
		"amount":
		{
			"currency": "EUR",
			"amount": 400
		},
		"buyAmount":
		{
			"currency": "XBT",
			"amount": 1
		},
		"totalAmountSold":
		{
			"currency": "EUR",
			"amount": 0
		},
		"totalAmountBought":
		{
			"currency": "XBT",
			"amount": 0
		}
	}
}

```
### Error Response

Error-Response Example:

```
HTTP/1.1 400 Bad Request
{
	"requestId": "JTsUBAAAAUZML_4ZLSugK96cELw",
	"status": "Error",
	"errorDetails":
	[
		{
			"simpleName": "WalletException",
			"description": "[AuthenticationError] Api-Token required",
			"errorName": "AuthenticationError",
			"errorNumber": 4000000,
			"errorMessageShort": null,
			"errorMessageLong": null,
			"fieldName": null,
			"limitsViolated": null
		}
	]
}

```
## Order confirm

<p>Confirms an existing Order with the given ID, provided the currently authenticated user has access to it.</p>

	POST /api/1/order/confirm/{orderId}

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| orderId			| String			|  <p>unique ID of the order</p>							|

### Success Response

Success-Response Example:

```
HTTP/1.1 200 OK
{
	"requestId": "JTsUBAAAAUZNQevTLSugK96cEOo",
	"status": "Success",
	"tradeOrder":
	{
		"id": "AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI",
		"externalReferenceId": null,
		"creationDateTime": "2014-05-30T08:25:24Z",
		"fillRatio": 0,
		"walletId": "AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2",
		"walletAccountId": "AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73",
		"marketId": "AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW",
		"tradeOrderType": "BuyMarket",
		"tradeOrderStatus": "Confirmed",
		"tradeOrderMarketStatus": "SentToMarket",
		"priceLimit": null,
		"amount":
		{
			"currency": "EUR",
			"amount": 400
		},
		"buyAmount":
		{
			"currency": "XBT",
			"amount": 1
		},
		"totalAmountSold":
		{
			"currency": "EUR",
			"amount": 0
		},
		"totalAmountBought":
		{
			"currency": "XBT",
			"amount": 0
		}
	}
}

```
### Error Response

Error-Response Example:

```
HTTP/1.1 400 Bad Request
{
	"requestId": "JTsUBAAAAUZML_4ZLSugK96cELw",
	"status": "Error",
	"errorDetails":
	[
		{
			"simpleName": "WalletException",
			"description": "[AuthenticationError] Api-Token required",
			"errorName": "AuthenticationError",
			"errorNumber": 4000000,
			"errorMessageShort": null,
			"errorMessageLong": null,
			"fieldName": null,
			"limitsViolated": null
		}
	]
}

```
## Order count

<p>Retrieves the number of orders with the given properties</p>

	GET /api/1/order/count

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| walletAccountId			| String			|  <p>By wallet account Id</p>							|
| marketId			| String			| **optional** <p>By market Id</p>							|
| tradeOrderType			| String			| **optional** <p>By order type</p>							|
| tradeOrderStatus			| String			| **optional** <p>By order status</p>							|
| tradeOrderMarketStatus			| String			| **optional** <p>by order market status</p>							|
| fromDate			| String			| **optional** <p>Begin date range in UTC, in &#39;yyyy-MM-ddTHH:mm:ssZ&#39; format, e.g. &#39;2014-06-19T14:31:23Z&#39;</p>							|
| untilDate			| String			| **optional** <p>End date range in UTC, in &#39;yyyy-MM-ddTHH:mm:ssZ&#39; format, e.g. &#39;2014-06-19T14:31:23Z&#39;</p>							|

### Success Response

Success-Response Example:

```
HTTP/1.1 200 OK
{
	"count": 2,
	"requestId": "JTsUBAAAAUZrtnaOLSugK96cEBI",
	"status": "Success"
}

```
### Error Response

Error-Response Example:

```
HTTP/1.1 400 Bad Request
{
	"requestId": "JTsUBAAAAUZML_4ZLSugK96cELw",
	"status": "Error",
	"errorDetails":
	[
		{
			"simpleName": "WalletException",
			"description": "[AuthenticationError] Api-Token required",
			"errorName": "AuthenticationError",
			"errorNumber": 4000000,
			"errorMessageShort": null,
			"errorMessageLong": null,
			"fieldName": null,
			"limitsViolated": null
		}
	]
}

```
## Order create

<p>Creates new market order</p>

	POST /api/1/order/create/{currency1}/{currency2}

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| currency1			| String			|  <p>one of the market currencies, e.g. EUR</p>							|
| currency2			| String			|  <p>the other market currency, e.g. XBT</p>							|
| walletAccountId			| String			|  <p>your wallet account ID in the currency you want to sell</p>							|
| tradeOrderType			| String			|  <p>value from the list {&quot;BuyLimit&quot;, &quot;BuyMarket&quot;, &quot;SellLimit&quot;, &quot;SellMarket&quot;}</p>							|
| sellAmount			| Number			| **optional** <p>amount to sell, required for {&quot;BuyMarket&quot;, &quot;SellLimit&quot;, &quot;SellMarket&quot;}</p>							|
| sellCurrency			| String			| **optional** <p>currency of amount to sell, required for {&quot;BuyMarket&quot;, &quot;SellLimit&quot;, &quot;SellMarket&quot;}, must match currency of WalletAccountId</p>							|
| buyAmount			| Number			| **optional** <p>amount to buy, required for {&quot;BuyLimit&quot;, &quot;BuyMarket&quot;}</p>							|
| buyCurrency			| String			| **optional** <p>currency of amount to buy, required for {&quot;BuyLimit&quot;, &quot;BuyMarket&quot;}, must be different from currency of WalletAccountId</p>							|
| priceLimitAmount			| Number			| **optional** <p>set price limit amount, required for {&quot;BuyLimit&quot;, &quot;SellLimit&quot;}</p>							|
| priceLimitCurrency			| String			| **optional** <p>set price limit currency, required for {&quot;BuyLimit&quot;, &quot;SellLimit&quot;}, must match market primary currency</p>							|
| externalReferenceId			| String			| **optional** <p>set your own reference id for order, must be unique in walletAccountId-scope</p>							|

### Success Response

Success-Response Example:

```
HTTP/1.1 200 OK
{
	"requestId": "JTsUBAAAAUZMO8gILSugK96cEI4",
	"status": "Success",
	"tradeOrder":
	{
		"id": "AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI",
		"externalReferenceId": null
		"creationDateTime": "2014-05-30T08:25:24Z",
		"walletId": "AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2",
		"walletAccountId": "AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73",
		"marketId": "AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW",
		"tradeOrderType": "BuyMarket",
		"tradeOrderStatus": "Created",
		"tradeOrderMarketStatus": null,
		"priceLimit": null,
		"fillRatio": 0,
		"amount":
		{
			"currency": "EUR",
			"amount": 400
		},
		"buyAmount":
		{
			"currency": "XBT",
			"amount": 1
		},
		"totalAmountSold":
		{
			"currency": "EUR",
			"amount": 0
		},
		"totalAmountBought":
		{
			"currency": "XBT",
			"amount": 0
		}
	}
}

```
### Error Response

Error-Response Example:

```
HTTP/1.1 400 Bad Request
{
	"requestId": "JTsUBAAAAUZML_4ZLSugK96cELw",
	"status": "Error",
	"errorDetails":
	[
		{
			"simpleName": "WalletException",
			"description": "[AuthenticationError] Api-Token required",
			"errorName": "AuthenticationError",
			"errorNumber": 4000000,
			"errorMessageShort": null,
			"errorMessageLong": null,
			"fieldName": null,
			"limitsViolated": null
		}
	]
}

```
## Order get by ext ref Id

<p>Retrieves an existing Order with the given external reference ID, provided the currently authenticated user has access to it. Returns the same data as <a href="#api-Wallet-Wallet_get">Wallet Get</a></p>

	GET /api/1/order/getByExternalReferenceId/{walletAccountId}

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| externalReferenceId			| String			|  <p>external reference ID of the order</p>							|
| walletAccountId			| String			|  <p>wallet account Id</p>							|

### Success Response

Success-Response Example:

```
HTTP/1.1 200 OK
{
	"requestId": "JTsUBAAAAUZMO8gILSugK96cEI4",
	"status": "Success",
	"tradeOrder":
	{
		"id": "AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI",
		"externalReferenceId": null
		"creationDateTime": "2014-05-30T08:25:24Z",
		"walletId": "AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2",
		"walletAccountId": "AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73",
		"marketId": "AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW",
		"tradeOrderType": "BuyMarket",
		"tradeOrderStatus": "Created",
		"tradeOrderMarketStatus": null,
		"priceLimit": null,
		"fillRatio": 0,
		"amount":
		{
			"currency": "EUR",
			"amount": 400
		},
		"buyAmount":
		{
			"currency": "XBT",
			"amount": 1
		},
		"totalAmountSold":
		{
			"currency": "EUR",
			"amount": 0
		},
		"totalAmountBought":
		{
			"currency": "XBT",
			"amount": 0
		}
	}
}

```
### Error Response

Error-Response Example:

```
HTTP/1.1 400 Bad Request
{
	"requestId": "JTsUBAAAAUZML_4ZLSugK96cELw",
	"status": "Error",
	"errorDetails":
	[
		{
			"simpleName": "WalletException",
			"description": "[AuthenticationError] Api-Token required",
			"errorName": "AuthenticationError",
			"errorNumber": 4000000,
			"errorMessageShort": null,
			"errorMessageLong": null,
			"fieldName": null,
			"limitsViolated": null
		}
	]
}

```
## Order list

<p>Retrieves the list of orders with the given properties</p>

	GET /api/1/order/list

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| walletAccountId			| String			|  <p>By wallet account Id</p>							|
| marketId			| String			| **optional** <p>By market Id</p>							|
| tradeOrderType			| String			| **optional** <p>By order type</p>							|
| tradeOrderStatus			| String			| **optional** <p>By order status</p>							|
| tradeOrderMarketStatus			| String			| **optional** <p>by order market status</p>							|
| fromDate			| String			| **optional** <p>Begin date range in UTC, in &#39;yyyy-MM-ddTHH:mm:ssZ&#39; format, e.g. &#39;2014-06-19T14:31:23Z&#39;</p>							|
| untilDate			| String			| **optional** <p>End date range in UTC, in &#39;yyyy-MM-ddTHH:mm:ssZ&#39; format, e.g. &#39;2014-06-19T14:31:23Z&#39;</p>							|
| startWith			| Number			| **optional** <p>the number of items to skip in the result-set (paging)</p>							|
| count			| Number			| **optional** <p>the number of items to return in the result-set (paging)</p>							|

### Success Response

Success-Response Example:

```
HTTP/1.1 200 OK
{
	"requestId": "JTsUBAAAAUZrucx6LSugK96cEBE",
	"status": "Success",
	"pagingInfo":
	{
		"requestedStartWith": 0,
		"requestedCount": 20,
		"actualCount": 2,
		"totalCount": 2,
		"showPrevious": false,
		"currentPageNumber": 0,
		"totalPageCount": 1,
		"showNext": false
	},
	"tradeOrders":
	[
		{
			"id": "AAEAAks1SVZ5L_Ni4kziEuwD8q6LBIZXLi2rvlFKExsjtYi5Y3dmbFio",
			"creationDateTime": "2014-05-30T13:30:37Z",
			"walletId": "AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2",
			"walletAccountId": "AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73",
			"marketId": "AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW",
			"tradeOrderType": "BuyMarket",
			"tradeOrderStatus": "Cancelled",
			"tradeOrderMarketStatus": null,
			"priceLimit": null,
		   	"fillRatio": 0,
			"externalReferenceId": "test1",
			"amount":
			{
  				"currency": "EUR",
  				"amount": 300
			},
			"buyAmount":
			{
				"currency": "XBT",
				"amount": 1
			},
			"totalAmountSold":
			{
				"currency": "EUR",
				"amount": 0
			},
			"totalAmountBought":
			{
				"currency": "XBT",
				"amount": 0
			}
		},
		{
			"id": "AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI",
			"creationDateTime": "2014-05-30T08:25:24Z",
			"walletId": "AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2",
			"walletAccountId": "AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73",
			"marketId": "AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW",
			"tradeOrderType": "BuyMarket",
			"tradeOrderStatus": "Completed",
			"tradeOrderMarketStatus": "Completed",
			"priceLimit": null,
			"fillRatio": 1,
			"externalReferenceId": null
			"amount":
			{
				"currency": "EUR",
				"amount": 400
			},
			"buyAmount":
			{
				"currency": "XBT",
				"amount": 1
			},
			"totalAmountSold":
			{
				"currency": "EUR",
				"amount": 103.15504407
			},
			"totalAmountBought":
			{
				"currency": "XBT",
				"amount": 1
			}
		}
	]
}

```
### Error Response

Error-Response Example:

```
HTTP/1.1 400 Bad Request
{
	"requestId": "JTsUBAAAAUZML_4ZLSugK96cELw",
	"status": "Error",
	"errorDetails":
	[
		{
			"simpleName": "WalletException",
			"description": "[AuthenticationError] Api-Token required",
			"errorName": "AuthenticationError",
			"errorNumber": 4000000,
			"errorMessageShort": null,
			"errorMessageLong": null,
			"fieldName": null,
			"limitsViolated": null
		}
	]
}

```
# Public_Charts

## Orderbook

<p>Retrieves the orderbook for a public market for the given currency pair</p>

	GET /api/1/charts/orderbook

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| currency1			| String			|  <p>one of the market currencies, e.g. EUR</p>							|
| currency2			| String			|  <p>the other market currency, e.g. XBT</p>							|

### Success Response

Success-Response Example:

```
HTTP/1.1 200 OK
{
	"bids":
	[
		[20, 0.7879525],
		[2.5, 1],
		[2, 203],
		[1.99, 3],
		[1.895, 3.0223],
		[1.543, 2]
	],
	"asks":
	[
		[104, 1],
		[104.75, 116.67],
		[104.97, 23.1278],
		[12345678.90876543, 1],
		[10000000000, 0.1],
		[12345678901, 2]
	]
}

```
### Error Response

Error-Response Example:

```
HTTP/1.1 400 Bad Request
{
	"requestId": "JTsUBAAAAUZML_4ZLSugK96cELw",
	"status": "Error",
	"errorDetails":
	[
		{
			"simpleName": "WalletException",
			"description": "[AuthenticationError] Api-Token required",
			"errorName": "AuthenticationError",
			"errorNumber": 4000000,
			"errorMessageShort": null,
			"errorMessageLong": null,
			"fieldName": null,
			"limitsViolated": null
		}
	]
}

```
## Trades

<p>Retrieves the trades for a public market for the given currency pair</p>

	GET /api/1/charts/trades

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| currency1			| String			|  <p>one of the market currencies, e.g. EUR</p>							|
| currency2			| String			|  <p>the other market currency, e.g. XBT</p>							|
| since			| Number			|  <p>Unix-timestamp in seconds</p>							|

### Success Response

Success-Response Example:

```
HTTP/1.1 200 OK
[
	{
		"tid": 2,
		"price": 105.345,
		"amount": 0.4092,
		"date": 1399890346
	},
	{
		"tid": 4,
		"price": 105.515,
		"amount": 0.17760508,
		"date": 1399890506
	},
	{
		"tid": 6,
		"price": 105.365,
		"amount": 0.01805937,
		"date": 1399890506
	},
	{
		"tid": 8,
		"price": 105.79,
		"amount": 0.05553555,
		"date": 1399890616
	}
]

```
### Error Response

Error-Response Example:

```
HTTP/1.1 400 Bad Request
{
	"requestId": "JTsUBAAAAUZML_4ZLSugK96cELw",
	"status": "Error",
	"errorDetails":
	[
		{
			"simpleName": "WalletException",
			"description": "[AuthenticationError] Api-Token required",
			"errorName": "AuthenticationError",
			"errorNumber": 4000000,
			"errorMessageShort": null,
			"errorMessageLong": null,
			"fieldName": null,
			"limitsViolated": null
		}
	]
}

```
# Wallet

## Wallet get

<p>Returns the Wallet and account info</p>

	GET /api/1/wallet/get

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| currency			| String			| **optional** <p>a WalletAccount currency, if only WalletAccounts with that currency should be returned in the account-list</p>							|

### Success Response

Success-Response Example:

```
HTTP/1.1 200 OK
{
	"requestId": "JTsUBAAAAUZMyB1ULSugK96cEK0",
	"status": "Success",
	"wallet":
	{
		"walletId": "AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2",
		"walletStatus": "Active",
		"accounts":
		[
			{
				"walletAccountId": "AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73",
				"currency": "EUR",
				"accountType": "Main",
				"accountStatus": "Active",
				"accountName": "Default EUR account",
				"accountBalance":
				{
					"balance":
					{
						"currency": "EUR",
						"amount": 0
					},
					"reservedBalance":
					{
						"currency": "EUR",
						"amount": 0
					}
				}
			},
			{
				"walletAccountId": "AAEAAAP2wHer5G2K21wABSU-sITEYlyw95pStLQLoT9TxrCHcJ9pPNo_",
				"currency": "XBT",
				"accountType": "Main",
				"accountStatus": "Active",
				"accountName": "Default XBT account",
				"accountBalance":
				{
					"balance":
					{
						"currency": "XBT",
						"amount": 0
					},
					"reservedBalance":
					{
						"currency": "XBT",
						"amount": 0
					}
				}
			}
		]
	}
}

```
### Error Response

Error-Response Example:

```
HTTP/1.1 400 Bad Request
{
	"requestId": "JTsUBAAAAUZML_4ZLSugK96cELw",
	"status": "Error",
	"errorDetails":
	[
		{
			"simpleName": "WalletException",
			"description": "[AuthenticationError] Api-Token required",
			"errorName": "AuthenticationError",
			"errorNumber": 4000000,
			"errorMessageShort": null,
			"errorMessageLong": null,
			"fieldName": null,
			"limitsViolated": null
		}
	]
}

```

