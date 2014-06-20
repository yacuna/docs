define({ api: [
  {
    "type": "get",
    "url": "/api/1/deal/count",
    "title": "Deal count",
    "name": "Deal_count",
    "group": "Deal",
    "version": "1.0.0",
    "description": "Retrieves the number of deals with the given properties",
    "permission": "authenticated API user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "walletAccountId",
            "optional": false,
            "description": "By wallet account Id"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "marketId",
            "optional": true,
            "description": "By market Id"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "orderId",
            "optional": true,
            "description": "By order Id"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "tradeDealType",
            "optional": true,
            "description": "By order type"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "tradeDealStatus",
            "optional": true,
            "description": "By order status"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fromDate",
            "optional": true,
            "description": "Begin date range in UTC, in 'yyyy-MM-ddTHH:mm:ssZ' format, e.g. '2014-06-19T14:31:23Z'"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "untilDate",
            "optional": true,
            "description": "End date range in UTC, in 'yyyy-MM-ddTHH:mm:ssZ' format, e.g. '2014-06-19T14:31:23Z'"
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
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/deal/get/{dealId}",
    "title": "Deal get",
    "name": "Deal_get",
    "group": "Deal",
    "version": "1.0.0",
    "description": "Retrieves the number of Deals with the given properties, provided the currently authenticated user has access to it.",
    "permission": "authenticated API user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "dealId",
            "optional": false,
            "description": "Deal Id"
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
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/TradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/deal/get/{dealId}",
    "title": "Deal get",
    "name": "Deal_get",
    "group": "Deal",
    "version": "1.0.0",
    "description": "Retrieves an existing Deal with the given ID, provided the currently authenticated user has access to it.",
    "permission": "authenticated API user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "dealId",
            "optional": false,
            "description": "Deal Id"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\"requestId\": \"JTsUBAAAAUavl12RLSugK96cEZM\",\n\"status\": \"Success\",\n\"tradeDeal\": \n{\n\t\"id\": \"AAEABGOj1rR4C7xxreNhYNjXItSH_Yp93aYNuhH2GuaNiE4UjkoRolFm\",\n\t\"creationDateTime\": \"2014-05-30T13:11:56Z\",\n\t\"walletAccountIdSold\": \"AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73\",\n\t\"customType\": null,\n\t\"walletId\": \"AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2\",\n\t\"walletAccountId\": \"AAEAAAP2wHer5G2K21wABSU-sITEYlyw95pStLQLoT9TxrCHcJ9pPNo_\",\n\t\"walletAccountItemId\": \"AAEAAAfCjEaHZli8L8akzpjTofA3udRJj_HdnCDYdBrV9H2S8tauyh6k\",\n\t\"marketId\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\"orderId\": \"AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI\",\n\t\"otherTradeDealId\": \"AAEABGOj1rR4DJ2m2xrBDZqcIP94U6L_9rlC0amG9W2sdCvVy_N-ydr4\",\n\t\"tradeDealType\": \"Buy\",\n\t\"tradeDealSubtype\": \"MarketTaker\",\n\t\"tradeDealStatus\": \"Completed\",\n\t\"amount\": \n\t{\n\t\t\"currency\": \"XBT\",\n\t\t\"amount\": 0.19622549\n\t},\n\t\"amountSold\": \n\t{\n\t\t\"currency\": \"EUR\",\n\t\t\"amount\": 20.53303527\n\t},\n\t\"price\": \n\t{\n\t\t\"currency\": \"EUR\",\n\t\t\"amount\": 104.64\n\t},\n\t\"feeAmount\": \n\t{\n\t\t\"currency\": \"XBT\",\n\t\t\"amount\": 0.00019623\n\t},\n\t\"marketDealOwner\": \n\t{\n\t\t\"type\": \"MarketV1Deal\",\n\t\t\"id\": \"AAEAH3wOLq02MeYmW7OqZBQ4Vi-g1a16ZjWyJzJo4I2h2BIiy9E8oxNj\"\n\t}\n}\n}\n"
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
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/deal/list",
    "title": "Deal list",
    "name": "Deal_list",
    "group": "Deal",
    "version": "1.0.0",
    "description": "Retrieves the deals with the given properties",
    "permission": "authenticated API user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "walletAccountId",
            "optional": false,
            "description": "By wallet account Id"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "marketId",
            "optional": true,
            "description": "By market Id"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "orderId",
            "optional": true,
            "description": "By order Id"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "tradeDealType",
            "optional": true,
            "description": "By order type"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "tradeDealStatus",
            "optional": true,
            "description": "By order status"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fromDate",
            "optional": true,
            "description": "Begin date range in UTC, in 'yyyy-MM-ddTHH:mm:ssZ' format, e.g. '2014-06-19T14:31:23Z'"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "untilDate",
            "optional": true,
            "description": "End date range in UTC, in 'yyyy-MM-ddTHH:mm:ssZ' format, e.g. '2014-06-19T14:31:23Z'"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "startWith",
            "defaultValue": "0",
            "optional": true,
            "description": "the number of items to skip in the result-set (paging)"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "count",
            "defaultValue": "20",
            "optional": true,
            "description": "the number of items to return in the result-set (paging)"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"pagingInfo\": {\n    \"requestedStartWith\": 0,\n    \"requestedCount\": 20,\n    \"actualCount\": 1,\n    \"totalCount\": 1,\n    \"totalPageCount\": 1,\n    \"showPrevious\": false,\n    \"currentPageNumber\": 0,\n    \"showNext\": false\n  },\n  \"requestId\": \"sAlIlQAAAUazv4xQLSugK96cEKY\",\n  \"status\": \"Success\",\n  \"tradeDeals\": [\n    {\n      \"id\": \"AAEABGOj1rbiAVrGagoqt9fHYiEQ8FnkD53Ml2MPKtGYStcoRJi5APgI\",\n      \"creationDateTime\": \"2014-05-23T11:23:23Z\",\n      \"amount\": {\n        \"currency\": \"XBT\",\n        \"amount\": 0.07123822\n      },\n      \"walletId\": \"AAEAAAMk7LOB56yLbnxh--VUTzxMBTdEwQQrWoUqozaNWhh71fzVUCzQ\",\n      \"walletAccountId\": \"AAEAAAP2wHesNlgJwictLGppA9NSFvYZ4BzMhMXkwxmCFsz0WjEfTuoV\",\n      \"marketId\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n      \"orderId\": \"AAEAAks1SVctbFaVKy2Y8OQXaq4fYBA0WXJxp87d1_SQAKG7dfw4xWG6\",\n      \"tradeDealType\": \"Buy\",\n      \"tradeDealSubtype\": \"MarketTaker\",\n      \"tradeDealStatus\": \"Completed\",\n      \"amountSold\": {\n        \"currency\": \"EUR\",\n        \"amount\": 7.27662798\n      },\n      \"price\": {\n        \"currency\": \"EUR\",\n        \"amount\": 102.145\n      },\n      \"feeAmount\": {\n        \"currency\": \"XBT\",\n        \"amount\": 0.00007124\n      }\n    }\n  ]\n}\n"
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
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/marketdepth/get/{currency1}/{currency2}",
    "title": "MarketDepth get",
    "name": "MarketDepth_get",
    "group": "Market",
    "version": "1.0.0",
    "description": "Returns the MarketDepth for the market wit the given currencies.\nSupports ETag HTTP cache headers (If-None-Match).\nEach row in the bids and asks contains the following values:\n- price in currency1\n- accumulated amount in currency1\n- accumulated amount in currency2",
    "permission": "authenticated user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency1",
            "optional": false,
            "description": "one of the market currencies, e.g. EUR"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency2",
            "optional": false,
            "description": "the other market currency, e.g. XBT"
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
          "content": "HTTP/1.1 200 OK\n{\n \"marketDepth\": {\n    \"market\": {\n      \"id\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n      \"currencyCode1\": \"EUR\",\n      \"currencyCode2\": \"XBT\",\n      \"description\": \"Public EUR/BTC market\",\n      \"marketStatistics\": {\n        \"timestamp\": \"2014-06-17T07:06:24Z\",\n        \"buyItemCount\": 2,\n        \"sellItemCount\": 101,\n        \"buyItemAmount\": {\n          \"currency\": \"EUR\",\n          \"amount\": 24.92\n        },\n        \"sellItemAmount\": {\n          \"currency\": \"XBT\",\n          \"amount\": 32.93380179\n        },\n        \"buyPrice\": {\n          \"currency\": \"EUR\",\n          \"amount\": 99.95\n        },\n        \"sellPrice\": {\n          \"currency\": \"EUR\",\n          \"amount\": 100\n        },\n        \"lastPrice\": {\n          \"currency\": \"EUR\",\n          \"amount\": 103.995\n        }\n      },\n      \"priceGranularity\": {\n        \"currency\": \"EUR\",\n        \"amount\": 1e-8\n      }\n    },\n  \"asks\": [\n     [100, 150, 1.5],\n     [100.0389496, 159.62345449, 1.59561306],\n   ],\n   \"bids\": [\n     [99.95, 9.995, 0.1],\n     [99.68, 24.92, 0.25]\n   ]\n },\n \"requestId\": \"sAlIlQAAAUaznM4BLSugK96cELw\",\n \"status\": \"Success\"\n}\n"
        }
      ]
    },
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/market/count",
    "title": "Market count",
    "name": "Market_count",
    "group": "Market",
    "version": "1.0.0",
    "description": "Counts available markets with optional currency filters",
    "permission": "authenticated user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency1",
            "optional": true,
            "description": "one of the market currencies, e.g. EUR"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency2",
            "optional": true,
            "description": "the other market currency, e.g. XBT"
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
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/market/list",
    "title": "Market list",
    "name": "Market_list",
    "group": "Market",
    "version": "1.0.0",
    "description": "Lists available markets with optional currency filters",
    "permission": "authenticated user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency1",
            "optional": true,
            "description": "one of the market currencies, e.g. EUR"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency2",
            "optional": true,
            "description": "the other market currency, e.g. XBT"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "startWith",
            "defaultValue": "0",
            "optional": true,
            "description": "the number of items to skip in the result-set (paging)"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "count",
            "defaultValue": "20",
            "optional": true,
            "description": "the number of items to return in the result-set, between 1 and 1000 (paging)"
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
          "content": "HTTP/1.1 200 OK\n{\n  \"pagingInfo\": {\n    \"requestedStartWith\": 0,\n    \"requestedCount\": 20,\n    \"actualCount\": 1,\n    \"totalCount\": 1,\n    \"showPrevious\": false,\n    \"showNext\": false,\n    \"currentPageNumber\": 0,\n    \"totalPageCount\": 1\n  },\n  \"markets\": [\n    {\n      \"id\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n      \"currencyCode1\": \"EUR\",\n      \"currencyCode2\": \"XBT\",\n      \"description\": \"Public EUR/BTC market\",\n      \"marketStatistics\": {\n        \"timestamp\": \"2014-06-17T07:06:24Z\",\n        \"buyItemCount\": 2,\n        \"sellItemCount\": 101,\n        \"buyItemAmount\": {\n          \"currency\": \"EUR\",\n          \"amount\": 24.92\n        },\n        \"sellItemAmount\": {\n          \"currency\": \"XBT\",\n          \"amount\": 32.93380179\n        },\n        \"buyPrice\": {\n          \"currency\": \"EUR\",\n          \"amount\": 99.95\n        },\n        \"sellPrice\": {\n          \"currency\": \"EUR\",\n          \"amount\": 100\n        },\n        \"lastPrice\": {\n          \"currency\": \"EUR\",\n          \"amount\": 103.995\n        }\n      },\n      \"priceGranularity\": {\n        \"currency\": \"EUR\",\n        \"amount\": 1e-8\n      }\n    }\n  ],\n  \"requestId\": \"sAlIlQAAAUazkO6XLSugK96cEL8\",\n  \"status\": \"Success\"\n}\n"
        }
      ]
    },
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/orderbook/get/{currency1}/{currency2}",
    "title": "OrderBook get",
    "name": "OrderBook_get",
    "group": "Market",
    "version": "1.0.0",
    "description": "Returns the OrderBook for the market wit the given currencies.\nSupports ETag HTTP cache headers (If-None-Match).\nEach row in the bids and asks contains the following values:\n- price in currency1\n- amount in currency1\n- amount in currency2",
    "permission": "authenticated user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency1",
            "optional": false,
            "description": "one of the market currencies, e.g. EUR"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency2",
            "optional": false,
            "description": "the other market currency, e.g. XBT"
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
          "content": "HTTP/1.1 200 OK\n{\n  \"requestId\": \"sAlIlQAAAUazlxXALSugK96cEL0\",\n  \"status\": \"Success\",\n  \"orderBook\": {\n    \"market\": {\n      \"id\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n      \"currencyCode1\": \"EUR\",\n      \"currencyCode2\": \"XBT\",\n      \"description\": \"Public EUR/BTC market\",\n      \"marketStatistics\": {\n        \"timestamp\": \"2014-06-17T07:06:24Z\",\n        \"buyItemCount\": 2,\n        \"sellItemCount\": 101,\n        \"buyItemAmount\": {\n          \"currency\": \"EUR\",\n          \"amount\": 24.92\n        },\n        \"sellItemAmount\": {\n          \"currency\": \"XBT\",\n          \"amount\": 32.93380179\n        },\n        \"buyPrice\": {\n          \"currency\": \"EUR\",\n          \"amount\": 99.95\n        },\n        \"sellPrice\": {\n          \"currency\": \"EUR\",\n          \"amount\": 100\n        },\n        \"lastPrice\": {\n          \"currency\": \"EUR\",\n          \"amount\": 103.995\n        }\n      },\n      \"priceGranularity\": {\n        \"currency\": \"EUR\",\n        \"amount\": 1e-8\n      }\n    },\n    \"asks\": [\n      [100, 150, 1.5],\n      [100.65, 9.62345449, 0.09561306]\n    ],\n    \"bids\": [\n      [99.95, 9.995, 0.1],\n      [99.5, 14.925, 0.15]\n    ]\n  }\n}\n"
        }
      ]
    },
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/order/get/{orderId}",
    "title": "Order get",
    "name": "Order_Get",
    "group": "Order",
    "version": "1.0.0",
    "description": "Retrieves an existing Order with the given ID, provided the currently authenticated user has access to it.",
    "permission": "authenticated user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "orderId",
            "optional": false,
            "description": "unique ID of the order"
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
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "post",
    "url": "/api/1/order/cancel/{orderId}",
    "title": "Order cancel",
    "name": "Order_cancel",
    "group": "Order",
    "version": "1.0.0",
    "description": "Cancels an existing Order with the given ID, provided the currently authenticated user has access to it.",
    "permission": "authenticated user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "orderId",
            "optional": false,
            "description": "unique ID of the order"
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
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "post",
    "url": "/api/1/order/confirm/{orderId}",
    "title": "Order confirm",
    "name": "Order_confirm",
    "group": "Order",
    "version": "1.0.0",
    "description": "Confirms an existing Order with the given ID, provided the currently authenticated user has access to it.",
    "permission": "authenticated user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "orderId",
            "optional": false,
            "description": "unique ID of the order"
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
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/order/count",
    "title": "Order count",
    "name": "Order_count",
    "group": "Order",
    "version": "1.0.0",
    "description": "Retrieves the number of orders with the given properties",
    "permission": "authenticated API user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "walletAccountId",
            "optional": false,
            "description": "By wallet account Id"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "marketId",
            "optional": true,
            "description": "By market Id"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "tradeOrderType",
            "optional": true,
            "description": "By order type"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "tradeOrderStatus",
            "optional": true,
            "description": "By order status"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "tradeOrderMarketStatus",
            "optional": true,
            "description": "by order market status"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fromDate",
            "optional": true,
            "description": "Begin date range in UTC, in 'yyyy-MM-ddTHH:mm:ssZ' format, e.g. '2014-06-19T14:31:23Z'"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "untilDate",
            "optional": true,
            "description": "End date range in UTC, in 'yyyy-MM-ddTHH:mm:ssZ' format, e.g. '2014-06-19T14:31:23Z'"
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
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "post",
    "url": "/api/1/order/create/{currency1}/{currency2}",
    "title": "Order create",
    "name": "Order_create",
    "group": "Order",
    "version": "1.0.0",
    "description": "Creates new market order",
    "permission": "authenticated user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency1",
            "optional": false,
            "description": "one of the market currencies, e.g. EUR"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency2",
            "optional": false,
            "description": "the other market currency, e.g. XBT"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "walletAccountId",
            "optional": false,
            "description": "your wallet account ID in the currency you want to sell"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "tradeOrderType",
            "optional": false,
            "description": "value from the list {\"BuyLimit\", \"BuyMarket\", \"SellLimit\", \"SellMarket\"}"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "sellAmount",
            "optional": true,
            "description": "amount to sell, required for {\"BuyMarket\", \"SellLimit\", \"SellMarket\"}"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sellCurrency",
            "optional": true,
            "description": "currency of amount to sell, required for {\"BuyMarket\", \"SellLimit\", \"SellMarket\"}, must match currency of WalletAccountId"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "buyAmount",
            "optional": true,
            "description": "amount to buy, required for {\"BuyLimit\", \"BuyMarket\"}"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "buyCurrency",
            "optional": true,
            "description": "currency of amount to buy, required for {\"BuyLimit\", \"BuyMarket\"}, must be different from currency of WalletAccountId"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "priceLimitAmount",
            "optional": true,
            "description": "set price limit amount, required for {\"BuyLimit\", \"SellLimit\"}"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "priceLimitCurrency",
            "optional": true,
            "description": "set price limit currency, required for {\"BuyLimit\", \"SellLimit\"}, must match market primary currency"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "externalReferenceId",
            "optional": true,
            "description": "set your own reference id for order, must be unique in walletAccountId-scope"
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
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/order/getByExternalReferenceId/{walletAccountId}",
    "title": "Order get by ext ref Id",
    "name": "Order_get_by_external_reference_Id",
    "group": "Order",
    "version": "1.0.0",
    "description": "Retrieves an existing Order with the given external reference ID, provided the currently authenticated user has access to it. Returns the same data as <a href=\"#api-Wallet-Wallet_get\">Wallet Get</a>",
    "permission": "authenticated user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "externalReferenceId",
            "optional": false,
            "description": "external reference ID of the order"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "walletAccountId",
            "optional": false,
            "description": "wallet account Id"
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
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/order/list",
    "title": "Order list",
    "name": "Order_list",
    "group": "Order",
    "version": "1.0.0",
    "description": "Retrieves the list of orders with the given properties",
    "permission": "authenticated API user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "walletAccountId",
            "optional": false,
            "description": "By wallet account Id"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "marketId",
            "optional": true,
            "description": "By market Id"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "tradeOrderType",
            "optional": true,
            "description": "By order type"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "tradeOrderStatus",
            "optional": true,
            "description": "By order status"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "tradeOrderMarketStatus",
            "optional": true,
            "description": "by order market status"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fromDate",
            "optional": true,
            "description": "Begin date range in UTC, in 'yyyy-MM-ddTHH:mm:ssZ' format, e.g. '2014-06-19T14:31:23Z'"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "untilDate",
            "optional": true,
            "description": "End date range in UTC, in 'yyyy-MM-ddTHH:mm:ssZ' format, e.g. '2014-06-19T14:31:23Z'"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "startWith",
            "defaultValue": "0",
            "optional": true,
            "description": "the number of items to skip in the result-set (paging)"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "count",
            "defaultValue": "20",
            "optional": true,
            "description": "the number of items to return in the result-set (paging)"
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
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
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
    "group": "PublicTradeApiController.java",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"requestId\": \"sAlIlQAAAUazlxXALSugK96cEL0\",\n  \"status\": \"Success\",\n  \"orderBook\": {\n    \"market\": {\n      \"id\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n      \"currencyCode1\": \"EUR\",\n      \"currencyCode2\": \"XBT\",\n      \"description\": \"Public EUR/BTC market\",\n      \"marketStatistics\": {\n        \"timestamp\": \"2014-06-17T07:06:24Z\",\n        \"buyItemCount\": 2,\n        \"sellItemCount\": 101,\n        \"buyItemAmount\": {\n          \"currency\": \"EUR\",\n          \"amount\": 24.92\n        },\n        \"sellItemAmount\": {\n          \"currency\": \"XBT\",\n          \"amount\": 32.93380179\n        },\n        \"buyPrice\": {\n          \"currency\": \"EUR\",\n          \"amount\": 99.95\n        },\n        \"sellPrice\": {\n          \"currency\": \"EUR\",\n          \"amount\": 100\n        },\n        \"lastPrice\": {\n          \"currency\": \"EUR\",\n          \"amount\": 103.995\n        }\n      },\n      \"priceGranularity\": {\n        \"currency\": \"EUR\",\n        \"amount\": 1e-8\n      }\n    },\n    \"asks\": [\n      [100, 150, 1.5],\n      [100.65, 9.62345449, 0.09561306]\n    ],\n    \"bids\": [\n      [99.95, 9.995, 0.1],\n      [99.5, 14.925, 0.15]\n    ]\n  }\n}\n"
        }
      ]
    },
    "group": "PublicTradeApiController.java",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
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
    "group": "PublicTradeApiController.java",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"pagingInfo\": {\n    \"requestedStartWith\": 0,\n    \"requestedCount\": 20,\n    \"actualCount\": 1,\n    \"totalCount\": 1,\n    \"showPrevious\": false,\n    \"showNext\": false,\n    \"currentPageNumber\": 0,\n    \"totalPageCount\": 1\n  },\n  \"markets\": [\n    {\n      \"id\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n      \"currencyCode1\": \"EUR\",\n      \"currencyCode2\": \"XBT\",\n      \"description\": \"Public EUR/BTC market\",\n      \"marketStatistics\": {\n        \"timestamp\": \"2014-06-17T07:06:24Z\",\n        \"buyItemCount\": 2,\n        \"sellItemCount\": 101,\n        \"buyItemAmount\": {\n          \"currency\": \"EUR\",\n          \"amount\": 24.92\n        },\n        \"sellItemAmount\": {\n          \"currency\": \"XBT\",\n          \"amount\": 32.93380179\n        },\n        \"buyPrice\": {\n          \"currency\": \"EUR\",\n          \"amount\": 99.95\n        },\n        \"sellPrice\": {\n          \"currency\": \"EUR\",\n          \"amount\": 100\n        },\n        \"lastPrice\": {\n          \"currency\": \"EUR\",\n          \"amount\": 103.995\n        }\n      },\n      \"priceGranularity\": {\n        \"currency\": \"EUR\",\n        \"amount\": 1e-8\n      }\n    }\n  ],\n  \"requestId\": \"sAlIlQAAAUazkO6XLSugK96cEL8\",\n  \"status\": \"Success\"\n}\n"
        }
      ]
    },
    "group": "PublicTradeApiController.java",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n \"marketDepth\": {\n    \"market\": {\n      \"id\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n      \"currencyCode1\": \"EUR\",\n      \"currencyCode2\": \"XBT\",\n      \"description\": \"Public EUR/BTC market\",\n      \"marketStatistics\": {\n        \"timestamp\": \"2014-06-17T07:06:24Z\",\n        \"buyItemCount\": 2,\n        \"sellItemCount\": 101,\n        \"buyItemAmount\": {\n          \"currency\": \"EUR\",\n          \"amount\": 24.92\n        },\n        \"sellItemAmount\": {\n          \"currency\": \"XBT\",\n          \"amount\": 32.93380179\n        },\n        \"buyPrice\": {\n          \"currency\": \"EUR\",\n          \"amount\": 99.95\n        },\n        \"sellPrice\": {\n          \"currency\": \"EUR\",\n          \"amount\": 100\n        },\n        \"lastPrice\": {\n          \"currency\": \"EUR\",\n          \"amount\": 103.995\n        }\n      },\n      \"priceGranularity\": {\n        \"currency\": \"EUR\",\n        \"amount\": 1e-8\n      }\n    },\n  \"asks\": [\n     [100, 150, 1.5],\n     [100.0389496, 159.62345449, 1.59561306],\n   ],\n   \"bids\": [\n     [99.95, 9.995, 0.1],\n     [99.68, 24.92, 0.25]\n   ]\n },\n \"requestId\": \"sAlIlQAAAUaznM4BLSugK96cELw\",\n \"status\": \"Success\"\n}\n"
        }
      ]
    },
    "group": "PublicTradeApiController.java",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
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
    "group": "PublicTradeApiController.java",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/wallet/get/{walletId}",
    "title": "Wallet get",
    "name": "Wallet_get",
    "group": "Wallet",
    "version": "1.0.0",
    "description": "Returns user's wallet data including associated accounts",
    "permission": "registered user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "walletId",
            "optional": false,
            "description": "unique Id of the wallet"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "walletAccountCurrency",
            "optional": true,
            "description": "limit responce to given currencies"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"JTsUBAAAAUZMyB1ULSugK96cEK0\",\n\t\"status\": \"Success\",\n\t\"userId\": \"AAEAAAMk7LOCCHq-p2HQI3963p91f54ukj2cICQuy4Dgqz69VJqLNxbk\",\n\t\"wallet\": \n\t{\n\t\t\"walletId\": \"AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2\",\n\t\t\"creationDateTime\": \"2014-05-30T07:55:34Z\",\n\t\t\"countryCode\": \"DE\",\n\t\t\"feeGroupId\": null,\n\t\t\"limitGroupId\": null,\n\t\t\"subsidiaryId\": 1,\n\t\t\"walletStatus\": \"Active\",\n\t\t\"walletType\": \"Full\",\n\t\t\"accounts\": \n\t\t[\t\t\n\t\t\t{\n\t\t\t\t\"accountNumber\": \"AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73\",\n\t\t\t\t\"creationDateTime\": \"2014-05-30T07:55:35Z\",\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"accountType\": \"Main\",\n\t\t\t\t\"accountStatus\": \"Active\",\n\t\t\t\t\"accountName\": \"Default EUR account\",\n\t\t\t\t\"accountDescription\": null,\n\t\t\t\t\"accountBalance\": \n\t\t\t\t{\n\t\t\t\t\t\"balance\": \n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t},\n\t\t\t\t\t\"reservedBalance\": \n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"accountNumber\": \"AAEAAAP2wHer5G2K21wABSU-sITEYlyw95pStLQLoT9TxrCHcJ9pPNo_\",\n\t\t\t\t\"creationDateTime\": \"2014-05-30T07:55:35Z\",\n\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\"accountType\": \"Main\",\n\t\t\t\t\"accountStatus\": \"Active\",\n\t\t\t\t\"accountName\": \"Default XBT account\",\n\t\t\t\t\"accountDescription\": null,\n\t\t\t\t\"accountBalance\": \n\t\t\t\t{\n\t\t\t\t\t\"balance\": \n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t},\n\t\t\t\t\t\"reservedBalance\": \n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t],\n\t\t\"owner\": \n\t\t{\n\t\t\t\"type\": \"User\",\n\t\t\t\"id\": \"AAEAAAMk7LOCCHq-p2HQI3963p91f54ukj2cICQuy4Dgqz69VJqLNxbk\"\n\t\t}\n\t}\n}\n"
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
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/WalletApiController.java"
  }
] });