// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

// 1. on va créer trois variables liées aux zones de saisie input
const input1 = document.querySelector("#latitude");
const input2 = document.querySelector("#longitude");
const input3 = document.querySelector("#message");

// 2. Ensuite on transforme ces chaines de caractères saisies en entier avec parseInt
var a = parseFloat(input1).value; // Attention le value aussi est mis entre parenthèses car c'est ce qui est transformé
var b = parseFloat(input2).value;
var c = String(input3).value;
console.log(c)



function placeMarker(map, location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  var infowindow = new google.maps.InfoWindow({
    content: 'Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng()
  });
  infowindow.open(map,marker);
}
