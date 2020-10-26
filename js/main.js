/** JQUERY SELECTORS */

//Use the correct selector to hide all <p> elements.
//$("p").hide();

//Use the correct selector to hide an element with id="test".
//$("#test").hide();

//Use the correct selector to hide all elements with class="test".
//$(".test").hide();

//Use the correct selector to hide all elements in the document.
//$("*").hide();

//Use the correct selector to hide all elements with an href attribute.
//$("[href]").hide();

//Use the correct selector to hide all odd table rows in a table.
//$("tr:odd").hide();


/** JQUERY EVENTS */

//Use the correct event to hide all <p> elements with a "click".
//$("p").click(function(){
//    $(this).hide();
//});

//Use the correct event to hide all <p> elements with a "double-click".
//$("p").dblclick(function(){
//    $(this).hide();
//});

//When the mouse pointer enters a <p> element, it should be hidden. Use the correct event to do so.
//$("p").mouseenter(function(){
//    $(this).hide();
//});

//If you press a keyboard key inside an <input> element, it should be hidden. Use the correct event to do so.
//$("input").keypress(function(){
//    $(this).hide();
//});

//Use the on() method to attach a click event handler to all <p> elements.
//$("p").on("click", function(){
//    $(this).hide();
//});


/** JQUERY HIDE AND SHOW */

//Use a jQuery method to hide a <p> element when it is clicked on.
//$("p").click(function(){
//    $(this).hide();
//  });

//Use a jQuery method to hide a <p> element when it is clicked on.
//$("p").click(function(){
//    $(this).hide("slow");
//  });

//Use a jQuery method to show a <p> element.
//$("button").click(function(){
//    $("p").show();
//  });

//Use a jQuery method to toggle between hiding and showing a <p> element.
//$("button").click(function(){
//    $("p").toggle();
//});


/** JQUERY FADE */

//Use a jQuery method to fade out a <div> element.
//$("div").fadeOut();

//Use a jQuery method to fade out a <div> element.
//$("div").fadeOut("slow");

//Use a jQuery method to fade a <div> element to an opacity of "0.2". 
//$("div").fadeTo("slow",0.2);

//Use a jQuery method to toggle between fading in and out a <div> element, when clicking on a button.
//$("button").click(function(){
//    $("div").fadeToggle(1000);
//});


/** JQUERY SLIDE */

//Use a jQuery method to slide up a <div> element.
//$("div").slideUp();

//Use a jQuery method to slide up a <div> element.
//$("div").slideUp("slow");

//Use a jQuery method to slide up a <div> element.
//$("div").slideDown();

//Use a jQuery method to toggle between sliding up and down a <div> element, when clicking on a button.
//$("button").click(function(){
//    $("div").slideToggle();
//});


/** JQUERY ANIMATE */

//Use the animate() method to move a <div> element 250 pixels to the right.
//$("div").animate({left: '250px'});

//Use the animate() method to set the height of a <div> element to 500 pixels.
//$("div").animate({height: '500px'});

//Use the animate() method to set the following CSS properties for <div>:
//$("div").animate({
//    opacity: '0.4',
//    height: '500px',
//    width: '500px'
//});

//Use the animate() method to set the font-size of a <div> element to 100 pixels:
//$("div").animate({fontSize: '100px'}, "slow");


/** JQUERY STOP */

//Use a jQuery method to stop the animation effect of a <div> element.
//$("div").stop();


/** JQUERY GET */

//Use a jQuery method to return the text content of a <div> element.
//$("div").text();

//Use a jQuery method to return the HTML content of a <div> element.
//$("div").html();

//Use a jQuery method to return the value of an input field.
//$("input").val();

//Use a jQuery method to return the URL address of a link.
//$("a").attr("href");

/** JQUERY SET */

//Use a jQuery method to change the text of a <div> element to "Hello World".
//$("div").text("Hello World");

//Use a jQuery method to change the value of an input field to "John Doe".
//$("input").val("John Doe");

//Use a jQuery method to change the value of an image's src attribute to "myimage.jpg".
//$("img").attr("src", "myimage.jpg");

//Use jQuery to change the text of a link to "Demo", and change the value of href's attribute value to "www.demo.com".
//$("#myLink").text("Demo");
//$("#myLink").attr("href", "https://www.demo.com");


/** JQUERY ADD */

//Use a jQuery method to insert the text "YES!" at the end of a <p> element.
//$("p").append("YES!");

//Use a jQuery method to insert the text "YES!" at the beginning of a <p> element.
//$("p").prepend("YES!");

/** JQUERY REMOVE */

//Use a jQuery method to remove a <div> element.
//$("div").remove();

//Use a jQuery method to only remove the child elements of a <div> element.
//$("div").empty();

//Use a jQuery method to remove all <div> elements with class="test" and class="demo".
//$("div").remove(".test,.demo");


/** JQUERY CSS CLASSES */

//Use a jQuery method to add the "important" class to a <p> element.
//$("p").addClass("important");

//Use a jQuery method to add both the "important" and "test" class to a <p> element.
//$("p").addClass("important test");

//Use a jQuery method to remove the "important" class from a <p> element.
//$("p").removeClass("important");

//Use a jQuery method to toggle between adding and removing the "important" class from the <p> element on click.
//$("p").click(function(){
//    $(this).toggleClass("important");
//});

/** JQUERY TRAVERSING */

//Use a jQuery method to get the direct parent of a <span> element.
//$("span").parent();

//Use a jQuery method to get all ancestors of a <span> element.
//$("span").parents();

//Use a jQuery method to get all direct children of a <div> element.
//$("div").children();

//Use a jQuery method to get all <span> elements that are descendants of <div>.
//$("div").find("span");

//Use a jQuery method to get all siblings elements of an <h2> element.
//$("h2").siblings();

//Use a jQuery method to get the first <div> element in the document.
//$("div").first();