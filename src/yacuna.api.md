#General

## Authentication 

To be able to use the Yacuna Trading API you need a valid Yacuna account.<br>
In your settings area you should get "API Token Id" and "API Token Secret".<br>
Using those data you can generate the "Api-Token" to be passed with each API call within HTTP headers.<br>
As additional security option one time password can be added.
<p>
Method parameters are sent via HTTP POST.
<p>
API answers are in JSON format.

<strong>Example of HTTP header data needed for the call authentication:</strong>

<pre class="prettyprint language-json prettyprinted" data-type="json" style="">
<code>
{
	"Api-Token-Id": "AAEAAAgfi0NjCp9rrgTVM2-BBrP6AgkykwBEwFj74fcHFkNpmcsgjLph",
	"Api-Token": "1401710118967Tcdbbf266b260a494ed99d0037de0c5c8353934335bd9656c8c4d1b449602f6c62231446b727f3a1e9918919af6bfdba574f5e245fe132e1fff04b4c111b72823",
	"Api-Token-OTP": ""
}
</code>
</pre>

<strong>Example code in JavaScript how to calculate Api-token</strong>
<pre class="prettyprint language-javascript prettyprinted" data-type="json" style="">
<code>
function createTokenHeaders(requestMethod, requestUrl, requestQueryString, requestBody) {
	if (isEmpty(tokenId)) {
		return {};
	}
	var tokenSalt = '' + new Date().getTime();
	var hashInput = tokenSalt + '@' + tokenSecret + '@' + requestMethod + '@' + requestUrl;
	if (!isEmpty(requestQueryString)) {
		hashInput = hashInput + '?' + requestQueryString;
	}
	if (!isEmpty(requestBody)) {
		hashInput = hashInput + '@' + createRequestBodyForSignature(requestBody);
	}
	var hasher = new jsSHA(hashInput, 'TEXT');
	return {
		'Api-Token-Id': tokenId,
		'Api-Token': tokenSalt + 'T' + hasher.getHash("SHA-512", "HEX"),
		'Api-Token-OTP': tokenOTP
	};
}
</code>
</pre>
