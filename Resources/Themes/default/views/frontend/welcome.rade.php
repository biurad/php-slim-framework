@extends('layout.master')
@section('css')

@endsection
@section('title',"Welcome To Daniel's Website")
@section('content')
<!-- Page changer wrapper -->
<div class="pt-wrapper">
    <!-- Subpages -->
    <div class="subpages">
        <!-- Home Subpage -->
        @include('frontend.welcome.homepage')
        <!-- End of Home Subpage -->

        <!-- Resume Subpage -->
        @include('frontend.welcome.resume')
        <!-- End of Resume Subpage -->

        <!-- Services Subpage -->
        @include('frontend.welcome.service')
        <!-- End of Services Subpage -->

        <!-- Portfolio Subpage -->
        @include('frontend.welcome.portfolio')
        <!-- /Portfolio Subpage -->

        <!-- Blog Subpage -->
        @include('frontend.welcome.blog')
        <!-- /Blog Subpage -->

        <!-- Contact Subpage -->
        @include('frontend.welcome.contact')
        <!-- End Contact Subpage -->
    </div>
</div>
<!-- /Page changer wrapper -->
@endsection
@section('js')
<!--<script src="http://localhost/userTrack/tracker.min.js" async></script>-->
@endsection 