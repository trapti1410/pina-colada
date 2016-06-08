<?php

use App\Api\FocussedImage;

function assetPath($file)
{
    $cdn = config("quintype.asset-host");
    return $cdn . elixir($file, config("quintype.publisher-name") . "/assets");
}

function focusedImageUrl($slug, $aspectRatio, $metadata, $opts) {
    $cdn = config("quintype.image-cdn");
    $image = new FocussedImage($slug, $metadata);
    return $cdn . "/" . $slug . $image->path($aspectRatio, $opts);
}