

var myContacts = new ContactCollection();

  myContacts.fetch().done( function () {

    myContacts.each(function (model){
      contactShowUp(model.attributes);

    });

  });



var addContact = function(event){

  event.preventDefault();

  var contactName = $(this).find('#addName').val();

  var contactEmail = $(this).find('#addEmail').val();

  var contactPhone = $(this).find('#addPhones').val();

  var contactTwit = $(this).find('#addTwitter').val();

  var contactLink = $(this).find('#addLinkdin').val();

console.log('working');

  var c = new Contact ({

    name: contactName,
    email: contactEmail,
    phone: contactPhone,
    twitter: contactTwit,
    linkdin: contactLink




  });

console.log(c);

// $('#forms').on('submit',

myContacts.add(c).save().success( function (data){
        contactShowUp(data);

});


this.reset();

};



var deleteContact = function(event){

  event.preventDefault();

  var deleting = $(this).parent();
  var idDelete = deleting.attr('id');

  myContacts.get(idDelete).destroy().success(function(){

    deleting.fadeOut();
    deleting.fadeOut();

console.log(this);

  });

};





var contactShowUp = function(contact){


  var contactPage =   "<li class='list' id='" + contact._id + "'>";
      contactPage += "<div class='woo name'>" + "Name: " + contact.name + "</div>" + "<div class='woo mail'>" + " Email: " + contact.email + "</div" + "<div class='woo phone'>" + " Phone: " + contact.phone + "</div" + "<div class='woo twitts'>" + " Twitter: " + contact.twitter + "</div>" + "<div class='woo links'>" + " Linkdin: " + contact.linkdin + "</div>";
      contactPage += "<span id='delete'>" + 'Delete Contact' + "</span>" + "</li>";


      $('#contactList').prepend(contactPage);

};






$('.forms').on('submit', addContact);

$('#contactList').on('click', 'span', deleteContact);




