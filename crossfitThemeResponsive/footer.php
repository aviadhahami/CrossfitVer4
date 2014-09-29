<?php /*=============================================================* footer.php *=============================================================* Contains the closing of <div class=".container .container-main">* and all content after * ============================================================= */ ?>

</div>
<!-- end .container.container-main -->

<?php if ( of_get_option( 'bestreloaded_display_twitter', 'no entry' ) ) : ?>

<div class="container container-main twitter-feed">
    <div class="row">
        <div class="col-xs12">

            <?php $twitter_user=of_get_option( 'bestreloaded_twitter', 'no entry' ); wp_echo_twitter( $twitter_user ); ?>

        </div>
    </div>
</div>

<?php endif; ?>



<?php wp_footer(); ?>
<?php if ( is_single() ){ // only include this script on single pages?>

<script type="text/javascript">
    var $ = jQuery.noConflict(); // set the $ variable to be jQuery

    $('#social').height($("#social-block").height()); // sets #social to the same width as #social-block
    $('#social-block').width($("#main_content").width()); // sets width of the div with buttons to be the same as it's main container
    // this is required to stop the content 'popping' when the box enters or leaves the flow
</script>
<?php } ?>
<script type="text/javascript">
    (function() {
        //credits for this go to Daniel Smith: http://www.danmasta.com/bootstrap-3-support-gravity-forms-jquery/
        var gform = $(document).find('.gform_wrapper').attr('class');
        if (typeof gform !== 'undefined' && gform !== 'false') {
            $(document).on('gform_post_render', function() {
                var form = $('.gform_wrapper');
                var required = $('.gfield_contains_required');
                var controlGroup = $('.gfield');
                required.each(function() {
                    $(this).find('input, textarea, select').not('input[type="checkbox"], input[type="radio"]').attr('required', 'true');
                });
                $('.gform_fields').each(function() {
                    $(this).addClass('row');
                });
                controlGroup.each(function() {
                    $(this).addClass('form-group').find('input, textarea, select').not('input[type="checkbox"], input[type="radio"]').after('<span class="help-block"></span>').addClass('form-control');
                });
                form.find("input[type='submit'], input[type='button']").addClass('btn btn-primary').end().find('.gfield_error').removeClass('gfield_error').addClass('has-error');
                $('.gfield_checkbox, .gfield_radio').find('input[type="checkbox"], input[type="radio"]').each(function() {
                    var sib = $(this).siblings('label');
                    $(this).prependTo(sib);
                }).end().each(function() {
                    $(this).after('<span class="help-block"></span>');
                    if ($(this).is('.gfield_checkbox')) {
                        $(this).addClass('checkbox');
                    } else {
                        $(this).addClass('radio');
                    }
                });
                $('.validation_message').each(function() {
                    var sib = $(this).prev().find('.help-block');
                    $(this).appendTo(sib);
                });
                $('.validation_error').addClass('alert alert-danger');
                $('.gf_progressbar').addClass('progress progress-striped active').children('.gf_progressbar_percentage').addClass('progress-bar progress-bar-success');
            });
        } else {
            console.log('no forms were found');
            return false;
        }
    })();
</script>

    
        <script src="<?php bloginfo('template_directory'); ?>/js/bootstrap.min.js"></script>
     <script src="<?php bloginfo('template_directory'); ?>/js/jquery.easing.1.3.js"></script>
        <script src="<?php bloginfo('template_directory'); ?>/js/jquery.animate-enhanced.min.js"></script>
        <script src="<?php bloginfo('template_directory'); ?>/js/bootstrap-hover-dropdown.min.js"></script>
        <script src="<?php bloginfo('template_directory'); ?>/js/owl.carousel.js"></script>
        <script src="<?php bloginfo('template_directory'); ?>/js/jquery.mousewheel.min.js"></script>
        <script src="<?php bloginfo('template_directory'); ?>/js/hammer.min.js"></script>
        <script src="<?php bloginfo('template_directory'); ?>/js/jquery.superslides.js" type="text/javascript" charset="utf-8"></script>
        <script src="<?php bloginfo('template_directory'); ?>/js/slider.js"></script>
        <script src="<?php bloginfo('template_directory'); ?>/js/social-float.js"></script>
        <script src="<?php bloginfo('template_directory'); ?>/js/scripts.js"></script>






</body>

</html>