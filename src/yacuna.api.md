#General

## Authentication 

To be able to use the Yacuna Trading API you need a valid Yacuna account.<br>
In your settings area you should get "API Token Id" and "API Token Secret".<br>
Using those data you can generate the "Api-Token" to be calculated and passed with each API call within HTTP headers.<br>
As salt for Api-token calculation unix timestamp in milliseconds should be used.<br>

<p><strong>Inputs for Api-token calculation</strong></p>
<table>
	<thead>
		<tr>
			<th style="width: 30%">Field</th>
			<th style="width: 70%">Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="code">Salt</td>
			<td>Timestamp in milliseconds</td>
		</tr>
		<tr>
			<td class="code">API secret</td>
			<td>From your Yacuna account</td>
		</tr>
		<tr>
			<td class="code">Http method of request</td>
			<td>GET, POST, etc.</td>
		</tr>
		<tr>
			<td class="code">URI path of request</td>
			<td>eg. /api/1/wallet/get&currency=EUR</td>
		</tr>
		<tr>
			<td class="code">Separator character</td>
			<td>@</td>
		</tr>
	</tbody>
</table>

Plain input for Api-Token calculation: 
<pre class="prettyprint language-html prettyprinted" data-type="example"><code><span class="pln">1404203385000@0ab0ac9aa5fb881b30d56cb40368c8a2@GET@/api/1/wallet/get</span></code></pre>

Api token creation algorithm: 
<pre class="prettyprint language-html prettyprinted" data-type="algorithm"><code><span class="pln">salt+T+hex(sha512(plain input))</span></code></pre>

Api token result
<pre class="prettyprint language-html prettyprinted" data-type="example"><code><span class="pln">1404203385000T0e584fdc9905755173dac10ac02d0bdd24ce2eef5df41cee5e4daca750d461c9c5bc301b74deb3f566389b8008496a86ca3188034cab853a453c354bb2a1e647</span></code></pre>

<p>
As additional security option one time password can be added.
<p>
Method parameters are sent via HTTP POST.
<p>
API answers are in JSON format.

<strong>Example of HTTP header data needed for the call authentication:</strong>

<pre class="prettyprint" data-type="json">
<code>
{
	"Api-Token-Id": "AAEAAAgfi0NjCp9rrgTVM2-BBrP6AgkykwBEwFj74fcHFkNpmcsgjLph",
	"Api-Token": "1401710118967Tcdbbf266b260a494ed99d0037de0c5c8353934335bd9656c8c4d1b449602f6c62231446b727f3a1e9918919af6bfdba574f5e245fe132e1fff04b4c111b72823",
	"Api-Token-OTP": ""
}
</code>
</pre>

<strong>Example code in JavaScript how to calculate Api-token</strong>
<pre class="prettyprint language-javascript">
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

