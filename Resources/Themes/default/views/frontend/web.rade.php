<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="robots" content="noindex,nofollow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Web Manager</title>
</head>

<body>
    @csrf
    @if(Request::get('cache') === 'clear')
        @php
        if(empty(\Controller\Web::clearCache())) {
            \Response::redirect('./',20);
            $errorget = new \Logger;
            $errorget->throwError("Sucessful in Cleaning Framework View Caches");
        }
        else{
            return \Controller\Web::clearCache();
            $errorget = new \Logger;
            $errorget->throwError("Sucessful in Cleaning Framework View Caches");
        }
        @endphp
    @endif
</body>

</html> 