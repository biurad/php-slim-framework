<section class="pt-page" data-id="contact">
    <div class="section-inner custom-page-content">
        <div class="page-header color-1">
            <h2>Contact</h2>
        </div>
        <div class="page-content">

            <div class="row">
                <div class="col-sm-6 col-md-6">
                    <div class="block-title">
                        <h3>Get in <span>Touch</span></h3>
                    </div>
                    <!-- Google Map -->
                    <div id="map" class="map"></div>
                    <!-- End of Google Map -->

                    <div class="contact-info-block">
                        <div class="ci-icon">
                            <i class="fa fa-map-marker"></i>
                        </div>
                        <div class="ci-text">
                            <h5>Los Angeles, USA</h5>
                        </div>
                    </div>
                    <div class="contact-info-block">
                        <div class="ci-icon">
                            <i class="fa fa-envelope"></i>
                        </div>
                        <div class="ci-text">
                            <h5>alexsmith@example.com</h5>
                        </div>
                    </div>
                    <div class="contact-info-block">
                        <div class="ci-icon">
                            <i class="fa fa-phone"></i>
                        </div>
                        <div class="ci-text">
                            <h5>+123 654 78900</h5>
                        </div>
                    </div>
                    <div class="contact-info-block">
                        <div class="ci-icon">
                            <i class="fa fa-check"></i>
                        </div>
                        <div class="ci-text">
                            <h5>Freelance Available</h5>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-6">
                    <div class="block-title">
                        <h3>Contact <span>Form</span></h3>
                    </div>
                    <form id="contact-form" method="post" action="contact_form/contact_form.php">

                        <div class="messages"></div>

                        <div class="controls">
                            <div class="form-group form-group-with-icon">
                                <i class="fa fa-user"></i>
                                <label>Full Name</label>
                                <input id="form_name" type="text" name="name" class="form-control" placeholder required="required" data-error="Name is required.">
                                <div class="form-control-border"></div>
                                <div class="help-block with-errors"></div>
                            </div>

                            <div class="form-group form-group-with-icon">
                                <i class="fa fa-envelope"></i>
                                <label>Email Address</label>
                                <input id="form_email" type="email" name="email" class="form-control" placeholder required="required" data-error="Valid email is required.">
                                <div class="form-control-border"></div>
                                <div class="help-block with-errors"></div>
                            </div>

                            <div class="form-group form-group-with-icon">
                                <i class="fa fa-comment"></i>
                                <label>Message for Me</label>
                                <textarea id="form_message" name="message" class="form-control" placeholder rows="4" required="required" data-error="Please, leave me a message."></textarea>
                                <div class="form-control-border"></div>
                                <div class="help-block with-errors"></div>
                            </div>

                            <div class="g-recaptcha" data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"></div>

                            <input type="submit" class="button btn-send" value="Send message">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section> 