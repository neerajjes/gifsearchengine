var apikey = "WiG90ZE2w6r3j7CA09qj6lI3ZB8JogIj";

// 1. Get the input.

var fbtn = document.querySelector("button");
var ibox = document.querySelector("input");

ibox.addEventListener('keyup', (k) => {
    if (k.key === 'Enter') {
        search();
    }
});

fbtn.addEventListener('click', search);

function search() {
    
    var userInput = ibox.value;
    console.log(userInput);
    getGifs(userInput);
}

// 2. Fetch the data from GIF api according to input

function getGifs(query) {
    var url = "https://api.giphy.com/v1/gifs/search?api_key=" + apikey + "&q=" + query+"&limit=48";

    fetch(url).then((v) => v.json()).then((v) => {
        console.log(v['data']);
        pushToDom(v['data']);
    })
}

// 3. Display results

function pushToDom(json) {
    var container = document.querySelector(".js-container");
    var count = document.querySelector(".result-count");

    clear(container);
    clear(count);

    count.innerHTML = json.length + " results found !";

    json.forEach((element) => {
        var src = element.images.fixed_height.url;
        container.innerHTML += "<img src =" + src + " class = \"container-image\" >";
    });
}

function clear(item) {
    item.innerHTML = "";
}
