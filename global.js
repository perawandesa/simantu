// JavaScript Document

function nl2br (str, is_xhtml) { var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>'; return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2'); }
function br2nl (str) {  return str.replace(/(\r\n\t|\n|\r\t)/gm,"").replace(/<br\s*\/?>/ig, "\r\n"); }
$(document).on("click", ".dropdown", function() { if ($(".dropdown-content").is(":visible")) { $(".dropdown-content").fadeOut(); } else { $(".dropdown-content").fadeIn(); } })