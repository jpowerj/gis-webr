window.document.addEventListener("DOMContentLoaded", function (event) {
  var emailHtml = "<span class='sidebar-subtitle w-100'>Jeff Jacobs&nbsp;<a href='mailto:jj1088@georgetown.edu' target='_blank'><i class='bi bi-envelope-at ps-1 pe-1'></i></a></span>";
  // https://icons8.com/icon/set/zoom/group-color
  var subtitleDiv = $(`<br>${emailHtml}`);
  $('.sidebar-title').append(subtitleDiv);
});
