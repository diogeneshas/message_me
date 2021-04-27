// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import JQuery from 'jquery';
window.$ = window.jQuery = JQuery;

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


// scroll_bottom = function() {
//     if ($('#messages').length > 0) {
//       $('#messages').scrollTop($('#messages')[0].scrollHeight);
//     }
// }


let submit_message = function() {
    $("#new_message").bind("ajax:complete", function(event,xhr,status){
      $('#message_body').val('');
    });
  };

// submit_message = function() {
//     $('#message_body').on('keydown', function(e) {
//         if (e.keyCode == 13) {
//           $('button').triger("click");
//           triger("click")
//           e.target.value = "";
//         };
//       });
// }

$(document).bind("ajax:beforeSend", function(){
    $('#message_body').val('');
});

$(document).on('turbolinks:load', function() { 
    $('.ui.dropdown').dropdown();
    $('.message .close').on('click', function() {
        $(this).closest('.message').transition('fade');
    });
    // scroll_bottom();
    submit_message;
});



