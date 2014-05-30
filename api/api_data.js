define({ api: [
  {
    "type": "get",
    "url": "/api/1_0_0/yacuna/trade/order/get/{orderId}",
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
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\": \n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\t\n\t\"requestId\": \"JTsUBAAAAUZMO8gILSugK96cEI4\",\n\t\"status\": \"Success\",\n\t\"tradeOrder\": \n\t{\n\t\t\"id\": \"AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI\",\n\t\t\"externalReferenceId\": null\n\t\t\"creationDateTime\": \"2014-05-30T08:25:24Z\",\n\t\t\"customType\": null,\n\t\t\"walletId\": \"AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2\",\n\t\t\"walletAccountId\": \"AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73\",\n\t\t\"walletAccountItemId\": null,\n\t\t\"marketId\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\"tradeOrderType\": \"BuyMarket\",\n\t\t\"tradeOrderStatus\": \"Created\",\n\t\t\"tradeOrderMarketStatus\": null,\n\t\t\"priceLimit\": null,\n\t\t\"fillRatio\": 0,\n\t\t\"amount\": \n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 400\n\t\t},\n\t\t\"buyAmount\": \n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 1\n\t\t},\n\t\t\"totalAmountSold\": \n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 0\n\t\t},\n\t\t\"totalAmountBought\": \n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 0\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/TradeApiController.java"
  },
  {
    "type": "post",
    "url": "/api/1_0_0/yacuna/trade/order/cancel/{orderId}",
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
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\": \n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\t\n\t\"requestId\": \"JTsUBAAAAUZMO8gILSugK96cEI4\",\n\t\"status\": \"Success\",\n\t\"tradeOrder\": \n\t{\n\t\t\"id\": \"AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI\",\n\t\t\"externalReferenceId\": null\n\t\t\"creationDateTime\": \"2014-05-30T08:25:24Z\",\n\t\t\"customType\": null,\n\t\t\"walletId\": \"AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2\",\n\t\t\"walletAccountId\": \"AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73\",\n\t\t\"walletAccountItemId\": null,\n\t\t\"marketId\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\"tradeOrderType\": \"BuyMarket\",\n\t\t\"tradeOrderStatus\": \"Created\",\n\t\t\"tradeOrderMarketStatus\": null,\n\t\t\"priceLimit\": null,\n\t\t\"fillRatio\": 0,\n\t\t\"amount\": \n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 400\n\t\t},\n\t\t\"buyAmount\": \n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 1\n\t\t},\n\t\t\"totalAmountSold\": \n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 0\n\t\t},\n\t\t\"totalAmountBought\": \n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 0\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/TradeApiController.java"
  },
  {
    "type": "post",
    "url": "/api/1_0_0/yacuna/trade/order/confirm/{orderId}",
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
          "content": "HTTP/1.1 200 OK\n{\n\t\"requestId\": \"JTsUBAAAAUZNQevTLSugK96cEOo\",\n\t\"status\": \"Success\",\n\t\"tradeOrder\": \n\t{\n\t\t\"id\": \"AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI\",\n\t\t\"externalReferenceId\": null,\n\t\t\"creationDateTime\": \"2014-05-30T08:25:24Z\",\n\t\t\"fillRatio\": 0,\n\t\t\"customType\": null,\n\t\t\"walletId\": \"AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2\",\n\t\t\"walletAccountId\": \"AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73\",\n\t\t\"walletAccountItemId\": AAEAAAfCjEaHb7rD3cTkVKYjKQAFgm-A0hgUS-C30hrSo-Hy95j8aWsd,\n\t\t\"marketId\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\"tradeOrderType\": \"BuyMarket\",\n\t\t\"tradeOrderStatus\": \"Confirmed\",\n\t\t\"tradeOrderMarketStatus\": \"SentToMarket\",\n\t\t\"priceLimit\": null,\n\t\t\"amount\": \n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 400\n\t\t},\n\t\t\"buyAmount\": \n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 1\n\t\t},\n\t\t\"totalAmountSold\": \n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 0\n\t\t},\n\t\t\"totalAmountBought\": \n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 0\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\": \n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/TradeApiController.java"
  },
  {
    "type": "post",
    "url": "/api/1_0_0/yacuna/trade/order/create/{marketId}",
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
            "field": "marketId",
            "optional": false,
            "description": "unique ID of Market eg. EURLTC"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "walletAccountId",
            "optional": false,
            "description": "your wallet account ID"
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
            "optional": false,
            "description": "amount to sell"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sellCurrency",
            "optional": false,
            "description": "currency of amount to sell"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "buyAmount",
            "optional": false,
            "description": "amount to buy"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "buyCurrency",
            "optional": false,
            "description": "currency of amount to buy"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "priceLimitAmount",
            "optional": false,
            "description": "set price limit amount"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "priceLimitCurrency",
            "optional": false,
            "description": "set price limit currency"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "externalReferenceId",
            "optional": false,
            "description": "set your own reverence id for order"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\": \n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\t\n\t\"requestId\": \"JTsUBAAAAUZMO8gILSugK96cEI4\",\n\t\"status\": \"Success\",\n\t\"tradeOrder\": \n\t{\n\t\t\"id\": \"AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI\",\n\t\t\"externalReferenceId\": null\n\t\t\"creationDateTime\": \"2014-05-30T08:25:24Z\",\n\t\t\"customType\": null,\n\t\t\"walletId\": \"AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2\",\n\t\t\"walletAccountId\": \"AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73\",\n\t\t\"walletAccountItemId\": null,\n\t\t\"marketId\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\"tradeOrderType\": \"BuyMarket\",\n\t\t\"tradeOrderStatus\": \"Created\",\n\t\t\"tradeOrderMarketStatus\": null,\n\t\t\"priceLimit\": null,\n\t\t\"fillRatio\": 0,\n\t\t\"amount\": \n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 400\n\t\t},\n\t\t\"buyAmount\": \n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 1\n\t\t},\n\t\t\"totalAmountSold\": \n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 0\n\t\t},\n\t\t\"totalAmountBought\": \n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 0\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/TradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1_0_0/yacuna/trade/order/getByExternalReferenceId/{walletAccountId}",
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
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\": \n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\t\n\t\"requestId\": \"JTsUBAAAAUZMO8gILSugK96cEI4\",\n\t\"status\": \"Success\",\n\t\"tradeOrder\": \n\t{\n\t\t\"id\": \"AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI\",\n\t\t\"externalReferenceId\": null\n\t\t\"creationDateTime\": \"2014-05-30T08:25:24Z\",\n\t\t\"customType\": null,\n\t\t\"walletId\": \"AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2\",\n\t\t\"walletAccountId\": \"AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73\",\n\t\t\"walletAccountItemId\": null,\n\t\t\"marketId\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\"tradeOrderType\": \"BuyMarket\",\n\t\t\"tradeOrderStatus\": \"Created\",\n\t\t\"tradeOrderMarketStatus\": null,\n\t\t\"priceLimit\": null,\n\t\t\"fillRatio\": 0,\n\t\t\"amount\": \n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 400\n\t\t},\n\t\t\"buyAmount\": \n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 1\n\t\t},\n\t\t\"totalAmountSold\": \n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 0\n\t\t},\n\t\t\"totalAmountBought\": \n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 0\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/TradeApiController.java"
  },
  {
    "error": {
      "examples": [
        {
          "title": "Error-Response Example:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\": \n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "group": "TradeApiController.java",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/TradeApiController.java"
  },
  {
    "success": {
      "examples": [
        {
          "title": "Success-Response Example:",
          "content": "HTTP/1.1 200 OK\n{\t\n\t\"requestId\": \"JTsUBAAAAUZMO8gILSugK96cEI4\",\n\t\"status\": \"Success\",\n\t\"tradeOrder\": \n\t{\n\t\t\"id\": \"AAEAAks1SVZ5LFDgIZr78JiwvgeLKY5bjbE-3K13LddaT1rE0Dwev4pI\",\n\t\t\"externalReferenceId\": null\n\t\t\"creationDateTime\": \"2014-05-30T08:25:24Z\",\n\t\t\"customType\": null,\n\t\t\"walletId\": \"AAEAAAMk7LOCDuIYKZpn_pYm6BFexMEA2Lglnfikwed-G4gzG0tBHlQ2\",\n\t\t\"walletAccountId\": \"AAEAAAP2wHer522rsdPEsVFoHFKlFOGzAnpzUpovZf-Nt-X8deaIWN73\",\n\t\t\"walletAccountItemId\": null,\n\t\t\"marketId\": \"AAEAAARlG2T9PYuFwWPyYKZ7XSDxREo8LprKx3MMF3LHhlCPB6RMk9aW\",\n\t\t\"tradeOrderType\": \"BuyMarket\",\n\t\t\"tradeOrderStatus\": \"Created\",\n\t\t\"tradeOrderMarketStatus\": null,\n\t\t\"priceLimit\": null,\n\t\t\"fillRatio\": 0,\n\t\t\"amount\": \n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 400\n\t\t},\n\t\t\"buyAmount\": \n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 1\n\t\t},\n\t\t\"totalAmountSold\": \n\t\t{\n\t\t\t\"currency\": \"EUR\",\n\t\t\t\"amount\": 0\n\t\t},\n\t\t\"totalAmountBought\": \n\t\t{\n\t\t\t\"currency\": \"XBT\",\n\t\t\t\"amount\": 0\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "group": "TradeApiController.java",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/TradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1_0_0/wallet/get/{walletId}",
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
            "optional": false,
            "description": "(optional) limit responce to given currencies"
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
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"requestId\": \"JTsUBAAAAUZML_4ZLSugK96cELw\",\n\t\"status\": \"Error\",\n\t\"errorDetails\": \n\t[\n\t\t{\n\t\t\t\"simpleName\": \"WalletException\",\n\t\t\t\"description\": \"[AuthenticationError] Api-Token required\",\n\t\t\t\"errorName\": \"AuthenticationError\",\n\t\t\t\"errorNumber\": 4000000,\n\t\t\t\"errorMessageShort\": null,\n\t\t\t\"errorMessageLong\": null,\n\t\t\t\"fieldName\": null,\n\t\t\t\"limitsViolated\": null\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/WalletApiController.java"
  }
] });