function makeRequest(url, data) {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": url,
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "cache-control": "no-cache",
      "postman-token": "5a325911-53eb-6a2c-8838-710eaec7a39f"
    },
    "processData": false,
    "data": JSON.stringify({
      "pattern": data
    })
  }

  $.ajax(settings).done(function(response) {
    console.log(response);
  });
}

$("#play").on("click", () => {

  let right = $(".r");
  let left = $(".l");
  let bass = $(".b");
  let hihat = $(".hh");

  for (var i = 0; i < right.length; i++) {
    right[i] = right[i].checked;
    left[i] = left[i].checked;
    bass[i] = bass[i].checked;
    hihat[i] = hihat[i].checked;
  }

  let pattern = [];

  pattern.push(right);
  pattern.push(left);
  pattern.push(bass);
  pattern.push(hihat);

  console.log(pattern);

  makeRequest("http://10.6.67.80:3000/", pattern);
});

$("#stop").on("click", () => {
  makeRequest("http://10.6.67.80:3000/stop", {});
})

//right arrow, right snare
document.addEventListener('keydown', function(e) {
  var key = e.which || e.key;
  console.log(key);
  if (key === 39) {
    makeRequest("http://10.6.67.80:3000/right", {});
  }
});

//left arrow, left snare
document.addEventListener('keydown', function(e) {
  var key = e.which || e.key;
  console.log(key);
  if (key === 37) {
    makeRequest("http://10.6.67.80:3000/right", {});
  }
});
