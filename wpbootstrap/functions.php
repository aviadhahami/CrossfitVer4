<?php 
// Register Custom Navigation Walker
require_once('wp_bootstrap_navwalker.php');

function wpbootstrap_scripts_with_jquery()
{
	// Register the script like this for a theme:
	wp_register_script( 'custom-script', get_template_directory_uri() . '/js/bootstrap.js', array( 'jquery' ) );
	// For either a plugin or a theme, you can then enqueue the script:
	wp_enqueue_script( 'custom-script' );
}
add_action( 'wp_enqueue_scripts', 'wpbootstrap_scripts_with_jquery' );


if ( function_exists('register_sidebar') )
	register_sidebar(array(
		'before_widget' => '',
		'after_widget' => '',
		'before_title' => '<h3>',
		'after_title' => '</h3>',
	));


function mytheme_setup() {

register_nav_menus(
array(
'top_menu' => __( 'Top Menu', 'bootpress' )
)
);

}
add_action( 'after_setup_theme', 'mytheme_setup' );


?>
