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
function catch_that_image($post) {
  $first_img = '';
  $output = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post['post_content'], $matches);
  $first_img = $matches[1][0];

  if(empty($first_img)) {
    $first_img = "http://www.crossfitherzliya.com/wp-content/uploads/2014/09/1500809_1492267730992915_1049592175577989962_o-1024x682.jpg";
  }
  return $first_img;
}



//remove images from display
function remove_images( $content ) {
    $postOutput = preg_replace('/<img[^>]+./','', $content);
    return $postOutput;
}
add_filter( 'the_content', 'remove_images', 100 );


  /**
     * Gets all images attached to a post
     * @return string
     */
    function wpse_get_images($post,$size) {
        $id = intval( $post->ID );
        $attachments = get_children( array(
                'post_parent' => $id,
                'post_status' => 'inherit',
                'post_type' => 'attachment',
                'post_mime_type' => 'image',
                'order' => 'ASC',
                'orderby' => 'menu_order'
            ) );
        if ( empty( $attachments ) )
                    return '';

        $output = "\n";
    /**
     * Loop through each attachment
     */
    foreach ( $attachments as $id  => $attachment ) :

        $img = wp_get_attachment_image_src( $id, $size );
        $output .='<figure>';
         $output.= '<img src="' . get_bloginfo('template_directory') . '/img/blank.gif" width="100%" height="300px" style="background-image: url('. esc_url( $img[0] ).'); background-position: center; background-size: cover;"> ';


  $output .='</figure>';
    endforeach;

        return $output;
    }


?>