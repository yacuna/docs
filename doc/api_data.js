define({ api: [
  {
    "type": "post",
    "url": "/api/1_0_0/yacuna/trade/order/create/{marketId}",
    "title": "Create order",
    "name": "Order_Create",
    "group": "Order",
    "version": "1.0.0",
    "description": "Creates new market order",
    "permission": "registered user",
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
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "firstname",
            "optional": false,
            "description": "Firstname of the User"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "lastname",
            "optional": false,
            "description": "Lastname of the User"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"firstname\": \"John\",\n     \"lastname\": \"Doe\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "The id of the User was not found."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"UserNotFound\"\n   }\n"
        }
      ]
    },
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/TradeApiController.java"
  },
  {
    "type": "get",
    "url": "/api/1_0_0/yacuna/trade/order/get/{orderId}",
    "title": "Retrieve Order",
    "name": "Order_Get",
    "group": "Order",
    "version": "1.0.0",
    "description": "Retrieves an existing Order with the given ID, provided the currently authenticated user has access to it.",
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
    "filename": "/home/natasha/workspace/monopoto.server.trunk/webapp/external/src/main/java/com/trimplement/wallet/server/monopoto/webapp/external/controller/api_1_0_0/TradeApiController.java"
  }
] });