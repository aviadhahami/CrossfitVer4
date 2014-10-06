<?php
/* =============================================================
 * comments.php
 * =============================================================
 * Template for Comments and Pingbacks
 * ============================================================= */
?>

     <?php if ( have_comments() ) : ?>
        <h3 id="comments-title">
            <?php
                printf( _n( 'One Response to &ldquo;%2$s&rdquo;', '%1$s Responses to &ldquo;%2$s&rdquo;', get_comments_number() ),
                    number_format_i18n( get_comments_number() ), '<span>' . get_the_title() . '</span>' );
            ?>
        </h3>
    
    <div id="comments" class="blogComments <!--inner-bottom-xxs-img-->">
                            <div class="container-fluid">
                                <div class="row-fluid">
                                    
    <?php if ( post_password_required() ) : ?>
        <p class="nopassword hero-p"><?php echo 'This post is password protected.<br/>Please enter the password to view any comments.'; ?></p>
            </div>
        </div>
</div>
<!-- #comments -->
    <?php
            /* Stop the rest of comments.php from being processed,
             * but don't kill the script entirely -- we still have
             * to fully load the template.
             */
            return;
        endif;
    ?>

        <?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // are there comments to navigate through ?>
        <nav id="comment-nav-above">
            <h1 class="visually-hidden"><?php echo 'comment navigation'; ?></h1>
            <div class="nav-previous"><?php previous_comments_link( '&larr; older comments' /* __() */ ); ?></div>
            <div class="nav-next"><?php next_comments_link( 'newer comments &rarr;' /* __() */ ); ?></div>
        </nav>
        <?php endif; // check for comment navigation ?>

<ul class="commentlist" style="font-size: 1em;">
<?php wp_list_comments( 'type=comment&callback=mytheme_comment' ); ?>
</ul>

        <?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // are there comments to navigate through ?>
        <nav id="comment-nav-below">
            <h1 class="visually-hidden"><?php echo 'comment navigation'; ?></h1>
            <div class="nav-previous pull-left"><?php previous_comments_link( '&larr; older comments' /* __() */ ); ?></div>
            <div class="nav-next pull-right"><?php next_comments_link( 'newer comments &rarr;' /* __() */ ); ?></div>
        </nav>
        <?php endif; // check for comment navigation ?>

        <hr class="hr-row-divider">

    <?php
        /* If there are no comments and comments are closed, let's leave a little note, shall we?
         * But we don't want the note on pages or post types that do not support comments.
         */
        elseif ( ! comments_open() && ! is_page() && post_type_supports( get_post_type(), 'comments' ) ) :
    ?>
        <p class="nocomments hero-p"><?php echo 'Comments are closed.'; ?></p>
    <?php endif; ?>
	<div class="row">
    <?php 
        comment_form( array(
            'comment_field' => '<p class="comment-form-comment form-group">
                                   <label for="comment">Enter Your Comment</label>
                                   <textarea id="comment" name="comment" class="form-control" rows="5" aria-required="true"></textarea>
                               </p>',
							   'label_submit'=>'Leave Comment',
        'comment_notes_after' => '',
        ));
    ?>
	</div>
    </div>
</div>
</div>
<!-- #comments -->