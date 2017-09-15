$("#submit").on("click", () => {

  let right = $(".r");
  let left = $(".l");


  for (var i = 0; i < right.length; i++) {
    right[i] = right[i].checked;
    left[i] = left[i].checked;
  }

  let pattern = [
    [],
    []
  ]
  console.log("right", right);

  // pattern.push(right);
  // pattern.push(left);

  pattern[0] = right;
  pattern[1] = left;

  let data1 = {
    "pattern": pattern
  }
  let data2 = JSON.parse(JSON.stringify({
    "pattern": pattern
  }))

  console.log(data1.pattern);
  console.log(data2.pattern);

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://10.6.67.80:3000/",
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "cache-control": "no-cache",
      "postman-token": "5a325911-53eb-6a2c-8838-710eaec7a39f"
    },
    "processData": false,
    "data": JSON.stringify({
      "pattern": pattern
    })
  }

  $.ajax(settings).done(function(response) {
    console.log(response);
  });
});

document.addEventListener('keydown', function(e) {
  var key = e.which || e.key;
  console.log(key);
  if (key === 39) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://10.6.67.80:3000/right",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "cache-control": "no-cache",
        "postman-token": "5a325911-53eb-6a2c-8838-710eaec7a39f"
      },
      "processData": false,
      "data": "{}\n"
    }

    $.ajax(settings).done(function(response) {
      console.log(response);
    });
  }
});

document.addEventListener('keydown', function(e) {
  var key = e.which || e.key;
  console.log(key);
  if (key === 37) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://10.6.67.80:3000/left",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "cache-control": "no-cache",
        "postman-token": "5a325911-53eb-6a2c-8838-710eaec7a39f"
      },
      "processData": false,
      "data": "{}\n"
    }

    $.ajax(settings).done(function(response) {
      console.log(response);
    });
  }
});
