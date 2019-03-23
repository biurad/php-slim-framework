<?php

namespace Middleware;

use Radion\ResponseManager as Response;
use Radion\RouterManager as Router;

/**
 * Class Hello.
 */
class Hello
{
    public static function filter()
    {
        // Always redirect this route to /home
        if (Router::getCurrentRoute() == '/route/to/be/filtered') {
            Response::redirect('home')->with([
                'home_message'=> 'This route have been filtered by the Hello middleware',
                'type'         => 'alert-warning',
            ]);
        }
    }
}