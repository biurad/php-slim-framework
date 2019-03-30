<!DOCTYPE html>
<html lang="en" class="no-js">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>@yield('title')</title>
    @include('frontend.include.head')
    <script src="@asset('assets/default/js/jquery-2.1.3.min.js')"></script>
    @section('css')
    @show()
</head>

<body class="material-template">
    @csrf()
    
    <!-- Loading animation -->
    @include('frontend.include.loadbar')
    <!-- /Loading animation -->

    <div id="page" class="page">
        @include('frontend.include.header')
        <!-- page content -->
        @section('content')
        @show
        <!-- end page content -->
    </div>
    <footer>
        <div class="copyrights">© 2019 All rights reserved. Website Designed by <a href="http://www.biustudios.ml">BiuStudios</a> </div>
    </footer>
    @section('js')
    @show()

    @include("frontend.include.footer")
</body>

</html> 