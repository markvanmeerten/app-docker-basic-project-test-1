<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/hello', function () {
    return response()->json(['message' => 'Hallo vanaf Laravel web.php']);
});

Route::get('/about', function () {
    return "The about section..";
});

Route::get('/api/increment', function (Request $request) {
    $counter = Counter::first();

    if (!$counter) {
        $counter = Counter::create(['value' => 1]);
    } else {
        $counter->increment('value');
    }

    return response()->json(['value' => $counter->value]);
});