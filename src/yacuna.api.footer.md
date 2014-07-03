# Examples 
## Perl

<strong>Example code in Perl how to implement Yacuna API client</strong>
<pre class="prettyprint language-perl">
<code>
#!/usr/bin/perl

use strict;
no strict 'subs';
use warnings;

use WWW::Mechanize;
use Data::Dump qw(dump);
use JSON;
use Error qw(:try);
use MIME::Base64;
use Digest::SHA qw(sha512 sha512_hex);

my $browser = WWW::Mechanize->new(
	# skip ssl validation in case of test system
	ssl_opts => {
        	SSL_verify_mode => IO::Socket::SSL::SSL_VERIFY_NONE,
        	verify_hostname => 0, # this key is likely going to be removed in future LWP >6.04
	}
);

my $json = new JSON;

my $apiTokenId = 'AAEabcgfi0NjCp9rr123M2-xxxP6AgkykwBEwFj74fcHFkNXlPsgjLph';
my $apiSecret = '0a489cbb9aa5fb8abd90d56cb4036123';
my $apiHost = 'https://test.yacuna.com';
my $basePath = '/api/1/';

main->run();

sub run{
        try{
                &getMyWallet();
	}
        catch Error::Simple with{
                my $E = shift;
                dump($E);
        };
        exit(0);
}

sub getMyWallet(){
        my $path = $basePath.'wallet/get';
        my $apiToken = &prepareAuth($path);
        my $wallet = &fetchData('GET', $apiHost.$path, $apiToken);

        foreach my $account (@{$wallet->{'wallet'}->{'accounts'}}){
                dump($account);
        }
}

sub fetchData(){
        my ($method, $uri, $apiToken) = @_;
        $browser->add_header( 'Api-Token-Id' => $apiTokenId, 'Api-Token' => $apiToken, 'Api-Token-OTP'=>'');

        try{
                if($method eq 'GET'){
                        $browser->get($uri);
                }
                my $resp = $json->decode($browser->content());
                return $resp;
        }
        catch Error with{
                my $E = shift;
                dump($browser->response->decoded_content);
        }
}

sub prepareAuth(){
        my ($path) = @_;
        my $tokenSalt = ''.time*1000;
        my $hashInput = $tokenSalt.'@'.$apiSecret.'@'.'GET'.'@'.$path;
        my $apiToken = $tokenSalt.'T'.(sha512_hex($hashInput));
        return $apiToken;
}
</code>
</pre>

