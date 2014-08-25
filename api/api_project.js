define({
  "name": "YACUNA API",
  "version": "1.0.0",
  "description": "Trading API Specification",
  "title": "YACUNA Trading API Specification",
  "url": "https://yacuna.com",
  "header": {
    "title": "General",
    "content": "<h1 id=\"general\">General</h1>\n<h2 id=\"authentication\">Authentication</h2>\n<p>To be able to use the Yacuna Trading API you need a valid Yacuna account.<br>\nIn your settings area you should get &quot;API Token Id&quot; and &quot;API Token Secret&quot;.<br>\nUsing those data you can generate the &quot;Api-Token&quot; to be calculated and passed with each API call within HTTP headers.<br>\nAs salt for Api-token calculation unix timestamp in milliseconds should be used.<br></p>\n<p><p><strong>Inputs for Api-token calculation</strong></p></p>\n<table>\n    <thead>\n        <tr>\n            <th style=\"width: 30%\">Field</th>\n            <th style=\"width: 70%\">Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td class=\"code\">Salt</td>\n            <td>Timestamp in milliseconds</td>\n        </tr>\n        <tr>\n            <td class=\"code\">API secret</td>\n            <td>From your Yacuna account</td>\n        </tr>\n        <tr>\n            <td class=\"code\">Http method of request</td>\n            <td>GET, POST, etc.</td>\n        </tr>\n        <tr>\n            <td class=\"code\">URI path of request</td>\n            <td>eg. /api/1/wallet/get&amp;currency=EUR</td>\n        </tr>\n        <tr>\n            <td class=\"code\">Separator character</td>\n            <td>@</td>\n        </tr>\n    </tbody>\n</table>\n\n<p>Plain input for Api-Token calculation: </p>\n<pre class=\"prettyprint language-html prettyprinted\" data-type=\"example\"><code><span class=\"pln\">1404203385000@0ab0ac9aa5fb881b30d56cb40368c8a2@GET@/api/1/wallet/get</span></code></pre>\n\n<p>Api token creation algorithm: </p>\n<pre class=\"prettyprint language-html prettyprinted\" data-type=\"algorithm\"><code><span class=\"pln\">salt+T+hex(sha512(plain input))</span></code></pre>\n\n<p>Api token result</p>\n<pre class=\"prettyprint language-html prettyprinted\" data-type=\"example\"><code><span class=\"pln\">1404203385000T0e584fdc9905755173dac10ac02d0bdd24ce2eef5df41cee5e4daca750d461c9c5bc301b74deb3f566389b8008496a86ca3188034cab853a453c354bb2a1e647</span></code></pre>\n\n<p><p>\nAs additional security option one time password can be added.</p>\n<p><p>\nMethod parameters are sent via HTTP POST.</p>\n<p><p>\nAPI answers are in JSON format.</p>\n<p><strong>Example of HTTP header data needed for the call authentication:</strong></p>\n<pre class=\"prettyprint\" data-type=\"json\">\n<code>\n{\n    \"Api-Token-Id\": \"AAEAAAgfi0NjCp9rrgTVM2-BBrP6AgkykwBEwFj74fcHFkNpmcsgjLph\",\n    \"Api-Token\": \"1401710118967Tcdbbf266b260a494ed99d0037de0c5c8353934335bd9656c8c4d1b449602f6c62231446b727f3a1e9918919af6bfdba574f5e245fe132e1fff04b4c111b72823\",\n    \"Api-Token-OTP\": \"\"\n}\n</code>\n</pre>\n\n<p><strong>Example code in JavaScript how to calculate Api-token</strong></p>\n<pre class=\"prettyprint language-javascript\">\n<code>\nfunction createTokenHeaders(requestMethod, requestUrl, requestQueryString, requestBody) {\n    if (isEmpty(tokenId)) {\n        return {};\n    }\n    var tokenSalt = '' + new Date().getTime();\n    var hashInput = tokenSalt + '@' + tokenSecret + '@' + requestMethod + '@' + requestUrl;\n    if (!isEmpty(requestQueryString)) {\n        hashInput = hashInput + '?' + requestQueryString;\n    }\n    if (!isEmpty(requestBody)) {\n        hashInput = hashInput + '@' + createRequestBodyForSignature(requestBody);\n    }\n    var hasher = new jsSHA(hashInput, 'TEXT');\n    return {\n        'Api-Token-Id': tokenId,\n        'Api-Token': tokenSalt + 'T' + hasher.getHash(\"SHA-512\", \"HEX\"),\n        'Api-Token-OTP': tokenOTP\n    };\n}\n\nfunction createRequestBodyForSignature(elements) {\n    if (!elements) {\n        return '';\n    }\n    var keys = [];\n    for (key in elements) {\n        keys.push(key);\n    }\n    keys.sort();\n    var result = '';\n    for (i = 0; i < keys.length; i++) {\n        key = keys[i];\n        value = elements[key];\n        if (value instanceof File) {\n            value = value.name;\n        }\n        if (value === null) {\n            value = '';\n        }\n        if (result === '') {\n            result = key + \"=\" + value;\n        } else {\n            result = result + \"&\" + key + \"=\" + value;\n        }\n    }\n    return result;\n}\n</code>\n</pre>\n\n"
  },
  "footer": {
    "title": "Examples",
    "content": "<h1 id=\"examples\">Examples</h1>\n<h2 id=\"perl\">Perl</h2>\n<p><strong>Example code in Perl how to implement Yacuna API client</strong></p>\n<pre class=\"prettyprint language-perl\">\n<code>\n#!/usr/bin/perl\n\nuse strict;\nno strict 'subs';\nuse warnings;\n\nuse WWW::Mechanize;\nuse Data::Dump qw(dump);\nuse JSON;\nuse Error qw(:try);\nuse MIME::Base64;\nuse Digest::SHA qw(sha512 sha512_hex);\n\nmy $browser = WWW::Mechanize->new(\n    # skip ssl validation in case of test system\n    ssl_opts => {\n        SSL_verify_mode => IO::Socket::SSL::SSL_VERIFY_NONE,\n        verify_hostname => 0 # this key is likely going to be removed in future LWP >6.04\n    }\n);\n\nmy $json = new JSON;\n\nmy $apiTokenId = 'AAEabcgfi0NjCp9rr123M2-xxxP6AgkykwBEwFj74fcHFkNXlPsgjLph';\nmy $apiSecret = '0a489cbb9aa5fb8abd90d56cb4036123';\nmy $apiHost = 'https://test.yacuna.com';\nmy $basePath = '/api/1/';\n\nmain->run();\n\nsub run{\n    try{\n        &getMyWallet();\n    }\n    catch Error::Simple with{\n        my $E = shift;\n        dump($E);\n    };\n    exit(0);\n}\n\nsub getMyWallet(){\n    my $path = $basePath.'wallet/get';\n    my $apiToken = &prepareAuth($path);\n    my $wallet = &fetchData('GET', $apiHost.$path, $apiToken);\n\n    foreach my $account (@{$wallet->{'wallet'}->{'accounts'}}){\n        dump($account);\n    }\n}\n\nsub fetchData(){\n    my ($method, $uri, $apiToken) = @_;\n    $browser->add_header( 'Api-Token-Id' => $apiTokenId, 'Api-Token' => $apiToken, 'Api-Token-OTP'=>'');\n\n    try{\n        if($method eq 'GET'){\n            $browser->get($uri);\n        }\n        my $resp = $json->decode($browser->content());\n        return $resp;\n    }\n    catch Error with{\n        my $E = shift;\n        dump($browser->response->decoded_content);\n    }\n}\n\nsub prepareAuth(){\n    my ($path) = @_;\n    my $tokenSalt = ''.time*1000;\n    my $hashInput = $tokenSalt.'@'.$apiSecret.'@'.'GET'.'@'.$path;\n    my $apiToken = $tokenSalt.'T'.(sha512_hex($hashInput));\n    return $apiToken;\n}\n</code>\n</pre>\n\n"
  },
  "generator": {
    "version": "0.7.0",
    "time": "2014-08-25T12:07:07.701Z"
  }
});