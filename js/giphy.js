offset = 0;

function getGIFs(){
  var url = "http://api.giphy.com/v1/gifs/search?q=" + searchValue +
    "&limit=10&offset=" + offset + "&api_key=dc6zaTOxFJmzC"
  offset += 10;

  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
  }).done(function(response){
    $.each(response.data, function(index, image){
      $("body").append('<embed src="'+this.embed_url+'">')
      console.log(this)
    })
  }).fail(function(){
    console.log("Ajax request fail!")
  }).always(function(response){
    console.log(response)
  })
}

$("form").on("submit", function(event){
  event.preventDefault();
  offset = 0;
  searchValue = $("#keyword").val();
  getGIFs();
})

$(window).on("scroll", function() {
  if ($(window).scrollTop() + $(window).height() >= $(document).height()){
    getGIFs();
  };
});
