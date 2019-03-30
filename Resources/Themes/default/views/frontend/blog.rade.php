@extends('layout.blog')
@section('css')

@endsection
@section('title',"Blog - Daniel's Website")
@section('content')
<!-- Page changer wrapper -->
<!-- Main Content -->
<div id="main" class="site-main">
    <!-- Single Page Content -->
    <div class="single-page-content">
        <div class="content-area">
            <div class="page-content">
                <!-- Blog Entry Content -->
                @include('frontend.blog.post')
            </div>
            <!-- End of Blog Entry Content -->
        </div>
    </div>
</div>
<!-- End of Single Page Content -->
</div>
<!-- /Page changer wrapper -->
@endsection
@section('js')
<!--<script src="http://localhost/userTrack/tracker.min.js" async></script>-->
@endsection 