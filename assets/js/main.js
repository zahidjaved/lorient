// set counter
var counted = 0;
$(window).scroll(function() {

  var oTop = $('#number1').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $.fn.jQuerySimpleCounter = function (options) {
      var settings = $.extend({
          start: 0,
          end: 100,
          easing: "swing",
          duration: 400,
          complete: "",
        },
        options
      );

      var thisElement = $(this);

      $({
        count: settings.start,
      }).animate({
        count: settings.end,
      }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
          var mathCount = Math.ceil(this.count);
          thisElement.text(mathCount);
        },
        complete: settings.complete,
      });
    };

    $("#number1").jQuerySimpleCounter({
      end: 14,
      duration: 3000,
    });
    $("#number2").jQuerySimpleCounter({
      end: 2,
      duration: 3000,
    });
    $("#number3").jQuerySimpleCounter({
      end: 24,
      duration: 2000,
    });
    counted = 1;
  }

});