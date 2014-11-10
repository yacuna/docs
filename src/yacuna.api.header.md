#General

## About Yacuna
Yacuna.com is an international trading platform for digital currencies. 
Registered users can easily conduct their financial transactions in Bitcoins (XBT), Litecoins (LTC) and Dogecoins (DOGE).
All crypto currencies can be seamlessly exchanged to conventional currencies (e.g. EUR and GBP). 
All transactions with digital currencies on the Yacuna trading platform are subject to the same market mechanisms also known from trading and stock exchanges.
Yacuna Trading API allows you to become the high-frequency power trader on the Yacuna platform and to take advantage of arbitrage. 
You can easily create, confirm and cancel market orders, monitor your deals and wallet balances in different currencies. 
You can of course access the whole Yacuna order book and get information about the current market depth and spread.
</p>
Please note: Yacuna uses XBT cuttency code for Bitcoin instead of BTC.
XBT currency code complies with [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217 "ISO 4217") standard for currencies. Since Bitcoin is not associated with any specific country, the standard dictates that it should start with an X as does Gold (XAU) and Silver (XAG).

## Getting Started
To be able to use the Yacuna Trading API you need a valid Yacuna account which you can easily create at [Yacuna exchange](https://yacuna.com "Yacuna Exchange for DOGE XBT LTC").
We would recommend you to add all user data which is needed to complete your full KYC (Know Your Customer) verification, 
this will bring you higher limits on deposits, withdrawals and trading transactions.
You can do this under Settings / Personal Data. See more information regarding verification levels and limits under [Yacuna FAQ](https://yacuna.com/blog/faq/ "Yacuna FAQ")
To get started using Yacuna Trading API go to your settings area and find "API Token Id" and "API Token Secret" under the API-tab.
You will need those data to generate the "API-Token" to be passed with each API call within HTTP headers for your secure authentication.
Below you find description for every API call and examples how to implement them.
Do not hesitate to contact us in case of any questions or to share your experience or may be even your own implementation examples in other programming languages with us:<br/>
[Contact Yacuna](https://yacuna.com/blog/contact/ "Yacuna Contact Form") </br>
<info@yacuna.com> </br>

## Sandbox
Yacuna provides a fully functional [Sandbox](https://sandbox.yacuna.com "Safe testing environment at Yacuna Sandbox") accessible by everyone for free. Sandbox provides the same functionality as the live system. But instead of normal cryptocoins and real fiat money it uses coins generated in the testnet and virtual money provided by Yacuna. You can use the Yacuna sandbox to safely test the functionality of our trading platform or to write programs utilizing our API before using them in a live environment. After you registered [here](https://sandbox.yacuna.com/#/signup "Registration for the Yacuna Sandbox") Yacuna will provide you with a supply of virtual money. You can also use the [Yacuna Faucet](https://faucet.yacuna.com "Get your testcoins here") to request testcoins that can be used at the Sandbox. Naturally withdrawal of state issued currency is deactivated and we kindly ask you to send the testcoins back to Yacuna when you finished testing the Sandbox. 

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

function createRequestBodyForSignature(elements) {
	if (!elements) {
		return '';
	}
	var keys = [];
	for (key in elements) {
		keys.push(key);
	}
	keys.sort();
	var result = '';
	for (i = 0; i < keys.length; i++) {
		key = keys[i];
		value = elements[key];
		if (value instanceof File) {
			value = value.name;
		}
		if (value === null) {
			value = '';
		}
		if (result === '') {
			result = key + "=" + value;
		} else {
			result = result + "&" + key + "=" + value;
		}
	}
	return result;
}
</code>
</pre>

<strong>Example code in Perl how to calculate Api-token</strong>
<pre class="prettyprint language-perl">
<code>

my $requestParams = ["param1=value1", "param1=value1", "param1=value1"];
my $qry = defined $requestParams?(join "&", sort @{$requestParams}):undef;
my $body = '';
if('GET' eq $httpMethod && $qry ne ''){
	$restPath .= "?$qry";
}
elsif('POST' eq $httpMethod){
	$body = $qry;
}

my $apiToken = &prepareAuth($basePath.$restPath, $body, $httpMethod, $apiSecret);

sub prepareAuth(){
	my ($path, $body, $httpMethod, $apiSecret) = @_;
	my $tokenSalt = ''.time*1000;
	my $hashInput = $tokenSalt.'@'.$apiSecret.'@'.$httpMethod.'@'.$path;
	$hashInput .= '@'.$body if '' ne $body;
	my $apiToken = $tokenSalt.'T'.(sha512_hex($hashInput));

	return $apiToken;
}
</code>
</pre>

