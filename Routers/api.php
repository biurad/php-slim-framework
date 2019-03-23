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
| If you wish to build your api from here. Then uncomment the "use" classes
| and use this example for demo
|
Router::get('api/demo', function(ServerRequestInterface $request) : ResponseInterface {
    return new JsonResponse([
        'welcome' => 'Congratulations! Your Api Demo Worked Voila.',
        'docsUrl' => 'https://slim.biurad.ml/api/docs',
    ]);
});
|
*/



//use Psr\Http\Message\ResponseInterface;
//use Psr\Http\Message\ServerRequestInterface;
//use Psr\Http\Server\RequestHandlerInterface;
//use Zend\Diactoros\Response\JsonResponse;

/**
|--------------------------------------------------------------------------
| Basic Api Demonstration
|--------------------------------------------------------------------------
|
| This is to demonstrate getting api info from a controller
| Navigate to api/ping to see what happens
|
 */

Router::get('api/ping','Service\Api\ApiSerice@handle');