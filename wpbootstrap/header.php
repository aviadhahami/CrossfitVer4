<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
    <title>Bootstrap 101 Template</title>
<?php wp_enqueue_script( "jquery"); ?>
    <script src="//code.jquery.com/jquery-2.1.1.js"></script>
    <!-- Le styles -->
    <link href="<?php bloginfo('stylesheet_url');?>" rel="stylesheet">
    

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/scripts.js"></script>
    
    <?php wp_head(); ?>
</head>

<body>

    <!--NAV -->
    <header>
<nav class="navbar navbar-default" role="navigation">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
    <a class="navbar-brand" href="#">SITE TITLE</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse navbar-ex1-collapse">
        <?php
        wp_nav_menu( array(
            'theme_location' => 'top_menu',
            'depth' => 2,
            'container' => false,
            'menu_class' => 'nav navbar-nav',
            'fallback_cb' => 'wp_page_menu',
            //Process nav menu using our custom nav walker
            'walker' => new wp_bootstrap_navwalker())
        );
        ?>
    </div><!-- /.navbar-collapse --> 
</nav>
    </header>

    <main>