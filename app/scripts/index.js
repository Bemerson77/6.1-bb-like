var $ = require('jquery');

var Like = require('./models/like')

var currentLikes = new Like();
$('.likes-btn').click(function(){
  currentLikes.refresh();
  $('.likes-num').empty();
  $('.likes-num').html(currentLikes.get("quantity"));
  // currentLikes.toJSON();
  var lableValue = currentLikes.toJSON();
  $('.likes-title').html(lableValue.buttonLable);
});

// console.log(Like);
