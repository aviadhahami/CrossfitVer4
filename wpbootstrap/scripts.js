jQuery(document).ready(function($) {
    $('ul.nav li.dropdown, ul.nav li.dropdown-submenu').hover(function() {
        $(this).find(' > .dropdown-menu').stop(true, true).delay(200).fadeIn();
    }, function() {
        $(this).find(' > .dropdown-menu').stop(true, true).delay(200).fadeOut();
    });
});