// Wrap every letter in a span
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


/*about-content animation*/
/*Interactivity to determine when an animated element in in view. In view elements trigger our animation*/
$(document).ready(function() {

  //window and animation items
  var animation_elements = $.find('.animation-element');
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation_elements, function() {

      //get the element sinformation
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });

  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function() {
      check_if_in_view()
    })
    //trigger our scroll event on initial load
  $(window).trigger('scroll');

});

/*about-content animation end*/


/*menu */

  

  function get_items_1(){
    document.getElementById('item1').src="images/menu-item-5.jpg";
    document.getElementById('item2').src="images/menu-item-6.jpg";
    document.getElementById('item3').src="images/menu-item-7.jpg";
    document.getElementById('item4').src="images/menu-item-8.jpg";

    var str1 = "GULAB JAMUN";
    var str2 = "SANDESH";
    var str3 = "RASGULLA";
    var str4 = "DAULAT KI CHAAT";

    var str5 = "This is very tasty and delicious gulab jamun.";
    var str6 = "This is very tasty and delicious Sandesh.";
    var str7 = "This is very tasty and delicious rasgulla.";
    var str8 = "This is very tasty and delicious dulat ki chaat.";

    document.getElementById('info1-content1').textContent = str1;
    document.getElementById('info2-content1').textContent = str2;
    document.getElementById('info3-content1').textContent = str3;
    document.getElementById('info4-content1').textContent = str4;

    document.getElementById('info1-content2').textContent = str5;
    document.getElementById('info2-content2').textContent = str6;
    document.getElementById('info3-content2').textContent = str7;
    document.getElementById('info4-content2').textContent = str8;
  }

  function get_items_2(){
    document.getElementById('item1').src="images/menu-item-3.jpg";
    document.getElementById('item2').src="images/menu-item-2.jpg";
    document.getElementById('item3').src="images/menu-item-1.jpg";
    document.getElementById('item4').src="images/menu-item-4.jpg";

    var str1 = "RED VELVET CAKE";
    var str2 = "BLACK FOREST CAKE";
    var str3 = "FRUIT CAKE";
    var str4 = "LEMON CAKE";

    var str5 = "This is very tasty and delicious red velevt cake.";
    var str6 = "This is very tasty and delicious black forest cake.";
    var str7 = "This is very tasty and delicious fruit cake.";
    var str8 = "This is very tasty and delicious lemon cake.";

    document.getElementById('info1-content1').innerHTML = str1;
    document.getElementById('info2-content1').innerHTML = str2;
    document.getElementById('info3-content1').innerHTML = str3;
    document.getElementById('info4-content1').innerHTML = str4;

    document.getElementById('info1-content2').innerHTML = str5;
    document.getElementById('info2-content2').innerHTML = str6;
    document.getElementById('info3-content2').innerHTML = str7;
    document.getElementById('info4-content2').innerHTML = str8;
  }

  function get_items_3(){
    document.getElementById('item1').src="images/menu-item-9.jpg";
    document.getElementById('item2').src="images/menu-item-10.jpg";
    document.getElementById('item3').src="images/menu-item-11.jpg";
    document.getElementById('item4').src="images/menu-item-12.jpg";

    var str1 = "ICE CREAM";
    var str2 = "TIRAMISU";
    var str3 = "SOUFFLE";
    var str4 = "PUDDING";

    var str5 = "This is very tasty and delicious ice cream.";
    var str6 = "This is very tasty and delicious tiramisu.";
    var str7 = "This is very tasty and delicious souffle.";
    var str8 = "This is very tasty and delicious pudding.";

    document.getElementById('info1-content1').innerHTML = str1;
    document.getElementById('info2-content1').innerHTML = str2;
    document.getElementById('info3-content1').innerHTML = str3;
    document.getElementById('info4-content1').innerHTML = str4;

    document.getElementById('info1-content2').innerHTML = str5;
    document.getElementById('info2-content2').innerHTML = str6;
    document.getElementById('info3-content2').innerHTML = str7;
    document.getElementById('info4-content2').innerHTML = str8;
  }

  function get_items_4(){
    document.getElementById('item1').src="images/menu-item-13.jpg";
    document.getElementById('item2').src="images/menu-item-14.jpg";
    document.getElementById('item3').src="images/menu-item-15.jpg";
    document.getElementById('item4').src="images/menu-item-16.jpg";

    var str1 = "ROSE POPSICLES";
    var str2 = "PEANUT FUDGE";
    var str3 = "PEACH ROSES";
    var str4 = "PUMPKIN PIE";

    var str5 = "This is very tasty and delicious rose popsicles.";
    var str6 = "This is very tasty and delicious peanut fudge.";
    var str7 = "This is very tasty and delicious peach roses.";
    var str8 = "This is very tasty and delicious pumpkin pie.";

    document.getElementById('info1-content1').innerHTML = str1;
    document.getElementById('info2-content1').innerHTML = str2;
    document.getElementById('info3-content1').innerHTML = str3;
    document.getElementById('info4-content1').innerHTML = str4;

    document.getElementById('info1-content2').innerHTML = str5;
    document.getElementById('info2-content2').innerHTML = str6;
    document.getElementById('info3-content2').innerHTML = str7;
    document.getElementById('info4-content2').innerHTML = str8;
  }

/*menu end*/


/*navigation button*/
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


/*on scroll show black background*/
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});

