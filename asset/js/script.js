// LIGHT BOX //
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);

$overlay.append($caption);

$("body").append($overlay);

// Lightbox function on click event
$("#gallery a").click(function(event) {

  event.preventDefault(); // Stops default action

  var imageLocation = $(this).attr("href"); // Get our image path
  $image.attr("src", imageLocation); // Load our image path into our source for overlay
  $overlay.show(); // Show the overlay
  var captionText = $(this).children("img").attr("alt"); // Get the alt text from the image
  $caption.text(captionText); // Add the caption text to the overlay

  // Make sure our image is in the center of the page and isn't too big
  $('#overlay img').css({
  			position: 'absolute', 
  			top:'50%',
  			left:'50%', 
  			margin:'-'+($('#overlay img').height() / 2)+'px 0 0 -'+($('#overlay img').width() / 2)+'px',
  			'max-height': $('#overlay img').height() / 1.0001
  		});
});

$overlay.click(function() {
	$overlay.hide();
});