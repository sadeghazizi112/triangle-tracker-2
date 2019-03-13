

$(document).ready(function() {
  $("#equilateral, #isosceles, #scalene, #not-triangle").hide();
  $("form#sumofangles").submit(function(event) {
    var angle1 = parseInt($("input#angle1").val());
    var angle2 = parseInt($("input#angle2").val());
    var angle3 = parseInt($("input#angle3").val());
    var sumofangles = angle1 + angle2 + angle3;
    console.log(`_a1=${angle1}_ _a2=${angle2}_ _a3=${angle3}_ _sum=${sumofangles}_`);

  if ((sumofangles !== 180) || (angle1 === 0) || (angle2 === 0) || (angle3 === 0)) {
    $('#none').show();
}
else {
  if (angle1 === angle2 && angle2 === angle3) {
    $('#equilateral').show();
      console.log("equilateral"+`_a1=${angle1}_a2=${angle2}_a3=${angle3}`);
  }

  if (angle1 !== angle2 && angle2 === angle3) {
    $('#isosceles').show();
      console.log("isosceles");
  }

  if (angle1 === angle2 && angle2 !== angle3) {
    $('#isosceles').show();
      console.log("isosceles");
  }
  if (angle1 !== angle2 && angle2 !== angle3) {
    $('#scalene').show();
      console.log("scalene");
  }
}
  event.preventDefault();
});

});
