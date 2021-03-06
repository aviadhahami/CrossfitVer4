<?php
/* =============================================================
 * single-BACKUP.php
 * =============================================================
 * Displays content for a single blog post
 * ============================================================= */
?>

<?php get_header(); ?>
        <div class="row">
            <div class="col-md-8">
                <div id="main_content" role="main">
                
                    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
						<div id="post-open-meta">
							<h2 class="page-title"><?php the_title(); ?></h2>
							<span class="meta text-muted"><span class="glyphicon glyphicon-pencil"></span> Written by <?php the_author_link(); ?> on <?php the_time('F j, Y'); ?> and posted in <?php the_category( ' and ' ); ?>.</span>
							<hr class="hr-top" style="clear: both;">
							<ul class="prev-next-single pager clearfix">
								<li class="previous"><?php previous_post_link( '%link', '<span class="glyphicon glyphicon-chevron-left"></span> Older Posts' ); ?></li>
								<li class="next"><?php next_post_link( '%link', 'Newer Posts <span class="glyphicon glyphicon-chevron-right"></span>' ); ?></li>
							</ul>
							<hr class="hr-bottom" style="clear: both;">
							<div id="social">
								<div id="social-block" data-spy="affix" data-offset-top="600">
									<?php if ( function_exists( 'sharing_display' ) ) {
										sharing_display( '', true );
									}
									if ( class_exists( 'Jetpack_Likes' ) ) {
										$custom_likes = new Jetpack_Likes;
										echo $custom_likes->post_likes( '' );
									} ?>
								</div>
							</div>
						</div>
						<div class="featured-bar featured-bar-post">
							<?php get_template_part( 'featured', 'post-open' ); ?>
						</div>
						
                        <?php the_content(); ?>
                        <?php the_tags( '<span class="post-tags"><span class="meta">Tags:</span> ', ' ', '</span>' ); /* &#8226; */ ?>
                        <?php wp_link_pages( array(
                            'before' => '<hr class="hr-row-divider"><p class="wp-link-pages hero-p">Continue Reading: ',
                            'after' => '</p>'
                        )); ?>
                        <?php get_template_part( 'ads', 'posts' ); ?>
				    
                    <?php endwhile; else: ?>
				    
                        <p class="hero-p" style="padding: 30px 0;">there is currently nothing to display :(</p>
				    
                    <?php endif; ?>
                    
                </div><!-- end #main_content -->
                <hr class="hr-row-divider">
                
                    <?php comments_template(); ?>
                
                <hr class="hr-row-divider">
            </div><!-- end .col-md-8 -->
                    
            <?php get_sidebar( 'main' ); ?>
            
        </div><!-- end .row -->

<?php get_footer(); ?>