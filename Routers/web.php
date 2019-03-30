<?php
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Just tell Biurad the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/*
|--------------------------------------------------------------------------
| The Basic Routes - Route GET / into /home.php
|--------------------------------------------------------------------------
|
| Requests from / will be served by the /home.php. You can also put
| view files (home.php) into any directory within the project.
|
*/
Router::get('/', function() {
	Viewer::file('frontend.welcome');
});

/*
|--------------------------------------------------------------------------
| Controller & HTTP Middleware Demonstration
|--------------------------------------------------------------------------
|
| This is to demonstrate using Controller and Middleware with
| StupidlySimple framework. Try to go to /hello or /hello/yourname and see
| what it shows.
|
| Middleware is about how our application responds to incoming requests.
| Middleware look into the incoming request, and make decisions based on
| this request. We can build entire applications only using middleware.
|
| In this example, the hello middleware will demonstrate filtering a
| request, which is the /route/to/be/filtered. Try to go to the url and
| see what happen.
|
*/


/*
|--------------------------------------------------------------------------
| Lazy Routing - Route GET /(:any) into /(:any).php
|--------------------------------------------------------------------------
|
| This is to demonstrate wildcard routing, which allows you to route any
| URI into any file.
|
*/
Router::get('/(:any)', function($match) {
	Viewer::file('frontend/'.$match);
});

/*
|--------------------------------------------------------------------------
| Basic Crud Demonstration
|--------------------------------------------------------------------------
|
| This is to demonstrate geting form data into a controller
|
*/
//Router::get('error-forbidden', 'Controller\Custom_Exception@error_forbidden');
//Router::get('error-custom', 'Controller\Custom_Exception@error_custom');

/*
|--------------------------------------------------------------------------
| Web Routers
|--------------------------------------------------------------------------
|
*/
