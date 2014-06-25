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
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"JTsUBAAAAUavl12RLSugK96cEZM\",\n\t\"status\": \"Success\",\n\t\"tradeDeal\":\n\t{\n\t\t\"id\": \"AAEABGOj1rR4C7xxreNhYNjXItSH_Yp93aYNuhH2GuaNiE4UjkoRolFm\",\n\t\t\"creationDateTime\": \"2014-05-30T13:11:56Z\",\n\t\t\"walletAccountIdSold\": \"AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73\",\n\t\t\"customType\": null,\n\t\t\"walletId\": \"AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2\",\n\t\t\"walletAccountId\": \"AAEAAAP2wHer5G2K21wABSU-sITEYlyw95pStLQLoT9TxrCHcJ9pPNo_\",\n\t\t\"walletAccountItemId\": \"AAEAAAfCjEaHZli8L8akzpjTofA3udRJj_HdnCDYdBrV9H2S8tauyh6k\",\n\t\t\"marketId\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\"orderId\": \"AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI\",\n\t\t\"otherTradeDealId\": \"AAEABGOj1rR4DJ2m2xrBDZqcIP94U6L_9rlC0amG9W2sdCvVy_N-ydr4\",\n\t\t\"tradeDealType\": \"Buy\",\n\t\t\"tradeDealSubtype\": \"MarketTaker\",\n\t\t\"tradeDealStatus\": \"Completed\",\n\t\t\"amount\":\n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 0.19622549\n\t\t},\n\t\t\"amountSold\":\n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 20.53303527\n\t\t},\n\t\t\"price\":\n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 104.64\n\t\t},\n\t\t\"feeAmount\":\n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 0.00019623\n\t\t},\n\t\t\"marketDealOwner\":\n\t\t{\n\t\t\t\"type\": \"MarketV1Deal\",\n\t\t\t\"id\": \"AAEAH3wOLq02MeYmW7OqZBQ4Vi-g1a16ZjWyJzJo4I2h2BIiy9E8oxNj\"\n\t\t}\n\t}\n}\n"
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
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"sAlIlQAAAUazv4xQLSugK96cEKY\",\n\t\"status\": \"Success\",\n\t\"pagingInfo\":\n\t{\n\t\t\"requestedStartWith\": 0,\n\t\t\"requestedCount\": 20,\n\t\t\"actualCount\": 1,\n\t\t\"totalCount\": 1,\n\t\t\"totalPageCount\": 1,\n\t\t\"showPrevious\": false,\n\t\t\"currentPageNumber\": 0,\n\t\t\"showNext\": false\n\t},\n\t\"tradeDeals\":\n\t[\n\t\t{\n\t\t\t\"id\": \"AAEABGOj1rbiAVrGagoqt9fHYiEQ8FnkD53Ml2MPKtGYStcoRJi5APgI\",\n\t\t\t\"creationDateTime\": \"2014-05-23T11:23:23Z\",\n\t\t\t\"amount\":\n\t\t\t{\n\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\"amount\": 0.07123822\n\t\t\t},\n\t\t\t\"walletId\": \"AAEAAAMk7LOB56yLbnxh--VUTzxMBTdEwQQrWoUqozaNWhh71fzVUCzQ\",\n\t\t\t\"walletAccountId\": \"AAEAAAP2wHesNlgJwictLGppA9NSFvYZ4BzMhMXkwxmCFsz0WjEfTuoV\",\n\t\t\t\"marketId\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\t\"orderId\": \"AAEAAks1SVctbFaVKy2Y8OQXaq4fYBA0WXJxp87d1_SQAKG7dfw4xWG6\",\n\t\t\t\"tradeDealType\": \"Buy\",\n\t\t\t\"tradeDealSubtype\": \"MarketTaker\",\n\t\t\t\"tradeDealStatus\": \"Completed\",\n\t\t\t\"amountSold\":\n\t\t\t{\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"amount\": 7.27662798\n\t\t\t},\n\t\t\t\"price\":\n\t\t\t{\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"amount\": 102.145\n\t\t\t},\n\t\t\t\"feeAmount\":\n\t\t\t{\n\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\"amount\": 0.00007124\n\t\t\t}\n\t\t}\n\t]\n}\n"
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
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"sAlIlQAAAUaznM4BLSugK96cELw\",\n\t\"status\": \"Success\"\n\t\"marketDepth\":\n\t{\n\t\t\"market\":\n\t\t{\n\t\t\t\"id\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\t\"currencyCode1\": \"EUR\",\n\t\t\t\"currencyCode2\": \"XBT\",\n\t\t\t\"description\": \"Public EUR/BTC market\",\n\t\t\t\"marketStatistics\":\n\t\t\t{\n\t\t\t\t\"timestamp\": \"2014-06-17T07:06:24Z\",\n\t\t\t\t\"buyItemCount\": 2,\n\t\t\t\t\"sellItemCount\": 101,\n\t\t\t\t\"buyItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 24.92\n\t\t\t\t},\n\t\t\t\t\"sellItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\"amount\": 32.93380179\n\t\t\t\t},\n\t\t\t\t\"buyPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 99.95\n\t\t\t\t},\n\t\t\t\t\"sellPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 100\n\t\t\t\t},\n\t\t\t\t\"lastPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 103.995\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"priceGranularity\":\n\t\t\t{\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"amount\": 1e-8\n\t\t\t}\n\t\t},\n\t\t\"asks\":\n\t\t[\n\t\t\t[100, 150, 1.5],\n\t\t\t[100.0389496, 159.62345449, 1.59561306],\n\t\t],\n\t\t\"bids\":\n\t\t[\n\t\t\t[99.95, 9.995, 0.1],\n\t\t\t[99.68, 24.92, 0.25]\n\t\t]\n\t}\n}\n"
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
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"sAlIlQAAAUazkO6XLSugK96cEL8\",\n\t\"status\": \"Success\",\n\t\"pagingInfo\":\n\t{\n\t\t\"requestedStartWith\": 0,\n\t\t\"requestedCount\": 20,\n\t\t\"actualCount\": 1,\n\t\t\"totalCount\": 1,\n\t\t\"showPrevious\": false,\n\t\t\"showNext\": false,\n\t\t\"currentPageNumber\": 0,\n\t\t\"totalPageCount\": 1\n\t},\n\t\"markets\":\n\t[\n\t\t{\n\t\t\t\"id\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\t\"currencyCode1\": \"EUR\",\n\t\t\t\"currencyCode2\": \"XBT\",\n\t\t\t\"description\": \"Public EUR/BTC market\",\n\t\t\t\"marketStatistics\":\n\t\t\t{\n\t\t\t\t\"timestamp\": \"2014-06-17T07:06:24Z\",\n\t\t\t\t\"buyItemCount\": 2,\n\t\t\t\t\"sellItemCount\": 101,\n\t\t\t\t\"buyItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 24.92\n\t\t\t\t},\n\t\t\t\t\"sellItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\"amount\": 32.93380179\n\t\t\t\t},\n\t\t\t\t\"buyPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 99.95\n\t\t\t\t},\n\t\t\t\t\"sellPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 100\n\t\t\t\t},\n\t\t\t\t\"lastPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 103.995\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"priceGranularity\":\n\t\t\t{\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"amount\": 1e-8\n\t\t\t}\n\t\t}\n\t]\n}\n"
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
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"sAlIlQAAAUazlxXALSugK96cEL0\",\n\t\"status\": \"Success\",\n\t\"orderBook\":\n\t{\n\t\t\"market\":\n\t\t{\n\t\t\t\"id\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\t\"currencyCode1\": \"EUR\",\n\t\t\t\"currencyCode2\": \"XBT\",\n\t\t\t\"description\": \"Public EUR/BTC market\",\n\t\t\t\"marketStatistics\":\n\t\t\t{\n\t\t\t\t\"timestamp\": \"2014-06-17T07:06:24Z\",\n\t\t\t\t\"buyItemCount\": 2,\n\t\t\t\t\"sellItemCount\": 101,\n\t\t\t\t\"buyItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 24.92\n\t\t\t\t},\n\t\t\t\t\"sellItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\"amount\": 32.93380179\n\t\t\t\t},\n\t\t\t\t\"buyPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 99.95\n\t\t\t\t},\n\t\t\t\t\"sellPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 100\n\t\t\t\t},\n\t\t\t\t\"lastPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 103.995\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"priceGranularity\":\n\t\t\t{\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"amount\": 1e-8\n\t\t\t}\n\t\t},\n\t\t\"asks\":\n\t\t[\n\t\t\t[100, 150, 1.5],\n\t\t\t[100.65, 9.62345449, 0.09561306]\n\t\t],\n\t\t\"bids\":\n\t\t[\n\t\t\t[99.95, 9.995, 0.1],\n\t\t\t[99.5, 14.925, 0.15]\n\t\t]\n\t}\n}\n"
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
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"sAlIlQAAAUazlxXALSugK96cEL0\",\n\t\"status\": \"Success\",\n\t\"orderBook\":\n\t{\n\t\t\"market\":\n\t\t{\n\t\t\t\"id\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\t\"currencyCode1\": \"EUR\",\n\t\t\t\"currencyCode2\": \"XBT\",\n\t\t\t\"description\": \"Public EUR/BTC market\",\n\t\t\t\"marketStatistics\":\n\t\t\t{\n\t\t\t\t\"timestamp\": \"2014-06-17T07:06:24Z\",\n\t\t\t\t\"buyItemCount\": 2,\n\t\t\t\t\"sellItemCount\": 101,\n\t\t\t\t\"buyItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 24.92\n\t\t\t\t},\n\t\t\t\t\"sellItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\"amount\": 32.93380179\n\t\t\t\t},\n\t\t\t\t\"buyPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 99.95\n\t\t\t\t},\n\t\t\t\t\"sellPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 100\n\t\t\t\t},\n\t\t\t\t\"lastPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 103.995\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"priceGranularity\":\n\t\t\t{\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"amount\": 1e-8\n\t\t\t}\n\t\t},\n\t\t\"asks\":\n\t\t[\n\t\t\t[100, 150, 1.5],\n\t\t\t[100.65, 9.62345449, 0.09561306]\n\t\t],\n\t\t\"bids\":\n\t\t[\n\t\t\t[99.95, 9.995, 0.1],\n\t\t\t[99.5, 14.925, 0.15]\n\t\t]\n\t}\n}\n"
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
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"sAlIlQAAAUazkO6XLSugK96cEL8\",\n\t\"status\": \"Success\",\n\t\"pagingInfo\":\n\t{\n\t\t\"requestedStartWith\": 0,\n\t\t\"requestedCount\": 20,\n\t\t\"actualCount\": 1,\n\t\t\"totalCount\": 1,\n\t\t\"showPrevious\": false,\n\t\t\"showNext\": false,\n\t\t\"currentPageNumber\": 0,\n\t\t\"totalPageCount\": 1\n\t},\n\t\"markets\":\n\t[\n\t\t{\n\t\t\t\"id\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\t\"currencyCode1\": \"EUR\",\n\t\t\t\"currencyCode2\": \"XBT\",\n\t\t\t\"description\": \"Public EUR/BTC market\",\n\t\t\t\"marketStatistics\":\n\t\t\t{\n\t\t\t\t\"timestamp\": \"2014-06-17T07:06:24Z\",\n\t\t\t\t\"buyItemCount\": 2,\n\t\t\t\t\"sellItemCount\": 101,\n\t\t\t\t\"buyItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 24.92\n\t\t\t\t},\n\t\t\t\t\"sellItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\"amount\": 32.93380179\n\t\t\t\t},\n\t\t\t\t\"buyPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 99.95\n\t\t\t\t},\n\t\t\t\t\"sellPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 100\n\t\t\t\t},\n\t\t\t\t\"lastPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 103.995\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"priceGranularity\":\n\t\t\t{\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"amount\": 1e-8\n\t\t\t}\n\t\t}\n\t]\n}\n"
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
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"sAlIlQAAAUaznM4BLSugK96cELw\",\n\t\"status\": \"Success\"\n\t\"marketDepth\":\n\t{\n\t\t\"market\":\n\t\t{\n\t\t\t\"id\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\t\"currencyCode1\": \"EUR\",\n\t\t\t\"currencyCode2\": \"XBT\",\n\t\t\t\"description\": \"Public EUR/BTC market\",\n\t\t\t\"marketStatistics\":\n\t\t\t{\n\t\t\t\t\"timestamp\": \"2014-06-17T07:06:24Z\",\n\t\t\t\t\"buyItemCount\": 2,\n\t\t\t\t\"sellItemCount\": 101,\n\t\t\t\t\"buyItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 24.92\n\t\t\t\t},\n\t\t\t\t\"sellItemAmount\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\"amount\": 32.93380179\n\t\t\t\t},\n\t\t\t\t\"buyPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 99.95\n\t\t\t\t},\n\t\t\t\t\"sellPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 100\n\t\t\t\t},\n\t\t\t\t\"lastPrice\":\n\t\t\t\t{\n\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\"amount\": 103.995\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"priceGranularity\":\n\t\t\t{\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"amount\": 1e-8\n\t\t\t}\n\t\t},\n\t\t\"asks\":\n\t\t[\n\t\t\t[100, 150, 1.5],\n\t\t\t[100.0389496, 159.62345449, 1.59561306],\n\t\t],\n\t\t\"bids\":\n\t\t[\n\t\t\t[99.95, 9.995, 0.1],\n\t\t\t[99.68, 24.92, 0.25]\n\t\t]\n\t}\n}\n"
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
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"JTsUBAAAAUZMyB1ULSugK96cEK0\",\n\t\"status\": \"Success\",\n\t\"wallet\":\n\t{\n\t\t\"walletId\": \"AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2\",\n\t\t\"walletStatus\": \"Active\",\n\t\t\"accounts\":\n\t\t[\n\t\t\t{\n\t\t\t\t\"walletAccountId\": \"AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73\",\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"accountType\": \"Main\",\n\t\t\t\t\"accountStatus\": \"Active\",\n\t\t\t\t\"accountName\": \"Default EUR account\",\n\t\t\t\t\"accountBalance\":\n\t\t\t\t{\n\t\t\t\t\t\"balance\":\n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t},\n\t\t\t\t\t\"reservedBalance\":\n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"walletAccountId\": \"AAEAAAP2wHer5G2K21wABSU-sITEYlyw95pStLQLoT9TxrCHcJ9pPNo_\",\n\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\"accountType\": \"Main\",\n\t\t\t\t\"accountStatus\": \"Active\",\n\t\t\t\t\"accountName\": \"Default XBT account\",\n\t\t\t\t\"accountBalance\":\n\t\t\t\t{\n\t\t\t\t\t\"balance\":\n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t},\n\t\t\t\t\t\"reservedBalance\":\n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t]\n\t}\n}\n"
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
    "type": "get",
    "url": "/api/1/public/orderbook",
    "title": "Orderbook",
    "name": "Orderbook",
    "group": "Public_Charts",
    "version": "1.0.0",
    "description": "Retrieves the orderbook for a public market for the given currency pair",
    "permission": "public",
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
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"bids\": \n\t[\n\t\t[\n\t\t\t20,\n\t\t\t0.7879525\n\t\t],\n\t\t[\n\t\t\t2.5,\n\t\t\t1\n\t\t],\n\t\t[\n\t\t\t2,\n\t\t\t203\n\t\t],\n\t\t[\n\t\t\t1.99,\n\t\t\t3\n\t\t],\n\t\t[\n\t\t\t1.895,\n\t\t\t3.0223\n\t\t],\n\t\t[\n\t\t\t1.543,\n\t\t\t2\n\t\t]\n\t],\n\t\"asks\": \n\t[\n\t\t[\n\t\t\t104,\n\t\t\t1\n\t\t],\n\t\t[\n\t\t\t104.75,\n\t\t\t116.67\n\t\t],\n\t\t[\n\t\t\t104.97,\n\t\t\t23.1278\n\t\t],\n\t\t[\n\t\t\t12345678.90876543,\n\t\t\t1\n\t\t],\n\t\t[\n\t\t\t10000000000,\n\t\t\t0.1\n\t\t],\n\t\t[\n\t\t\t12345678901,\n\t\t\t2\n\t\t]\n\t]\n}\n"
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
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/BitcoinChartsApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/public/trades",
    "title": "Trades",
    "name": "Trades",
    "group": "Public_Charts",
    "version": "1.0.0",
    "description": "Retrieves the trades for a public market for the given currency pair",
    "permission": "public",
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
            "type": "Number",
            "field": "since",
            "optional": false,
            "description": "Unix-timestamp in seconds"
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
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/BitcoinChartsApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1/wallet/get",
    "title": "Wallet get",
    "name": "Wallet_get",
    "group": "Wallet",
    "version": "1.0.0",
    "description": "Returns the Wallet and account info",
    "permission": "authenticated user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "currency",
            "optional": true,
            "description": "a WalletAccount currency, if only WalletAccounts with that currency should be returned in the account-list"
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
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"JTsUBAAAAUZMyB1ULSugK96cEK0\",\n\t\"status\": \"Success\",\n\t\"wallet\":\n\t{\n\t\t\"walletId\": \"AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2\",\n\t\t\"walletStatus\": \"Active\",\n\t\t\"accounts\":\n\t\t[\n\t\t\t{\n\t\t\t\t\"walletAccountId\": \"AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73\",\n\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\"accountType\": \"Main\",\n\t\t\t\t\"accountStatus\": \"Active\",\n\t\t\t\t\"accountName\": \"Default EUR account\",\n\t\t\t\t\"accountBalance\":\n\t\t\t\t{\n\t\t\t\t\t\"balance\":\n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t},\n\t\t\t\t\t\"reservedBalance\":\n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"EUR\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"walletAccountId\": \"AAEAAAP2wHer5G2K21wABSU-sITEYlyw95pStLQLoT9TxrCHcJ9pPNo_\",\n\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\"accountType\": \"Main\",\n\t\t\t\t\"accountStatus\": \"Active\",\n\t\t\t\t\"accountName\": \"Default XBT account\",\n\t\t\t\t\"accountBalance\":\n\t\t\t\t{\n\t\t\t\t\t\"balance\":\n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t},\n\t\t\t\t\t\"reservedBalance\":\n\t\t\t\t\t{\n\t\t\t\t\t\t\"currency\": \"XBT\",\n\t\t\t\t\t\t\"amount\": 0\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t]\n\t}\n}\n"
        }
      ]
    },
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/PublicTradeApiController.java"
  }
] });