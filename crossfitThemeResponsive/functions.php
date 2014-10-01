<?php

// Set the content width
if ( ! isset( $content_width ) ) $content_width = 730;

/**
 * Simple way to load jQuery
 *
 * @uses wp_enqueue_script action
 */

/*function my_scripts_method() {
  wp_enqueue_script( 'jquery' );
}  

add_action('wp_enqueue_scripts', 'my_scripts_method');*/
/*if( !is_admin()){
wp_deregister_script('jquery');
wp_register_script('jquery', ("//code.jquery.com/jquery-2.1.1.js"), false, '2.1.1');
wp_enqueue_script('jquery');}*/


// Contains all functions essential to setting the theme
require 'inc/theme-setup.php';

// Sets up comments and pingbacks for the theme
require 'inc/comments-and-pingbacks.php';

// Registers all dynamic sidebar areas for the theme
require 'inc/register-sidebars.php';

// Registers custom post types for the theme
require 'inc/custom-posts.php';

// Registers custom shortcodes for the theme
include 'inc/shortcodes.php';

// Register Custom Navigation Walker
require_once('wp_bootstrap_navwalker.php');

// Loads the Options Panel
// If you're loading from a child theme use stylesheet_directory instead of template_directory
if ( !function_exists( 'optionsframework_init' ) ) {
    define( 'OPTIONS_FRAMEWORK_DIRECTORY', get_template_directory_uri() . '/inc/admin/' );
    require_once dirname( __FILE__ ) . '/inc/admin/options-framework.php';
}

// Move the Jetpack social share buttons to the beginning of the post, this is to allow for the float effect
function jptweak_remove_share() {
remove_filter( 'the_content', 'sharing_display',19 );
remove_filter( 'the_excerpt', 'sharing_display',19 );
remove_filter( 'the_content', array( 'Jetpack_Likes', 'post_likes' ), 30, 1 );
}

add_action( 'loop_end', 'jptweak_remove_share' );

//Add class to the tags for bootstrap markup
// WHY DO WE NEED THIS? .ori
/*function add_class_the_tags($html){
    $postid = get_the_ID();
    $html = str_replace('<a','<a class="label label-default"',$html);
    return $html;
}
add_filter('the_tags','add_class_the_tags',10,1);*/


//Capture post images
function catch_that_image() {
  global $post, $posts;
  $imgArray = [];
  ob_start();
  ob_end_clean();
  $output = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post->post_content, $matches);
  $size = sizeof($matches[1]);
    if ($size <1 ) {
    return;
    }
    for ($i=0;$i<$size;$i++){
        $imgArray[i] = $output[1][i];
    }
  return $imgArray;
}

//remove images from display
function remove_images( $content ) {
    $postOutput = preg_replace('/<img[^>]+./','', $content);
    return $postOutput;
}
add_filter( 'the_content', 'remove_images', 100 );



?>