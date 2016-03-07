var Backbone = require('backbone');
var $ = require('jquery');

var LikeModel = Backbone.Model.extend({
  defaults: {"quantity": 0,
  "buttonLable": "like"},
  refresh: function(){
    var qty = this.get("quantity") + 1;
    this.set({"quantity": qty})

  },
    toJSON: function(){
      if(this.get("quantity") != 1){
        this.set({"buttonLable": "likes"})
      }
      return Backbone.Model.prototype.toJSON.call(this);
    }


});



module.exports = LikeModel;
