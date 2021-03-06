<?php
/* =============================================================
 * Template Name: wod
 * =============================================================
 * Page template used for full width pages
 * ============================================================= */
?>

<?php get_header(); ?>
<?php get_template_part('featured', 'bar'); ?>

<? query_posts('category_name=wod');
while (have_posts()) : the_post(); ?>


    <section class="content outer-md">
    <div class="container">
    <!-- /.row -->
    <div class="row">

    <!-- /.right col -->
    <div class="col-md-9 col-md-push-3">
    <div class="postContent inner-padding-left-sm inner-padding-right-sm inner-bottom-xxs">
        <div class="postHeader">
            <h1 id="title">
                <?php the_title(); ?>
            </h1>
            <h4>
                <!-- CRAP TEXT WHY AVIAD? -->
                <!--Written by &nbsp;-->
                <i class="fa fa-user"></i>&nbsp;
                <div style="display: inline;"> <?php the_author_link(); ?>&nbsp;&nbsp;</div>
                <!--On &nbsp;-->
                <i class="fa fa-calendar"></i>&nbsp;
                <div style="display: inline;"><?php the_time('F j, Y'); ?>&nbsp;&nbsp;</div>
                <!--With &nbsp;-->
                <!--
                <i class="fa fa-comment"></i>&nbsp;
                <div style="display: inline;">
                    <a href="#">9 תגובות</a>&nbsp;&nbsp;
                </div>
-->
               
                <!--and &nbsp;-->
                <!--
                <i class="fa fa-heart"></i>&nbsp;
                <div style="display: inline;">
                    <a href="#">145 לייקים</a>&nbsp;&nbsp;
                </div>
-->
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

        <hr style="border: 1px dashed #e8ebed; margin-top: 38px;">
        <div class="input-list style-4" style="<!--border-top: 1px dashed #e8ebed;-->">
    <h3>הרשמה לאימונים</h3>
            <input type="text" id="name" placeholder="שם:" >

            <select id="poll">
            </select>

            <div class="row buttonrow">
                <a href="<?php //bloginfo('template_directory'); ?>showAllParts.html" class="signup various fancybox.ajax">
                <div class="col-xs-2 buttoncell">
                  
                    <div class="partButton" style="background-image:url(<?php bloginfo('template_url'); ?>/img/expend.png);">
                        
                       <!-- <div class="partButtonText">מששתפים</div>-->
                    </div>
                     </a>
                   
                </div>
                <div class="col-xs-10">
                    <script src="<?php bloginfo('template_directory'); ?>/js/bootstrap.min.js"></script>
                    <a href="<?php //bloginfo('template_directory'); ?>/showParts.html" id="signup" class="signup various fancybox.ajax">
                   
                      <button style="margin-bottom: 15px;">הרשמה לאימון</button>
                        </a>
                </div>
            </div>
        </div>
        <!-- FACEBOOK PLUGIN -->
        <div align="left" class="postFooter inner-top-xxs inner-bottom-xxs outer-left-xs ">

            <?php if (function_exists('ADDTOANY_SHARE_SAVE_KIT')) {
                ADDTOANY_SHARE_SAVE_KIT();
            } ?>

        </div>
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
        
        <div class="blogComments <!--inner-bottom-xxs-img-->">
                            <div class="container-fluid">
                                <div class="row-fluid">
        <?php comments_template(); ?>
                                </div></div></div>

    <!-- END OF TAGS -->

    <!-- PREVIOUS WOD -->
    <h1 id="widget">
        אימונים קודמים
    </h1>
    <div class="recentPost inner-top-xxs-img inner-bottom-xxs-img" style="direction: ltr;">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="owl-carousel" id="recent">

                    <?php
                    //$src =bloginfo('template_directory') . '/img/blank.gif';
                    $args = array('numberposts' => '7', 'category' => get_cat_ID('wod'),'post_status' => 'publish');
                    $recent_posts = wp_get_recent_posts($args);
                    foreach ($recent_posts as $recent) {
                        echo ' <div class="grid">
                                                        <figure class="effect-bubba">
                                               ';
                        echo ' <a href="' . get_permalink($recent["ID"]) . '"><img src="' . get_bloginfo('template_directory') . '/img/blank.gif" class="recentImg" style="background-image: url(' . catch_that_image($recent) . ' );">';
                        echo ' <figcaption><div class="substringer">

                                                    <h2><div class="substringer">' . $recent["post_title"] . '</div></h2>
                                                    <p>' . mysql2date('Y / m / j', $recent["post_date"]) . '</p>
                                                    </a> 	
                                                </div></figcaption>
                                               
                                            </figure>
                                        </div>';


                        $recent = "";
                    }
                    ?>


                </div>
            </div>
        </div>
    </div>

    <!-- END OF PREVIOUS WOD -->

        <?php comments_template(); ?>
                                </div>
            <!-- BEFORE SIDEBAR -->
<?php get_sidebar('main'); ?></div>
        
        

        </div>    

    <?php break; endwhile; ?>

    </div><!-- end #main_content -->



    </div><!-- end .col-xs-12 -->

    <!-- AFTER SIDEBAR -->
    </div>

    <!-- end .row -->

<?php get_footer(); ?>