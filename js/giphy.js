// current status - takes the search value on click in the form box and appends

// next step - use express and submit button to update the url as well as the search

// next step - unlimited scroll works

$(document).ready(function(){
  $("#keyword").on("click", function(){
    var searchValue = $("#keyword").val();
    var url = "http://api.giphy.com/v1/gifs/search?q=" + searchValue +
      "&api_key=dc6zaTOxFJmzC"
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done(function(response){
      $("body").append("<div>" + response.data + "</div>")
      $.each(response.data, function(index, image){
        $("body").append('<embed src="'+this.embed_url+'">')
        console.log(this)
      })
    }).fail(function(){
      console.log("Ajax request fail!")
    }).always(function(){
      console.log("This always happens!")
    })


  })
})
