<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/hello', function () {
    return response()->json(['message' => 'Hallo vanaf Laravel web.php']);
});