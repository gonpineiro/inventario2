<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
 */
Route::apiResource('admin/user', App\Http\Controllers\Admin\UserController::class)->middleware('auth:api');
Route::apiResource('admin/client', App\Http\Controllers\Admin\ClientController::class)->middleware('auth:api');
Route::apiResource('admin/departament', App\Http\Controllers\Admin\DepartamentController::class)->middleware('auth:api');
