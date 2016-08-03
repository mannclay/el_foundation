$(document).foundation();

$(".sticky.property-title").on('sticky.zf.stuckto:top', function(){
  console.log("sticks");
  $(".property-title").addClass('stuck');
}).on('sticky.zf.unstuckfrom:top', function(){
  console.log("not sticks");
  $(".property-title").removeClass('stuck');
});
