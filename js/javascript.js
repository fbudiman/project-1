$(function(){

  $("#begin").hover(
    function() {
      $(this).animate({ color: "#700000" }, 'slow');
    },function() {
      $(this).animate({ color: "#FFFFFF" }, 'slow');
  });

  $("#intro").hide();

  $("#begin").click(function() {
    $(this).hide();
    $("#intro").show();
  });

  $("#fran-zombie").click(function() {
    $("#intro").hide('slow');
  })

  $("#ryan-zombie").click(function() {
    $("#intro").hide('slow');
  })

});
