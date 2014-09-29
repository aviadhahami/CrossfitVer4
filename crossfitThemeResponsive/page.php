<?php
/* =============================================================
 * page.php
 * =============================================================
 * Displays content for a single page
 * ============================================================= */
?>

<?php get_header(); ?>
        <?php get_template_part( 'featured', 'bar' ); ?>

        <div class="row">
            <div class="col-md-8">
                <div id="main_content" role="main">
                <h1>TRYY</h1>
                <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

                    <h2 class="page-title"><?php the_title(); ?></h2>
                    <?php the_content(); ?>

                <?php endwhile; else: ?>

                    <p class="hero-p" style="padding: 30px 0;">there is currently nothing to display :(</p>

                <?php endif; ?>
                    
                </div><!-- end #main_content -->
                <hr class="hr-row-divider">
            </div><!-- end .col-md-8 -->
                    
            <?php get_sidebar( 'main' ); ?>
            
        </div><!-- end .row -->

<?php get_footer(); ?>