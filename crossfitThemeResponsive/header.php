<?php /*=============================================================* header.php *=============================================================* Displays all of the <head>section and everything up to the * end of the
<div class="row">containing the site title and *
    <hr>below for responsive spacing * ============================================================= */ ?>
    <!doctype html>
    <!--[if IE 8]>         <html class="no-js lt-ie9" <?php language_attributes(); ?>> <![endif]-->
    <!--[if gt IE 8]><!-->
    <html class="no-js" <?php language_attributes(); ?>>
    <!--<![endif]-->

    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
        <title>
            <?php wp_title( ''); ?>
        </title>
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
        <?php wp_enqueue_script("jquery"); ?>

        <!-- SHIT LOAD OF LINKS -->

        <script src="https://code.jquery.com/jquery-2.1.1.js"></script>
        <?php wp_head(); ?>
        
    
        
        
            </head>

    <body <?php body_class(); ?>>
        <!--[if lt IE 7]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->



        <header>
            <div class="navbar navbar-custom navbar-fixed-top" role="navigation">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="fa-stack fa-lg">
                              <i class="fa fa-square fa-stack-2x fa-inverse"></i>
                              <i class="fa fa-bars fa-stack-1x"></i>
                            </span>
                        </button>
                        <a class="navbar-brand page-scroll" href="#page-top">
                            <img src="wp-content/themes/crossfitThemeResponsive/img/logo_white.png" class="logo_pic" />
                        </a>
                    </div>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
                        <?php wp_nav_menu( array( 'menu'=>'nav_topbar', 'theme_location' => 'nav_topbar', 'depth' => 2, 'container' => false, 'menu_class' => 'nav navbar-nav', 'fallback_cb' => 'topbar_nav_fallback', 'walker' => new wp_bootstrap_navwalker()) ); ?>

                    </div>
                    <!-- /.navbar-collapse -->
                </div>
            </div>
        </header>




        <main>