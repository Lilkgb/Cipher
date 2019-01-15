$(document).ready(function() {
  $("#btn1").click(function() {
  var response = prompt("Enter a scentence please with no puncuation at the end:");
  console.log(response);
  var first = response.charAt(first);
  var last = response.charAt(response.length-1);
  var two = (first + last);
  alert(two);

  });
});
