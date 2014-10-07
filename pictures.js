var getPics = function(query){

  var serviceURI = 'https://api.flickr.com/services/rest/',
      FLICKR_API_KEY ="7210a6546c39556ad10ad21882a74d20",
  data = {
      'method': 'flickr.photos.search',
      'api_key': FLICKR_API_KEY,
      'content_type': 1,
      'media': 'photos',
      'format': 'json',
      'nojsoncallback': 1,
      'sort': 'relevance',
      'text': query,
      'per_page': 100,
      'page': 1,
  };

  $.getJSON(serviceURI, data, function(data, textStatus, jqXHR) {
     makeURL(data.photos.photo[0]);
  });

  var makeURL = function(image) {
    var full_url = 'https://farm' + image.farm + '.staticflickr.com/' + image.server + '/' + image.id + '_' + image.secret + '_z.jpg';

      makeDiv(full_url);
  };

  var makeDiv = function(url){
    // fix photo ratio
    $('.photo').remove();
    console.log('appending div')
    var div = "<div class='photo' style='background-image: url("+ url + "); height: 300px; width: 500px;'></div>"
    $('.image').append(div);
  }

};

$(document).ready(function(){
    $('.entryBox').submit(function(e){
    e.preventDefault();
    getPics($('.draft').val())
    $('.draft').val('');
  })
})

