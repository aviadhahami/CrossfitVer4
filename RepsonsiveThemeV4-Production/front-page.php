 <? get_header() ?>
<!-- Set up your HTML -->
<div id="slides" style="background: black; direction: ltr;">
  <ul class="slides-container">
    <li>
      <img class="slider_pic"  src="<?php bloginfo('template_directory'); ?>/img/headerPhoto1.png" />
    
      <div class="container">
        Slide one
      </div>
    </li>
    <li>
     <img class="slider_pic"  src="<?php bloginfo('template_directory'); ?>/img/headerPhoto2.png" />
      <div class="container">
        Slide two
      </div>
    </li>
    <li>
      <img class="slider_pic"  src="<?php bloginfo('template_directory'); ?>/img/headerPhoto3.png" />
      <div class="container">
        Slide three
      </div>
    </li>
  </ul>
  <nav class="slides-navigation">
    <!--<a href="#" class="next">Next</a>
    <a href="#" class="prev">Previous</a>-->
  </nav>
</div>
<!--
 <img class="slider_pic"  src="img/headerPhoto1.png" />
    <img class="slider_pic"  src="img/headerPhoto2.png" />
     <img class="slider_pic" src="img/headerPhoto3.png" />
-->


<? get_footer()?>