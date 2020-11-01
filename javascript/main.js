/* 1. Grab the input value */


document.querySelector(".js-go").addEventListener('click',function(){
    // document.querySelector('.js-container').innerHTML = "";
    var input = document.querySelector("input").value;
    var url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC";
    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send();
    GiphyAJAXCall.addEventListener('load',function(e){

        var data = e.target.response;
        pushToDOM(data);
      
      });
  
  });
  
  document.querySelector(".js-userinput").addEventListener('keyup',function(e){
    
    var input = document.querySelector("input").value;
    var url = "http://api.giphy.com/v1/gifs/search?q="+ input +"&api_key=dc6zaTOxFJmzC";
    // if the key ENTER is pressed...
    if(e.which === 13) {
      
        // AJAX Request
        var GiphyAJAXCall = new XMLHttpRequest();
        GiphyAJAXCall.open( 'GET', url );
        GiphyAJAXCall.send();
        GiphyAJAXCall.addEventListener('load',function(e){
    
            var data = e.target.response;
            pushToDOM(data);
          
          });
    }
  
  });

/* 2. do the data stuff with the API */

// var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";

// // AJAX Request
// var GiphyAJAXCall = new XMLHttpRequest();
// GiphyAJAXCall.open( 'GET', url );
// GiphyAJAXCall.send();

// GiphyAJAXCall.addEventListener('load',function(e){

//   var data = e.target.response;
//   pushToDOM(data);

// });

// Show me the gifs

function pushToDOM(input) {
   
    var response = JSON.parse(input);

    var imageUrls = response.data;
    var container = document.querySelector('.js-container');
    container.innerHTML = "";
    
    imageUrls.forEach(function(image){
        var src = image.images.fixed_height.url;

        container.innerHTML += "<img src=\""+ src + "\"class = \"container-image\">";

    });
    
    // for (let i = 0; i < response.data.length; i++) {
    //     var imageUrl = response.data[i].images.fixed_height.url;

    //     container.innerHTML = "<img src=\""+ imageUrl + "\">";


    //     var box = document.createElement('div');
    //     box.className = 'container-image ';
    //     box.innerHTML = "<img src=\""+ imageUrl + "\">";
    //     container.appendChild(box);
    // }

}

