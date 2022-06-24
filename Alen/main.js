
$(document).ready(function () {
  $(".love").toArray().forEach(function (currentElement) {
    $(currentElement).on("click", function () {

      $(this).addClass("active").append("<span class='up'> </span>");
      $(".up").toArray().forEach(function (ele) {
        // add rotate class to the .up element
        setTimeout(function () {
          $(ele).addClass("rotate");
        }, 1);

        $(ele).animate({
          opacity: 0 },
        300, function () {
          //get count value and increase the value
          let count = parseInt($(currentElement).attr("data-count"));
          $(currentElement).attr("data-count", count + 1);
          $(currentElement).removeClass("active");

          $(this).remove();
        });
      }); //up for each
    });

  }); //forEach
});
//# sourceURL=pen.js
    