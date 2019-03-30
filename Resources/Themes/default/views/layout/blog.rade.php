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
        <header id="site_header" class="header mobile-menu-hide">
            <div class="header-content">
                <div class="site-title-block mobile-hidden">
                    <div class="site-title">Welcome To Daniel Niiquaye's <span>Offical Website</span></div>
                </div>

                <!-- Navigation -->
                <div class="site-nav">
                    <!-- Main menu -->
                    <ul id="nav" class="site-main-menu">
                        <li>
                            <a class="pt-trigger" href="./" data-animation="62">Home</a><!-- href value = data-id without # of .pt-page. -->
                        </li>
                        <li>
                            <a class="pt-trigger" href="./" data-animation="62">Resume</a>
                        </li>
                        <li>
                            <a class="pt-trigger" href="./" data-animation="62">Services</a>
                        </li>
                        <li>
                            <a class="pt-trigger" href="./" data-animation="62">Portfolio</a>
                        </li>
                        <li>
                            <a class="pt-trigger" href="./" data-animation="62">Blog</a>
                        </li>
                        <li>
                            <a class="pt-trigger" href="./" data-animation="62">Contact</a>
                        </li>
                    </ul>
                    <!-- /Main menu -->
                </div>
                <!-- Navigation -->
            </div>
        </header>
        <!-- /Header -->

        <!-- Mobile Header -->
        <div class="mobile-header mobile-visible">
            <div class="mobile-logo-container">
                <div class="mobile-site-title">Daniel Niiquaye</div>
            </div>

            <a class="menu-toggle mobile-visible">
                <i class="fa fa-bars"></i>
            </a>
        </div>
        <!-- /Mobile Header -->
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