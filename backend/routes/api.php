<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/api/increment/{id}', function (Request $request) {
    $counter = Counter::where('id', $id)->first();

    if (!$counter) {
        $counter = Counter::create(['id' => $id, 'value' => 1]);
    } else {
        $counter->increment('value');
    }

    return response()->json(['id' => $counter->id, 'value' => $counter->value]);
})->middleware('auth:sanctum');

Route::get('/api/increment/{id}', function (Request $request) {
    return response()->json(['value' => '-1']);
})->middleware('auth:sanctum');
