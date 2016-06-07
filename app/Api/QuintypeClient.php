<?php

namespace App\Api;

use GuzzleHttp\Client;
use Log;

class MenuItem
{
    public function __construct($hash, $config)
    {
        $this->hash = $hash;
        $this->config = $config;
    }

    public function title()
    {
        Log::info($this->hash);
        return $this->hash["title"];
    }

    public function url()
    {
        switch($this->hash["item-type"]) {
        case "section": return "/section/" . $this->hash["section-slug"];
        default: return "#";
        }
    }
}

class Config
{
    public function __construct($hash) {
        $this->hash = $hash;
    }

    public function menuItems() {
        return array_map(function($menu) {
            return new MenuItem($menu, $this);
        }, $this->hash["layout"]["menu"]);
    }
}

class QuintypeClient
{
    public function __construct($apiHost) {
        $this->client = new Client([
            "base_uri" => $apiHost
        ]);
    }

    public function getResponse($query) {
    	return json_decode($this->client->get($query)->getBody(), true);
    }

    public function config() {
        return new Config($this->getResponse("/api/v1/config"));
    }
}