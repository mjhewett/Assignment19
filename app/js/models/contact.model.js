

var Contact = Backbone.Model.extend({

  initialize: function(){

   this.logName();
   this.logEmail();
   this.logPhone();
   this.logTwit();
   this.logLink();
},

idAttribute: '_id',

defaults: {

name: '',
email: '',
phone: '',
twitter: '',
linkdin: ''

},

logName: function(){
 console.log(this.get('name'));
},

logEmail: function(){
  console.log(this.get('email'));
},

logPhone: function(){
  console.log(this.get('phone'));

},

logTwit: function(){
    console.log(this.get('twitter'));
},

logLink: function(){
  console.log(this.get('linkdin'));
}


});





