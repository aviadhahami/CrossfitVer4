<?php
/* =============================================================
 * index.php
 * =============================================================
 * Default page template for the theme
 * ============================================================= */
?>

<?php get_header(); ?>
<!-- index.php -->
<?php get_template_part('featured', 'bar'); ?>




<section class="content outer-md">
    <div class="container">
        <!-- /.row -->
        <div class="row">

            <!-- /.right col -->
            <div class="col-md-9 col-md-push-3">
                <?php if (have_posts()) : while (have_posts()) :
                    the_post(); ?>
                <div class="postContent inner-padding-left-sm inner-padding-right-sm inner-bottom-xxs">
                    <div class="postHeader">
                        <h1 id="title">
                            <?php the_title(); ?>
                        </h1>
                        <h4>
                           
                            <!--Written by &nbsp;-->
                            <i class="fa fa-user"></i>&nbsp;
                            <div style="display: inline;"> <?php the_author_link(); ?>&nbsp;&nbsp;</div>
                            <!--On &nbsp;-->
                            <i class="fa fa-calendar"></i>&nbsp;
                            <div style="display: inline;"><?php the_time('F j, Y'); ?>&nbsp;&nbsp;</div>
                            <!--With &nbsp;-->
                            <!--<i class="fa fa-comment"></i>&nbsp;
                            <div style="display: inline;">
                                <a href="#">9 תגובות</a>&nbsp;&nbsp;
                            </div>
                            <!--and &nbsp;-->
                            <!--  <i class="fa fa-heart"></i>&nbsp;
                              <div style="display: inline;">
                                  <a href="#">145 לייקים</a>&nbsp;&nbsp;
                              </div> -->
                        </h4>
                    </div>

                    <div class="postBody inner-bottom-xxs">
                        <!-- fixing owlcarousel bug with rtl-->
                        <section style="direction: ltr;">
                            <div class="owl-carousel" id="post">

                                <? $args = array(
                                    'post_type' => 'attachment',
                                    'numberposts' => -1,
                                    'post_status' => null,
                                    'post_parent' => $post->ID
                                );

                                $attachments = get_posts($args);
                                if ($attachments) {
                                    foreach ($attachments as $attachment) {
                                        echo '<figure>';

                                        $imageSize = 'full';
                                        $src = wp_get_attachment_image_src($attachment->ID, $imageSize)[0];
                                        echo '<img src="' . get_bloginfo('template_directory') . '/img/blank.gif" width="100%" height="300px" style="background-image: url(' . $src . '); background-position: center; background-size: cover;"> ';

                                        //echo wp_get_attachment_image( $attachment->ID, 'full' );
                                        echo '</figure>';
                                    }
                                }

                                ?>

                            </div>

                        </section>
                        <?php

                        remove_filter(the_content(), 'remove_images', 100);
                        //the_content();
                        ?>
                    </div>

                    <!-- FACEBOOK PLUGIN -->
                    <div align="left" class="postFooter inner-top-xxs inner-bottom-xxs outer-left-xs ">

                        <?php if (function_exists('ADDTOANY_SHARE_SAVE_KIT')) {
                            ADDTOANY_SHARE_SAVE_KIT();
                        } ?>

                    </div>
                </div>

                <!-- END OF FACEBOOK PLUGIN -->

                <!--TAGS SECTION -->
                <div class="postTags">
                    <div class="container-fluid">
                        <div class="row-fluid">

                            <!--       fa-inverse -->

                            <p class="tag">
                            <? the_tags('תגיות:&nbsp;&nbsp;&nbsp;&nbsp;', ' ', ' '); ?></div>
                    </div>
                </div>

                <!-- END OF TAGS -->


                <?php endwhile; ?>
                <?php endif; ?>

            </div>
            <!-- end #main_content -->
            
        </div>
<?php get_sidebar('main'); ?>
        <!-- end .col-xs-12 -->
        
    </div>

    <!-- end .row -->

    <?php get_footer(); ?>




