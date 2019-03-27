<?php

/*
|--------------------------------------------------------------------------
| Register the Autoloader
|--------------------------------------------------------------------------
|
| Composer is our best friend. He maintains our dependencies and manage
| the autoloader very well. Good guy Composer.
|
*/
require dirname(__DIR__) . '/Vendor/autoload.php';

/*
|--------------------------------------------------------------------------
| Register the Environment Variables
|--------------------------------------------------------------------------
|
| Reads the config file (config/env.php) and register it in using the
| putenv() function. Configurations are retreivable using the getenv() 
| function everywhere in the project.
|
*/
Radion\Config::setEnv();

/*
|--------------------------------------------------------------------------
| Register the Error Handler
|--------------------------------------------------------------------------
|
| The debugging tool will register the error handler based on your
| configuration (located at config/env.php). 
|
*/
Radion\Debugger::start();