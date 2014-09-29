<?php
/* =============================================================
 * index.php
 * =============================================================
 * Default page template for the theme
 * ============================================================= */
?>

<?php get_header(); ?>
        <?php get_template_part( 'featured', 'bar' ); ?>
>
                    
            <?php get_sidebar( 'main' ); ?>
            
        </div><!-- end .row -->

<?php get_footer(); ?>