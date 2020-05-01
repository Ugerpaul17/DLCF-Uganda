(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);


$(document).ready(function () {
	$('#dtBasicExample').DataTable();
  $('.dataTables_length').addClass('bs-select');
  });

  // Basic example
$(document).ready(function () {
	$('#dtBasicExample').DataTable({
	  "paging": true // false to disable pagination (or any other option)
	});
	$('.dataTables_length').addClass('bs-select');
  });

  // Basic example
$(document).ready(function () {
	$('#dtBasicExample').DataTable({
	  "pagingType": "simple" // "simple" option for 'Previous' and 'Next' buttons only
	});
	$('.dataTables_length').addClass('bs-select');
  });