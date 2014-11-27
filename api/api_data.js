define({ api: [
  {
    "type": "get",
    "url": "/api/1/deal/count",
    "title": "Deal count",
    "name": "Deal_count",
    "group": "Deal",
    "version": "1.0.0",
    "description": "<p>Retrieves the number of deals with the given properties</p>",
    "permission": "authenticated API user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "walletAccountId",
            "optional": false,
            "description": "<p>By wallet account Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "marketId",
            "optional": true,
            "description": "<p>By market Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "orderId",
            "optional": true,
            "description": "<p>By order Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "tradeDealType",
            "optional": true,
            "description": "<p>By order type, possible values:</br><code>Buy</code> - Buyer role in market context</br><code>Sell</code> - Seller role in market context</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "tradeDealStatus",
            "optional": true,
            "description": "<p>By order status, possible values:</br><code>Created</code> - Created, but not yet processed by the wallet</br><code>Completed</code> - Deal has been completely processed</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fromDate",
            "optional": true,
            "description": "<p>Begin date range in UTC, in &#39;yyyy-MM-ddTHH:mm:ssZ&#39; format, e.g. &#39;2014-06-19T14:31:23Z&#39;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "untilDate",
            "optional": true,
            "description": "<p>End date range in UTC, in &#39;yyyy-MM-ddTHH:mm:ssZ&#39; format, e.g. &#39;2014-06-19T14:31:23Z&#39;</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"count\": 2,\n\t\"requestId\": \"JTsUBAAAAUZrtnaOLSugK96cEBI\",\n\t\"status\": \"Success\"\n}\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\":\n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/deal/get/{dealId}",
    "title": "Deal get",
    "name": "Deal_get",
    "group": "Deal",
    "version": "1.0.0",
    "description": "<p>Retrieves an existing Deal with the given ID, provided the currently authenticated user has access to it.</p>",
    "permission": "authenticated API user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "dealId",
            "optional": false,
            "description": "<p>Deal Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"JTsUBAAAAUavl12RLSugK96cEZM\",\n\t\"status\": \"Success\",\n\t\"tradeDeal\":\n\t{\n\t\t\"id\": \"AAEABGOj1rR4C7xxreNhYNjXItSH_Yp93aYNuhH2GuaNiE4UjkoRolFm\",\n\t\t\"creationDateTime\": \"2014-05-30T13:11:56Z\",\n\t\t\"walletId\": \"AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2\",\n\t\t\"walletAccountId\": \"AAEAAAP2wHer5G2K21wABSU-sITEYlyw95pStLQLoT9TxrCHcJ9pPNo_\",\n\t\t\"marketId\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\"orderId\": \"AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI\",\n\t\t\"sequenceNumber\": 1,\n\t\t\"tradeDealType\": \"Buy\",\n\t\t\"tradeDealSubtype\": \"MarketTaker\",\n\t\t\"tradeDealStatus\": \"Completed\",\n\t\t\"amount\":\n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 0.19622549\n\t\t},\n\t\t\"amountSold\":\n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 20.53303527\n\t\t},\n\t\t\"price\":\n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 104.64\n\t\t},\n\t\t\"feeAmount\":\n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 0.00019623\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\":\n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/deal/list",
    "title": "Deal list",
    "name": "Deal_list",
    "group": "Deal",
    "version": "1.0.0",
    "description": "<p>Retrieves the deals with the given properties</p>",
    "permission": "authenticated API user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "walletAccountId",
            "optional": false,
            "description": "<p>By wallet account Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "marketId",
            "optional": true,
            "description": "<p>By market Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "orderId",
            "optional": true,
            "description": "<p>By order Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "tradeDealType",
            "optional": true,
            "description": "<p>By order type, possible values:</br><code>Buy</code> - Buyer role in market context</br><code>Sell</code> - Seller role in market context</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "tradeDealStatus",
            "optional": true,
            "description": "<p>By order status, possible values:</br><code>Created</code> - Created, but not yet processed by the wallet</br><code>Completed</code> - Deal has been completely processed</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fromDate",
            "optional": true,
            "description": "<p>Begin date range in UTC, in &#39;yyyy-MM-ddTHH:mm:ssZ&#39; format, e.g. &#39;2014-06-19T14:31:23Z&#39;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "untilDate",
            "optional": true,
            "description": "<p>End date range in UTC, in &#39;yyyy-MM-ddTHH:mm:ssZ&#39; format, e.g. &#39;2014-06-19T14:31:23Z&#39;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "startWith",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>The number of items to skip in the result-set (paging)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "count",
            "defaultValue": "20",
            "optional": true,
            "description": "<p>The number of items to return in the result-set (paging)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sorting",
            "defaultValue": "-Id",
            "optional": true,
            "description": "<p>Sorting criteria. You could use the sorting API parameter, e.g. with the sorting you&#39;d like, e.g. <code>+CreationDateTime|+Id</code> to sort ascending by creationDateTime, and ascending by id for equal creationDateTime. Currently if you specify no sorting, the sorting is <code>-Id</code> which is descending by id, which means the newest deals are always the first in the list, provided the IDs are nicely generated.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"sAlIlQAAAUazv4xQLSugK96cEKY\",\n\t\"status\": \"Success\",\n\t\"pagingInfo\":\n\t{\n\t\t\"requestedStartWith\": 0,\n\t\t\"requestedCount\": 20,\n\t\t\"actualCount\": 1,\n\t\t\"totalCount\": 1,\n\t\t\"totalPageCount\": 1,\n\t\t\"showPrevious\": false,\n\t\t\"currentPageNumber\": 0,\n\t\t\"showNext\": false\n\t},\n\t\"tradeDeals\":\n\t[\n\t\t{\n\t\t\t\"id\": \"AAEABGOj1rbiAVrGagoqt9fHYiEQ8FnkD53Ml2MPKtGYStcoRJi5APgI\",\n\t\t\t\"creationDateTime\": \"2014-05-23T11:23:23Z\",\n\t\t\t\"amount\":\n\t\t\t{\n\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\"amount\": 0.07123822\n\t\t\t},\n\t\t\t\"walletId\": \"AAEAAAMk7LOB56yLbnxh--VUTzxMBTdEwQQrWoUqozaNWhh71fzVUCzQ\",\n\t\t\t\"walletAccountId\": \"AAEAAAP2wHesNlgJwictLGppA9NSFvYZ4BzMhMXkwxmCFsz0WjEfTuoV\",\n\t\t\t\"marketId\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\t\"orderId\": \"AAEAAks1SVctbFaVKy2Y8OQXaq4fYBA0WXJxp87d1_SQAKG7dfw4xWG6\",\n\t\t\t\"sequenceNumber\": 1,\n\t\t\t\"tradeDealType\": \"Buy\",\n\t\t\t\"tradeDealSubtype\": \"MarketTaker\",\n\t\t\t\"tradeDealStatus\": \"Completed\",\n\t\t\t\"amountSold\":\n\t\t\t{\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"amount\": 7.27662798\n\t\t\t},\n\t\t\t\"price\":\n\t\t\t{\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"amount\": 102.145\n\t\t\t},\n\t\t\t\"feeAmount\":\n\t\t\t{\n\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\"amount\": 0.00007124\n\t\t\t}\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\":\n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/marketdepth/get/{currency1}/{currency2}",
    "title": "MarketDepth get",
    "name": "MarketDepth_get",
    "group": "Market",
    "version": "1.0.0",
    "description": "<p>Returns the MarketDepth for the market with the given currencies.</br>Supports ETag HTTP cache headers (If-None-Match).</br>Please note that the MarketDepth shows how many coins you can get for which aggregated price.</br>Each row in the bids and asks contains the following values:</p><ul><li>price in currency1</li><li>accumulated amount in currency1</li><li>accumulated amount in currency2</li></ul>",
    "permission": "public",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency1",
            "optional": false,
            "description": "<p>one of the market currencies, e.g. EUR</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency2",
            "optional": false,
            "description": "<p>the other market currency, e.g. XBT</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\":\n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"sAlIlQAAAUaznM4BLSugK96cELw\",\n\t\"status\": \"Success\"\n\t\"marketDepth\":\n\t{\n\t\t\"market\":\n\t\t{\n\t\t\t\"id\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\t\"currencyCode1\": \"EUR\",\n\t\t\t\"currencyCode2\": \"XBT\",\n\t\t\t\"description\": \"Public EUR/BTC market\",\n\t\t\t\"marketStatistics\":\n\t\t\t{\n\t\t\t\t\"timestamp\": \"2014-06-17T07:06:24Z\",\n\t\t\t\t\"buyItemCount\": 2,\n\t\t\t\t\"sellItemCount\": 101,\n\t\t\t\t\"buyItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 24.92\n\t\t\t\t},\n\t\t\t\t\"sellItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\"amount\": 32.93380179\n\t\t\t\t},\n\t\t\t\t\"buyPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 99.95\n\t\t\t\t},\n\t\t\t\t\"sellPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 100\n\t\t\t\t},\n\t\t\t\t\"lastPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 103.995\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"priceGranularity\":\n\t\t\t{\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"amount\": 1e-8\n\t\t\t}\n\t\t},\n\t\t\"asks\":\n\t\t[\n\t\t\t[100, 150, 1.5],\n\t\t\t[100.0389496, 159.62345449, 1.59561306],\n\t\t],\n\t\t\"bids\":\n\t\t[\n\t\t\t[99.95, 9.995, 0.1],\n\t\t\t[99.68, 24.92, 0.25]\n\t\t]\n\t}\n}\n"
        }
      ]
    },
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/market/count",
    "title": "Market count",
    "name": "Market_count",
    "group": "Market",
    "version": "1.0.0",
    "description": "<p>Counts available markets with optional currency filters</p>",
    "permission": "public",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency1",
            "optional": true,
            "description": "<p>one of the market currencies, e.g. EUR</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency2",
            "optional": true,
            "description": "<p>the other market currency, e.g. XBT</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\":\n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"count\": 5,\n  \"requestId\": \"sAlIlQAAAUazi16dLSugK96cEKA\",\n  \"status\": \"Success\"\n}\n"
        }
      ]
    },
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/market/list",
    "title": "Market list",
    "name": "Market_list",
    "group": "Market",
    "version": "1.0.0",
    "description": "<p>Lists available markets with optional currency filters</p>",
    "permission": "public",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency1",
            "optional": true,
            "description": "<p>one of the market currencies, e.g. EUR</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency2",
            "optional": true,
            "description": "<p>the other market currency, e.g. XBT</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "startWith",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>the number of items to skip in the result-set (paging)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "count",
            "defaultValue": "20",
            "optional": true,
            "description": "<p>the number of items to return in the result-set, between 1 and 1000 (paging)</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\":\n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"sAlIlQAAAUazkO6XLSugK96cEL8\",\n\t\"status\": \"Success\",\n\t\"pagingInfo\":\n\t{\n\t\t\"requestedStartWith\": 0,\n\t\t\"requestedCount\": 20,\n\t\t\"actualCount\": 1,\n\t\t\"totalCount\": 1,\n\t\t\"showPrevious\": false,\n\t\t\"showNext\": false,\n\t\t\"currentPageNumber\": 0,\n\t\t\"totalPageCount\": 1\n\t},\n\t\"markets\":\n\t[\n\t\t{\n\t\t\t\"id\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\t\"currencyCode1\": \"EUR\",\n\t\t\t\"currencyCode2\": \"XBT\",\n\t\t\t\"description\": \"Public EUR/BTC market\",\n\t\t\t\"marketStatistics\":\n\t\t\t{\n\t\t\t\t\"timestamp\": \"2014-06-17T07:06:24Z\",\n\t\t\t\t\"buyItemCount\": 2,\n\t\t\t\t\"sellItemCount\": 101,\n\t\t\t\t\"buyItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 24.92\n\t\t\t\t},\n\t\t\t\t\"sellItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\"amount\": 32.93380179\n\t\t\t\t},\n\t\t\t\t\"buyPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 99.95\n\t\t\t\t},\n\t\t\t\t\"sellPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 100\n\t\t\t\t},\n\t\t\t\t\"lastPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 103.995\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"priceGranularity\":\n\t\t\t{\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"amount\": 1e-8\n\t\t\t}\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/orderbook/get/{currency1}/{currency2}",
    "title": "OrderBook get",
    "name": "OrderBook_get",
    "group": "Market",
    "version": "1.0.0",
    "description": "<p>Returns the OrderBook for the market wit the given currencies.Supports ETag HTTP cache headers (If-None-Match).Each row in the bids and asks contains the following values:</p><ul><li>price in currency1</li><li>amount in currency1</li><li>amount in currency2</li></ul>",
    "permission": "public",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency1",
            "optional": false,
            "description": "<p>one of the market currencies, e.g. EUR</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency2",
            "optional": false,
            "description": "<p>the other market currency, e.g. XBT</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\":\n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"sAlIlQAAAUazlxXALSugK96cEL0\",\n\t\"status\": \"Success\",\n\t\"orderBook\":\n\t{\n\t\t\"market\":\n\t\t{\n\t\t\t\"id\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\t\"currencyCode1\": \"EUR\",\n\t\t\t\"currencyCode2\": \"XBT\",\n\t\t\t\"description\": \"Public EUR/BTC market\",\n\t\t\t\"marketStatistics\":\n\t\t\t{\n\t\t\t\t\"timestamp\": \"2014-06-17T07:06:24Z\",\n\t\t\t\t\"buyItemCount\": 2,\n\t\t\t\t\"sellItemCount\": 101,\n\t\t\t\t\"buyItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 24.92\n\t\t\t\t},\n\t\t\t\t\"sellItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\"amount\": 32.93380179\n\t\t\t\t},\n\t\t\t\t\"buyPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 99.95\n\t\t\t\t},\n\t\t\t\t\"sellPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 100\n\t\t\t\t},\n\t\t\t\t\"lastPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 103.995\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"priceGranularity\":\n\t\t\t{\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"amount\": 1e-8\n\t\t\t}\n\t\t},\n\t\t\"asks\":\n\t\t[\n\t\t\t[100, 150, 1.5],\n\t\t\t[100.65, 9.62345449, 0.09561306]\n\t\t],\n\t\t\"bids\":\n\t\t[\n\t\t\t[99.95, 9.995, 0.1],\n\t\t\t[99.5, 14.925, 0.15]\n\t\t]\n\t}\n}\n"
        }
      ]
    },
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/order/get/{orderId}",
    "title": "Order get",
    "name": "Order_Get",
    "group": "Order",
    "version": "1.0.0",
    "description": "<p>Retrieves an existing Order with the given ID, provided the currently authenticated user has access to it.</p>",
    "permission": "authenticated user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "orderId",
            "optional": false,
            "description": "<p>unique ID of the order</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\":\n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"JTsUBAAAAUZMO8gILSugK96cEI4\",\n\t\"status\": \"Success\",\n\t\"tradeOrder\":\n\t{\n\t\t\"id\": \"AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI\",\n\t\t\"externalReferenceId\": null\n\t\t\"creationDateTime\": \"2014-05-30T08:25:24Z\",\n\t\t\"walletId\": \"AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2\",\n\t\t\"walletAccountId\": \"AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73\",\n\t\t\"marketId\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\"tradeOrderType\": \"BuyMarket\",\n\t\t\"tradeOrderStatus\": \"Created\",\n\t\t\"tradeOrderMarketStatus\": null,\n\t\t\"priceLimit\": null,\n\t\t\"fillRatio\": 0,\n\t\t\"amount\":\n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 400\n\t\t},\n\t\t\"buyAmount\":\n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 1\n\t\t},\n\t\t\"totalAmountSold\":\n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 0\n\t\t},\n\t\t\"totalAmountBought\":\n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 0\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "post",
    "url": "/api/1/order/cancel/{orderId}",
    "title": "Order cancel",
    "name": "Order_cancel",
    "group": "Order",
    "version": "1.0.0",
    "description": "<p>Cancels an existing Order with the given ID, provided the currently authenticated user has access to it.</p>",
    "permission": "authenticated user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "orderId",
            "optional": false,
            "description": "<p>unique ID of the order</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\":\n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"JTsUBAAAAUZMO8gILSugK96cEI4\",\n\t\"status\": \"Success\",\n\t\"tradeOrder\":\n\t{\n\t\t\"id\": \"AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI\",\n\t\t\"externalReferenceId\": null\n\t\t\"creationDateTime\": \"2014-05-30T08:25:24Z\",\n\t\t\"walletId\": \"AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2\",\n\t\t\"walletAccountId\": \"AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73\",\n\t\t\"marketId\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\"tradeOrderType\": \"BuyMarket\",\n\t\t\"tradeOrderStatus\": \"Created\",\n\t\t\"tradeOrderMarketStatus\": null,\n\t\t\"priceLimit\": null,\n\t\t\"fillRatio\": 0,\n\t\t\"amount\":\n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 400\n\t\t},\n\t\t\"buyAmount\":\n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 1\n\t\t},\n\t\t\"totalAmountSold\":\n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 0\n\t\t},\n\t\t\"totalAmountBought\":\n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 0\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "post",
    "url": "/api/1/order/confirm/{orderId}",
    "title": "Order confirm",
    "name": "Order_confirm",
    "group": "Order",
    "version": "1.0.0",
    "description": "<p>Confirms an existing Order with the given ID, provided the currently authenticated user has access to it.</p>",
    "permission": "authenticated user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "orderId",
            "optional": false,
            "description": "<p>unique ID of the order</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"JTsUBAAAAUZNQevTLSugK96cEOo\",\n\t\"status\": \"Success\",\n\t\"tradeOrder\":\n\t{\n\t\t\"id\": \"AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI\",\n\t\t\"externalReferenceId\": null,\n\t\t\"creationDateTime\": \"2014-05-30T08:25:24Z\",\n\t\t\"fillRatio\": 0,\n\t\t\"walletId\": \"AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2\",\n\t\t\"walletAccountId\": \"AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73\",\n\t\t\"marketId\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\"tradeOrderType\": \"BuyMarket\",\n\t\t\"tradeOrderStatus\": \"Confirmed\",\n\t\t\"tradeOrderMarketStatus\": \"SentToMarket\",\n\t\t\"priceLimit\": null,\n\t\t\"amount\":\n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 400\n\t\t},\n\t\t\"buyAmount\":\n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 1\n\t\t},\n\t\t\"totalAmountSold\":\n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 0\n\t\t},\n\t\t\"totalAmountBought\":\n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 0\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\":\n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/order/count",
    "title": "Order count",
    "name": "Order_count",
    "group": "Order",
    "version": "1.0.0",
    "description": "<p>Retrieves the number of orders with the given properties</p>",
    "permission": "authenticated API user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "walletAccountId",
            "optional": false,
            "description": "<p>By wallet account Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "marketId",
            "optional": true,
            "description": "<p>By market Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "tradeOrderType",
            "optional": true,
            "description": "<p>By order type, possible values:</br><code>BuyMarket</code> - Buy at best market price</br><code>BuyLimit</code> - Buy at defined price or better</br><code>SellMarket</code> - Sell at best market price</br><code>SellLimit</code> - Sell at defined price or better</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "tradeOrderStatus",
            "optional": true,
            "description": "<p>By order status, possible values:</br><code>Created</code> - Created, but not yet active</br><code>Confirmed</code> - Confirmed, to or in order-book</br><code>Completed</code> - Order has been completely executed in at least 1 TradeDeal</br><code>Cancelled</code> - Order has been cancelled</br><code>Expired</code> - Order has been expired - typically after 1 day without being confirmed</br><code>Rejected</code> - Order has been rejected by the market</br></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "tradeOrderMarketStatus",
            "optional": true,
            "description": "<p>By order market status, possible values:</br><code>PendingSendToMarket</code> - Order is to be sent to the market</br><code>SentToMarket</code> - Order has been sent to the market</br><code>InOrderBook</code> - Order has been received by the market, and placed into the order-book</br><code>Completed</code> - Order has been completely executed, and removed from the order-book</br><code>PendingCancellationRequest</code> - Cancellation request is to be sent to the market</br><code>CancellationRequested</code> - Cancellation request has been sent to the market</br><code>Cancelled</code> - Order has been cancelled in the market, and removed from the order-book - though may still have been partially executed</br><code>Rejected</code> - Order has been rejected by the market</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fromDate",
            "optional": true,
            "description": "<p>Begin date range in UTC, in &#39;yyyy-MM-ddTHH:mm:ssZ&#39; format, e.g. &#39;2014-06-19T14:31:23Z&#39;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "untilDate",
            "optional": true,
            "description": "<p>End date range in UTC, in &#39;yyyy-MM-ddTHH:mm:ssZ&#39; format, e.g. &#39;2014-06-19T14:31:23Z&#39;</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"count\": 2,\n\t\"requestId\": \"JTsUBAAAAUZrtnaOLSugK96cEBI\",\n\t\"status\": \"Success\"\n}\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\":\n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "post",
    "url": "/api/1/order/create/{currency1}/{currency2}",
    "title": "Order create",
    "name": "Order_create",
    "group": "Order",
    "version": "1.0.0",
    "description": "<p>Creates new market order</p>",
    "permission": "authenticated user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency1",
            "optional": false,
            "description": "<p>one of the market currencies, e.g. EUR</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency2",
            "optional": false,
            "description": "<p>the other market currency, e.g. XBT</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "walletAccountId",
            "optional": false,
            "description": "<p>your wallet account ID in the currency you want to sell</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "tradeOrderType",
            "optional": false,
            "description": "<p>value from the list {&quot;BuyLimit&quot;, &quot;BuyMarket&quot;, &quot;SellLimit&quot;, &quot;SellMarket&quot;}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "sellAmount",
            "optional": true,
            "description": "<p>amount to sell, required for {&quot;BuyMarket&quot;, &quot;SellLimit&quot;, &quot;SellMarket&quot;}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sellCurrency",
            "optional": true,
            "description": "<p>currency of amount to sell, required for {&quot;BuyMarket&quot;, &quot;SellLimit&quot;, &quot;SellMarket&quot;}, must match currency of WalletAccountId</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "buyAmount",
            "optional": true,
            "description": "<p>amount to buy, required for {&quot;BuyLimit&quot;, &quot;BuyMarket&quot;}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "buyCurrency",
            "optional": true,
            "description": "<p>currency of amount to buy, required for {&quot;BuyLimit&quot;, &quot;BuyMarket&quot;}, must be different from currency of WalletAccountId</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "priceLimitAmount",
            "optional": true,
            "description": "<p>set price limit amount, required for {&quot;BuyLimit&quot;, &quot;SellLimit&quot;}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "priceLimitCurrency",
            "optional": true,
            "description": "<p>set price limit currency, required for {&quot;BuyLimit&quot;, &quot;SellLimit&quot;}, must match market primary currency</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "externalReferenceId",
            "optional": true,
            "description": "<p>set your own reference id for order, must be unique in walletAccountId-scope</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\":\n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"JTsUBAAAAUZMO8gILSugK96cEI4\",\n\t\"status\": \"Success\",\n\t\"tradeOrder\":\n\t{\n\t\t\"id\": \"AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI\",\n\t\t\"externalReferenceId\": null\n\t\t\"creationDateTime\": \"2014-05-30T08:25:24Z\",\n\t\t\"walletId\": \"AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2\",\n\t\t\"walletAccountId\": \"AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73\",\n\t\t\"marketId\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\"tradeOrderType\": \"BuyMarket\",\n\t\t\"tradeOrderStatus\": \"Created\",\n\t\t\"tradeOrderMarketStatus\": null,\n\t\t\"priceLimit\": null,\n\t\t\"fillRatio\": 0,\n\t\t\"amount\":\n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 400\n\t\t},\n\t\t\"buyAmount\":\n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 1\n\t\t},\n\t\t\"totalAmountSold\":\n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 0\n\t\t},\n\t\t\"totalAmountBought\":\n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 0\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/order/getByExternalReferenceId/{walletAccountId}",
    "title": "Order get by ext ref Id",
    "name": "Order_get_by_external_reference_Id",
    "group": "Order",
    "version": "1.0.0",
    "description": "<p>Retrieves an existing Order with the given external reference ID, provided the currently authenticated user has access to it. Returns the same data as <a href=\"#api-Wallet-Wallet_get\">Wallet Get</a></p>",
    "permission": "authenticated user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "externalReferenceId",
            "optional": false,
            "description": "<p>external reference ID of the order</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "walletAccountId",
            "optional": false,
            "description": "<p>wallet account Id</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\":\n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"JTsUBAAAAUZMO8gILSugK96cEI4\",\n\t\"status\": \"Success\",\n\t\"tradeOrder\":\n\t{\n\t\t\"id\": \"AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI\",\n\t\t\"externalReferenceId\": null\n\t\t\"creationDateTime\": \"2014-05-30T08:25:24Z\",\n\t\t\"walletId\": \"AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2\",\n\t\t\"walletAccountId\": \"AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73\",\n\t\t\"marketId\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\"tradeOrderType\": \"BuyMarket\",\n\t\t\"tradeOrderStatus\": \"Created\",\n\t\t\"tradeOrderMarketStatus\": null,\n\t\t\"priceLimit\": null,\n\t\t\"fillRatio\": 0,\n\t\t\"amount\":\n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 400\n\t\t},\n\t\t\"buyAmount\":\n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 1\n\t\t},\n\t\t\"totalAmountSold\":\n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 0\n\t\t},\n\t\t\"totalAmountBought\":\n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 0\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/order/list",
    "title": "Order list",
    "name": "Order_list",
    "group": "Order",
    "version": "1.0.0",
    "description": "<p>Retrieves the list of orders with the given properties</p>",
    "permission": "authenticated API user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "walletAccountId",
            "optional": false,
            "description": "<p>By wallet account Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "marketId",
            "optional": true,
            "description": "<p>By market Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "tradeOrderType",
            "optional": true,
            "description": "<p>By order type, possible values:</br><code>BuyMarket</code> - Buy at best market price</br><code>BuyLimit</code> - Buy at defined price or better</br><code>SellMarket</code> - Sell at best market price</br><code>SellLimit</code> - Sell at defined price or better</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "tradeOrderStatus",
            "optional": true,
            "description": "<p>By order status, possible values:</br><code>Created</code> - Created, but not yet active</br><code>Confirmed</code> - Confirmed, to or in order-book</br><code>Completed</code> - Order has been completely executed in at least 1 TradeDeal</br><code>Cancelled</code> - Order has been cancelled</br><code>Expired</code> - Order has been expired - typically after 1 day without being confirmed</br><code>Rejected</code> - Order has been rejected by the market</br></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "tradeOrderMarketStatus",
            "optional": true,
            "description": "<p>By order market status, possible values:</br><code>PendingSendToMarket</code> - Order is to be sent to the market</br><code>SentToMarket</code> - Order has been sent to the market</br><code>InOrderBook</code> - Order has been received by the market, and placed into the order-book</br><code>Completed</code> - Order has been completely executed, and removed from the order-book</br><code>PendingCancellationRequest</code> - Cancellation request is to be sent to the market</br><code>CancellationRequested</code> - Cancellation request has been sent to the market</br><code>Cancelled</code> - Order has been cancelled in the market, and removed from the order-book - though may still have been partially executed</br><code>Rejected</code> - Order has been rejected by the market</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fromDate",
            "optional": true,
            "description": "<p>Begin date range in UTC, in &#39;yyyy-MM-ddTHH:mm:ssZ&#39; format, e.g. &#39;2014-06-19T14:31:23Z&#39;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "untilDate",
            "optional": true,
            "description": "<p>End date range in UTC, in &#39;yyyy-MM-ddTHH:mm:ssZ&#39; format, e.g. &#39;2014-06-19T14:31:23Z&#39;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "startWith",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>the number of items to skip in the result-set (paging)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "count",
            "defaultValue": "20",
            "optional": true,
            "description": "<p>the number of items to return in the result-set (paging)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"JTsUBAAAAUZrucx6LSugK96cEBE\",\n\t\"status\": \"Success\",\n\t\"pagingInfo\":\n\t{\n\t\t\"requestedStartWith\": 0,\n\t\t\"requestedCount\": 20,\n\t\t\"actualCount\": 2,\n\t\t\"totalCount\": 2,\n\t\t\"showPrevious\": false,\n\t\t\"currentPageNumber\": 0,\n\t\t\"totalPageCount\": 1,\n\t\t\"showNext\": false\n\t},\n\t\"tradeOrders\":\n\t[\n\t\t{\n\t\t\t\"id\": \"AAEAAks1SVZ5L_Ni4kziEuwD8q6LBIZXLi2rvlFKExsjtYi5Y3dmbFio\",\n\t\t\t\"creationDateTime\": \"2014-05-30T13:30:37Z\",\n\t\t\t\"walletId\": \"AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2\",\n\t\t\t\"walletAccountId\": \"AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73\",\n\t\t\t\"marketId\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\t\"tradeOrderType\": \"BuyMarket\",\n\t\t\t\"tradeOrderStatus\": \"Cancelled\",\n\t\t\t\"tradeOrderMarketStatus\": null,\n\t\t\t\"priceLimit\": null,\n\t\t   \t\"fillRatio\": 0,\n\t\t\t\"externalReferenceId\": \"test1\",\n\t\t\t\"amount\":\n\t\t\t{\n  \t\t\t\t\"currency\": \"EUR\",\n  \t\t\t\t\"amount\": 300\n\t\t\t},\n\t\t\t\"buyAmount\":\n\t\t\t{\n\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\"amount\": 1\n\t\t\t},\n\t\t\t\"totalAmountSold\":\n\t\t\t{\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"amount\": 0\n\t\t\t},\n\t\t\t\"totalAmountBought\":\n\t\t\t{\n\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\"amount\": 0\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"id\": \"AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI\",\n\t\t\t\"creationDateTime\": \"2014-05-30T08:25:24Z\",\n\t\t\t\"walletId\": \"AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2\",\n\t\t\t\"walletAccountId\": \"AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73\",\n\t\t\t\"marketId\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\t\"tradeOrderType\": \"BuyMarket\",\n\t\t\t\"tradeOrderStatus\": \"Completed\",\n\t\t\t\"tradeOrderMarketStatus\": \"Completed\",\n\t\t\t\"priceLimit\": null,\n\t\t\t\"fillRatio\": 1,\n\t\t\t\"externalReferenceId\": null\n\t\t\t\"amount\":\n\t\t\t{\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"amount\": 400\n\t\t\t},\n\t\t\t\"buyAmount\":\n\t\t\t{\n\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\"amount\": 1\n\t\t\t},\n\t\t\t\"totalAmountSold\":\n\t\t\t{\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"amount\": 103.15504407\n\t\t\t},\n\t\t\t\"totalAmountBought\":\n\t\t\t{\n\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\"amount\": 1\n\t\t\t}\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\":\n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"sAlIlQAAAUazlxXALSugK96cEL0\",\n\t\"status\": \"Success\",\n\t\"orderBook\":\n\t{\n\t\t\"market\":\n\t\t{\n\t\t\t\"id\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\t\"currencyCode1\": \"EUR\",\n\t\t\t\"currencyCode2\": \"XBT\",\n\t\t\t\"description\": \"Public EUR/BTC market\",\n\t\t\t\"marketStatistics\":\n\t\t\t{\n\t\t\t\t\"timestamp\": \"2014-06-17T07:06:24Z\",\n\t\t\t\t\"buyItemCount\": 2,\n\t\t\t\t\"sellItemCount\": 101,\n\t\t\t\t\"buyItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 24.92\n\t\t\t\t},\n\t\t\t\t\"sellItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\"amount\": 32.93380179\n\t\t\t\t},\n\t\t\t\t\"buyPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 99.95\n\t\t\t\t},\n\t\t\t\t\"sellPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 100\n\t\t\t\t},\n\t\t\t\t\"lastPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 103.995\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"priceGranularity\":\n\t\t\t{\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"amount\": 1e-8\n\t\t\t}\n\t\t},\n\t\t\"asks\":\n\t\t[\n\t\t\t[100, 150, 1.5],\n\t\t\t[100.65, 9.62345449, 0.09561306]\n\t\t],\n\t\t\"bids\":\n\t\t[\n\t\t\t[99.95, 9.995, 0.1],\n\t\t\t[99.5, 14.925, 0.15]\n\t\t]\n\t}\n}\n"
        }
      ]
    },
    "group": "PublicTradeApiController_java",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"sAlIlQAAAUazkO6XLSugK96cEL8\",\n\t\"status\": \"Success\",\n\t\"pagingInfo\":\n\t{\n\t\t\"requestedStartWith\": 0,\n\t\t\"requestedCount\": 20,\n\t\t\"actualCount\": 1,\n\t\t\"totalCount\": 1,\n\t\t\"showPrevious\": false,\n\t\t\"showNext\": false,\n\t\t\"currentPageNumber\": 0,\n\t\t\"totalPageCount\": 1\n\t},\n\t\"markets\":\n\t[\n\t\t{\n\t\t\t\"id\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\t\"currencyCode1\": \"EUR\",\n\t\t\t\"currencyCode2\": \"XBT\",\n\t\t\t\"description\": \"Public EUR/BTC market\",\n\t\t\t\"marketStatistics\":\n\t\t\t{\n\t\t\t\t\"timestamp\": \"2014-06-17T07:06:24Z\",\n\t\t\t\t\"buyItemCount\": 2,\n\t\t\t\t\"sellItemCount\": 101,\n\t\t\t\t\"buyItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 24.92\n\t\t\t\t},\n\t\t\t\t\"sellItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\"amount\": 32.93380179\n\t\t\t\t},\n\t\t\t\t\"buyPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 99.95\n\t\t\t\t},\n\t\t\t\t\"sellPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 100\n\t\t\t\t},\n\t\t\t\t\"lastPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 103.995\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"priceGranularity\":\n\t\t\t{\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"amount\": 1e-8\n\t\t\t}\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "group": "PublicTradeApiController_java",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"sAlIlQAAAUaznM4BLSugK96cELw\",\n\t\"status\": \"Success\"\n\t\"marketDepth\":\n\t{\n\t\t\"market\":\n\t\t{\n\t\t\t\"id\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\t\"currencyCode1\": \"EUR\",\n\t\t\t\"currencyCode2\": \"XBT\",\n\t\t\t\"description\": \"Public EUR/BTC market\",\n\t\t\t\"marketStatistics\":\n\t\t\t{\n\t\t\t\t\"timestamp\": \"2014-06-17T07:06:24Z\",\n\t\t\t\t\"buyItemCount\": 2,\n\t\t\t\t\"sellItemCount\": 101,\n\t\t\t\t\"buyItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 24.92\n\t\t\t\t},\n\t\t\t\t\"sellItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\"amount\": 32.93380179\n\t\t\t\t},\n\t\t\t\t\"buyPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 99.95\n\t\t\t\t},\n\t\t\t\t\"sellPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 100\n\t\t\t\t},\n\t\t\t\t\"lastPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 103.995\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"priceGranularity\":\n\t\t\t{\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"amount\": 1e-8\n\t\t\t}\n\t\t},\n\t\t\"asks\":\n\t\t[\n\t\t\t[100, 150, 1.5],\n\t\t\t[100.0389496, 159.62345449, 1.59561306],\n\t\t],\n\t\t\"bids\":\n\t\t[\n\t\t\t[99.95, 9.995, 0.1],\n\t\t\t[99.68, 24.92, 0.25]\n\t\t]\n\t}\n}\n"
        }
      ]
    },
    "group": "PublicTradeApiController_java",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"JTsUBAAAAUZMyB1ULSugK96cEK0\",\n\t\"status\": \"Success\",\n\t\"wallet\":\n\t{\n\t\t\"walletId\": \"AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2\",\n\t\t\"walletStatus\": \"Active\",\n\t\t\"accounts\":\n\t\t[\n\t\t\t{\n\t\t\t\t\"walletAccountId\": \"AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73\",\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"accountType\": \"Main\",\n\t\t\t\t\"accountStatus\": \"Active\",\n\t\t\t\t\"accountName\": \"Default EUR account\",\n\t\t\t\t\"accountBalance\":\n\t\t\t\t{\n\t\t\t\t\t\"balance\":\n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t},\n\t\t\t\t\t\"reservedBalance\":\n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t},\n\t\t\t\t\t\"inOrders\":\n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"walletAccountId\": \"AAEAAAP2wHer5G2K21wABSU-sITEYlyw95pStLQLoT9TxrCHcJ9pPNo_\",\n\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\"accountType\": \"Main\",\n\t\t\t\t\"accountStatus\": \"Active\",\n\t\t\t\t\"accountName\": \"Default XBT account\",\n\t\t\t\t\"accountBalance\":\n\t\t\t\t{\n\t\t\t\t\t\"balance\":\n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t},\n\t\t\t\t\t\"reservedBalance\":\n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t},\n\t\t\t\t\t\"inOrders\":\n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t]\n\t}\n}\n"
        }
      ]
    },
    "group": "PublicTradeApiController_java",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"JTsUBAAAAUZMO8gILSugK96cEI4\",\n\t\"status\": \"Success\",\n\t\"tradeOrder\":\n\t{\n\t\t\"id\": \"AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI\",\n\t\t\"externalReferenceId\": null\n\t\t\"creationDateTime\": \"2014-05-30T08:25:24Z\",\n\t\t\"walletId\": \"AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2\",\n\t\t\"walletAccountId\": \"AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73\",\n\t\t\"marketId\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\"tradeOrderType\": \"BuyMarket\",\n\t\t\"tradeOrderStatus\": \"Created\",\n\t\t\"tradeOrderMarketStatus\": null,\n\t\t\"priceLimit\": null,\n\t\t\"fillRatio\": 0,\n\t\t\"amount\":\n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 400\n\t\t},\n\t\t\"buyAmount\":\n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 1\n\t\t},\n\t\t\"totalAmountSold\":\n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 0\n\t\t},\n\t\t\"totalAmountBought\":\n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 0\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "group": "PublicTradeApiController_java",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "error": {
      "examples": [
        {
          "title": "Error-Response Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\":\n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "group": "PublicTradeApiController_java",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"count\": 5,\n  \"requestId\": \"sAlIlQAAAUazi16dLSugK96cEKA\",\n  \"status\": \"Success\"\n}\n"
        }
      ]
    },
    "group": "PublicTradeApiController_java",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/charts/orderbook/{currency1}/{currency2}",
    "title": "Orderbook",
    "name": "Orderbook",
    "group": "Public_Charts",
    "version": "1.0.0",
    "description": "<p>Retrieves the orderbook for a public market for the given currency pair</p>",
    "permission": "public",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency1",
            "optional": false,
            "description": "<p>one of the market currencies, e.g. EUR</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency2",
            "optional": false,
            "description": "<p>the other market currency, e.g. XBT</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"bids\":\n\t[\n\t\t[20, 0.7879525],\n\t\t[2.5, 1],\n\t\t[2, 203],\n\t\t[1.99, 3],\n\t\t[1.895, 3.0223],\n\t\t[1.543, 2]\n\t],\n\t\"asks\":\n\t[\n\t\t[104, 1],\n\t\t[104.75, 116.67],\n\t\t[104.97, 23.1278],\n\t\t[12345678.90876543, 1],\n\t\t[10000000000, 0.1],\n\t\t[12345678901, 2]\n\t]\n}\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\":\n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/BitcoinChartsApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/charts/trades/{currency1}/{currency2}/?since={tid}",
    "title": "Trades",
    "name": "Trades",
    "group": "Public_Charts",
    "version": "1.0.0",
    "description": "<p>Retrieves the trades for a public market for the given currency pair</p>",
    "permission": "public",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency1",
            "optional": false,
            "description": "<p>one of the market currencies, e.g. EUR</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency2",
            "optional": false,
            "description": "<p>the other market currency, e.g. XBT</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "since",
            "optional": false,
            "description": "<p>the value of &#39;tid&#39; last received, to return the trades with a higher &#39;tid&#39;</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n[\n\t{\n\t\t\"tid\": 2,\n\t\t\"price\": 105.345,\n\t\t\"amount\": 0.4092,\n\t\t\"date\": 1399890346\n\t},\n\t{\n\t\t\"tid\": 4,\n\t\t\"price\": 105.515,\n\t\t\"amount\": 0.17760508,\n\t\t\"date\": 1399890506\n\t},\n\t{\n\t\t\"tid\": 6,\n\t\t\"price\": 105.365,\n\t\t\"amount\": 0.01805937,\n\t\t\"date\": 1399890506\n\t},\n\t{\n\t\t\"tid\": 8,\n\t\t\"price\": 105.79,\n\t\t\"amount\": 0.05553555,\n\t\t\"date\": 1399890616\n\t}\n]\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\":\n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/BitcoinChartsApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/wallet/get",
    "title": "Wallet get",
    "name": "Wallet_get",
    "group": "Wallet",
    "version": "1.0.0",
    "description": "<p>Returns the Wallet and account info</p>",
    "permission": "authenticated user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency",
            "optional": true,
            "description": "<p>a WalletAccount currency, if only WalletAccounts with that currency should be returned in the account-list</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\":\n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"JTsUBAAAAUZMyB1ULSugK96cEK0\",\n\t\"status\": \"Success\",\n\t\"wallet\":\n\t{\n\t\t\"walletId\": \"AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2\",\n\t\t\"walletStatus\": \"Active\",\n\t\t\"accounts\":\n\t\t[\n\t\t\t{\n\t\t\t\t\"walletAccountId\": \"AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73\",\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"accountType\": \"Main\",\n\t\t\t\t\"accountStatus\": \"Active\",\n\t\t\t\t\"accountName\": \"Default EUR account\",\n\t\t\t\t\"accountBalance\":\n\t\t\t\t{\n\t\t\t\t\t\"balance\":\n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t},\n\t\t\t\t\t\"reservedBalance\":\n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t},\n\t\t\t\t\t\"inOrders\":\n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"walletAccountId\": \"AAEAAAP2wHer5G2K21wABSU-sITEYlyw95pStLQLoT9TxrCHcJ9pPNo_\",\n\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\"accountType\": \"Main\",\n\t\t\t\t\"accountStatus\": \"Active\",\n\t\t\t\t\"accountName\": \"Default XBT account\",\n\t\t\t\t\"accountBalance\":\n\t\t\t\t{\n\t\t\t\t\t\"balance\":\n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t},\n\t\t\t\t\t\"reservedBalance\":\n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t},\n\t\t\t\t\t\"inOrders\":\n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t]\n\t}\n}\n"
        }
      ]
    },
    "filename": "/home/andrei/workspace/monopoto/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  }
] });