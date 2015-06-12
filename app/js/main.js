

var myContacts = new ContactCollection();

  myContacts.fetch().done( function () {

    myContacts.each(function (model){
      contactShowUp(model.attributes);

    });

  });



var addContact = function(x){

  x.peventDefault();

  var contactName = $('#addName').val();

  var contactEmail = $(this).find('#addEmail').val();

  var contactPhone = $(this).find('#addPhones').val();

  var contactTwit = $(this).find('#addTwitter').val();

  var contactLink = $(this).find('#addLinkdin').val();



  var c = new Contact ({

    name: contactName,
    email: contactEmail,
    phone: contactPhone,
    twitter: contactTwit,
    linkdin: contactLink


  });

// $('#forms').on('submit',

myContacts.add(c).save().success( function (data){
        contactShowUp(data);

});


this.reset();

};

var contactShowUp = function(contact){


  var contactPage = "<li id='" + contact._id + "'>";
      contactPage += contact.name + contact.email + contact.phone + contact.twitter + contact.linkdin;
      contactPage += "</li>";
      $('#contactList').prepend(contactPage);


};





$('#forms').on('submit', addContact);



