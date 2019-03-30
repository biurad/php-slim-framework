<?php
 /**
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded within a group which
| is assigned the "api". Enjoy building your API!
|
|
*/


/**
|--------------------------------------------------------------------------
| Basic Api Demonstration
|--------------------------------------------------------------------------
|
| This is to demonstrate getting api info from a controller
| Navigate to api/ping to see what happens
|
 */

Router::get('api/ping','Service\Api\PingHandler@handle');
