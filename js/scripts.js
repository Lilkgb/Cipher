$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });

  $("p").click(function() {
    alert("This is a paragraph.")
  });

  $("#wizard").click(function() {
    alert("This is the powerful WIZARD!")
  });

  $("#btn1").click(function() {
    $("#btn1").hide("slow");
  });

  $("h1").click(function() {
    $("#btn1").show();
  });

  $("#flip").click(function() {
    $("#panel").slideDown("slow");
  });
});
