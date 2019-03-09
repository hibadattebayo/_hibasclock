var sparkle= 1;
function flicker(){
  if(!sparkle)return false;
  TweenMax.to("#flicker",
  1,
  {opacity:1,ease:RoughEase.ease.config({template:Power0.easeNone,
  //strength of the flickering
  strength:0.5,
  points:20,
  //taper could also be changed into both if you want a more solid flicker,
  //one that doesnt look a lot like stars
  taper:"none",
  //random flickers and not the equal amount
  randomize:true,
  clamp:false}),
  repeat:1,
  yoyo:true,
  onComplete:flicker});
};

flicker();
