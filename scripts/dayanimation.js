// window load event makes sure image is loaded before running animation
$(window).on("load", function() {

var tl = new TimelineMax({repeat:-1});
tl.to("#morningclouds, #dayclouds, #nightclouds", 45, {x:0, backgroundPosition: "-4500px 0px", ease: Linear.easeNone});

var tl = new TimelineLite();
//move happy the cat to the left (100% of the screen) and repeat this in an unending loop :)
tl.to("#bird",15, {x: 0, left:'100%', ease:Linear.easeNone, repeat: -1});
//flap the wings of happy the cat
tl.add(TweenMax.to("#bird", 0.5,{backgroundPosition:"-168.5px 0px", ease:SteppedEase.config(1), repeat:tl.duration()/0.2, repeat: -1}), 0);

});