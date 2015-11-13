// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require jquery.crop
//= require angular.min
//= require_tree .

$(document).ready(ready);
$(document).on("page:load", ready);
$(document).on("page:update", ready);
function ready(){   
 // $( 'img.crop' )
 //    .crop( {
 //        width    : 300
 //        , height : 300
 //    } )
 //    .on ( 'crop', function( event ) {
 //        console.log( $( this ).attr( 'id' ), 'x: '+ event.cropX );
 //    } );
$('img.crop')
    .crop( {
            width    : 800
            , height : 400
            , stretch: 5
        })
    .on( 'mousewheel', function ( event ) {
        var crop = $(this).data('crop');
        return event.originalEvent.wheelDelta < 0 ? 
            crop.zoomIn() :
            crop.zoomOut();
    } )
;
}
//   function PreviewImage() {
//   var oFReader = new FileReader();
//   oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

//   oFReader.onload = function(oFREvent) {
//     document.getElementById("uploadPreview").src = oFREvent.target.result;
//   };
// };

// using mousewheel event