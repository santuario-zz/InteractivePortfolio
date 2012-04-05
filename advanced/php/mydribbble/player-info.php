<?php

 error_reporting(E_ALL); 
 ini_set("display_errors", 1); 

require_once('../src/dribbble.php');

$dribbble = new Dribbble();

# find a shot
$player = $dribbble->player->find('simplebits');

# Get last 3 draftees on first page
$draftees = $player->draftees(array('page' => 1, 'per_page' => 3));

# API returns 15 per page by default
$following = $player->following(array('page' => 1, 'per_page' => 10));

$recent_shots = $player->shots(array('page' => 1, 'per_page' => 21));

?>

<script src="js/jquery.carouFredSel-4.2.3-packed.js" type="text/javascript"></script>
<script>
 $(document).ready(function() {
	 setTimeout(
				   function(){
	$("#slider").carouFredSel({
	width: "variable",
	height: "auto",
	items: {
		visible: 3,
		width: "variable",
		height: "variable"
	},
	scroll: {
		mousewheel: true,
		items: 3,
		pauseOnHover: true
	},
	prev: {
		button: ".btn-prev",
		key: "left"
	},
	next: {
		button: ".btn-next",
		key: "right"
	}
}); 	
	}, 200);
});
</script>

<span id="closebt" class="close-work-detail" styles="display:block;margin:100px;color:#000;"><a href="#">X</a></span>
<div class="section" id="mydribbble">
	<div class="section-wrapper">
    	<p class="breadcrumbs">DRIBBBLE // Folio Two · Folio Series</p>
        <h2>My Dribbbles</h2>
        <div class="section-content">
           <section id="mydribbble-stats">
			<figure><img class="avatar" src="<?php echo $player->avatar_url; ?>" alt="<?php echo $player->username; ?>"/></figure>
			<h3 id="username"><?php echo $player->name; ?> (<?php echo $player->username; ?>)</h3>
			<p><?php echo $player->location; ?> / <a href="http://twitter.com/<?php echo $player->twitter_screen_name; ?>">Twitter</a> / <a href="<?php echo $player->url; ?>">Profile on Dribbble</a></p>
			<p><strong>Stats:</strong> Following <?php echo $player->following_count; ?>, drafted  <?php echo $player->draftees_count; ?>,  <?php echo $player->shots_count; ?> shots,  <?php echo $player->followers_count; ?> followers</p>
            
             <section id="mydribbble-drafts">
			
			<h1>Following</h1>
			
			<?php if ($following) : ?>
				<div class="reveal-follow" style="display:none;">
                <!--<p class="plus-following">+</p>-->
				<ul class="player-list">
				
				<?php foreach ($following as $user) { ?>
					
					<li><a href="<?php echo $user->url; ?>"><?php echo $user->name; ?></a></li>
					
				<?php } ?>
				
				</ul>
                </div>
			
			<?php else : ?>
			
				<p><?php echo $player->username; ?> isn't following anyone yet.</p>
			
			<?php endif; ?>
		</section>
        
		</section>
		<div class="clear"></div>

		<section id="mydribbble-shots" class="slide">
        	<div id="slide-navigation">
                <a href="#" class="btn-prev"><</a>
                <a href="#" class="btn-next">></a>
       		 </div>
			<h1>Recent Shots</h1>
			
			<ul class="shots" id="slider">
			<?php
							
				foreach ($recent_shots as $shot) { ?>
				
				<li>
					<h3><a href="<?php echo $shot->url;?>"><?php echo $shot->title; ?></a></h3> 
					<a class="in-shot" href="<?php echo $shot->url;?>"><img src="<?php echo $shot->image_url; ?>" alt="<?php echo $shot->title; ?>"/></a>
					<p id="date-shot">Posted <?php echo date('M jS, Y',strtotime($shot->created_at)); ?></a>
				</li>
				
			<?php } ?>
			
			</ul>
			
		</section>
		
        </div>
    </div>
</div>