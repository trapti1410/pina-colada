<?php

namespace App\Http\Controllers;

use App\Http\Controllers\QuintypeController;

class HomeController extends QuintypeController
{
    public function index()
    {
        return view('home', ["foo" => $this->foo]);
    }
}