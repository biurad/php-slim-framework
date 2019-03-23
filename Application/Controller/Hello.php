<?php

namespace Controller;

use Radion\Http\Request;

class Hello
{
    public function greetWithName($name)
    {
        echo 'Hello, '.$name.'!';
    }

    public function greetForm()
    {
        $name = Request::get('name');
        if ($name == '') {
            echo 'How could you have no name :(';
        } else {
            echo 'Hello, '.$name.'!';
        }
    }
}