<?php
/* =============================================================
 * Template Name: wod
 * =============================================================
 * Page template used for full width pages
 * ============================================================= */
?>

<?php get_header(); ?>
        <?php get_template_part( 'featured', 'bar' ); ?>

 <? query_posts('category_name=wod');  while ( have_posts() ) : the_post();?>


             <section class="content outer-md" style="direction: rtl;">
            <div class="container">
                <!-- /.row -->
             <div class="row">

                    <!-- /.right col -->
                    <div class="col-md-9 col-md-push-3">
                        <div class="postContent inner-padding-left-sm inner-padding-right-sm inner-bottom-xxs">
                            <div class="postHeader" style="direction:ltr;">
                                <h1 id="title">
                    <?php the_title(); ?>
                                </h1>
                                 <h4>
                                     Written by &nbsp;
                                     <i class="fa fa-user"></i>
                                     <div class="outer-left-xs" style="display: inline;">  <?php the_author_link(); ?>,</div>
                                     On &nbsp;
                                     <i class="fa fa-calendar"></i>
                                     <div class="outer-left-xs" style="display: inline;"><?php the_time('F j, Y'); ?>. &nbsp;</div>       
                                     With &nbsp;
                                     <i class="fa fa-comment"></i>
                                     <div class="outer-left-xs" style="display: inline;">
                                         <a href="#">9 comments</a>&nbsp;
                                     </div>
                                     and &nbsp;
                                     <i class="fa fa-heart"></i>
                                     <div class="outer-left-xs" style="display: inline;">
                                         <a href="#">145 likes</a>&nbsp;
                                     </div>
                        </h4>
                            </div>
    <div class="postBody inner-bottom-xxs">
                                <!-- fixing owlcarousel bug with rtl-->
                                <section style="direction: ltr;">
                                    <div class="owl-carousel" id="post">
                                        <figure>
                                            <img src="<?php bloginfo('template_directory'); ?>/img/blank.gif" class="alignnone size-large wp-image-241" width="100%" height="300px" style="background-image: url(http://www.crossfitherzliya.com/wp-content/uploads/2014/09/1500809_1492267730992915_1049592175577989962_o-1024x682.jpg); background-position: center;">
                                        </figure>
                                        <figure>
                                            <img src="<?php bloginfo('template_directory'); ?>/img/blank.gif" class="alignnone size-large wp-image-241" width="100%" height="300px" style="background-image: url(http://www.crossfitherzliya.com/wp-content/uploads/2014/09/10646665_663231047125623_553418727478072200_n.jpg); background-position: center;">
                                        </figure>
                                        <figure>
                                            <img src="<?php bloginfo('template_directory'); ?>/img/blank.gif" class="alignnone size-large wp-image-241" width="100%" height="300px" style="background-image: url(http://www.crossfitherzliya.com/wp-content/uploads/2014/09/10497847_638453889603339_6243190989343349154_o.jpg); background-position: center;">
                                        </figure>

                                    </div>
                                </section>
<?php the_content(); ?>
         </div>
                            
                             <div align="left" class="postFooter inner-top-xxs inner-bottom-xxs outer-left-xs ">
                                <iframe name="f1161ee7c" width="100px" height="1000px" frameborder="0" allowtransparency="true" scrolling="no" title="fb:like Facebook Social Plugin" src="http://www.facebook.com/plugins/like.php?action=like&amp;app_id=215200883048&amp;channel=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter%2FZEbdHPQfV3x.js%3Fversion%3D41%23cb%3Df36cd4b4e%26domain%3Dhwzone.co.il%26origin%3Dhttp%253A%252F%252Fhwzone.co.il%252Ff10e7ea514%26relation%3Dparent.parent&amp;href=http%3A%2F%2Fhwzone.co.il%2F%25d7%2594%25d7%2590%25d7%2599%25d7%2599%25d7%25a4%25d7%2595%25d7%259f-6-%25d7%2591%25d7%259e%25d7%2591%25d7%2597%25d7%259f-%25d7%2591%25d7%2599%25d7%25a6%25d7%2595%25d7%25a2%25d7%2599%25d7%259d-%25d7%2596%25d7%259e%25d7%259f-%25d7%25a1%25d7%2595%25d7%259c%25d7%259c%25d7%2594%2F&amp;layout=button_count&amp;locale=he_IL&amp;sdk=joey&amp;share=true&amp;show_faces=false&amp;width=100" style="border: none; visibility: visible; width: 120px; height: 20px;" ></iframe>
                            </div></div>
                          <div class="postTags">
                            <div class="container-fluid">
                                <div class="row-fluid">

                                    <!--       fa-inverse-->

                                    <p class="tag">
                                                            
                               <? the_tags( '<span class="post-tags"><span class="meta">Tags:</span> ', ' ', '</span>' ); ?>     </div>
                            </div>
                        </div>
                       
                         <h1 id="widget">
                    אימונים קודמים  
                    </h1>
                      <div class="recentPost inner-top-xxs-img inner-bottom-xxs-img" style="direction: ltr;">
                            <div class="container-fluid">
                                <div class="row-fluid">
                                    <div class="owl-carousel" id="recent">
                                        
                                        <?php
                                           $args = array( 'numberposts' => '7', 'category' => 'wod', );
                                            $recent_posts = wp_get_recent_posts( $args );
                                            foreach( $recent_posts as $recent ){
                                                echo ' <div class="grid">
                                                        <figure class="effect-bubba">
                                                <a href="' . get_permalink($recent["ID"]) . '">
                                                <img src="http://sk32.co.nf/wp-content/themes/crossfitThemeResponsive/img/blank.gif" class="recentImg" style="background-image: url(http://www.crossfitherzliya.com/wp-content/uploads/2014/09/keg.jpg.jpg);">
                                                <figcaption>
                                                    <h2>' . $recent["post_title"] . '</h2>
                                                    <p>' .  mysql2date('Y / m / j', $recent["post_date"]) . '</p>
                                                </figcaption>
                                               </a>
                                            </figure>
                                        </div>';
                                            }
                                         ?>
                                        <?php  ?>
                                        

                                        
                                        
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    
                        
                        
                        
                                
                                
							
                    

                <?php break; endwhile;?>

                    
                </div><!-- end #main_content -->
            </div><!-- end .col-xs-12 -->
        </div><!-- end .row -->

<?php get_footer(); ?>