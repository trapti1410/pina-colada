<?php

function assetPath($file)
{
    $cdn = config("quintype.asset-host");
    return $cdn . elixir($file, config("quintype.publisher-name") . "/assets");
}
